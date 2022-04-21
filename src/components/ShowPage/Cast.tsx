const Cast = ({ cast }: any) => {
  return (
    cast && (
      <div className="ShowPage__cast">
        {cast.map((actor: any) => {
          const {
            person: {
              image: { medium },
              name,
            },
          }: any = actor;

          return (
            <div className="ShowPage__cast__names">
              <div>
                <img src={medium} alt={name} />
              </div>
              <div>
                <p>{actor.person.name}</p>
                <p> as {actor.character.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default Cast;
