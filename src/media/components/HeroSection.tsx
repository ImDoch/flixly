import { Button } from "@/components/ui/button";
import { Play, Star, Calendar, Clock } from "lucide-react";
import type { Category } from "../types/categories.response";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  tagline?: string;
  overview: string;
  posterPath: string | null;
  backdropPath: string | null;
  rating: number;
  releaseDate: string;
  runtime?: number;
  genres: Category[];
  type: "movie" | "serie";
  seasons?: number;
  episodes?: number;
}

export const HeroSection = ({
  title,
  tagline,
  overview,
  posterPath,
  backdropPath,
  rating,
  releaseDate,
  runtime,
  genres,
  type,
  seasons,
  episodes,
}: Props) => {
  const posterUrl = posterPath
    ? `https://image.tmdb.org/t/p/w500${posterPath}`
    : "/placeholder.svg";
  const backdropUrl = backdropPath
    ? `https://image.tmdb.org/t/p/original${backdropPath}`
    : null;

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
      {backdropUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
      )}

      <div className="relative container mx-auto px-4 pt-20 pb-12 md:pt-32 md:pb-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          {/* Poster */}
          <div className="w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[350px] mx-auto md:mx-0 flex-shrink-0 animate-fade-in">
            <div className="relative group">
              <img
                src={posterUrl}
                alt={title}
                className="w-full rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Button
                variant="streaming"
                size="lg"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver ahora
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            {/* Title */}
            <div
              className="space-y-2 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight">
                {title}
              </h1>
              {tagline && (
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground italic">
                  "{tagline}"
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
                {rating.toFixed(1)}
              </Badge>

              <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <Calendar className="w-4 h-4" />
                <span>{new Date(releaseDate).getFullYear()}</span>
              </div>

              {runtime && (
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{formatRuntime(runtime)}</span>
                </div>
              )}

              {type === "serie" && seasons && episodes && (
                <Badge variant="glass" className="text-sm">
                  {seasons} Temporadas • {episodes} Episodios
                </Badge>
              )}
            </div>

            {/* Genres */}
            <div
              className="flex flex-wrap gap-2 justify-center md:justify-start animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              {genres.map((genre) => (
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
              {overview}
            </p>

            {/* Release date */}
            <div
              className="pt-2 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  {type === "movie" ? "Fecha de estreno:" : "Primera emisión:"}
                </span>{" "}
                {formatDate(releaseDate)}
              </p>
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
                Ver ahora
              </Button>
              <Button variant="glass" size="lg" className="w-full xs:w-auto">
                Añadir a mi lista
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
