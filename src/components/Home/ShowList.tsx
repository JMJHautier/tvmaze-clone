import { useEffect, useState } from "react";
import ShowSnippet from "./ShowSnippet";
import { v4 as uuidv4 } from "uuid";

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const url = "https://api.tvmaze.com";
  useEffect(() => {
    const getShow = async () => {
      try {
        const request = await fetch(`${url}/shows?page=1`);
        const response = await request.json();
        const firstFiveShow = response.slice(0, 5);
        setShows(firstFiveShow);
      } catch (error) {
        console.log(error);
      }
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
              return <ShowSnippet key={uuidv4()} data={show} />;
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
