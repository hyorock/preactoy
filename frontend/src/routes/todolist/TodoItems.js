import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        let className = '';

        if(item.complete) {
            className = 'todoComplete';
        }

        return (
                <li className={className}
                    onDoubleClick={() => this.delete(item.key)}
                    onClick={() => this.complete(item.key)}
                    key={item.key}>{item.text}
                </li>
        );
    }

    complete(key) {
        this.props.complete(key);
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ul className='theList'>
                <FlipMove duration={250} easing='ease-out'>
                    {listItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;