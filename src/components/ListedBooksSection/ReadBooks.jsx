import { useLoaderData } from "react-router-dom";
import {
  getItemByLocalStorage,
  removeItem,
} from "../Common/LocatStorage/LocalStorage";
import SingleReadBookCart from "./SingleReadBookCart";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ReadBooks = () => {
  const allBookData = useLoaderData();
  const [rb, setRb] = useState([]);

  useEffect(() => {
    const getReadBook = getItemByLocalStorage("read");
    const readBooks = allBookData.filter((book) =>
      getReadBook.includes(book.id)
    );
    setRb(readBooks);
  }, [allBookData]);
  const notify = () => toast.error("Removed");

  const removeReadBook = (id) => {
    removeItem("read", id);
    const newRb = rb.filter((i) => i.id !== id);
    notify();
    setRb(newRb);
  };

  const sortByreating = () => {
    console.log("d");
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      {rb.length ? (
        <div>
          {rb.map((book) => (
            <SingleReadBookCart
              key={book.id}
              book={book}
              removeReadBook={removeReadBook}
            ></SingleReadBookCart>
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center p-3">
          <img
            src="https://i.ibb.co/D74NdyQ/Shared-Screenshot-removebg-preview.png"
            alt=""
          />
          <h1 className="mb-36 font-semibold font-serif text-red-400 md:text-4xl text-xl">
            Please, add a book to read.
          </h1>
        </div>
      )}
    </>
  );
};

export default ReadBooks;
