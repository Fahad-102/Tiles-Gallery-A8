import { Badge, Button, Card, Separator } from "@heroui/react";
import Image from "next/image";

const TilesCards = ({tiles}) => {
    console.log(tiles)
    return (
        
        <Card>
            <div className="relative w-full aspect-square">
            <Image
            src={tiles.image}
            alt={tiles.title}
            fill
            className="object-cover"
            />
            </div>
            <div className="flex justify-between items-center">
                <p>{tiles.title}</p>
                <Separator orientation="vertical"/>
                <p>${tiles.price}</p>
            </div>
            <Badge className="mx-5 mt-3 px-2">{tiles.category}</Badge>
            <Button className="w-full" variant="outline">Veiw Details</Button>
        </Card>
    );
};

export default TilesCards;