import { createBrowserRouter } from "react-router";
import { MediaLayout } from "../media/layouts/MediaLayout";
import { MoviesPage } from "../media/pages/movies/MoviesPage";
import { SeriesPage } from "../media/pages/series/SeriesPage";
import { HomePage } from "../media/pages/home/HomePage";
import { SearchPage } from "@/media/pages/search/SearchPage";
import { MovieDetailsPage } from "@/media/pages/movie-details/MovieDetailsPage";
import { SerieDetailsPage } from "@/media/pages/serie-details/SerieDetailsPage";
import { CategoryPage } from "@/media/pages/category/CategoryPage";

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
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "movies/:movieId",
        element: <MovieDetailsPage />,
      },
      {
        path: "series",
        element: <SeriesPage />,
      },
      {
        path: "series/:serieId",
        element: <SerieDetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "category/:categoryId",
        element: <CategoryPage />,
      },
    ],
  },
]);
