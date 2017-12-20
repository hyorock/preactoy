import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <h1>{new URLSearchParams(this.props.location.search).get('keyword')} 검색</h1>
                url 뒤에 '?keyword=검색어'를 넣어보세요~
            </div>
        );
    }
}

export default Search;