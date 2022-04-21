import ShowList from "./ShowList";
import ShowSchedule from "./ShowSchedule";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <ShowList />
      <ShowSchedule />
    </div>
  );
};

export default Home;
