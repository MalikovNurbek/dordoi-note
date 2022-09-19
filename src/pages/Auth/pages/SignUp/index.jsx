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
        <label>
          <span>Имя*</span>
          <input
            type="text"
            placeholder="Введите ваше имя"
            {...register('first_name', Form.Options.SimpleField)}
          />
        </label>

        <label>
          <span>Фамилия*</span>
          <input
            type="text"
            placeholder="Введите вашу Фамилию"
            {...register('last_name', Form.Options.SimpleField)}
          />
        </label>

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
        <Link to="/auth/signin">Уже есть аккаунт?</Link>
      </form>
    </div>
  )
}
