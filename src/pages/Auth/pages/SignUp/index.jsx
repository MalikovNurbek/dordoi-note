import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from '../../../../helpers/Form'
import cls from './SignUp.module.scss'


export const SignUp = () => {
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


  return (
    <div className={cls.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Регистрация</h3>
        <FormControl
          isInvalid={errors.first_name}
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="first_name"
          >Имя</FormLabel>
          <Input
            id="first_name"
            placeholder="Введите имя"
            {...register('first_name', Form.Options.SimpleField)}
          />
          <FormErrorMessage>
            {errors.first_name && errors.first_name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.last_name}
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="last_name"
          >Фамилия</FormLabel>
          <Input
            id="last_name"
            placeholder="Введите фамилию"
            {...register('last_name', Form.Options.SimpleField)}
          />
          <FormErrorMessage>
            {errors.last_name && errors.last_name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.email}
          className="mb-3"
        >
          <FormLabel
            className="text-dark"
            htmlFor="email"
          >Email</FormLabel>
          <Input
            id="email"
            placeholder="Введите почту"
            {...register('email', Form.Options.Email)}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={errors.password}
        >
          <FormLabel
            className="text-dark"
            htmlFor="password"
          >Пароль</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Введите пароль"
            {...register('password', Form.Options.Password)}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>
        <Button variant="solid" colorScheme="telegram" onClick={handleSubmit(onSubmit)}>Зарегистрироваться</Button>

        <Button variant="link"><Link to="/auth/signin">Уже есть аккаунт?</Link></Button>
      </form>


    </div>
  )
}
