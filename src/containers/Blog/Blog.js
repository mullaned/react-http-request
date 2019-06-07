import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import './Blog.css';
import Posts from '../Blog/Posts/Posts'
import NewPost from './NewPost/NewPost'

class Blog extends Component {
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact activeClassName="my-active" to="/">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick'
                            }}>New Post</NavLink></li>
                            
                        </ul>
                    </nav>
                </header>
                
                <h1 style={{textAlign: "center"}}>React HTTP Requests with Axios, React-Router</h1>
                
                
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                
            </div>
        );
    }
}

export default Blog;