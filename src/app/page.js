import Image from "next/image";
import Header from "./component/header/page";
import EXPLORE from "./component/explore/page";
import Footer from "./component/fotter/page";

export default function Home() {
  return (
    <main>
     <Header/>
     <EXPLORE/>
     <Footer/>
    </main>
  );
}
