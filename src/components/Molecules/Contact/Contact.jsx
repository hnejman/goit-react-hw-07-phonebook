import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations.js';
import { PropTypes } from 'prop-types';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    let contacts = localStorage.getItem('contacts');
    console.log(contacts);
    contacts = contacts.filter(element => {
      console.log(JSON.parse(element).id !== contact.id)
      return JSON.parse(element).id !== contact.id });
    localStorage.setItem("contacts", contacts);
    dispatch(deleteContact(contact.id));
  };
  return (
    <p>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button type="button" onClick={handleDelete}>
        delete
      </button>
    </p>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
}
