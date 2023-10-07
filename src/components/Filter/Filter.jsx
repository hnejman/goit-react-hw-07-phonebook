import { useDispatch } from "react-redux";
import { filterContacts } from "redux/actions";

export const Filter =()=> {
  const dispatch = useDispatch();
  const handleFilter = event => {
    event.preventDefault();
    const input = event.target;
    dispatch(filterContacts(input.value));
  }


    return (
      <>
        <h2>Contacts</h2>
        <input type="text" onChange={handleFilter} />
      </>
    );
}
