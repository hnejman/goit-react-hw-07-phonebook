import { useSelector } from 'react-redux';
import { Contact } from '../../Molecules/Contact/Contact';

export const ContactsList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);

  return (
    <>
      {contacts && (
        <ul>
          {contacts
            .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())||
            contact.number.includes(filter))
            .map(contact => (
              <li key={contact.id}>
                <Contact contact={contact} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
