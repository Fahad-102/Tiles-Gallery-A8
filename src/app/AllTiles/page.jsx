import TilesClient from "./TilesClient";

const AllTilespage = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const AllTiles = await res.json();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="font-bold text-amber-950 text-4xl mt-5 flex justify-center items-center">
        All Tiles
      </h1>

      <TilesClient AllTiles={AllTiles} />
    </div>
  );
};

export default AllTilespage;