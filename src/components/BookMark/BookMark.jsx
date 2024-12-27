
import PropTypes from 'prop-types'; 

const BookMark = ({ bookmark }) => {

    
    const {title} = bookmark;
    return (
        <div className="bg-blue-200 m-3 p-6 rounded-full">
           <h2 className="text-2xl">{title}</h2>
        </div>
    );
};

BookMark.PropTypes ={

    bookmark:PropTypes.object.isRequired
}

export default BookMark;