import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { requestServer } from "./../../server/RequestServer";
import { user } from "./../../MockData/MockData";
import { useNavigate } from "react-router-dom";
import {
  StyledBlogError,
  StyledForm,
  StyledEllipse,
  StyleInput,
  StyleInputSubmit,
  StyleBlockErrorInput,
  StyleCheckBox,
  StyleCheckBoxInput,
  StyleCheckBoxLabel,
} from "./StyledForm";

type Inputs = {
  login: string;
  password: string;
};

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  const [btnDisable, setBtnDisable] = useState(false);
  const [errorBlock, setErrorBlock] = useState(false);
  const [userValue, setUserValue] = useState("");

  const login = watch("login");
  const password = watch("password");

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    setBtnDisable(true);
    await requestServer(2000);
    if (login === user.login && password === user.password) {
      setErrorBlock(false);
      window.localStorage.setItem("login", login);
      navigate("/profile");
    } else {
      setUserValue(login);
      setErrorBlock(true);
    }
    setBtnDisable(false);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {errorBlock && (
        <StyledBlogError>
          <StyledEllipse>!</StyledEllipse>
          <span>Пользователя {userValue} не существует</span>
        </StyledBlogError>
      )}
      <label htmlFor="login">Логин</label>
      <StyleInput
        error={errors?.login && "error"}
        type="text"
        {...register("login", {
          required: "Обязательное поле",
        })}
      />
      <StyleBlockErrorInput>
        {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
      </StyleBlockErrorInput>
      <label htmlFor="password">Пароль</label>
      <StyleInput
        error={errors?.password && "error"}
        type="password"
        {...register("password", {
          required: "Обязательное поле",
        })}
      />
      <StyleBlockErrorInput>
        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
      </StyleBlockErrorInput>
      <StyleCheckBox>
        <StyleCheckBoxInput type="checkbox" id="checkbox_1" />
        <StyleCheckBoxLabel htmlFor="checkbox_1">
          Запомнить пароль
        </StyleCheckBoxLabel>
      </StyleCheckBox>
      <StyleInputSubmit
        btnDis={btnDisable}
        type="submit"
        value="Войти"
        disabled={btnDisable}
      />
    </StyledForm>
  );
};

export default Form;
