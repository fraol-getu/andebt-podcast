import Header from "./component/header/page";
import EXPLORE from "./component/explore/page";
import Footer from "./component/fotter/page";
import Offer from "./component/offer/page";
import Latest from "./component/latest/page";

export default function Home() {
  
  
  return (
    <main>
     <Header/>
     <EXPLORE/>
     <Offer/>
     <Latest/>
     <Footer/>
     
    </main>
  );
}
