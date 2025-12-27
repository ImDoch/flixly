import { CustomPagination } from '@/media/components/CustomPagination';
import { MediaGrid } from '@/media/components/MediaGrid';
import { useSearchParams } from 'react-router';
import { SearchBar } from './ui/SearchBar';
import { EmptyState } from './ui/EmptyState';
import { useQuery } from '@tanstack/react-query';
import { getMediaByQueryAction } from '@/media/actions/getMediaByQuery.action';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const page = searchParams.get('page') ?? '1';

  const { data: movies } = useQuery({
    queryKey: ['moviesByQuery', { query, page }],
    queryFn: () => getMediaByQueryAction(query, +page),
    staleTime: 1000 * 60 * 5,
  });
  const hasResults = !!movies?.results.length;

  return (
    <main>
      {/* Header with search */}
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl flex justify-center items-center">
        <div className="container py-6">
          <h1 className="font-display text-3xl font-bold text-foreground mb-6 text-center">
            Search
          </h1>
          <SearchBar />
        </div>
      </header>

      {/* Results section */}
      <section className="container p-4 mx-auto">
        {query && hasResults && (
          <div className="flex items-center gap-2 mb-2">
            <p className="text-muted-foreground">
              Results for{' '}
              <span className="text-foreground font-medium">"{query}"</span>
            </p>
          </div>
        )}

        {hasResults ? (
          <>
            <MediaGrid media={movies!.results} />
            <CustomPagination totalPages={movies.total_pages} />
          </>
        ) : (
          <EmptyState hasQuery={!!query} query={query} />
        )}
      </section>
    </main>
  );
};
