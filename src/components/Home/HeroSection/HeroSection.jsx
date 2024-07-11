import heroImg from "../../../assets/HomeIMG/img.jpg";

const HeroSection = () => {
  return (
    <div className="hero bg-base-300 my-10 rounded-lg">
      <div className="hero-content flex-col lg:flex-row-reverse md:p-20 gap-10">
        <img
          src={heroImg}
          className="md:max-w-sm px-5 pt-10 md:px-0 md:pt-0 rounded-lg"
        />
        <div>
          <h1 className="md:text-5xl text-3xl font-bold">
            Welcome to <span className="text-[#4a56fa]">Fire Book</span>
          </h1>
          <p className="py-6">
            Your Gateway to Endless Literary Adventures! Discover, read, and
            share your favorite books with a community of passionate readers.
          </p>
          <button className="btn bg-gradient-to-r from-[#f86eb3] to-[#51dff8] text-lg text-white">
            View the List
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
