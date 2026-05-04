import TilesClient from "./TilesClient";

const AllTilespage = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
    cache: "no-store",
  });
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