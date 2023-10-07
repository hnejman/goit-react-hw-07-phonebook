import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';

const getVisibleContacts = contacts => {
  return contacts;
};

export const ContactsList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const visibleContacts = getVisibleContacts(contacts);

  return (
    <ul>
      {visibleContacts
        .filter(contact => contact.name.includes(filter))
        .map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
    </ul>
  );
};
