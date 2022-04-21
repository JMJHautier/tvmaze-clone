import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "./Cast";
import "./ShowPage.scss";

const ShowPage = () => {
  const { id }: any = useParams();

  const [show, setShow] = useState({});
  const { name, image, summary, _embedded }: any = show;

  const url = "https://api.tvmaze.com";

  useEffect(() => {
    const getShow = async () => {
      try {
        const request = await fetch(`${url}/shows/${id}?embed=cast`);
        const response = await request.json();
        setShow(response);
      } catch (error) {
        console.log(error);
      }
    };
    getShow();
  }, []);

  return (
    show &&
    _embedded && (
      <div>
        <h1>{name}</h1>
        <div className="ShowPage__overview">
          <div>
            <img src={image?.medium} alt={name} />
          </div>
          <p>{summary}</p>
        </div>
        <h2>Cast</h2>
        <Cast cast={_embedded.cast} />
      </div>
    )
  );
};

export default ShowPage;
