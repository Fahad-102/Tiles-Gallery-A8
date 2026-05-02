import { Badge, Button, Card, Chip } from "@heroui/react";
import Image from "next/image";

const DetailsPage = async ({ params }) => {
    const { id } = await params; 

    const res = await fetch("http://localhost:3000/data.json");
    const AllTiles = await res.json();

    const tile = AllTiles.find(t => t.id === id);
    
    if (!tile) return <div>Not found</div>;
    
    return (
        <Card className=" relative shadow-2xl m-10 max-w-6xl mx-auto">
            <div className="rounded-3xl grid grid-cols-1 lg:grid-cols-2  ">
                <div className="p-5 flex justify-center">{
                    <Image
                    src={tile.image}
                    alt={tile.title}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="rounded-2xl "
                    />
                }
                <div className="absolute top-5 ">
                    {tile.inStock ? <Chip className="bg-green-500 font-bold text-white text-xl">In Stock</Chip>:<Chip className="bg-red-500">Stock Out</Chip>}
                </div>
                    </div>
                    <div className="pt-4">
                        <h1 className=" text-center mb-5 text-5xl text-amber-950">{tile.title}</h1>
                        <hr/>
                    <div className="mt-5">
                        <div className="text-xl">
                        <p>Description : {tile.description}</p>
                        <p>Material : {tile.material}</p>
                        <p>Category : {tile.category}</p>
                        </div>
                        <div className=" grid grid-cols-1 md:grid-cols-1 md:max-w-xl mx-auto lg:grid-cols-3 gap-4 mt-5">
                        <Card className="shadow-2xl text-center text-2xl font-medium ">Dimensions : <p>{tile.dimensions}</p></Card>
                        <Card className="shadow-2xl text-center text-2xl font-medium"> Currency : <p>{tile.currency}</p></Card>
                        <Card className="shadow-2xl text-center text-2xl font-medium"> Price : <p>${tile.price} / cm</p></Card>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 m-7">
                    <Button
                    disabled = {!tile.inStock}
                    className="bg-amber-950 w-40 h-10 disabled:bg-gray-500  disabled:cursor-not-allowed">Add to Cart</Button>

                    <Button
                    disabled = {!tile.inStock}
                    className="bg-amber-950 w-40 h-10 disabled:bg-gray-500  disabled:cursor-not-allowed">Buy Now</Button>
                    </div>
                    </div>
            </div>
        </Card>
    );
};

export default DetailsPage;

//  "id": "tile_005",
//     "title": "Geometric Pattern Tile",
//     "description": "Stylish geometric design tile for modern homes",
//     "image": "/TilesImages/tiles05.webp",
//     "category": "decorative",
//     "price": 55.75,
//     "currency": "USD",
//     "dimensions": "50x50 cm",
//     "material": "Ceramic",]
//     "inStock": true