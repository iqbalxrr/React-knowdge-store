import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

import PropTypes from 'prop-types'; 



const Blogs = ({HandalBookMark , HandalReadingTime  }) => {

    const [blogs , setBlogs] = useState([])

    useEffect( () =>{

         fetch('Blogs.json')
         .then( res => res.json())
         .then(data => setBlogs(data))


    }, [])
    return (
        <div className="md: w-2/3">
            <h2 className="text-4xl mb-5 "> All Blogs</h2>

            {
               blogs.map( blog => <Blog 
                key={blog.id}
                 blog={blog}
                 HandalBookMark={HandalBookMark}
                 
                 HandalReadingTime={HandalReadingTime}

                
                 >

                 </Blog>)
            }

        </div>
    );
};

Blogs.propTypes ={

    HandalBookMark:PropTypes.func

}

export default Blogs;