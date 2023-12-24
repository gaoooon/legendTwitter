import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "@/utils/validation";
import { SignupSubmitType, SignupErrorType } from "@/types/formType";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useNavigate } from "react-router";

const SignupPage: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<SignupSubmitType> = async (data, e) => {
    console.log(data);
    e?.preventDefault();
    setLoading(true);

    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      console.log(credentials);

      await updateProfile(credentials.user, { displayName: data.name });
      navigate("/");
    } catch (e) {
      new Error("ERROR" + e);
    } finally {
      setLoading(false);
    }
  };

  const onError: SubmitErrorHandler<SignupErrorType> = ({
    name,
    email,
    password,
  }) => {
    const { error } = toast;

    if (name) error(`name : ${name.message}`);

    if (email) error(`email : ${email.message}`);

    if (password) error(`password : ${password.message}`);
  };

  return (
    <div>
      <h1>회원가입 폼</h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register("name", nameValidation)} //
          placeholder="이름"
        />
        <input
          {...register("email", emailValidation)} //
          placeholder="이메일"
        />
        <input
          {...register("password", passwordValidation)}
          placeholder="비밀번호"
        />
        <input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignupPage;
