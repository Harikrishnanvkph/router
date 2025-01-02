import {createSlice} from "@reduxjs/toolkit"

const starter = {
    list : [],
    count : 0,
    longPollingUsers : []
}

const slice = createSlice({
    name : "onlySlicer",
    initialState : starter,
    reducers : {
        updateList(state, action){
            state.list = [action.payload, ...state.list]
        },
        incrementCount(state){
            state.count += 1
        },
        createLongPollingUser(state,action){
            for(let key of state.longPollingUsers){
                if(key.username === action.payload.username){
                    return
                }
                state.longPollingUsers.push({
                    username : action.payload.username,
                    messages : action.payload.messages ? action.payload.messages : []
                })
            }
        }
    }
})

export const {updateList, incrementCount,
    createLongPollingUser} = slice.actions;
export default slice.reducer;