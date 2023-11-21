import { ContactsList } from '../ContactsList/ContactsList';
import { Form } from '../Form/Form.js';
import { Filter } from '../Filter/Filter.jsx';
import { getError, getIsLoading } from '../../../redux/selectors';
import { useSelector } from 'react-redux'

const ContactsPage = () => {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

   return (
     <div>
       <Filter />
       <Form />
       <ContactsList/> 
       {isLoading && !error && <p>Loading... </p>}
       {error && <p>{error}</p>}
     </div>
   );

}

export default ContactsPage;