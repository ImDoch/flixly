import { Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('q') ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchParams({ q: inputValue.trim(), page: '1' });
    }
  };

  const handleClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
        <div className="relative flex items-center p-2">
          <Search className="absolute left-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-200" />
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search for movies or series..."
            className="w-full h-14 pl-12 pr-12 bg-secondary/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground search-input-glow focus:outline-none focus:border-primary/50 transition-all duration-200"
          />
          {inputValue && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-4 p-1 rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>
      </div>
    </form>
  );
};
