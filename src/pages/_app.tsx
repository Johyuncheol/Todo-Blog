import { AppProps } from "next/app";
import "@/styles/globals.css";
import SideNav from "@/layouts/SideNav";
import AddModal from "@/features/AddModal";
import DetailModal from "@/features/DetailModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <AddModal />
      <DetailModal/>
      <aside className="aside">
        <SideNav />
      </aside>
      <main className="main">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
