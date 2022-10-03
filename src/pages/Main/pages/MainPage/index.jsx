import cls from './MainPage.module.scss'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

export const MainPage = () => {
  const navigate = useNavigate()

  const {
    register,
    formState,
    handleSubmit,
  } = useForm()

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

  const [containers, setContainers] = React.useState([])

  const onSubmit = (data) => {
    onClose()
    setContainers(prev => [...prev, data])
  }

  const deleteStock = (containerIndex) => {
    const isDelete = confirm('Вы точно хотите удалить?')

    if (isDelete) {
      const newContainers = containers.filter((item, index) => index !== containerIndex)
      setContainers(newContainers)
    }

    return
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

        <SimpleGrid
          gridTemplateColumns="repeat(4, 1fr)"
          gap="30px"
          my="10"
        >
          {
            containers.length ? containers.map(({ stock, address }, index) => (
              <Box
                key={index}
                p="5"
                border="1px solid gainsboro"
                borderRadius="6px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <div>
                  <Text fontSize="2xl">{stock}</Text>
                  <Text
                    my="2"
                    fontSize="xl"
                  >{address}</Text>
                  <Button
                    variant="solid"
                    colorScheme="telegram"
                    onClick={() => deleteStock(index)}
                  >
                    Delete
                  </Button>
                </div>
              </Box>
            )) : <h2>Pusto</h2>
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
                {...register('stock', {
                  required: true,
                  minLenght: {
                    value: 3,
                    message: 'Не более 3 символо',
                  },
                })}
              />
            </FormControl>
            <FormControl my="2">
              <FormLabel htmlFor="address">Адрес</FormLabel>
              <Input
                id="address"
                placeholder="Введите адрес"
                {...register('address', {
                  required: true,
                  minLenght: {
                    value: 3,
                    message: 'Не более 3 символо',
                  },
                })}
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
              onClick={handleSubmit(onSubmit)}
            >Добавить</Button>
            <ModalCloseButton />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
