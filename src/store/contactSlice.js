import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { addContact, deleteContact, fetchContacts } from "./contacts/contactsThunk";

const arrThunk = [addContact, deleteContact, fetchContacts];

const thunks = (type) => arrThunk.map(item=>item[type])

const handlePending = (state) => { state.contacts.isLoading = true };

const handleFulfilled = (state) => {
    state.contacts.isLoading = false
    state.contacts.error = ''
}

const handleFulfilledGet = (state, action) => {
    state.contacts.items = action.payload
    handleFulfilled(state)
};
            
const handleFulfilledCreate = (state, action) => {
    state.contacts.items.push(action.payload)
    handleFulfilled(state)
};
            
const handleFulfilledDelete = (state, action) => {
    console.log(action.payload)
    state.contacts.items = state.contacts.items.filter(contact => contact.id !== action.payload.id)
    handleFulfilled(state)
};

const handleRejected = (state, action) => {
    state.contacts.isLoading = false
    state.contacts.error = action.payload
};


export const contactSlice = createSlice({
    name: "myContact",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.fulfilled, handleFulfilledGet)
            .addCase(addContact.fulfilled, handleFulfilledCreate)
            .addCase(deleteContact.fulfilled, handleFulfilledDelete)
            .addMatcher(isAnyOf(...thunks('pending')), handlePending)
            .addMatcher(isAnyOf(...thunks('rejected')), handleRejected)
        
    }
});
export const contactReducer = contactSlice.reducer;
    // {
    //     filteredContact(state, action) {
    //         state.filter = action.payload;
    //     },
    // }
