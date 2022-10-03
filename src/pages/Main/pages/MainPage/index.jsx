import cls from './MainPage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { BsPlusSquareDotted } from 'react-icons/bs'
export const MainPage = () => {
  const navigate = useNavigate()

  const { isOpen, onOpen, onClose } = useDisclosure()

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

  const onSubmit = () => {
    alert('Добавлено!')
    onClose()
  }

  return (
    <>
      <div className={cls.root}>
        <SimpleGrid minChildWidth="150px" spacing="30px">
          <Box
            className={cls.stockBlock}
            bg="telegram.500"
            height="80px"
            onClick={onOpen}
          >
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
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Добавить склад</ModalHeader>
          <ModalBody>
            <FormControl my="2">
              <FormLabel htmlFor="stock">Название склада</FormLabel>
              <Input
                id="stock"
                placeholder="Введите название склада"
              />
            </FormControl>
            <FormControl my="2">
              <FormLabel htmlFor="address">Адрес</FormLabel>
              <Input
                id="address"
                placeholder="Введите адрес"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Закрыть
            </Button>
            <Button
              variant="solid"
              colorScheme="telegram"
              onClick={onSubmit}
            >Добавить</Button>
            <ModalCloseButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
