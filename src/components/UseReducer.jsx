import React, { useEffect, useReducer, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const booksDami = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018, price: 450 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", year: 1988, price: 350 },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: 1997, price: 400 },
  { id: 4, title: "Deep Work", author: "Cal Newport", year: 2016, price: 500 }
];


  const reducer=(state, action)=>{

    if(action.type === 'ADD'){
      const allBook=[...state.books, action.payload];
      return {
        ...state,
        books:allBook,
        displayBooks:allBook
      }
    }
    return state;


  }
const UseReducer = () => {

  const searchFieldRef = useRef();

  const [bookState, dispatch] = useReducer(reducer, {
    books:booksDami,
    displayBooks:booksDami,
    newBook:{ title: '', author: '', year: '', price: '' },
    searchText:'',
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const addBook = {
    //   id: uuidv4(),
    //   title,
    //   author,
    //   year: parseInt(year),
    //   price: parseInt(price)
    // };

    // dispatch({type:'ADD', payload:addBook})

    // const newBooks = [...books, addBook];
    // setBooks(newBooks);
    // setDisplayBooks(newBooks);
    // setNewBook({ title: '', author: '', year: '', price: '' });

    toast.success("Book added!");
  };

  const handleDelete = (id) => {
    // const filtered = books.filter(book => book.id !== id);
    // setBooks(filtered);
    // setDisplayBooks(filtered);
    // toast("Deleted successfully");
  };

  const handleSearch = () => {
    // const value = searchFieldRef.current.value;
    // setSearchText(value);
  };

  useEffect(() => {
    // const filtered =bookState.books.filter((book) =>
    //   book.title.toLowerCase().includes(searchText.toLowerCase())
    // );
    // setDisplayBooks(filtered);
  }, [bookState.searchText]);

  return (
    <div>
      <input
        onChange={handleSearch}
        ref={searchFieldRef}
        type="search"
        placeholder="Search"
        value={bookState.searchText}
      />

      <h1>UseReducer</h1>
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={bookState.title} type="text" name="title" placeholder="Title" />
        <input onChange={handleChange} value={bookState.author} type="text" name="author" placeholder="Author" />
        <input onChange={handleChange} value={bookState.year} type="number" name="year" placeholder="Year" />
        <input onChange={handleChange} value={bookState.price} type="number" name="price" placeholder="Price" />
        <input type="submit" value="Add New Book" />
      </form>

      {/* 🔍 Show filtered books only */}
      {bookState.displayBooks.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <h4>{book.year}</h4>
          <h2>{book.price}</h2>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UseReducer;