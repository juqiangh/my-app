import React, { Component, Fragment } from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (<li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>)
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleBtnClick(e) {
        this.setState({
            inputValue: '',
            list: [...this.state.list, this.state.inputValue]
        });
    }

    handleItemDelete(index) {
        // immutable
        // state 不允许我们做任何的改变
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
    }

}

export default TodoList;