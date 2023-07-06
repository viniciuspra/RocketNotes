import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";

import { ButtonText } from "../../Components/ButtonText";
import { NoteItem } from "../../Components/NoteItem";
import { TextArea } from "../../Components/TextArea";
import { Section } from "../../Components/Section";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";

import { api } from "../../services/api";

export function NewNote() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if(!title) {
      return alert("Você precisa adicionar um título antes de salvar a nota!")
    }

    if(newLink) {
      return alert("Lembre-se de adicionar o novo LINK no +, se desejar, antes de salvar a nota.")
    }

    if(newTag) {
      return alert("Lembre-se de adicionar o novo MARCADOR no +, se desejar, antes de salvar a nota.")
    }

    await api.post('/notes', {
      title,
      description,
      tags,
      links
    })

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <ButtonText
             title="Voltar"
             onClick={handleBack}
            />
          </header>

          <Input 
            placeholder="Título" 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea 
            placeholder="Observações" 
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem
                isNew
                placeholder="Novo marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />

            </div>
          </Section>

          <Button
           title="Salvar" 
           onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}