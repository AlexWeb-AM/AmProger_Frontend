import React from 'react'

interface Prop_Types {
  name: string
  date: string
  img: string
  text: string
  link: string
}

export const News_Block: React.FC<Prop_Types> = ({ name, date, img, text, link }) => {
  return (
    <a href={link} className="news_block" target="_blank" rel="noopener noreferrer">
    <img src={img} alt={name} />
    <div className='text_div'>
      <div className='first_col_div'>
        <h2>{name}</h2>
      </div>
      <p>{text}</p>
    </div>
    <div className='date_div'>{date}</div>
  </a>
  )
}
