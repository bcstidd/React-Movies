import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorListPage({ movies }) {
  const actorList = movies.reduce((actors, m) => {
    m.cast.forEach((name) => {
      if (!actors.includes(name)) actors.push(name);
    });
    return actors;
  }, []);

  return (
    <div className="container">
      {actorList.map((actor) => {
        return <ActorCard key={actor} actor={actor} />;
      })}
    </div>
  );
}
