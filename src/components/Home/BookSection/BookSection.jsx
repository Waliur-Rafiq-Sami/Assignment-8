import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";

const BookSection = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("fackBooksInfo.json")
      .then((res) => res.json())
      .then((b) => setBooks(b));
  }, []);
  const [bookShow, setBookShow] = useState(6);
  const setBookShowFuc = () => {
    setBookShow(bookShow + 10);
  };
  return (
    <div className="">
      <h1 className="text-center font-semibold md:text-5xl text-3xl my-8 pt-5">
        Books
      </h1>
      <div className="grid gap-10 content-center lg:grid-cols-3 md:grid-cols-2">
        {books.slice(0, bookShow).map((book) => (
          <SingleBook key={book.id} book={book}></SingleBook>
        ))}
      </div>
      {bookShow < 40 ? (
        <div className="text-center my-10">
          <button
            onClick={setBookShowFuc}
            className="text-white text-lg h-12 md:px-10 bg-gradient-to-r from-[#224edb] to-[#d751f8]  btn"
          >
            See More
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default BookSection;
