import React, { useEffect, useState } from 'react'
import { News_Block } from './News_Block'
import { getProgrammingNews } from '../api/newsAPI'
import { Link } from 'react-router';

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  social_image: string;
  published_at: string;
}

const truncateText = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export const Main_News = () => {
  const [news, setNews] = useState<NewsArticle[]>([])

  useEffect(() => {
    const fetchNews = async () => {
      const articles = await getProgrammingNews()
      setNews(articles)
    }

    fetchNews()
  }, [])

  console.log(news)

  return (
    <div className='main_posts_div div_news'>
      {news.map((article, index) => (

        <News_Block
          key={index}
          link={article.url}
          img={article.social_image}
          name={truncateText(article.title, 40)} 
          text={truncateText(article.description, 160)}  
          date={new Date(article.published_at).toLocaleDateString()}
        />
      ))}
    </div>
  )
}
