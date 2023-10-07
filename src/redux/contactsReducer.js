const funct = () => { 
    const array = [];
    for(let i = 0;
        i<localStorage.length;
        i++){
            let value = localStorage.getItem(localStorage.key(i))
            value = value.split(":");
            array.push({
                name: value[0],
                number: value[1],
                id: localStorage.key(i),
            })
        }
    return array;
}

const value = funct();

const contactsInitialState = value;

export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type){
        case "contacts/add contact": return  [...state, action.payload];
        case "contacts/deleting contact":
        return state.filter(
        contact => contact.id !== action.payload)
        default : return state;
    };
}
