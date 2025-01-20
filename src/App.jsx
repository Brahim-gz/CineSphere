import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FetchFilms from "./fetchFilms";
import DetailsF from "./detailsFilm";
import DetailsA from "./detailsActor";
import { StrictMode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const { films, lastModified, isLoading } = FetchFilms();

  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  films={films}
                  lastModified={lastModified}
                  isLoading={isLoading}
                />
              }
            />
            <Route path="/FilmDétails/:id" element={<DetailsF />} />
            <Route path="/ActorDétails/:id" element={<DetailsA />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
