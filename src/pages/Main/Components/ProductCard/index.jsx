import { Button } from '@chakra-ui/react'
import React from 'react'
import cls from './index.module.scss'


export const ProductCard = ({ product }) => {
  const { id, title, description, count, price, product_img } = product
  return (
    <div className={cls.card}>
      <div className={cls.cardHeader}>
        <img src={product_img} alt="#" />
      </div>
      <div className={cls.cardBody}>
        {title}
        {count}
        <div>
          <Button variant="outline" colorScheme="telegram">Редактировать</Button>
          <Button variant="outline" colorScheme="red">Удалить</Button>

        </div>
      </div>
    </div>
  )
}
