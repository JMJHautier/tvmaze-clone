import { Link } from "react-router-dom";

const ShowSnippet = ({ data }: { data: any }) => {
  const link = `/show/${data.id}`;

  return (
    <div className="Snippet__list">
      <div>
        <img src={data.image?.medium} alt={data.name} />
      </div>
      <p>
        <Link to={link}>{data.name}</Link>
      </p>
    </div>
  );
};

export default ShowSnippet;
