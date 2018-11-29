import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const { content } = this.props ;
        // JSX -> JS对象 -> 真实DOM
        return (
            <div onClick={this.handleClick}>
                {content}
             </div>
        );
        /*return <div><span>item</span></div>;
        return React.createElement('div', {}, React.createElement('span', {}, 'item'));*/
    }

    handleClick() {
        const { deleteItem, index} = this.props;
        deleteItem(index);
    }
}

export default TodoItem;