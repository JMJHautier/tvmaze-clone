import { useEffect, useState } from "react";
import ShowSnippet from "./ShowSnippet";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const url = "https://api.tvmaze.com";
  useEffect(() => {
    const getShow = async () => {
      const request = await fetch(`${url}/shows?page=1`);
      const response = await request.json();
      const firstFiveShow = response.slice(0, 5);
      setShows(firstFiveShow);
    };
    getShow();
  }, []);

  return (
    <>
      <div>
        <h1> Popular shows airing tonight </h1>
        <div className="ShowList">
          {shows.length &&
            shows.map((show: any) => {
              return <ShowSnippet data={show} />;
            })}
        </div>
      </div>
      <div>
        <h1> Upcoming Season Premieres </h1>
        <div> List season premiers </div>
      </div>
    </>
  );
};
export default ShowList;
