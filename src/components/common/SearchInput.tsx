import { Search } from 'lucide-react';
import { Input } from '../ui/input';

const SearchInput = ({ setSearch }: { setSearch: (value: string) => void }) => {

  return (
    <div className="grid gap-3">
      <div>
        <div className="relative">
          <Input onChange={(e) => setSearch(e.target.value)} className='rounded-full' placeholder='Search'/>
          <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none" />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;