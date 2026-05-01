import Banner from "./component/Banner";
import FeaturedTiles from "./component/FeaturedTiles";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto">
    <Banner/>
    <FeaturedTiles/>
   </div>
  );
}
