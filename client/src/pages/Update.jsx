import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = ({ books, setBooks }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentBookData = books.find((book) => book.id == id);
  const [book, setBook] = useState(currentBookData);

  const handleInputChange = (e) => {
    setBook((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleUpdateBookInfo = async () => {
    const { data } = await axios.put(`http://localhost:8000/books/${id}`, { ...book });
    setBooks((prevState) => {
      const updatedBookArray = prevState.map((item) => {
        if (item.id == id) return book;
        return item;
      });
      return updatedBookArray;
    });
    console.log(data);
    navigate("/books");
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
            value={book.title}
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
            value={book.description}
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
            value={book.cover}
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
            value={book.price}
            onChange={handleInputChange}
            type="text"
            placeholder="Дорога к рабству"
            className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-40 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
          />
        </div>
        <button onClick={handleUpdateBookInfo}>Обновить</button>
      </div>
    </div>
  );
};

export default Update;
