import NavBar from "../src/Components/NavBar";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import Sidebar from "../src/Components/Sidebar";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import axios from "axios";

const BaseURL = "http://localhost:4000";
const CloudURL =
  "https://node-cors-proxy-mercy.herokuapp.com/https://attendance-backend-tnc.herokuapp.com/";
//ams-tnc-hostel.herokuapp.com/
// https://attendance-backend-tnc.herokuapp.com/

axios.defaults.baseURL = BaseURL;

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div>
        <NavBar />
        <div className="flex md:mx-10 my-2">
          <Component {...pageProps} className="" />
        </div>
      </div>
    </Provider>
  );
}

export default MyApp;
