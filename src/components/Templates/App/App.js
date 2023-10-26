import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactsList } from '../../Organisms/ContactsList/ContactsList';
import { Form } from '../../Organisms/Form/Form.js';
import { Filter } from '../../Organisms/Filter/Filter.jsx';
import { getError, getIsLoading } from '../../../redux/selectors';
import { fetchContacts } from '../../../redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <Form />
      <ContactsList/> 
      {isLoading && !error && <p>Loading... </p>}
      {error && <p>{error}</p>}
    </div>
  );
}; 