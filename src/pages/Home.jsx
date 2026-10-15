import pizza from "../data/pizza";

const Home = () => {
  const favorite = [pizza[3], pizza[5]];

  return (
    <div className="flex flex-col gap-6">
      {/* Main Hero */}
      <div className="mx-6 md:mx-8 lg:mx-10 flex flex-col  md:flex-row border border-slate-300 rounded-2xl">
        <div>
          <img
            src="../../public/images/pizza-hero.webp"
            alt=""
            className="h-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl object-cover"
          />
        </div>
        {/* Description */}
        <div className="flex flex-col gap-5  p-6">
          <h1 className="text-2xl font-bold text-center">
            KairnPizza - Every Slice Tells a Story
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Headline</h2>
              <p>Freshly Baked, Pefectly Crafted.</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Description:</h2>
              <p className="text-justify">
                Nikmati kelezatan pizza dengan perpaduan adonan berkualitas,
                saus khas, dan topping pilihan yang dipanggang hingga sempurna.
                Setiap slice menghadirkan cita rasa istimewa untuk menemani
                setiap momen bersama orang-orang tersayang.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Favorit */}
      <div className="flex flex-col gap-4 mx-6 md:mx-8 lg:mx-10">
        <h1 className="text-center text-2xl font-bold">Menu Favorit</h1>
        <div className="flex flex-col gap-5">
          {/* Favorit 1 */}
          <div className="flex items-center  rounded-2xl gap-3 border border-slate-300 h-52 overflow-y-visible">
            <div className="h-full">
              <img
                src={favorite[0].gambar}
                className="h-52 rounded-l-2xl object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-4">
              <h1 className="text-xl font-semibold">{favorite[0].name}</h1>
              <p>{favorite[0].description}</p>
            </div>
          </div>
          {/* Favorit 2 */}
          <div className="flex items-center rounded-2xl gap-3 border border-slate-300 h-52">
            <div>
              <img
                src={favorite[1].gambar}
                className="h-52  rounded-l-2xl object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 px-4">
              <h1 className="text-xl font-semibold">{favorite[1].name}</h1>
              <p>{favorite[1].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
