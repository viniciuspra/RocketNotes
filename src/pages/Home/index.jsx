import { useEffect, useState } from "react";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles" 

import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";

import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])

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

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags')
      setTags(response.data)
    }

    fetchTags()
  }, [])

  const uniqueTags = [...new Set(tags.map(tag => tag.name.toLowerCase()))];

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
            uniqueTags && uniqueTags.map((tagName, index) => (
              <li key={String(index)}>
                <ButtonText
                  title={tagName}
                  onClick={() => handleTagSelected(tagName)}
                  isActive={tagsSelected.includes(tagName)}
                />
              </li>
            )) 
          }
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note data={{title: 'React Modal', tags: [{id: '1', name:'React'}, {id: '2', name: 'Express'}]}}/>  
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}