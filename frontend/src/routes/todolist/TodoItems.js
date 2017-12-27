import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.createTasks = this.createTasks.bind(this);
        this.drop = this.drop.bind(this);
    }

    createTasks(item) {
        let className = '';

        if(item.complete) {
            className = 'todoComplete';
        }

        return (
                <li className={className}
                    id={item.key}
                    draggable='true'
                    onDragStart={this.beginDrag}
                    onDrop={this.drop}
                    onDragOver={this.allowDrop}
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

    swap(sourceItem, targetItem) {
        this.props.swap(sourceItem, targetItem);
    }

    beginDrag(event) {
        event.dataTransfer.setData("text", event.target.id);
    }

    drop(event) {
        event.preventDefault();
        let sourceData = event.dataTransfer.getData("text", event.target.id);
        this.swap(sourceData, event.target.id);
    }

    allowDrop(event) {
        event.preventDefault();
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