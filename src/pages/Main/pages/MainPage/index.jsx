import cls from './MainPage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { BsPlusSquareDotted } from 'react-icons/bs'
export const MainPage = () => {
  const navigate = useNavigate()

  const goToSingleStock = (id) => navigate(`/stocks/${id}`)
  const stocks = [
    {
      id: 0,
      title: 'Дордой',
    },
    {
      id: 1,
      title: 'Ош Базар',
    },
    {
      id: 2,
      title: 'Дордой №2',
    },
  ]
  return (
    <div className={cls.root}>
      <SimpleGrid minChildWidth="150px" spacing="30px">
        <Box
          className={cls.stockBlock}
          bg="telegram.500"
          height="80px">
          <h4>Добавить склад</h4>
          <BsPlusSquareDotted/>
        </Box>
        {
          stocks.map(({ id, title }) => (
            <Box
              key={id}
              bg="telegram.500"
              height="80px"
              className={cls.stockBlock}
              onClick={() => goToSingleStock(id)}
            >{title}</Box>
          ))
        }

      </SimpleGrid>

      <div style={{ height: '100vh' }}>

      </div>
    </div>
  )
}
