export const nameValidation = {
  required: {
    value: true,
    message: "필수 조건입니다",
  },
  minLength: {
    value: 2,
    message: "2자 이상으로 작성해주세요",
  },
  maxLength: {
    value: 4,
    message: "4자 이하로 작성해주세요",
  },
};

export const emailValidation = {
  required: {
    value: true,
    message: "필수 조건입니다",
  },
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "email 형식을 지켜주세요",
  },
};

export const passwordValidation = {
  required: {
    value: true,
    message: "필수 조건입니다",
  },
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
    message: "password 형식을 지켜주세요",
  },
};
