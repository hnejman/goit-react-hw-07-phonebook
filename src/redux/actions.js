export const addContact = (text, number, id) => {
  return {
    type: 'contacts/add contact',
    payload: {
      id: id,
      name: text,
      number: number,
    },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleting contact',
    payload: id,
  };
};

export const filterContacts = text =>{
  return{
    type: 'contacts/name filter',
    payload: text,
  }
}
