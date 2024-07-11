import { useLoaderData, useParams } from "react-router-dom";
import { saveIdLocalStorage } from "../Common/LocatStorage/LocalStorage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ListedBook = () => {
  const allBookinfo = useLoaderData();
  const { id } = useParams();
  const findBook = allBookinfo.find((book) => book.id === parseInt(id));
  const {
    image,
    author,
    bookName,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = findBook;
  const bookId = findBook.id;

  const readFuc = (name, bookId) => {
    const tostFun = (value) => {
      if (value) {
        toast("Successfully add to read");
      } else {
        toast.error("Sorry ! Already exists");
      }
    };
    saveIdLocalStorage(name, bookId, tostFun);
  };

  const WishlistFuc = (name, bookId) => {
    const tostFun = (value) => {
      if (value === "dublicate") {
        toast.warn("Sorry! Already add to read");
      } else if (value) {
        toast("Successfully add to Wish list");
      } else {
        toast.error("Sorry ! Already exists");
      }
    };
    saveIdLocalStorage(name, bookId, tostFun);
  };

  return (
    <div className="grid lg:grid-cols-2 items-center rounded-xl border-2 p-5 gap-5 my-10 m-5">
      <div className=" rounded-xl flex justify-center h-full bg-slate-100">
        <img className="lg:h-full md:h-96 h-64" src={image} alt="" />
      </div>

      <div className="md:p-5">
        <div>
          <h1 className="md:text-4xl text-2xl font-bold">{bookName}</h1>
          <p className="md:text-xl my-2 text-gray-500">
            <span className="font-semibold">Write By :</span> {author}
          </p>
          <p className="border-y-2 my-5 py-2 text-lg font-semibold">
            {category}
          </p>
        </div>
        <div className="text-justify">
          <p>
            <span className="font-bold text-lg ">Review: </span> {review}
          </p>
          <div className="my-5 flex border-b-2 pb-5">
            <p className="font-bold py-1">Tag:</p>
            <p className="mx-3 py-1 font-semibold bg-slate-100 px-3 rounded-full text-green-500 ">
              #{tags[0]}
            </p>
            <p className=" font-semibold bg-slate-100 px-3 rounded-full text-green-500  py-1">
              #{tags[0]}
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="space-y-2 font-semibold text-gray-500">
            <p>Number of pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="space-y-2 font-bold">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="my-5 space-x-5">
          <button
            onClick={() => readFuc("read", bookId)}
            className=" text-lg h-12 md:px-10 btn border-2 border-green-300 bg-white hover:boder-2 hover:border-green-400 text-green-300 hover:bg-white"
          >
            Read
          </button>
          <button
            onClick={() => WishlistFuc("wish-list", bookId)}
            className="text-white text-lg h-12 md:px-10 btn bg-gradient-to-r from-[#53cff5] to-[#b14aec] "
          >
            Wishlist
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
