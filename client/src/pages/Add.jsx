import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = ({ setBooks }) => {
  const [book, setBook] = useState({ title: null, description: null, cover: null, price: null });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBook((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleAddBook = async (e) => {
    e.preventDefault();
    if (!book.title || !book.description || !book.cover || !book.price) return;
    try {
      const { data } = await axios.post("http://localhost:8000/books", book);
      if (data) {
        setBooks((prevState) => [...prevState, book]);
        console.log(data);
        setBook(null);
        navigate("/books");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-[400px] p-4 boreder border-solid border-blue-500 rounded-sm">
        <div className="my-4">
          <label for="username" className="block text-xl text-gray-500 dark:text-gray-300">
            Название
          </label>

          <input
            name="title"
            onChange={handleInputChange}
            type="text"
            placeholder="Дорога к рабству"
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div className="my-4">
          <label for="username" className="block text-xl text-gray-500 dark:text-gray-300">
            Описание
          </label>

          <input
            name="description"
            onChange={handleInputChange}
            type="text"
            placeholder="Дорога к рабству"
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div className="my-4">
          <label for="username" className="block text-xl text-gray-500 dark:text-gray-300">
            Обложка
          </label>

          <input
            name="cover"
            onChange={handleInputChange}
            type="text"
            placeholder="Дорога к рабству"
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <div className="my-4">
          <label for="username" className="block text-xl text-gray-500 dark:text-gray-300">
            Цена
          </label>

          <input
            name="price"
            onChange={handleInputChange}
            type="text"
            placeholder="Дорога к рабству"
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <button className="bg-blue-400 px-10 py-2 m-4 rounded-md" onClick={handleAddBook}>
          Добавить
        </button>
      </div>
    </div>
  );
};

export default Add;
