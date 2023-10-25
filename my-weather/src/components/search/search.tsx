import React, { useState } from "react";
import AsyncPaginate from "react-select-async-paginate";

interface SearchProps {
  onSearchChange: (value: string | undefined) => void;
}

const Search: React.FC<SearchProps> = ({ onSearchChange }): JSX.Element => {
  const [search, setSearch] = useState<string | undefined>();

  const handleChange = (searchData: string | undefined) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search For City"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={null}
    />
  );
};

export default Search;