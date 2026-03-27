// import { PATH_DB } from '../constants/contacts.js';
// import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFackeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContact.js';
// import { getAllContacts } from './getAllContacts.js';

// import DetectFileEncodingAndLanguage from 'detect-file-encoding-and-language';

const generateContacts = async (number) => {
  //   const { encoding } = await DetectFileEncodingAndLanguage(PATH_DB);
  const contactsList = await readContacts();
  const newContacts = Array(number).fill(0).map(createFakeContact);
  contactsList.push(...newContacts);
  await writeContacts(contactsList);
};

generateContacts(5);
