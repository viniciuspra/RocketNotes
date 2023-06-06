import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';

import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles" 

import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])
  
  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if (tagName === "all") {
      setTagsSelected([]);
    } else {
      if (tagsSelected.includes(tagName)) {
        setTagsSelected(prevState => prevState.filter(tag => tag !== tagName));
      } else {
        setTagsSelected(prevState => [...prevState, tagName]);
      }
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)
    }

    fetchNotes()

  },[tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title={"Todos"}
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
          {
            tags && tags.map((tag) => (
              <li key={uuidv4()}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagsSelected.includes(tag.name)}
                />
              </li>
            )) 
          }
      </Menu>

      <Search>
        <Input
         placeholder="Pesquisar pelo título"
         icon={FiSearch} 
         onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {
            notes.map(note => (
              <Note
                key={uuidv4()}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}