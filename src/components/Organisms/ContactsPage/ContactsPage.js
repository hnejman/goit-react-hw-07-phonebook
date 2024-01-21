import { ContactsList } from '../ContactsList/ContactsList';
import { Form } from '../Form/Form.js';
import { Filter } from '../Filter/Filter.jsx';
import { getError, getIsLoading } from '../../../redux/selectors';
import { useSelector } from 'react-redux'

const ContactsPage = () => {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  if(error){console.log(error)};

   return (
     <div>
       <Form />
       <Filter />
       <ContactsList/> 
       {isLoading && !error && <p>Loading... </p>}
     </div>
   );

}

export default ContactsPage;