
import PropTypes from 'prop-types'; 

import BookMark from "../BookMark/BookMark";

const BookMarks = ({bookMarks , readingTime}) => {
    return (
        <div className="md:w-1/3 border-2 p-6 border-indigo-500  bg-gray-100">

            <div className="bg-sky-300 mb-5 p-5 rounded">
                <h1 className="text-xl">Reading Time : {readingTime} min</h1>
            </div>
            <div>
            <h1 className="text-4xl mb-5 "> Your BookMarks </h1>
            </div>
            <div className="border-b-4 border-indigo-500">
                <h2 className="text-2xl mb-2"> Total BookMarks : {bookMarks.length}</h2>
            </div>

            {
             bookMarks.map(( bookmark, idx) => <BookMark key={idx} bookmark={bookmark} ></BookMark>)
            }
        </div>
    );
};

BookMarks.propTypes ={

    bookMarks: PropTypes.array
    
 
 }
export default BookMarks;