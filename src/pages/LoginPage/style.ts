import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.color.grey[50]};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26rem;
  height: 25rem;
  border-radius: 3.125rem;
  padding-top: 2.5rem;
  row-gap: 1.7rem;
  position: relative;
  margin-top: 5.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.color.grey[200]};
  width: 23rem;
  height: 3.125rem;
  border: none;
  border-radius: 1.875rem;
  text-indent: 1.75rem;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &::placeholder {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const LoginButton = styled.input`
  background-color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  width: 23rem;
  height: 3.125rem;
  border-radius: 1.875rem;
  border: none;
  padding: 0;

  color: ${({ theme }) => theme.color.white};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 2.5rem;
`;

export const ErrorMessageBox = styled.div`
  color: ${({ theme }) => theme.color.error};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 21rem;
  position: relative;
  bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  &::before {
    content: "*";
  }
`;

export const SignupLink = styled(Link)`
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.lemon};
  text-decoration-line: none;
  font-size: 0.9375rem;
`;
