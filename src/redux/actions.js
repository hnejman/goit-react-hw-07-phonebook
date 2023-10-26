export const filterContacts = text => {
  return {
    type: 'contacts/filter',
    payload: text,
  };
};
