import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskList: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // Pushes the input data into the array
        saveTask: (state, action) => {
            state.taskList.push(action.payload);
        },
        // Maps through all of array and checks each value to see if the id matches the id passed in
        setCheck: (state, action) => {
            state.taskList.map(item => {
                if (action.payload === item.id) {
                    // Negates the done value (false -> true/true -> false)
                    item.done = !item.done;
                }
            })
        },
        // Checks the array to find indexof the id passed in
        deleteTask: (state, action) => {
            const index = state.taskList.indexOf(action.payload);
            // Removes the object from the array using the index
            state.taskList.splice(index, 1);
        },
        // While loop checks if array contains any data and pops it until empty
        deleteAll: (state, action) => {
            while (state.taskList.length) {
                state.taskList.pop();
            }
        }
    }
});

export const { saveTask, setCheck, deleteTask, deleteAll } = taskSlice.actions
export const selectTaskList = state => state.tasks.taskList
export default taskSlice.reducer