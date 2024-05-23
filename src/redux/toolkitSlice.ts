import { createSlice } from "@reduxjs/toolkit";
// import {IDonateInfo, IGeneralInfo, INews, INewsSingle, IServer, IUser} from "../models";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
    },
    reducers: {
        setUser(state:any, action:any) {
            state.user = action.payload
        },
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,

} = toolkitSlice.actions;