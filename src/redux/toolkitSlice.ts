import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: <IUser>{},
        modals: [],
    },
    reducers: {
        setUser(state: any, action: {payload: IUser}) {
            state.user = action.payload
        },
        addModal(state: any, action: {payload: string}) {
            state.modals = [...state.modals, action.payload]
        }

    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    addModal,

} = toolkitSlice.actions;