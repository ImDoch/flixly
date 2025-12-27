import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from '@/components/ui/pagination';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';

interface Props {
  totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const queryPage = searchParams.get('page') ?? '1';

  const page = isNaN(+queryPage) ? 1 : +queryPage;

  const startPage = Math.max(page - 1, 1);
  const pages = Array.from({ length: 3 }, (_, i) => startPage + i).filter(
    (p) => p >= 1 && p <= totalPages
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setSearchParams((prev) => {
      prev.set('page', page.toString());
      return prev;
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
        </PaginationItem>
        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === page}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            aria-disabled={page === totalPages}
            onClick={() => handlePageChange(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
