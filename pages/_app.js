import NavBar from "../Components/NavBar";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Sidebar from "../Components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <div className="flex">
        {/* <Sidebar /> */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
