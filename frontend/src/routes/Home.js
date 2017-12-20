import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <button onClick={()=>{this.props.history.push('/posts')}}>
                포스트로오오
                </button>
            </div>
       );
   }
}

export default Home;
