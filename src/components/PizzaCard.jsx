function PizzaCard({ name, description, harga, gambar }) {
  return (
    <div className="border border-slate-300 rounded-md transition shadow-xl cursor-pointer hover:-translate-y-2">
      <img
        src={gambar}
        alt={name}
        className="h-[50vh] w-full object-cover rounded-t-md "
      />
      <div className="flex flex-col gap-3 p-5">
        <h2 className="font-semibold text-lg text-gray-800">{name}</h2>
        <p className="flex-1 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
        <p className="text-lg font-bold text-red-700">
          Rp. {harga.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}

export default PizzaCard;
