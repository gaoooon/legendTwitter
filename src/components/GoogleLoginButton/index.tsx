import { auth } from "@/firebase/config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import * as S from "./style";
import { Google } from "@/assets/svgs";

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

  return (
    <S.Button onClick={handleButtonClick}>
      <S.content>
        <Google />
        Login with google
      </S.content>
    </S.Button>
  );
};

export default GoogleLoginButton;
