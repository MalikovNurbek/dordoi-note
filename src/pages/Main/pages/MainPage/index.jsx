import cls from './MainPage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MainPage = () => {
  const navigate = useNavigate()
  const goToAuth = () => navigate('/auth/signin')
  return (
    <div className={cls.root}>
      <h1>Страница склада</h1>
    </div>
  )
}
