import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { name: text[0], number: text[1] });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {

      try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

  export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
      console.log(state);
      if (null === state.auth.token) {
        // If there is no token, exit without performing any request
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try{
      const response = await axios.get("/contacts");
      return response.data;
      }catch (e){
        return thunkAPI.rejectWithValue(e.message);
      }
    });