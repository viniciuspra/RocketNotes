import { Container, Links } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Tags } from '../../components/tags';


export function Details () {
  return (
    <Container>
      <Header /> 

      <Section title="Links úteis">
        <Links>
          <li><a href="#" target='_blank'>https://github.com/Viniciuspra</a></li>
          <li><a href="#" target='_blank'>https://github.com/Viniciuspra</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tags title="Express"/>
        <Tags title="NodeJs"/>
      </Section>

      <Button title="Voltar" />
    </Container>
  )
};