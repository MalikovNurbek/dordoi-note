import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { AiFillHome } from 'react-icons/ai'
import { Avatar, Button } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import CreateProductModal from '../CreateProductModal'
export const Navbar = () => {
  const navigation = [
    {
      id: 0,
      to: '/',
      title: 'На главную',
      icon: <AiFillHome />,
    },
  ]
  const [isActiveCreateModal, setIsActiveCreateModal] = React.useState(false)

  return (
    <>
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
        <div>
          <Button
            variant="solid"
            colorScheme="whatsapp"
            onClick={() => setIsActiveCreateModal(true)}
            rightIcon={<AiOutlinePlus />}
          >Создать продукт</Button>
          <div className={cls.userBlock}>
            <Avatar name="Malikov Nurbek"/>
            <Link to="/user-profile">Профиль</Link>
          </div>
        </div>

      </nav>
      {
        isActiveCreateModal &&
        <CreateProductModal setIsActive={setIsActiveCreateModal} isActive={isActiveCreateModal}/>
      }

    </>

  )
}
