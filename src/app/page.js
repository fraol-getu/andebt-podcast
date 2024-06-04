import Header from "./component/header/page";
import EXPLORE from "./component/explore/page";
import Footer from "./component/fotter/page";
import Offer from "./component/offer/page";
import Latest from "./component/latest/page";
import Guest from "./component/guest/page";

export default function Home() {
  
  
  return (
    <main className="main">
     <Header/>
     <EXPLORE/>
     <Offer/>
     <Latest/>
     <Guest/>
     <Footer/>
    
    </main>
  );
}
