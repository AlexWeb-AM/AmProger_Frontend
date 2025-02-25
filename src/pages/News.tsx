import React from 'react'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Main_News } from '../components/Main_News'
import { Right_Bar } from '../components/Right_Bar'

export const News = () => {
  return (
    <div className='news_age'>
        <Header />
        <div className='main_div'>
                <NavBar />
                <Main_News />
                <Right_Bar />
        </div>
    </div>
  )
}
