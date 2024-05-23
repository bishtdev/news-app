import { useEffect, useState } from "react"
import NewItem from "./NewItem"

const NewBoard = () => {
    const [articles ,setArticles] = useState([])

    useEffect(() => {
        console.log("API Key:", import.meta.env.VITE_API_KEY);
        let url = `GET https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
    },[])

  return (
    <div>
        <h2 className="text-center">
            Latest <span className="badge bg-danger"> News</span>
        </h2>
        {articles.map((news, index)=>{
            return <NewItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewBoard