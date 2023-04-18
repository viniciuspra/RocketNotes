import { Container, Form } from "./styles";
import { NoteItem } from "../../components/NoteItem";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function NewNote() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input placeholder="Título" type="text" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://github.com/Viniciuspra" />
            <NoteItem isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}