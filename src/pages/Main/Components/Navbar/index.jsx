import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { AiFillHome } from 'react-icons/ai'
import { MdCategory } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'
export const Navbar = () => {
  const navigation = [
    {
      id: 0,
      to: '/',
      title: 'Главная',
      icon: <AiFillHome />,
    },
    {
      id: 1,
      to: '/category',
      title: 'Категории',
      icon: <MdCategory />,
    },
    {
      id: 2,
      to: '/create-product',
      title: 'Создать продукт',
      icon: <BiCategory />,
    },
  ]

  return (
    <nav className={cls.root}>
      <ul>
        {
          navigation.map(({ id, to, title }) => (
            <li key={id}>
              <NavLink
                to={to}
                className={({ isActive }) => isActive ? cls.activeLink : null}
              >{title}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
