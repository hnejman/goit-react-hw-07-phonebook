const filterInitialState = "";

export const filtersReducer = (state = filterInitialState, action) => {
    switch (action.type){
        case "contacts/name filter": {
            return  action.payload;
        }
        default : {return state;}
    }
};