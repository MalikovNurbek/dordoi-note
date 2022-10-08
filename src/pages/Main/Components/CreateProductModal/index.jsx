import React from 'react'
import cls from './index.module.scss'
import { IoMdClose } from 'react-icons/io'
import { Button, FormControl, FormErrorMessage, FormLabel, Input,
  InputGroup, InputLeftElement, Select, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Form } from '../../../../helpers/Form'
import { required } from '../../../../helpers/Form/options'

const CreateProductModal = ({ setIsActive, isActive }) => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  const closeModal = () => {
    setIsActive(false)
  }

  React.useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden'
    }
  }, [isActive, setIsActive, closeModal])

  return (
    <div className={cls.root}>
      <div className={cls.modalOverlay} onClick={closeModal}/>
      <IoMdClose size={40} onClick={closeModal}/>
      <div className={cls.content}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl my={5}>
            <FormLabel>Название продукта*</FormLabel>
            <Input
              variant="filled" placeholder="Введите название продукта"
              {...register('title', Form.Options.SimpleField)}
            />
            <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
          </FormControl>
          <FormControl my={5}>
            <FormLabel>Категория продукта*</FormLabel>
            <Select
              variant="filled"
              placeholder="Выберите категорию"
              {...register('category', { required })}
            >
              <option value="outerwear">Верхняя одежда</option>
              <option value="underwear">Нижняя одежда</option>
              <option value="hats">головные уборы</option>
              <option value="shoes">Обувь</option>
            </Select>
          </FormControl>

          <FormControl my={5}>
            <FormLabel>Количество продукта*</FormLabel>
            <Input
              variant="filled"
              type="number"
              placeholder="Введите количество продукта"
              {...register('count', { required })}
            />
            <FormErrorMessage>{errors.count && errors.count.message}</FormErrorMessage>

          </FormControl>

          <FormControl my={5}>
            <FormLabel>Цена продукта*</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="C"
              />
              <Input
                variant="filled"
                type="number"
                placeholder="Enter amount"
                {...register('price', { required })}
              />
            </InputGroup>
            <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>

          </FormControl>

          <FormControl my={5}>
            <FormLabel>Изображение продукта*</FormLabel>
            <Input
              variant="filled"
              type="file"
              placeholder="Введите количество продукта"
              {...register('image', { required })}
            />
            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>

          </FormControl>

          <Button
            variant="solid"
            colorScheme="whatsapp"
            onClick={handleSubmit(onSubmit)}
          >Создать</Button>
        </form>
      </div>
    </div>
  )
}

export default CreateProductModal
