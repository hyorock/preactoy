import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './Todolist.css';

class TodoList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }

    addItem(event) {
        let itemArray = this.state.items;

        if(this._inputElement.value !== '') {
            itemArray.unshift({
                text: this._inputElement.value,
                complete: false,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = '';
        }
        event.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    completeItem(key) {
        this.state.items.forEach((item) => {
            if(item.key === key){
                item.complete = !item.complete;
            }
        });

        this.setState({
             items: this.state.items
        });
    }

    render() {
        return (
            <div className='todoListMain'>
                <div className='todoheader'>
                    <form onSubmit={this.addItem}>
                        <input ref={(todoInput) => this._inputElement = todoInput}
                            placeholder='enter task'>
                        </input>
                        <button type='submit'>add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                            delete={this.deleteItem}
                            complete={this.completeItem}/>
            </div>
        );
    }
}

export default TodoList;