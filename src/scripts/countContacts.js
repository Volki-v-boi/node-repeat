import { readContacts } from '../utils/readContacts.js';
// import { getAllContacts } from './getAllContacts.js';

export const countContacts = async () => {
  const count = await readContacts();
  return count.length;
};

console.log(await countContacts());
