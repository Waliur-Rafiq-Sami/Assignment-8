import { Outlet } from "react-router-dom";
import NavigationBar from "./Common/NavigationBar/NavigationBar";
import Footer from "./Common/Footer/Footer";
const Root = () => {
  return (
    <>
      <div className="container mx-auto">
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Root;
