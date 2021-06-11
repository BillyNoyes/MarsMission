import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskList: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        saveTask: (state, action) => {
            state.taskList.push(action.payload);
        }
    }
});

export const { saveTask } = taskSlice.actions
export default taskSlice.reducer