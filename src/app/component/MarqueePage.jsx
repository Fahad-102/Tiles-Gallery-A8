
import Marquee from "react-fast-marquee";

const MarqueePage = () => {
  return (
    <div className="mt-5 bg-amber-50 py-2">
      <Marquee pauseOnHover={true} speed={50}>
        <p className="font-bold text-xl text-amber-950 mx-6">
          New Arrivals [ Minimal White Tile , Luxury Gold Pattern ]
        </p>
        <p className="font-bold text-xl text-amber-950 mx-6">|</p>

        <p className="font-bold text-xl text-amber-950 mx-6">
          Weekly Feature: Modern Geometric Patterns
        </p>
        <p className="font-bold text-xl text-amber-950 mx-6">|</p>

        <p className="font-bold text-xl text-amber-950 mx-6">
          Join Our Community
        </p>
        <p className="font-bold text-xl text-amber-950 mx-6">|</p>
      </Marquee>
    </div>
  );
};

export default MarqueePage;
