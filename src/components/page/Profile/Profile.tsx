import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { StyledMain } from './Style.Profile';

const Profile = () => {
  const name = window.localStorage.getItem('login')
  const navigate = useNavigate()

  useEffect(() => {
    if(!name) {
      navigate('/')
    }
  }, [])

  const logout = () => {
    window.localStorage.removeItem('login')
  }

  return (
    <StyledMain>
      <span>Здравствуйте, <b>{name}</b></span>
      <Link to={'/'}><button onClick={logout}>Выйти</button></Link>
    </StyledMain>
  )
}

export default Profile