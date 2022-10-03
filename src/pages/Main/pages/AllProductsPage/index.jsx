import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../../components/ProductCard'
import cls from './index.module.scss'
export const AllProductsPage = () => {
  const params = useParams()
  console.log(params)

  const products = [
    {
      id: 1,
      title: 'Фудболки турецкая',
      count: 100,
      description: 'Какой-то текст по вашему усмотрению',
      price: 300,
      product_img: 'https://images.satu.kz/172370914_w200_h200_futbolka-tsvet-goluboj.jpg',
    },
    {
      id: 2,
      title: 'Куртка серая',
      count: 63,
      description: 'Какой-то текст по вашему усмотрению',
      price: 1200,
      product_img: 'http:// redfox.kg/wp-content/uploads/forrester_5000-250x300.jpg',
    },
    {
      id: 3,
      title: 'Фудболка',
      count: 25,
      description: 'Какой-то текст по вашему усмотрению',
      price: 800,
      product_img: 'https://lining.center/upload/iblock/342/vnwttlhu6quumlz9vl210ub3l4r3mzm2.jpg',
    },
  ]


  return (
    <div className={cls.root}>
      <div className={cls.productsContainer}>
        {
          products.map(product => (
            <ProductCard product={product} key={product.id}/>
          ))
        }
      </div>
    </div>
  )
}
