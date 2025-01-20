import { useEffect, useState } from "react";

const FetchFilms = () => {
  const [films, setFilms] = useState([]);
  const [lastModified, setLastModified] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
    },
  };

  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        let allFilms = [];

        for (let i = 1; i <= 10; i++) {
          const response = await fetch(url + i, options);

          if (!response.ok) {
            throw new Error(
              `HTTP error! status: ${response.status} on page ${i}`
            );
          }

          const data = await response.json();
          allFilms = [...allFilms, ...data.results].filter(
            (film, index, self) =>
              index === self.findIndex((f) => f.id === film.id)
          );

          setFilms(allFilms);

          if (i === 1) {
            const lastModifiedHeader = response.headers.get("Date");
            setLastModified(
              lastModifiedHeader
                ? new Date(lastModifiedHeader).toLocaleString()
                : new Date().toLocaleString()
            );
          }
        }
      } catch (error) {
        console.error("Error fetching films:", error);
        setLastModified(new Date().toLocaleString());
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { films, lastModified, isLoading };
};

export default FetchFilms;
