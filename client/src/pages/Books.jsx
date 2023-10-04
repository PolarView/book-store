import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = ({ books, setBooks }) => {
  const handleDeleteBook = async (id) => {
    const { data } = await axios.delete(`http://localhost:8000/books/${id}`);
    window.location.reload();
    setBooks(data);
    console.log(data);
  };

  return (
    <div className="w-full h-screen my-auto flex-wrap flex text-3xl items-center justify-around">
      {books.map((book) => {
        return (
          <div
            key={book.id}
            className="flex text-center max-w-[600px] justify-center flex-col items-center gap-5">
            <p>Название: {book.title}</p>
            <p>Описание: {book.description}</p>
            <p>Обложка: {book.cover}</p>
            <p>{`Цена: ${book.price} $`}</p>
            <button
              onClick={() => {
                handleDeleteBook(book.id);
              }}
              className="bg-red-400 px-10 py-2 m-4 rounded-md">
              Удалить
            </button>
            <Link to={`/update/${book.id}`}>
              <button className="bg-blue-400 px-10 py-2 m-4 rounded-md">Обновить</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
