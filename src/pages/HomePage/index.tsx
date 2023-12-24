import { auth } from "@/firebase/config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  const logout = () => {
    toast.success("Log Out!!");
    auth.signOut();
    location.reload();
  };

  return (
    <div>
      home
      <button onClick={logout}>log out</button>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
