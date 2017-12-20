import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class MyPage extends Component {
    constructor(props) {
        super(props);

        this.logged = false;
    }
    render() {
        return (
            <div>
                {
                    !this.logged && <Redirect to="/login" />
                }
            마이페이지
            </div>
        );
    }
}

export default MyPage;