import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShowSnippet from "../Home/ShowSnippet";

const ShowSearch = () => {
  const { search }: any = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const url = "https://api.tvmaze.com";
    const getResult = async () => {
      try {
        const request = await fetch(`${url}/search/shows?q=${search}`);
        const response = await request.json();
        setResult(response);
      } catch (error) {
        console.log("error");
      }
    };
    getResult();
  }, []);
  return (
    <div>
      <p>show search results for {search} </p>
      {result &&
        result.map((show: any) => {
          return <ShowSnippet data={show.show} />;
        })}
    </div>
  );
};

export default ShowSearch;
