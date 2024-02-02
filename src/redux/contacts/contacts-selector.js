

export const contacts = store => store.contacts;
export const filterContacts = store => {
    const { contacts, filter } = store;
    const filteredContacts = contacts.filter(item => item.name?.toLocaleLowerCase().includes(filter?.toLocaleLowerCase()));
    console.log(contacts);
   return filteredContacts;
};
