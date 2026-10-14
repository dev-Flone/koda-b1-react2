const Content = () => {
  return (
    <>
      <main className="px-3 py-2 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div>
            <img src="../../public/images/react-tailwind.webp" alt="" />
          </div>
          <div>
            <h1 className="font-bold text-4xl">React Tailwind</h1>
            <p className="indent-8 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              vero magnam, nisi, velit quibusdam harum laborum mollitia id quam
              explicabo molestias culpa voluptates in ullam porro praesentium
              earum fugit? Suscipit. Illo quae minus cum nulla sit sunt
              aspernatur laudantium eum alias culpa? Sapiente minima dignissimos
              obcaecati eaque nam suscipit pariatur incidunt est iste
              voluptatibus in, nisi accusamus hic eius eos. Nulla velit corrupti
              ipsa illo vel doloremque assumenda quia fugiat iusto, aperiam
              nihil molestiae sapiente sed? Corrupti porro maiores sit dolorem
              quo. Distinctio vitae voluptate, sunt asperiores nisi accusamus
              illo.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
          <div className="h-80 bg-amber-700"></div>
          <div className="h-80  bg-cyan-700"></div>
          <div className="h-80  bg-gray-900"></div>
          <div className="h-80  bg-gray-300"></div>
        </div>
      </main>
    </>
  );
};

export default Content;
