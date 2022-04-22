import NavBar from "../Components/NavBar";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import Sidebar from "../Components/Sidebar";
import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <div className="flex md:mx-10 my-2">
          {/* <Sidebar /> */}
          <Component {...pageProps} />
        </div>
        {/* <script src="../path/to/flowbite/dist/flowbite.js"></script> */}
      </div>
    </Provider>
  );
}

export default MyApp;
