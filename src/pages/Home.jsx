import { AppContainer } from "../assets/wrappers/HomePage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";

const Home = () => {
  return (
    <AppContainer>
      <Header />
      <Banner />
      <Features />
      <Footer />
    </AppContainer>
  );
};

export default Home;
