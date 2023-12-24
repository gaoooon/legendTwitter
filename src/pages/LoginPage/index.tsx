import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from "@/utils/validation";
import { LoginFormType } from "@/types/formType";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useNavigate } from "react-router";
import { FirebaseError } from "firebase/app";
import { GoogleLoginButton } from "@/components";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const { error } = toast;
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data, e) => {
    console.log(data);
    e?.preventDefault();
    setLoading(true);

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log(response);

      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        error(e.message);
      } else {
        new Error("ERROR" + e);
      }
    } finally {
      setLoading(false);
    }
  };

  const onError: SubmitErrorHandler<LoginFormType> = ({ email, password }) => {
    if (email) error(`email : ${email.message}`);

    if (password) error(`password : ${password.message}`);
  };

  return (
    <div>
      <h1>로그인 폼</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register("email", emailValidation)} //
          placeholder="이메일"
        />
        <input
          {...register("password", passwordValidation)} //
          placeholder="비밀번호"
        />
        <input
          type="submit"
          value={isLoading ? "Loading..." : "Login Account"}
        />
      </form>
      <GoogleLoginButton />

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
