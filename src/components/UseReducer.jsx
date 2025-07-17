import React, { useEffect, useReducer, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';

const booksDami = [
  { id: 1, title: "Atomic Habits", author: "James Clear", year: 2018, price: 450 },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho", year: 1988, price: 350 },
  { id: 3, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", year: 1997, price: 400 },
  { id: 4, title: "Deep Work", author: "Cal Newport", year: 2016, price: 500 }
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        newBook: { ...state.newBook, [action.payload.name]: action.payload.value }
      };

    case 'ADD':
      const allBook = [...state.books, action.payload];
      return {
        ...state,
        books: allBook,
        displayBooks: allBook,
        newBook: { title: '', author: '', year: '', price: '' }
      };

    case 'DELETE':
      const filtered = state.books.filter(book => book.id !== action.payload);
      return {
        ...state,
        books: filtered,
        displayBooks: filtered
      };

    case 'SEARCH':
      return {
        ...state,
        searchText: action.payload
      };

    case 'FILTER':
      const searchVal = state.searchText.toLowerCase();
      const filteredBooks = state.books.filter(book =>
        book.title.toLowerCase().includes(searchVal)
      );
      return {
        ...state,
        displayBooks: filteredBooks
      };

    default:
      return state;
  }
};

const UseReducer = () => {
  const searchFieldRef = useRef();

  const [bookState, dispatch] = useReducer(reducer, {
    books: booksDami,
    displayBooks: booksDami,
    newBook: { title: '', author: '', year: '', price: '' },
    searchText: '',
  });

  const handleChange = (e) => {
    dispatch({ type: 'ONCHANGE', payload: { name: e.target.name, value: e.target.value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, year, price } = bookState.newBook;

    if (!title || !author || !year || !price) {
      toast.error("Please fill all fields!");
      return;
    }

    const newBook = {
      id: uuidv4(),
      title,
      author,
      year: parseInt(year),
      price: parseInt(price)
    };

    dispatch({ type: 'ADD', payload: newBook });
    toast.success("Book added!");
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: id });
    toast.info("Deleted successfully");
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch({ type: 'SEARCH', payload: value });
  };

  useEffect(() => {
    dispatch({ type: 'FILTER' });
  }, [bookState.searchText]);

  const { title, author, year, price } = bookState.newBook;

  return (
    <div>
      <input
        onChange={handleSearch}
        ref={searchFieldRef}
        type="search"
        placeholder="Search"
        value={bookState.searchText}
      />

      <h1>UseReducer Book Manager</h1>
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={title} type="text" name="title" placeholder="Title" />
        <input onChange={handleChange} value={author} type="text" name="author" placeholder="Author" />
        <input onChange={handleChange} value={year} type="number" name="year" placeholder="Year" />
        <input onChange={handleChange} value={price} type="number" name="price" placeholder="Price" />
        <input type="submit" value="Add New Book" />
      </form>

      {bookState.displayBooks.map((book) => (
        <div key={book.id} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <p>Year: {book.year}</p>
          <p>Price: {book.price} ৳</p>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UseReducer;