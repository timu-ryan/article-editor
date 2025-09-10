import React, { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

import examplePng from '@/assets/png-example.png';
import exampleJpg from '@/assets/jpg-example.jpg';
import ExampleSvg from '@/assets/svg-example.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import classes from './App.module.scss';


export const App = () => {

  const {theme, toggleTheme} = useTheme()
  

  return (
    <div className={classNames('app', {hovered: true, selected: true}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <h1>PLATFORM: {__PLATFORM__}</h1>
      <div>
        <img width={200} src={examplePng} alt='example image' />
        <img width={200} src={exampleJpg} alt='example image' />
        <ExampleSvg style={{ color: 'green' }} width={200} height={200}/>
      </div>
      <Link to={`/`}>main</Link>
      <Link to={`/about`}>about</Link>
      <Link to={`/shop`}>shop</Link>
      <div>
        Hello world
      </div>
      <Outlet />
    </div>
  )
}
