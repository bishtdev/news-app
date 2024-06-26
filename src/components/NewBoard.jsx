import { useEffect, useState } from "react";
import NewItem from "./NewItem";

const NewBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = "215f2ca2413d711615f6d66bb18ff3b0"
    console.log(apiKey)
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=`+ apiKey;
    

    const fetchArticles = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error("Error fetching the news articless:", err);
        setError(err.message);
      }
    };

    fetchArticles();
  }, [category]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewItem
            key={news.id || index}
            title={news.title}
            description={news.description}
            src={news.Image}
            url={news.url}
          />
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );
};

export default NewBoard;
