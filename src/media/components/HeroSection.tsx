import { Button } from "@/components/ui/button";
import type { Movie } from "../types/movie.response";
import { Calendar, Clock, Play, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  movie: Movie;
  type: "movie" | "serie";
}

export const HeroSection = ({ movie, type }: Props) => {
  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] w-full overflow-hidden">
      {/* Background */}
      {movie.backdrop_path && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${movie.backdrop_path})` }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      <div className="relative container mx-auto px-4 p-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-stretch">
          {/* Poster */}
          <div className="w-full max-w-50 xs:max-w-[240px] sm:max-w-70 md:max-w-75 lg:max-w-87.5 mx-auto md:mx-0 shrink-0 animate-fade-in">
            <div className="relative group">
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Button
                variant="streaming"
                size="lg"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch now
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 flex flex-col text-center md:text-left">
            {/* Title */}
            <div className="flex-1 space-y-4 md:space-y-6">
              <div
                className="space-y-2 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight">
                  {movie.title}
                </h1>
                {movie.tagline && (
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic">
                    "{movie.tagline}"
                  </p>
                )}
              </div>

              {/* Meta info */}
              <div
                className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <Badge variant="rating" className="text-sm px-3 py-1">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {movie.vote_average.toFixed(1)}
                </Badge>

                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(movie.release_date).getFullYear()}</span>
                </div>

                {movie.runtime && (
                  <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{formatRuntime(movie.runtime)}</span>
                  </div>
                )}

                {/* TODO: Implementar para vista de series */}
                {/* {type === "serie" && seasons && episodes && (
                <Badge variant="glass" className="text-sm">
                  {seasons} Temporadas • {episodes} Episodios
                </Badge>
              )} */}
              </div>

              {/* Genres */}
              <div
                className="flex flex-wrap gap-2 justify-center md:justify-start animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                {movie.genres.map((genre) => (
                  <Badge key={genre.id} variant="streaming">
                    {genre.name}
                  </Badge>
                ))}
              </div>

              {/* Overview */}
              <p
                className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed max-w-2xl animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                {movie.overview}
              </p>

              {/* Release date */}
              <div
                className="pt-2 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {type === "movie"
                      ? "Fecha de estreno:"
                      : "Primera emisión:"}
                  </span>{" "}
                  {formatDate(movie.release_date)}
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col xs:flex-row gap-3 pt-4 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                variant="streaming"
                size="lg"
                className="w-full xs:w-auto"
              >
                <Play className="w-5 h-5" />
                Watch now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
