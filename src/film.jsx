import { Link } from "react-router-dom";
const Film = (info) => {
  const { poster, title, id } = info;

  return (
    <Link to={`/FilmDétails/${id}`} className="Link">
      <div className="f">
        <img
          src={`https://image.tmdb.org/t/p/original${poster}`}
          alt="Film poster"
          height="80%"
          width="100%"
        />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Film;
