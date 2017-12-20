import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.username} 의 소개</h1>
            </div>
       );
   }
}

export default About;