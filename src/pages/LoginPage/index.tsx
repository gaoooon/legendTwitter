import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidation, passwordValidation } from "@/utils/validation";
import { LoginFormType } from "@/types/formType";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useNavigate } from "react-router";
import { FirebaseError } from "firebase/app";
import { GoogleLoginButton } from "@/components";
import * as S from "./style";
import { Logo } from "@/assets/svgs";

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data, e) => {
    console.log(data);
    e?.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        toast.error(e.message);
      } else {
        new Error("ERROR" + e);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <Logo />
        <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
          <S.Input
            {...register("email", emailValidation)} //
            placeholder="email"
          />
          <S.Input
            {...register("password", passwordValidation)} //
            placeholder="password"
            type="password"
          />
          <S.LoginButton
            type="submit"
            value={isLoading ? "Loading..." : "Login"}
          />
          <S.ErrorMessageBox>
            {errors.email?.message && (
              <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
            )}
            {errors.password?.message && (
              <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
            )}
          </S.ErrorMessageBox>
          <S.ButtonWrapper>
            <GoogleLoginButton />
          </S.ButtonWrapper>
        </S.LoginForm>
        <S.SignupLink to="/signup">Signup for an account</S.SignupLink>
      </S.Wrapper>

      <ToastContainer />
    </S.Container>
  );
};

export default LoginPage;
