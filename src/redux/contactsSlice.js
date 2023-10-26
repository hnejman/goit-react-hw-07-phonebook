import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchContacts.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action)=>{
         state.isLoading = false;
         state.error = null;
         state.items = action.payload;
       })
      // .addCase(fetchContacts.error, (state, action)=>{
      //    state.isLoading = false;
      //    state.error = action.payload;
      // })
  },
});

export const contactsReducer = contactsSlice.reducer;
