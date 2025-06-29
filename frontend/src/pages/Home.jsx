import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap space-x-4 space-y-4 items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
