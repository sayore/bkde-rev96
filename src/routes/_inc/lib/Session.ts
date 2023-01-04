import type mysql2 from 'mysql2/promise';
import type { FieldPacket, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

class SessionHandler {
  private db: mysql2.Connection;

  constructor(db: mysql2.Connection) {
    this.db = db;
  }

  // Check if the necessary tables exist and create them if not
  private installTables() {
    this.db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
      );
    `);

    this.db.query(`
      CREATE TABLE IF NOT EXISTS user_groups (
        id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
      );
    `);

    this.db.query(`
      CREATE TABLE IF NOT EXISTS users_in_groups (
        user_id INT NOT NULL,
        group_id INT NOT NULL,
        PRIMARY KEY (user_id, group_id),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (group_id) REFERENCES user_groups (id) ON DELETE CASCADE
      );
    `);

    this.db.query(`
      CREATE TABLE IF NOT EXISTS user_permissions (
        user_id INT NOT NULL,
        key VARCHAR(255) NOT NULL,
        value TINYINT NOT NULL,
        PRIMARY KEY (user_id, key),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
      );
    `);

    this.db.query(`
      CREATE TABLE IF NOT EXISTS group_permissions (
        group_id INT NOT NULL,
        key VARCHAR(255) NOT NULL,
        value TINYINT NOT NULL,
        PRIMARY KEY (group_id, key),
        FOREIGN KEY (group_id) REFERENCES user_groups (id) ON DELETE CASCADE
      );
    `);
  }

  // Check if the necessary tables exist
  checkTables() {
    this.db.query(`
      SELECT COUNT(*)
      FROM users;
    `);

    this.db.query(`
      SELECT COUNT(*)
      FROM user_groups;
    `);

    this.db.query(`
      SELECT COUNT(*)
      FROM users_in_groups;
    `);

    this.db.query(`
      SELECT COUNT(*)
      FROM user_permissions;
    `);

    this.db.query(`
      SELECT COUNT(*)
      FROM group_permissions;
    `);
  }

  // Create a new user
  async createUser(name: string): Promise<number> {
    const [rows, fields]: [ResultSetHeader, FieldPacket[]] = await this.db.query(
      'INSERT INTO users (name) VALUES (?)',
      [name]
    );

    return rows.insertId;
  }

  // Create a new permission group
  async createGroup(name: string): Promise<number> {
    const [rows, fields]: [ResultSetHeader, FieldPacket[]] = await this.db.query(
      'INSERT INTO user_groups (name) VALUES (?)',
      [name]
    );

    return rows.insertId;
  }

  // Add a user to a group
  async addUserToGroup(userId: number, groupId: number): Promise<number> {
    const [rows, fields]: [ResultSetHeader, FieldPacket[]] = await this.db.query(`
      INSERT INTO users_in_groups (user_id, group_id)
      VALUES (?, ?)
    `, [userId, groupId]);

    return rows.insertId;
  }

  // Create a new user permission
  async createUserPermission(userId: number, key: string, value: boolean) {
    const [rows, fields]: [ResultSetHeader, FieldPacket[]] = await this.db.query(`
      INSERT INTO user_permissions (user_id, key, value)
      VALUES (?, ?, ?)
    `, [userId, key, value]);

    return rows.insertId;
  }

  // Create a new group permission
  async createGroupPermission(groupId: number, key: string, value: boolean) {

    const [rows, fields]: [ResultSetHeader, FieldPacket[]] = await this.db.query(`
      INSERT INTO user_permissions (user_id, key, value)
      VALUES (?, ?, ?)
    `, [groupId, key, value]);

  }

  // Check if a user has a permission
  async checkUserPermission(userId: number, key: string): Promise<boolean> {
    let hasPermission: boolean = false;

    const [rows, fields]: [RowDataPacket[], FieldPacket[]] = await this.db.query(`
      SELECT value 
      FROM user_permissions 
      WHERE user_id = ?
      AND key = ?
    `, [userId, key]);

    if (rows.length > 0) {
      return rows[0].value;
    }
    return false
  }

  // Check if a user has a permission through one of his groups
  async checkGroupPermission(userId: number, key: string): Promise<boolean> {
    let hasPermission: boolean = false;
    let groupIds: number[] = [];

    const [rows, fields]: [RowDataPacket[], FieldPacket[]] = await this.db.query(
      `
        SELECT users_in_groups.group_id, group_permissions.value
        FROM users_in_groups
        INNER JOIN group_permissions ON users_in_groups.group_id = group_permissions.group_id
        WHERE users_in_groups.user_id = ? AND group_permissions.key = ?
      `,
      [userId, key]
    );

    if (rows.length > 0) {
      hasPermission = rows[0].value;
    }
    
    return hasPermission;
  }

  // Create a new session
  async createSession(userId: number): Promise<string> {
    // Generate a random session id
    let sessionId: string = '';

    const [rows, fields]: [RowDataPacket[], FieldPacket[]] = await this.db.query(`
    INSERT INTO sessions (user_id, session_id)
    VALUES (?, ?)
  `, [userId, sessionId]);

    return rows[0].session_id;
  }
}

type User = {
  id: number;
  name: string;
};

type Group = {
  id: number;
  name: string;
};

type Permission = {
  key: string;
  value: boolean;
};

type Session = {
  userId: number;
  sessionId: string;
};