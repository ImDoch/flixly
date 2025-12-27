import { Search, Film } from 'lucide-react';

interface Props {
  hasQuery: boolean;
  query?: string;
}

export const EmptyState = ({ hasQuery, query }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
        <div className="relative p-6 bg-secondary rounded-full">
          {hasQuery ? (
            <Film className="h-12 w-12 text-muted-foreground" />
          ) : (
            <Search className="h-12 w-12 text-muted-foreground" />
          )}
        </div>
      </div>

      <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
        {hasQuery ? 'Without Results' : 'Discover content'}
      </h2>
      <p className="text-muted-foreground text-center max-w-md">
        {hasQuery
          ? `We dont fount results for "${query}". Try with another search.`
          : 'Search for your favorite movies, series, and documentaries.'}
      </p>
    </div>
  );
};
