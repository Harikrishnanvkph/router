import {createSlice} from "@reduxjs/toolkit"

const state = {
    list : [],
    count : 0
}

const slice = createSlice({
    name : "onlySlicer",
    initialState : state,
    reducers : {
        updateList(state, payload){
            state.list.push(payload)
        },
        incrementCount(state){
            state.count += 1
        }
    }
})

export const {updateList, incrementCount} = slice.actions;
export default slice.reducer;