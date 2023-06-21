import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const {
    loginCom,
    setLoginCom,
    municipality,
    setMunicipality,
    emailAddress,
    setEmailAddress,
    password,
    setPassword,
  } = props;

  //0:NG 1:user 2:admin
  const testA = { judge: 0, name: "森" };
  const testB = { judge: 1, name: "福島" };
  const testC = { judge: 2, name: "久場" };

  const handleCategoryTownChange = (e) => {
    console.log(e.target.value);
    setMunicipality(e.target.value);
    console.log(municipality);
  };

  const handleEmailAddressChange = (e) => {
    console.log(e.target.value);
    setEmailAddress(e.target.value);
    console.log(emailAddress);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    console.log(password);
  };

  const login = async () => {
    //バリデーション
    if (emailAddress === null || password === null || municipality === null) {
      return window.alert("未入力の項目があります");
    }
    //データベースにPOSTする処理
    console.log("loginボタンが押された");
    try {
      const data = {
        mailadress: emailAddress,
        password: password,
        municipalities: municipality,
      };
      const res = await fetch("http://localhost:8080/maar/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      if (result.judge === 0) {
        window.alert("町内会名又はEmailAddress又はpasswordが間違っています");
      } else if (result.judge === 1) {
        setLoginCom(1);
        window.alert(`ようこそ${result.name}さん`);
      } else if (result.judge === 2) {
        setLoginCom(2);
        window.alert(`ようこそ管理者の${result.name}さん`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>ログイン画面</h1>
      <select
        className="inputTown"
        onChange={handleCategoryTownChange}
        defaultValue=""
      >
        <option value="" disabled>
          町内会名を選択してください
        </option>
        <option value={"大林町"}>大林町</option>
        <option value={"聖心町"}>聖心町</option>
        <option value={"堤"}>堤</option>
        <option value={"挙母町"}>挙母町</option>
      </select>
      <input
        className="mailId"
        type="text"
        placeholder="メールアドレスを入力してください。"
        value={emailAddress}
        onChange={handleEmailAddressChange}
      />
      <input
        className="password"
        type="password"
        placeholder="パスワードを入力してください。"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={login}>ログイン</button>
      <button>新規登録</button>
    </div>
  );
};
