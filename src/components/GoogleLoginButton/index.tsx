import { auth } from "@/firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLoginButton = () => {
  const handleButtonClick = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const data = await signInWithPopup(auth, provider);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return <button onClick={handleButtonClick}>login with google</button>;
};

export default GoogleLoginButton;
