import { createBrowserRouter } from "react-router";
import { MediaLayout } from "../media/layouts/MediaLayout";
import { MoviesPage } from "../media/pages/movies/MoviesPage";
import { SeriesPage } from "../media/pages/series/SeriesPage";
import { HomePage } from "../media/pages/home/HomePage";
import { SearchPage } from "@/media/pages/search/SearchPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MediaLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/series",
        element: <SeriesPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);
