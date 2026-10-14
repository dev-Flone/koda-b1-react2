import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query.trim());
  }

  return (
    <form className="flex justify-end gap-3" onSubmit={handleSubmit}>
      <input
        className="outline-1 rounded-sm px-2 py-1"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Masukkan nama user..."
      />
      <button
        className="bg-gray-500 hover:bg-gray-800 px-2 py-1 rounded-sm text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}
