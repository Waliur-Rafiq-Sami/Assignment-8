import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  getItemByLocalStorage,
  removeItem,
} from "../Common/LocatStorage/LocalStorage";
import SingleReadBookCart from "./SingleReadBookCart";
import { toast, ToastContainer } from "react-toastify";

const WishlistBooks = () => {
  const allBookInfo = useLoaderData();

  const [wishBook, setWishBooks] = useState([]);

  useEffect(() => {
    const wishlist = getItemByLocalStorage("wish-list");
    const wish = allBookInfo.filter((w) => wishlist.includes(w.id));
    setWishBooks(wish);
  }, [allBookInfo]);

  const notify = () => toast.error("Removed");
  const removeReadBook = (id) => {
    removeItem("wish-list", id);
    const newRb = wishBook.filter((i) => i.id !== id);
    notify();
    setWishBooks(newRb);
  };

  return (
    <>
      <ToastContainer></ToastContainer>
      {wishBook.length ? (
        <div>
          {wishBook.map((book) => (
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
          <h1 className="mb-36 font-semibold font-serif text-blue-400 md:text-4xl text-xl">
            Please, add a book to your Wishlist.
          </h1>
        </div>
      )}
    </>
  );
};

export default WishlistBooks;
