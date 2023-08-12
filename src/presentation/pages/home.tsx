import { Footer } from "../components/atoms/footer";
import { Navigation } from "../components/atoms/navigation";
import { Biography } from "../components/molecules/biography";
import { Contact } from "../components/molecules/contact";
import { Hero } from "../components/molecules/hero";
import { Media } from "../components/molecules/media";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Biography />
      <Media />
      <Contact />
      <Footer />
    </>
  );
};
