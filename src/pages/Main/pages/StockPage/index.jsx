import React from 'react'
import cls from './index.module.scss'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CategoryCard } from '../../components/CategoryCard'

export const StockPage = () => {
  const { stockid } = useParams()
  const navigate = useNavigate()

  const categoryes = [
    {
      id: 0,
      category_name: 'Верхняя одежда',
      type: 'outerwear',
      description: ['Куртки', 'Фудболки', 'Майки', 'Пиджаки'],
      categoryImg: 'https://www.pngrepo.com/png/261035/512/jacket.png',
    },
    {
      id: 1,
      category_name: 'Нижняя одежда',
      type: 'underwear',
      description: ['Брюки', 'Нижнее белье'],
      categoryImg: 'https://cdn-icons-png.flaticon.com/512/2793/2793894.png',
    },
    {
      id: 2,
      category_name: 'головные уборы',
      type: 'hats',
      description: ['Кепки', 'Шапочки', 'Шляпы'],
      categoryImg: 'https://cdn-icons-png.flaticon.com/512/2806/2806186.png',
    },
    {
      id: 3,
      category_name: 'Обувь',
      type: 'shoes',
      description: ['Туфли', 'Кроссовки', 'Шлёпки'],
      categoryImg: 'https://cdn-icons-png.flaticon.com/512/5479/5479005.png',
    },
    {
      id: 4,
      category_name: 'Носки',
      type: 'socks',
      description: ['Носки', 'Лосины', 'Гетры'],
      categoryImg: 'https://o.remove.bg/downloads/18b5d3e2-2195-4355-8bb8-1f4a05bcaeda/8154-removebg-preview.png',
    },
  ]

  const goToCategory = (type) => navigate(`/stocks/${stockid}/${type}`)

  return (
    <div className={cls.stockContainer}>
      {
        categoryes.map(category => (
          <CategoryCard category={category} key={category.id} onClick={() => goToCategory(category.type)}/>
        ))
      }
    </div>
  )
}
