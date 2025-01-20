import { Link } from "react-router-dom";

const Actor = (info) => {
  const { name, role, profile_path, id } = info;
  const imgUrl = profile_path
    ? `https://image.tmdb.org/t/p/original${profile_path}`
    : "https://th.bing.com/th/id/OIP.Ze_F6AGBDQyYrlbNF7tCXAHaHa?rs=1&pid=ImgDetMain";
  return (
    <Link to={`/ActorDétails/${id}`} className="Link">
      <div id="actor">
        <img
          src={imgUrl}
          alt="Actor img"
          height="16%"
          width="8%"
          id="imgActor"
        />
        <div id="actorin">
          <span id="role">{role}</span>
          <hr /> <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default Actor;
