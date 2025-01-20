const FetchData = async ({ queryKey }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
    },
  };
  try {
    const id = queryKey[1];
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error(`fetch details/${id} not ok`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching film détails", error);
  }
};
export default FetchData;
