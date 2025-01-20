const FetchDataA = async ({ queryKey }) => {
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
      `https://api.themoviedb.org/3/person/${id}?language=en-US`,
      options
    );
    if (!response.ok) {
      throw new Error(`fetch details/${id} not ok`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching actor détails", error);
  }
};
export default FetchDataA;
