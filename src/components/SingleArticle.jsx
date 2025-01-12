import { useLocation } from "react-router-dom";
import dayjs from "dayjs";

export const SingleArticle = () => {
  const location = useLocation();
  const { articleInfo } = location.state;
  console.log(articleInfo);
  return (
    <>
      <div className="m-4 p-1 h-fit bg-gradient-to-b from-gray-400 to-gray-200 md:h-fit rounded-3xl text-3xl md:flex md:flex-col">
        <div className="m-1 p-2 h-fit bg-gray-50 md:h-fit border-solid rounded-2xl text-3xl">
          <h1>{articleInfo.articleTitle}</h1>
        </div>
        <div className="m-1 mt-3 p-2 h-fit bg-gray-50 md:h-fit border-solid rounded-2xl text-3xl">
          {articleInfo.articleContent}
        </div>
        <p className="mr-4 text-2xl text-right">
          配信日：{articleInfo.articleTimestamp}
        </p>
      </div>
    </>
  );
};
