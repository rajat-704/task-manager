import { TASKS } from '../shared/tasks';
import * as ActionTypes from './ActionType';
export const Tasks = (state = TASKS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            var task = action.payload;
            task.id = state.length;
            return state.concat(task);
        case ActionTypes.DELETE_TASK:
            console.log("task file")
            return {task: state.tasks.filter( task => task !== action.payload)};
        default:
            return state;
    }
};