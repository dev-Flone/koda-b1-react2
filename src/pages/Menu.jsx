import { useState } from "react";
import PizzaCard from "../components/PizzaCard";
import pizza from "../data/pizza";
import SearchForm from "../components/SearchForm";

const Menu = () => {
  const [search, setSearch] = useState("");
  const filteredPizza = pizza.filter((item) =>
    item.name.toLowerCase().trim().includes(search.toLowerCase()),
  );
  return (
    <div>
      <SearchForm search={search} setSearch={setSearch} />
      <div className="mx-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPizza.map((item) => (
          <PizzaCard key={item.name} {...item} />
        ))}
      </div>
      {filteredPizza.length === 0 && (
        <p className="m-4 p-2 text-center text-2xl font-semibold tracking-wide">
          Pizza tidak ditemukan
        </p>
      )}
    </div>
  );
};

export default Menu;
