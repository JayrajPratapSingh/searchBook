import React, {useState, useEffect} from 'react'
import "./Home.css"
import axios from "axios"
const Home = () => {
    const [search, setSearch]= useState("");
    const [books, setBooks] = useState([]);

    const bookData = () =>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`).then((res)=>{
            console.log(res.data);
            setBooks(res.data.items);
        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
        <div className='home-container'>
            <header className='header'>
                <h1>BOOK SEARCH</h1>
            </header>
            <div className='search-box'>
                    <input type="text" placeholder='search books...' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button type="submit" onClick={bookData}><i className="fa-solid fa-magnifying-glass" ></i></button>
            </div>

           <div className="book-images">{
           books.map((currentVal)=>{
            return(
                <ul className="image-box" key={currentVal.id}>
            <li >
                <img src={currentVal.volumeInfo.imageLinks.thumbnail} alt="img" />
            </li>
            <li className='details'>
                {currentVal.volumeInfo.subtitle}
                <br />
                {currentVal.volumeInfo.title}
                <br />
                pageCount:{currentVal.volumeInfo.industryIdentifiers.pageCount}
            </li >
            {/* <li className='details'>
                {currentVal.volumeInfo.title}
            </li>
            <li className='details'>
                pageCounts: {currentVal.volumeInfo.industryIdentifiers.pageCount}
            </li> */}
            
           </ul>
            )
           })
        }
           </div>

        </div>
    )
}

export default Home
