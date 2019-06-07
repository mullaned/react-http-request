import React, { Component } from 'react';

import './Blog.css';
import Posts from '../Blog/Posts/Posts'

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                            
                        </ul>
                    </nav>
                </header>
                
                <h1 style={{textAlign: "center"}}>React HTTP Requests with Axios</h1>
                
                <Posts />
                
            </div>
        );
    }
}

export default Blog;