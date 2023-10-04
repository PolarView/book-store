import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Add from "./pages/Add";
import Update from "./pages/Update";
import axios from "axios";
function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/books");
        setBooks(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="w-screen h-screen">
      <nav className="bg-white w-screen flex items-center justify-center shadow dark:bg-gray-800">
        <div className="container text-3xl w-full flex items-center justify-center p-6  text-gray-600 capitalize dark:text-gray-300">
          <Link
            to="/"
            className="text-gray-800 border-b-2  dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            Главная
          </Link>

          <Link
            to="/books"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            Книги
          </Link>

          <Link
            to="/add"
            className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">
            Добавить
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books setBooks={setBooks} books={books} />} />
        <Route path="/add" element={<Add setBooks={setBooks} />} />
        <Route path="/update/:id" element={<Update setBooks={setBooks} books={books} />} />
      </Routes>
    </div>
  );
}

export default App;
