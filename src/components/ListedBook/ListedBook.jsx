import { useLoaderData } from "react-router-dom";

const ListedBook = () => {
  // console.log(id);
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ListedBook;
