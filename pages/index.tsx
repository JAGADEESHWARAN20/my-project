import { Inter } from "next/font/google";
import Homepage from "./homepage";


const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={`${inter.className}`}>
      <Homepage/>
    </main>
  );
};

export default Home;
