import Banner from "./component/Banner";
import FeaturedTiles from "./component/FeaturedTiles";
import MarqueePage from "./component/MarqueePage";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto">
    <Banner/>
    <MarqueePage/>
    <FeaturedTiles/>
   </div>
  );
}
