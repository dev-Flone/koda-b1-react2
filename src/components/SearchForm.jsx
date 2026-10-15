function SearchForm({ search, setSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="m-4 p-2 flex gap-3">
      <input
        type="text"
        placeholder="Cari menu pizza..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-screen rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
      />
    </form>
  );
}
export default SearchForm;
