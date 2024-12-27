
import { FaRegBookmark } from "react-icons/fa";

import PropTypes from 'prop-types'; 



const Blog = ({blog , HandalBookMark , HandalReadingTime}) => {

    const { id, title ,cover, author, author_img, reading_time, hastaq, posted_date } = blog;
    return (
        <div className='mb-10 '>
            <img className=' w-11/12 ' src={cover} alt="" />
            <div className='flex justify-between m-4'>
            

                <div className='flex'>
                    <img  src={author_img} alt="" />

                    <div className='mx-4 mt-2' >
                        <h2 className="text-2xl">{author}</h2>
                        <p className=''>{posted_date}</p>
                    </div>
                </div>
                
                <div className=' mr-10 p-5 '>
                 <span className="mr-5">{reading_time} min read</span>
                 <button onClick={()=> HandalBookMark(blog)} >< FaRegBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl my-2  pt-2">{title}</h2>
            <p>
                {
                 hastaq.map( (hast ,idx) => <span className='mx-2  text-blue-500' key={idx}><a href="">{hast}</a></span>)
                }
            </p>
            <div className="mt-5">
            <button  className="text-purple-600 font-bold underline " 
             onClick={()=>HandalReadingTime(id,reading_time)} >Make as Read</button>
            </div>
        </div>
    );
};


Blog.propTypes ={

   blog: PropTypes.object.isRequired,
   HandalBookMark:PropTypes.func,
   HandalReadingTime:PropTypes.func

}
export default Blog;