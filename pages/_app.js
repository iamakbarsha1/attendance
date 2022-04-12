import NavBar from "../Components/NavBar";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Sidebar from "../Components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <div className="flex md:mx-10 ">
        {/* <Sidebar /> */}
        <Component {...pageProps} />
      </div>

      <script src="../path/to/flowbite/dist/flowbite.js"></script>
    </div>
  );
}

export default MyApp;
