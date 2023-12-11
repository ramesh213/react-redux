import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },

        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            const update_user = state.find(user => user.id);
            if(update_user) {
                update_user.name = name ;
                update_user.email = email;
            }

        },

        deleteUser: (state, action) => {
            const {id} = action.payload;
            const update_user = state.find(user => user.id == id);
            if(update_user) {
                return state.filter(f => f.id !== id);
            }
        }
    }  
})

export default userSlice.reducer;
export const {addUser, updateUser, deleteUser} = userSlice.actions;