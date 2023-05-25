import { useState } from "react";
import { useAuth } from "../../hooks/auth"

import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  const { user } = useAuth()
  const { name, setName } = useState(user.name)
  const { email, setEmail } = useState(user.email)
  const { oldPassword, setOldPassword } = useState('')
  const { newPassword, setNewPassword } = useState('')

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/viniciuspra.png" alt="Foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser} 
          value={name} />
        <Input 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          value={email}/>
        <Input 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} />
        <Input 
          placeholder="Nova senha" 
          ype="password" 
          icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}