import { ContactsList } from '../../../Organisms/ContactsList/ContactsList';
import { Form } from '../../../Organisms/Form/Form.js';
import { Filter } from '../../../Organisms/Filter/Filter.jsx';

export const ContactsPage = () =>{


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
