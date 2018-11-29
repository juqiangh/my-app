import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log('child render');
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

    //一个组件要从父组件接受参数
    //只要父组件的render函数被重新执行了，子组件的生命周期函数就会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    /*componentWillReceiveProps(nextProps, nextContext) {
        console.log('child componentWillReceiveProps');
    }*/

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.content !== this.props.content) {
            return true;
        }
        return false;
    }

    //当这个组件即将被从页面中剔除的时候，会被执行
    /*componentWillUnmount() {
        console.log('child componentWillUnmount');
    }*/

    handleClick() {
        const { deleteItem, index} = this.props;
        deleteItem(index);
    }
}

TodoItem.propTypes = {
    /*test: PropTypes.string.isRequired,*/
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

/*TodoItem.defaultProps = {
    test: 'hello world'
}*/

export default TodoItem;