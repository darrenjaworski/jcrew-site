import { Footer } from "../components/atoms/footer";
import { Navigation } from "../components/atoms/navigation";
import { Biography } from "../components/molecules/biography";
import { Contact } from "../components/molecules/contact";
import { Hero } from "../components/molecules/hero";
import { Performances } from "../components/molecules/performances";

export const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Biography />
      <Performances />
      <Contact />
      <Footer />
    </>
  );
};
