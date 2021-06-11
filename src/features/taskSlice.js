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
        },
        setCheck: (state, action) => {
            state.taskList.map(item => {
                if (action.payload === item.id) {
                    item.done = !item.done;
                }
            })
        },
        deleteTask: (state, action) => {
            state.taskList.filter(item => item.id !== action.id);
        }
    }
});

export const { saveTask, setCheck, deleteTask } = taskSlice.actions
export const selectTaskList = state => state.tasks.taskList
export default taskSlice.reducer