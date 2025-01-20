import { useEffect, useState } from "react";

const FetchFilms = () => {
  const [films, setFilms] = useState([]);
  const [lastModified, setLastModified] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
    },
  };

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setFilms(data.results);
        const lastModifiedHeader = response.headers.get("Date");
        setLastModified(
          lastModifiedHeader
            ? new Date(lastModifiedHeader).toLocaleString()
            : new Date().toLocaleString()
        );
      } catch (error) {
        console.error("Error fetching films:", error);
        setLastModified(new Date().toLocaleString());
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { films, lastModified };
};

export default FetchFilms;
