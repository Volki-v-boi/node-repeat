import { writeContacts } from '../utils/writeContact.js';

export const removeAllContacts = async () => {
  await writeContacts([]);
};

removeAllContacts();
