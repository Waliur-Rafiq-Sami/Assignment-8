import HeroSection from "./HeroSection/HeroSection";
import BookSection from "./BookSection/BookSection";
const Home = () => {
  return (
    <div>
      {/* //hero section */}
      <section>
        <HeroSection></HeroSection>
      </section>
      <section>
        <BookSection></BookSection>
      </section>
    </div>
  );
};

export default Home;
