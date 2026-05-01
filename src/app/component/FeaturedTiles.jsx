import TilesCards from "./TilesCards";

const FeaturedTiles =async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const tiles = await res.json()
    const topTiles = tiles.slice(0,4)
    console.log(topTiles)
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10 ">Featured Tiles</h1>
            <div className="grid grid-cols-4 gap-4 mt-10">{
                topTiles.map(tiles =><TilesCards key={tiles.id} tiles = {tiles}/>
                )
                }
            </div>            
        </div>
    );
};

export default FeaturedTiles;