import { Link } from "react-router-dom";
const FilmH = (info) => {
  const { poster, title, character, release_date, id } = info;
  const releaseYear = release_date
    ? parseInt(release_date.split("-")[0], 10)
    : null;
  const imgUrl = poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : "https://th.bing.com/th/id/OIP.6VHlKbRfkQyZXuBGQUVL-AHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.1";

  return (
    <Link to={`/FilmDétails/${id}`} className="Link">
      <div className="filmH">
        <img
          src={imgUrl}
          alt="Film poster"
          height="26%"
          width="13%"
          style={{ borderRadius: "20px" }}
        />
        <div id="filmHR">
          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span
              style={{
                fontFamily: `'Calibri', 'Trebuchet MS',sans-serif'`,
                fontSize: "1.3em",
              }}
            >
              <b>{title}</b>
            </span>
            <span>{releaseYear}</span>
          </p>
          <hr style={{ border: "solid black 2px" }} />
          <p style={{ textAlign: "center", color: "white", fontSize: "1.5em" }}>
            {character}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FilmH;
