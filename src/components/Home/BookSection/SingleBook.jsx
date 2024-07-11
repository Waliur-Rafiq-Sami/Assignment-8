import { MdOutlineStar } from "react-icons/md";
import { IoStarHalf } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const SingleBook = ({ book }) => {
  const { id, image, bookName, author, tags, category, rating } = book;
  const ratingFuction = () => {
    if (rating >= 4.5) {
      return (
        <>
          <span> {rating}</span>
          <MdOutlineStar className="text-2xl text-yellow-300"></MdOutlineStar>
        </>
      );
    } else if (rating >= 4) {
      return (
        <>
          <span> {rating}</span>
          <IoStarHalf className="text-2xl text-yellow-300"></IoStarHalf>
        </>
      );
    }
  };

  return (
    <NavLink to={`/book/${id}`}>
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
    </NavLink>
  );
};

export default SingleBook;
