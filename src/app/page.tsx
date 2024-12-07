import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import NewArrival from "./components/NewArrival";
import ExploreOurProduct from "./components/ExploreOurProduct";
import BrowseByCategory from "./components/BrowseByCategory";
import FlashSales from "./components/FlashSales";
import ThisMonth from "./components/BestSellingProduct";
export default function Home() {
  return ( 
    <div> 
      <HeroSection />
      <FlashSales/>
      <BrowseByCategory/>
      <ThisMonth/>
      <ExploreOurProduct/>
      <NewArrival />
      <Services />
      
    </div>
  );
}

