import { FC, FormEvent, useState } from "react";
import { SearchbarContainer, Form, Input, Button } from "./Searchbar.styles";

interface SearchbarProps {
  onSubmit: (query: string) => void;
}

const Searchbar: FC<SearchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <SearchbarContainer>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <span>Search</span>
        </Button>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search images and photos"
        />
      </Form>
    </SearchbarContainer>
  );
};

export default Searchbar;
