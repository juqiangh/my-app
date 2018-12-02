import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
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

    //在组件即将被挂载到页面的时刻自动执行
    /*componentWillMount() {
        console.log('componentWillMount');
    }*/

    //组件被挂载到页面之后,自动执行
    componentDidMount() {
        console.log('componentDidMount');
        axios.get('/api/todolist').then((res) => {
            console.log(res.data);
            this.setState(() => ({
                    list: [...res.data]
            }))
        }).catch(() => {
            alert('error');
        });
    }

    //一个组件要从父组件接受参数
    //只要父组件的render函数被重新执行了，子组件的生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    /*componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps');
    }*/

    // 组件被更新之前，他会自动执行
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate');
        return true;
    }*/

    //组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后执行
    //如果shouldComponentUpdate返回true它才执行
    //如果返回false，这个函数就不会被执行了
    /*componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate');
    }*/

    //组件更新完成之后，它会自动执行
    /*componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }*/

    //当这个组件即将被从页面中剔除的时候，会被执行
    /*componentWillUnmount() {
        console.log('componentWillUnmount');
    }*/

    render() {
        console.log('render');
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
                        deleteItem={this.handleItemDelete}
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