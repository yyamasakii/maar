import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { singleArticle } from "./SingleArticle";

const testArticleList = [
  {
    articleTitleID: 1,
    title: "ごみ収集の日",
    content: "テストおおおおおおおおおお",
    readFlag: 0,
    readTimestamp: "2023/06/21 15:41",
    articleTimestamp: "2023/06/21 15:41",
  },
  {
    articleTitleID: 30,
    title: "テストの日",
    content: "テスト2",
    readFlag: 0,
    readTimestamp: "2023/06/21 16:41",
    articleTimestamp: "2023/06/21 16:41",
  },
  {
    articleTitleID: 100,
    title: "ゲートボールの日",
    content: "テスト3",
    readFlag: 0,
    readTimestamp: "2023/06/21 17:41",
    articleTimestamp: "2023/06/21 17:41",
  },
];

export const ArticleList = (props) => {
  const { municipalities } = props;

  // const getArticleList = async () => {

  //データベースにPOSTする処理
  // try {
  //   const res = await fetch(`http://localhost:8080/maar/articlelost?municipalities=${municipalities}`, {
  //     method: "GET",
  //   });
  //   const result = await res.body();
  //   console.log(result);
  //   return result
  // } catch (error) {
  //   console.error(error);
  // }
  // };
  // getArticleList()

  //  [{articleTitleID:☆☆,title:〇〇,content:△△,readflag:0or1,
  //   readTimestamp:2023/06/21/15/41,articleTimestamp:2023/06/21/15/41}......]

  return (
    <div>
      {testArticleList.map((ele) => {
        console.log("");
        return (
          <Link to="/SingleArticle" state={{ articleInfo: ele }}>
            <section className="m-4 p-4 h-44  border-solid rounded-3xl border-4 border-gray-300 text-center flex flex-row">
              <div className="w-10/12 text-left">
                <h2 className="text-3xl">{ele.title}</h2>
                <p className="mt-4">{ele.articleTimestamp}</p>
              </div>
              <div className="">{ele.readFlag === 0 ? "未読" : "既読"}</div>
            </section>
          </Link>
        );
      })}
    </div>
  );
};