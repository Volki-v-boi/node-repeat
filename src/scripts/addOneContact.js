// import * as fs from 'node:fs/promises';
// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFackeContact.js';
import { getAllContacts } from './getAllContacts.js';
import updateContacts from './updateContacts.js';

export const addOneContact = async () => {
  const contactsList = await getAllContacts();
  const newContact = createFakeContact();
  contactsList.push(newContact);
  await updateContacts(contactsList);
};

addOneContact();
