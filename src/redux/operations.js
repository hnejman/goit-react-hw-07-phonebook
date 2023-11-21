import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
    
export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try{
    const response = await axios.get("/contacts");
    return response.data;
    }catch (e){
      return thunkAPI.rejectWithValue(e.message);
    }
  });

  export const addContact = createAsyncThunk(
    "tasks/addContact",
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