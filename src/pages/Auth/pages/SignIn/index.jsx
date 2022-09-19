import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
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
        <label>
          <span>email*</span>
          <input
            type="email"
            placeholder="Введите ваш Email"
            {...register('email', Form.Options.Email)}
          />
        </label>

        <label>
          <span>Пароль*</span>
          <input
            type="password"
            placeholder="Введите ваш пароль"
            {...register('password', Form.Options.Password)}
          />
        </label>
        <button onClick={handleSubmit(onSubmit)}>Зарегистрироваться</button>
        <Link to="/auth/signUp">Нет аккаунта?</Link>
      </form>
    </div>
  )
}
