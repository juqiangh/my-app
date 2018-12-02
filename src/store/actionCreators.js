import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from "./actionTypes";

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value: value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
});

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data: data
});

/*
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
            /!*store.dispatch(action);*!/
        });
    }
}*/

export const getInitList = () => ({
    type: GET_INIT_LIST
})
