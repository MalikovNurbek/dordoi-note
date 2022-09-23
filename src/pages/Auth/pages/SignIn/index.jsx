import { Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import { Form } from '../../../../helpers/Form'
import cls from './SignIn.module.scss'

export const SignIn = () => {
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
        <h3>Авторизация</h3>

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
        <Button variant="link" ><Link to="/auth/signUp">Нет аккаунта?</Link></Button>
      </form>
    </div>
  )
}
