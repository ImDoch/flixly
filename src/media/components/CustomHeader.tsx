import { Button } from '@/components/ui/button';

import { Search } from 'lucide-react';
import { CustomNavbar } from './CustomNavbar';
import { useNavigate } from 'react-router';

export const CustomHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="h-16 px-2 py-1 m-auto flex justify-between items-center border-b border-muted">
      <h1
        onClick={() => navigate('/?type=movies')}
        className="text-3xl font-bold cursor-pointer"
      >
        FlixLy
      </h1>

      <CustomNavbar visible={false} />

      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => navigate('search')}
      >
        <Search />
      </Button>
    </header>
  );
};
