import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout} from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/viniciuspra.png" alt="Foto do usuario" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Vinicius Cascaes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}