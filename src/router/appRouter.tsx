import { createBrowserRouter } from "react-router";
import { MediaLayout } from "../media/layouts/MediaLayout";
import { MoviesPage } from "../media/pages/movies/MoviesPage";
import { SeriesPage } from "../media/pages/series/SeriesPage";
import { HomePage } from "../media/pages/home/HomePage";
import { SearchPage } from "@/media/pages/search/SearchPage";
import { MovieDetailsPage } from "@/media/pages/movie-details/MovieDetailsPage";
import { SerieDetailsPage } from "@/media/pages/serie-details/SerieDetailsPage";
import { MoviesCategoryPage } from "@/media/pages/movies-category/MoviesCategoryPage";
import { SeriesCategoryPage } from "@/media/pages/series-category/SeriesCategoryPage";

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
        path: "movies/category/:categoryId",
        element: <MoviesCategoryPage />,
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
        path: "series/category/:categoryId",
        element: <SeriesCategoryPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },
]);
