import React, { Component } from 'react';
/*import store from './store1';*/
import { connect } from 'react-redux';

const TodoList2 = (props) => {
    const { inputValue, changeInputValue, handleClick, handleDelete, list } = props;
    return (
        <div>
            <div>
                <input value = {inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={handleDelete} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
/*class TodoList2 extends Component{

    /!*constructor(props) {
        super(props);
        this.state = store.getState();
    }*!/

    render() {
        const { inputValue, changeInputValue, handleClick, handleDelete, list } = this.props;
        return (
            <div>
                <div>
                    <input value = {inputValue} onChange={changeInputValue}/>
                    <button onClick={handleClick}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li onClick={handleDelete} key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

}*/

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
//store.dispatch,props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleDelete() {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList2);