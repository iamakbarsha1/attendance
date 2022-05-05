import NavBar from "../src/Components/NavBar";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import Sidebar from "../src/Components/Sidebar";
import { Provider } from "react-redux";
import store from "../store";
import axios from "axios";

const BaseURL = "http://localhost:4000";
const CloudURL =
  "https://node-cors-proxy-mercy.herokuapp.com/https://ams-tnc-hostel.herokuapp.com/";
//ams-tnc-hostel.herokuapp.com/

https: axios.defaults.baseURL = CloudURL;

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
