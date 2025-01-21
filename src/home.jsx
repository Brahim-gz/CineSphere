import Film from "./film";

const Home = ({ films, lastModified, isLoading }) => {
  return (
    <div className="page">
      <header>Films</header>
      <main id="home">
        {isLoading ? (
          <div className="Loading">
            <img
              className="Load"
              src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-loading-icon-vector-transparent-png-image_5687537.png"
              alt="|"
            />
          </div>
        ) : (
          films.map((film) => {
            return (
              <Film
                key={film.id}
                poster={film.poster_path}
                title={film.title}
                id={film.id}
              />
            );
          })
        )}
      </main>
      {!isLoading && (
        <footer>
          <span>Dernière modification : {lastModified || "N/A"}</span>
        </footer>
      )}
    </div>
  );
};

export default Home;
