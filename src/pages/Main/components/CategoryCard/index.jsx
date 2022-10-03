import React from 'react'
import cls from './index.module.scss'

export const CategoryCard = ({ category, onClick }) => {
  const { id, type, category_name, categoryImg, description } = category

  const totalDes = description.reduce((prev, current, index, arr) => {
    if (index === 0) {
      return `${prev} ${current}`
    }
    return `${prev} / ${current}`
  }, '')


  return (
    <div className={cls.card} onClick={onClick}>
      <div className={cls.cardHeader}>
        <img src={categoryImg && categoryImg} alt="#" />
      </div>
      <div className={cls.cardBody}>
        <span onClick={onClick}>{category_name}</span>
        <span className={cls.description}>{totalDes}</span>
      </div>
    </div>
  )
}

