import "../styles/globals.css";
import Navbar from "./components/Navbar";
import { UserContext } from "../public/lib/context";
import { Toaster } from "react-hot-toast";
import { useUserData } from "../public/lib/hooks";
function MyApp({ Component, pageProps }) {
  const userData = useUserData();
  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />)
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
