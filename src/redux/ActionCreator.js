import * as ActionTypes from './ActionType';

export const addTask = (id, title, type, date, description) => ({
    type: ActionTypes.ADD_TASK,
    payload: {
        id: id,
        title: title,
        type: type,
        date: date,
        description: description
    }
});

export const deleteTask = (id,title, type, date, description) => ({
    type: ActionTypes.DELETE_TASK,
    payload: {
        id: id,
        title: title,
        type: type,
        date: date,
        description: description
    }
});