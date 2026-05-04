import { Badge, Button, Card, Chip, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const TilesCards = ({tiles}) => {
    
    return (
        
        <Card>
            <div className="relative w-full aspect-square">
            <Image
            src={tiles.image}
            alt={tiles.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl hover:scale-110"
            />
            <Chip className=" absolute bottom-0"><p>${tiles.dimensions}</p></Chip>

            </div>
            <div className="flex justify-between items-center">
                <p className="font-semibold">{tiles.title}</p>
                <Separator orientation="vertical"/>
                <p>${tiles.price}</p>
                            </div>
            <Badge className="mx-5 mt-3 px-2">{tiles.category}</Badge>
            <Link  href={`/AllTiles/${tiles.id}`}>
            <Button className="w-full bg-amber-950 text-white" variant="outline">Veiw Details</Button>
            </Link>
        </Card>
    );
};

export default TilesCards;