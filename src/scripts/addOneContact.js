// import * as fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFackeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContact.js';
// import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
  const contactsList = await readContacts();
  const newContact = createFakeContact();
  contactsList.push(newContact);
  await writeContacts(contactsList);
};

addOneContact();
