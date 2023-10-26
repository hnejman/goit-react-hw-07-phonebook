import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://64e40039bac46e480e795494.mockapi.io/api/";
    

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try{
    const response = await axios.get("/contacts");
    console.log(response);
    return response.data;
    }catch (e){
      return thunkAPI.rejectWithValue(e.message);
    }
  });

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (text, thunkAPI) => {
      try {
        const response = await axios.post("/contacts", { text });
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