import { ContactsList } from '../../../Organisms/ContactsList/ContactsList';
import { Form } from '../../../Organisms/Form/Form.js';
import { Filter } from '../../../Organisms/Filter/Filter.jsx';
import { getError, getIsLoading } from '../../../../redux/selectors';
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