import { useDispatch } from "react-redux";
import { deleteContact } from "redux/actions";


export const Contact = ({ contact }) =>{
    const dispatch = useDispatch();
    const handleDelete = () => {
    // !!!!!!!
        localStorage.removeItem(contact.id);
    // !!!!!!!
        dispatch(deleteContact(contact.id))};

    return(
        <p>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>
            <button type="button" onClick={handleDelete}>
                delete
            </button>
        </p>
        )

}