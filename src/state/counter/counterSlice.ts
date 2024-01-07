import { createSlice } from '@reduxjs/toolkit'
interface counterState {
    value: number
}

const initalState: counterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initalState,
    reducers: {}
})

export default counterSlice.reducer