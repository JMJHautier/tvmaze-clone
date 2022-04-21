import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowPage.scss";

const ShowPage = () => {
  const { id }: any = useParams();

  const [show, setShow] = useState({});
  const { name, image, summary }: any = show;

  console.log(id);
  const url = "https://api.tvmaze.com";

  useEffect(() => {
    const getShow = async () => {
      try {
        const request = await fetch(`${url}/shows/${id}`);
        const response = await request.json();
        setShow(response);
      } catch (error) {
        console.log(error);
      }
    };
    getShow();
  }, []);

  return (
    show && (
      <div>
        <h1>{name}</h1>
        <div className="ShowPage__overview">
          <div>
            <img src={image?.medium} alt={name} />
          </div>
          <p>{summary}</p>
        </div>
      </div>
    )
  );
};

export default ShowPage;
