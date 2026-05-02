import TilesCards from "../component/TilesCards";

const AllTilespage =async () => {
    const res = await fetch("http://localhost:3000/data.json")
    const AllTiles = await res.json();
    return (
        <div>
            <h1 className="font-bold text-amber-950 text-4xl mt-5 flex justify-center items-center">All Tiles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-7">
            {
                AllTiles.map(tiles=><TilesCards key={tiles.id} tiles={tiles}/>)
            }
        </div>
        </div>
    );
};

export default AllTilespage;