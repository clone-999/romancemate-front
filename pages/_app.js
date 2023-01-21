import "antd/dist/antd.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  )
}
