import Image from 'next/image'
import { Title } from '../Typography'
import { Container, Content, Description, Text, Notbook } from './styles'
import notbook from '../../assets/notbook.png'

export function About() {
  return (
    <Container id='pitch'>
      <Content>
        <Text>
          <Title size={'bigger'}>
            VOCÊ ACHOU O COMPUTADOR DA<br></br>{' '}
            <span>GAROTA DESAPARECIDA.</span>
            <br></br>
            VASCULHE ENTRE OS DIRETÓRIOS E DESCUBRA <b>SUA HISTÓRIA.</b>
          </Title>

          <Description>
            <Title>
              Adentre o mundo desconhecido do desaparecimento de Ágata. Explore
              seu computador, desvende segredos ocultos e mergulhe em um enigma
              que instiga. A verdade aguarda sua descoberta. Desvenda o
              mistério.
            </Title>
          </Description>
        </Text>

        <Notbook>
          <Image src={notbook} alt='' width={700} />

          <a href='https://gyazo.com/5456d0261a61851bd0e45b7a7a202e4f'>
            <video width='510' muted autoPlay loop>
              <source
                src='https://i.gyazo.com/5456d0261a61851bd0e45b7a7a202e4f.mp4'
                type='video/mp4'
              />
            </video>
          </a>
        </Notbook>
      </Content>
    </Container>
  )
}
