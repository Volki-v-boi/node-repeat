// import { PATH_DB } from '../constants/contacts.js';
// import * as fs from 'node:fs/promises';
import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  const data = await readContacts();
  return data;
};

console.log(await getAllContacts());
// await getAllContacts();
