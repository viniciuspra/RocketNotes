import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Links, Content } from './styles';

import { api } from '../../services/api';

import { v4 as uuidv4 } from 'uuid';

import { Tag } from '../../components/Mark';
import { Header } from '../../Components/Header';
import { Button } from '../../Components/Button'
import { Section } from '../../Components/Section';
import { ButtonText } from '../../Components/ButtonText';


export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Tem certeza de que deseja excluir esta nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Content>
            <ButtonText
             title="Excluir Nota" 
             onClick={handleRemove}
            />

            <h1>{data.title}</h1>
            <p>
              {data.description}
            </p>
            {
              data.links &&
              <Section title="Links úteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={uuidv4()}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }
            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag
                      key={uuidv4()}
                      title={tag.name}
                    />
                  ))
                }
              </Section>
            }
            <Button
             title="Voltar" 
             onClick={handleBack}
            />
          </Content>
        </main>
      }
    </Container>
  )
};