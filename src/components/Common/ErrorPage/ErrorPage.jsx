import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-20 px-2">
      <h1 className="text-5xl font-bold">{error.status}</h1>
      <p className="text-xl my-3">{error.error.message}</p>
      <Link to={-1}>
        <button className="btn bg-[#4db5c7] text-xl text-white">Go back</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
