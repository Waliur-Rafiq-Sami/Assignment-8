import ListBookBanner from "./ListBookBanner";
import { NavLink, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ListedBooksSection = () => {
  return (
    <div>
      <ListBookBanner></ListBookBanner>
      {/* button for slice */}
      <div className="text-center mb-20">
        <details className="dropdown ">
          <summary className="btn m-1 bg-white text-green-500 text-lg border-2 border-green-500 hover:bg-[#0e3ec2] hover:border-none hover:text-white">
            open or close
          </summary>
          <ul className="dropdown-content bg-none rounded-lg z-[1] -ml-20 border-2  p-3 -mt-1 border-green-500 space-y-2">
            <li className="border-b-2 pr-10 border-green-400 text-start">
              <button className="hover:text-red-500 font-semibold">
                Rating
              </button>
            </li>
            <li className="border-b-2 pr-10 border-green-400  text-start">
              <button className="hover:text-red-500 font-semibold">
                Number of pages
              </button>
            </li>
            <li className="border-b-2 pr-10 border-green-400  text-start">
              <button className="hover:text-red-500 font-semibold">
                publisher Year
              </button>
            </li>
          </ul>
        </details>
      </div>
      {/* button for slice */}

      {/* link of item read or Wishlist */}
      <Tabs className="text-xl">
        <TabList>
          <Tab>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#2cf336]" : "text-black"
              }
              to="/listed-books/read"
            >
              Read Books
            </NavLink>
          </Tab>
          <Tab>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#2cf336]" : "text-black"
              }
              to="/listed-books/wishlist"
            >
              Wishlist Books
            </NavLink>
          </Tab>
        </TabList>
        <TabPanel>{<Outlet />}</TabPanel>
        <TabPanel>{<Outlet />}</TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooksSection;
