import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContact, getContact, delContact } from "components/contactAPI/contactAPI";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () =>
await getContact()
);

export const addContact = createAsyncThunk('contacts/addContact', (data) =>
    createContact(data)
);

export const deleteContact = createAsyncThunk('contacts/deleteContact', (id) =>
    delContact(id)
);