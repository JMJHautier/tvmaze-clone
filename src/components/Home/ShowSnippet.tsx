const ShowSnippet = ({ data }: { data: any }) => {
  return (
    <div className="Snippet__list">
      <div>
        <img src={data.image.medium} alt={data.name} />
      </div>
      <p>{data.name}</p>
    </div>
  );
};

export default ShowSnippet;
