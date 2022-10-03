import { Button } from '@chakra-ui/react'
import React from 'react'
import cls from './index.module.scss'
import { FiCornerRightUp } from 'react-icons/fi'

export const ProductCard = ({ product }) => {
  const { id, title, description, count, price, product_img } = product
  return (
    <div className={cls.card}>
      <div className={cls.cardHeader}>
        <img src={product_img} alt="#" />
      </div>
      <div className={cls.cardBody}>
        <span>{title}</span>
        <span>Количество: {count}</span>
        <span>Цена: {price} сом</span>
        <div>
          <Button variant="solid" colorScheme="telegram" rightIcon={<FiCornerRightUp color="#fff"/>}>Перейти</Button>
        </div>
      </div>
    </div>
  )
}
