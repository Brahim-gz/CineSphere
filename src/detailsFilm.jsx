import { useQuery } from "@tanstack/react-query";
import { useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import Actor from "./actor";
import FetchData from "./fetchDetailsF";
import FetchActors from "./fetchActors";

const DetailsF = () => {
  console.log("API Token:", import.meta.env.VITE_APP_API_TOKEN);
  const { id } = useParams();
  const { data: dataF, isLoading: isLoadingF } = useQuery(
    ["détails", id],
    FetchData
  );
  const film = new Object(dataF)
  const { data: dataA, isLoading: isLoadingA } = useQuery(
    ["détailsA", id],
    FetchActors
  );
  const actors = new Object(dataA);
  if (isLoadingF || isLoadingA) {
    return (
      <div>
        <Link to="/" className="Link">
          <header>
            <h1>Film</h1>
          </header>
        </Link>
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
    const imgFUrl = film.poster_path
      ? `https://image.tmdb.org/t/p/original${film.poster_path}`
      : "https://th.bing.com/th/id/OIP.6VHlKbRfkQyZXuBGQUVL-AHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.1";
    return (
      <div>
        <Link to="/" className="Link">
          <header>
            <h1>Films - {film.title}</h1>
          </header>
        </Link>
        <main id="details">
          <div id="infoF">
            <img
              src={imgFUrl}
              alt="Film poster"
              height="100%"
              width="25%"
              id="imgF"
            />
            <div id="rightF">
              <p>
                <span id="one">{film.original_title}</span>{" "}
                <span id="three">
                  {"( "}
                  {film.genres ? film.genres.map((x) => x.name).join(", ") : ""}
                  {" )"}
                </span>
              </p>
              <span id="two">
                <b> Produced in </b>
                {film.release_date} <b> By </b>{" "}
                {film.production_companies
                  ? film.production_companies.map((x) => x.name).join(" | ")
                  : ""}
              </span>
              <br />
              <span>Runtime : {film.runtime} min</span>
              <span id="four">
                <i id="custom-icon">★</i> {film.vote_average}{" "}
              </span>{" "}
              <p>
                {" "}
                <b>
                  <u>Description :</u>
                </b>
                <br />
                {film.overview}
              </p>
              <a
                href={`https://www.imdb.com/title/${film.imdb_id}`}
                className="a"
                target="_blank"
                rel="noreferrer"
              >
                More informations
              </a>
            </div>
          </div>
          {actors.cast
            ? actors.cast.map((x) => {
                if (x.name != "" && x.character != "") {
                  return (
                    <Actor
                      key={x.id}
                      name={x.name}
                      role={x.character}
                      profile_path={x.profile_path}
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

export default DetailsF;
