import { ContactsList } from 'components/ContactsList/ContactsList';
import { Contacts } from './Form/Form';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <Contacts />
      <Filter/>
      <ContactsList />
    </>
  );
};
