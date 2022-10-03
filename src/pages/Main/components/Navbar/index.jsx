import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { AiFillHome } from 'react-icons/ai'
import { MdCategory } from 'react-icons/md'
import { BiCategory } from 'react-icons/bi'
import { Avatar } from '@chakra-ui/react'

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
      to: '/create-product',
      title: '+Создать продукт',
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

      <div className={cls.userBlock}>
        <Avatar name="Malikov Nurbek"/>
        <Link to="/user-profile">Профиль</Link>
      </div>
    </nav>
  )
}
