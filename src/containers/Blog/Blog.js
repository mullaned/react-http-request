import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: this.props.match.url + '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                            
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