import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators';
import TodoListUI from './TodoListUI';

/*const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];*/

class TodoList1 extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleBtnClick={this.handleBtnClick}
                list={this.state.list}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        /*const action = getTodoList();
        store.dispatch(action);*/
        /*axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            store.dispatch(action);
        });*/
        const action = getInitList();
        store.dispatch(action);
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

}

export default TodoList1;