// "use client";

// import { useEffect, useState } from "react";
// import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   async function fetchNews() {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:8080/news");

  //     if (!response.ok) {
  //       setError("Failed to fetch news.");
  //       setIsLoading(false);
  //     }

  //     const news = await response.json();
  //     setIsLoading(false);
  //     setNews(news);
  //   }
  //   fetchNews();
  // }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>{error}</p>;
  // }

  // =====

  // const response = await fetch("http://localhost:8080/news");
  // const news = await response.json();

  // if (!response.ok) {
  //   throw new Error("Failed to fetch news.");
  // }

  // =====

  const news = await getAllNews();

  let newsContent;

  // if (news) {
  newsContent = <NewsList news={news} />;
  // }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
