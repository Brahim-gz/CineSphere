import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FetchDataA from "./fetchDetailsA";
import FetchfilmsByA from "./fetchFilmsByA";
import FilmH from "./filmhoriz";
const DetailsA = () => {
  const { id } = useParams();
  const { data: dataA, isLoading: isLoadingA } = useQuery(
    ["detailsActor", id],
    FetchDataA
  );
  const actor = new Object(dataA);
  const { data: dataF, isLoading: isLoadingF } = useQuery(
    ["FilmsofA", id],
    FetchfilmsByA
  );
  const films = new Object(dataF);
  if (isLoadingF || isLoadingA) {
    return (
      <div className="page">
        <header>
          {" "}
          <Link to="/" className="Link">
            Actor
          </Link>
        </header>
        <main id="details">
          <div className="Loading">
            <img
              className="Load"
              src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
              alt="|"
            />
          </div>
        </main>
      </div>
    );
  } else {
    const imgUrl = actor.profile_path
      ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
      : "https://th.bing.com/th/id/OIP.Ze_F6AGBDQyYrlbNF7tCXAHaHa?rs=1&pid=ImgDetMain";
    return (
      <div className="page">
        <header>
          <Link to="/" className="Link">
            Actor - {actor.name}
          </Link>
        </header>
        <main id="details">
          <div id="infoA">
            <img
              src={imgUrl}
              alt="Actor profile"
              height="100%"
              width="25%"
              id="imgF"
            />
            <div id="rightA">
              <p>
                <span id="one">{actor.name}</span>
              </p>
              <span id="two">
                {actor.place_of_birth ? (
                  <span>
                    <b>{" Born at "}</b>
                    {actor.place_of_birth}
                  </span>
                ) : (
                  ""
                )}
                {actor.place_of_birth ? <span>{" Born "}</span> : ""}
                {actor.birthday ? (
                  <span>
                    <b>{"In "}</b>
                    {actor.birthday}
                  </span>
                ) : (
                  ""
                )}
                {actor.deathday ? (
                  <span>
                    <b>{" Died in "}</b>
                    {actor.deathday}
                  </span>
                ) : (
                  ""
                )}
              </span>
              <p id="biography">
                <b>
                  <big>
                    <u>{actor.biography == "" ? "" : "Biography :"}</u>
                  </big>
                </b>
                <br />
                <br />
                {actor.biography}
              </p>
              {actor.imdb_id ? (
                <a
                  href={`https://www.imdb.com/name/${actor.imdb_id}`}
                  className="a"
                  target="_blank"
                  rel="noreferrer"
                  id="a"
                >
                  More informations
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
          {films.cast
            ? films.cast.map((x) => {
                if (x.title != null && x.character != null) {
                  return (
                    <FilmH
                      key={x.id}
                      title={x.title}
                      character={x.character}
                      release_date={x.release_date}
                      poster={x.poster_path}
                      id={x.id}
                    />
                  );
                }
              })
            : ""}
        </main>
      </div>
    );
  }
};

export default DetailsA;
