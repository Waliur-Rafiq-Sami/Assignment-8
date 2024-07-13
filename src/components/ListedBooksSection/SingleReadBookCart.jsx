import { IoNewspaperOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SingleReadBookCart = ({ book, removeReadBook }) => {
  const {
    id,
    image,
    bookName,
    author,
    tags,
    publisher,
    totalPages,
    category,
    rating,
  } = book;
  return (
    <div className="flex flex-col md:flex-row border-2 lg:w-2/3 md:mx-auto mx-2 p-5 gap-5 m-10 rounded-xl ">
      <div className="md:w-2/6 grid">
        <figure className="bg-gray-100 rounded-xl pb-5 flex justify-center items-center">
          <img className="w-auto xl:h-52" src={image} />
        </figure>
      </div>
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-semibold">{bookName}</h1>
          <p className="pl-2 my-2 font-semibold text-base">
            <span className="font-bold text-gray-500">Writen By :</span>{" "}
            {author}
          </p>
        </div>
        <div className="flex gap-3 my-3 text-base">
          <span className="bg-gray-100 px-4 py-2 rounded-full text-[#2aee3a] font-bold tracking-wider">
            {tags[0]}
          </span>
          <span className="bg-gray-100 px-4 py-2 rounded-full text-[#2aee3a] font-bold tracking-wider">
            {tags[1]}
          </span>
        </div>
        <div className="flex gap-1 text-xl flex-col pb-2 border-b-2">
          <div className="flex gap-1 items-center ">
            <p className="text-xl gap-1 font-semibold flex justify-center">
              <span>
                <BsPeople className="text-gray-700 text-2xl" />
              </span>{" "}
              Publisher:{" "}
            </p>
            <p className="ml-2"> {publisher}</p>
          </div>
          <div className="flex gap-1 items-center">
            <span>
              <IoNewspaperOutline className="text-gray-600" />
            </span>{" "}
            <p className="text-xl font-semibold ">Page: </p>
            <p className=""> {publisher}</p>
          </div>
        </div>
        <div className="flex gap-3 my-3 text-base ">
          <span className="bg-[#b6c3ff88] px-4 py-2 rounded-full text-[#2a85ee] font-bold tracking-wider">
            Category: {category}
          </span>
          <span className="bg-[#c96bffb9] px-4 py-2 rounded-full text-[#aa0be9] font-bold tracking-wider">
            Reating: <span className="text-[#f72b2b]">{rating}</span>
          </span>
        </div>
        <div>
          <NavLink to={`/book/${id}`}>
            <button>
              <span className="bg-[#11d411fd] btn px-4 py-2 rounded-xl text-white font-bold tracking-wider hover:bg-green-500 text-lg">
                View Details
              </span>
            </button>
          </NavLink>
          <button onClick={() => removeReadBook(id)} className="ml-2">
            <span className="bg-[#ff3b3b] btn px-8 py-2 rounded-xl text-white font-bold tracking-wider hover:bg-[#ff0000e7] text-lg">
              Remove
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleReadBookCart;

/**
 
  <div className="card border-2 m-2 p-6">
        <figure className="bg-gray-100 rounded-xl pb-5">
          <img className="w-auto xl:h-80 md:h-64" src={image} />
        </figure>
        <div className="space-y-2">
          <div className="flex gap-3 my-5">
            <span className="bg-gray-100 px-4 py-2 rounded-full text-[#2aee3a] font-bold tracking-wider">
              {tags[0]}
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-full text-[#2aee3a] font-bold tracking-wider">
              {tags[1]}
            </span>
          </div>
          <h2 className="text-3xl font-semibold pl-3">{bookName}</h2>
          <p className="pl-3 font-semibold">
            <span className="font-bold text-gray-500">Writen By :</span>{" "}
            {author}
          </p>
          <div>
            <div className="flex justify-between ml-3 border-t-2 mt-3 pt-2">
              <span>{category}</span>
              <p className="flex justify-center items-center gap-1">
                {ratingFuction()}
              </p>
            </div>
          </div>
        </div>
      </div>
 */
