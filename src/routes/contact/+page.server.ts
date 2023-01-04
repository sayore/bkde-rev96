//import * as db from '$lib/server/database';
import mysql from 'mysql2/promise';
import { SessionHandler } from '../_inc/lib/Session';

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  const connection = await mysql.createConnection({
    host: '188.68.55.98',
    user: 'bkdeco',
    password: 'BkdeIsCool00',
    database: 'bkde'
  });

  

  return {
    posts: {fiddle:"sticks"}
  };
}