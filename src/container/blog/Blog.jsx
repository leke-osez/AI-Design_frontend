import React from 'react';
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports.js'

const Blog = () => {
    return (
        <div className = 'gpt3__blog-container section__padding'>
            <h1 className = 'gradient__text'>A lot is happening, We are blogging about it.</h1>
            <div className= 'gpt3__blog-content'>
                <div className = {"gpt3__blog-content__groupA"}> 
                    <Article imageUrl={blog01} date = 'Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                </div>

                <div className = 'gpt3__blog-content__groupB'>
                    <Article imageUrl={blog02} date = 'Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imageUrl={blog03} date = 'Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imageUrl={blog04} date = 'Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imageUrl={blog05} date = 'Sep 26, 2021' title ='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                </div>
            </div>       
        </div>
    )
}

export default Blog
