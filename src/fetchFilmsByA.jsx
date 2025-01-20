const FetchfilmsByA = async ({ queryKey }) => {
  if (!Array.isArray(queryKey) || queryKey.length < 2) {
    throw new Error("Invalid queryKey");
  }

  const id = queryKey[1];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_TOKEN}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`,
    options
  );

  if (!response.ok) {
    const errorMessage = `Failed to fetch data. Status: ${response.status} ${response.statusText}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

export default FetchfilmsByA;
