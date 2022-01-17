import React, { Component } from 'react';
import login from './login';


class index extends Component {
    render() {
        return (
            <div className='App'>
                <div className='container'>
                    {<login/>}
                </div>
            </div>
        );
    }
}

export default index;