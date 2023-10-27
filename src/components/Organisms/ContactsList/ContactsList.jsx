import { useSelector, useDispatch } from 'react-redux';
import { Contact } from '../../Molecules/Contact/Contact';
import { deleteContact } from '../../../redux/operations';

export const ContactsList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  function handleDelete (contact){
    dispatch(deleteContact(contact.id));
  }

  return (
    <>
      {contacts && (
        <ul>
          {contacts
            .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())||
            contact.number.includes(filter))
            .map(contact => (
              <li key={contact.id}>
                <Contact contact={contact} handleDelete={handleDelete} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
};
