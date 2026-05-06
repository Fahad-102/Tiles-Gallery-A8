import { Button } from "@heroui/react";
import TilesCards from "./TilesCards";
import Link from "next/link";

const FeaturedTiles =async () => {
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`, {
    cache: "no-store",
  });
    const tiles = await res.json()
    const topTiles = tiles.slice(0,4)
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-10 ">Featured Tiles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 lg:grid-cols-4">{
                topTiles.map(tiles =><TilesCards key={tiles.id} tiles = {tiles}/>
                )
                }
            </div>     
            <div className="flex justify-center items-center mt-5 mb-10 ">
              <Link href={"/all-tiles"}>
              <Button className="bg-amber-950">Show All Tiles</Button>
              </Link>
                    </div>       
        </div>
    );
};

export default FeaturedTiles;