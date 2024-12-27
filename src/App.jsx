
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import BookMarks from './components/BookMarks/BookMarks'

function App() {
  
  const [bookMarks , setBookmarks] = useState([])

  const [readingTime , setReadingTime] = useState(0)
 
  const HandalBookMark =( blog )=>{
       
       const newBookMarks = [...bookMarks , blog]

       setBookmarks(newBookMarks);

   
  }




  const HandalReadingTime = ( id , time) =>{

     const newTime = readingTime + time ;

     setReadingTime(newTime);

     const remainer = bookMarks.filter( bookMark => bookMark.id !== id  )

     setBookmarks(remainer)
  }

  return (
    <>
      <Header></Header> 

     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs HandalBookMark ={HandalBookMark}

      HandalReadingTime ={HandalReadingTime}

      
     >

     </Blogs>

     <BookMarks
      bookMarks ={bookMarks}

      readingTime={readingTime}

      >

      </BookMarks>
     </div>
    </>
  )
}

export default App
