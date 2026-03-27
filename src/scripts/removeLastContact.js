import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContact.js';

export const removeLastContact = async () => {
  const contactsList = await readContacts();
  contactsList.pop();
  await writeContacts(contactsList);
};

removeLastContact();
