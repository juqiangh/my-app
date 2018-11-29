import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
/*import Test from  './Test';*/
import './style.css';

class TodoList extends Component {

    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    {/*下面是一个input框*/}
                    <input
                        id="insertArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
                {/*<Test content={this.state.inputValue}/>*/}
            </Fragment>
        );
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                    <TodoItem
                        key = {index}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete.bind(this)}
                    />
            )
            /*<li
            key={index}
            onClick={this.handleItemDelete.bind(this, index)}
            dangerouslySetInnerHTML={{__html: item}}
            >
            </li>*/
        })
    }

    handleInputChange(e) {
        /*const value = e.target.value;*/
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }));
        /*this.setState({
            inputValue: e.target.value
        });*/
    }

    handleBtnClick() {
        this.setState((prevState) => ({
            inputValue: '',
            list: [...prevState.list, prevState.inputValue]
        }), () => {
            /*console.log(this.ul.querySelectorAll('div').length);*/
        });
        /*this.setState({
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        });*/
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        /*const list = [...this.state.list];*/
        /*list.splice(index, 1);*/
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list: list
            }
        });
        /*this.setState({
            list: list
        });*/
    }

}

export default TodoList;