import { v4 as uuidv4 } from 'uuid';
import { Connection, Query } from 'mysql';

// define the Meeting type
type Meeting = {
    id: string;
    dateAndTime: Date;
    timespan: number;
    type?: string;
    names?: string[];
    color?: string;
    topic?: string;
    description?: string;
};

// define the MeetingPlanning class
export class MeetingPlanning {
    private connection: Connection;

    constructor(connection: Connection) {
        this.connection = connection;
    }

    // install the needed table to the Database
    public install(): void {
        const query = `
            CREATE TABLE meetings (
                id VARCHAR(36) NOT NULL PRIMARY KEY,
                dateAndTime DATETIME NOT NULL,
                timespan INTEGER NOT NULL,
                type VARCHAR(255),
                names VARCHAR(255),
                color VARCHAR(255),
                topic VARCHAR(255),
                description VARCHAR(255)
            );
        `;
        this.connection.query(query, (error, results) => {
            if (error) throw error;
            console.log("Table 'meetings' created.");
        });
    }

    // check if the table exists
    public tableExists(): boolean {
        const query: Query = this.connection.query("SHOW TABLES LIKE 'meetings'");
        if (query.results.length > 0) {
            return true;
        } else {
            return false
        }
    }

    // add a Meeting
    public addMeeting(meeting: Meeting): void {
        const query = `
            INSERT INTO meetings SET ?
        `;
        const values: Meeting = {
            id: uuidv4(),
            dateAndTime: meeting.dateAndTime,
            timespan: meeting.timespan,
            type: meeting.type,
            names: meeting.names,
            color: meeting.color,
            topic: meeting.topic,
            description: meeting.description
        };
        this.connection.query(query, values, (error, results) => {
            if (error) throw error;
            console.log("Meeting added.");
        });
    }

    // remove a Meeting
    public removeMeeting(id: string): void {
        const query = `
            DELETE FROM meetings WHERE id = ?
        `;
        const values: string[] = [id];
        this.connection.query(query, values, (error, results) => {
            if (error) throw error;
            console.log("Meeting removed.");
        });
    }
}