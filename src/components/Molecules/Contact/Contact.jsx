import { PropTypes } from 'prop-types';

export const Contact = ({ contact, handleDelete }) => {
  
  return (
    <p>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <button type="button" onClick={()=>{handleDelete(contact)}}>
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
