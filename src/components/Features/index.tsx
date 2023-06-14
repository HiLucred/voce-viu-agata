import Image from 'next/image'
import { Box, Container, Fita1, Fita2, Info } from './styles'
import { Paragraph, Title } from '../Typography'
import screenshot from '../../assets/screenshot.png'
import fita from '../../assets/fita-fix.png'

export function Features() {
  return (
    <Container id='features'>
      <Box>
        <Fita1>
          <Image src={fita} alt='' width={94} height={94} />
        </Fita1>
        <Fita2>
          <Image src={fita} alt='' width={94} height={94} />
        </Fita2>

        <Info>
          <Title size={'bigger'} color={'red200'} weight={'bold'}>
            Exploração digital intensa
          </Title>
          <Paragraph>
            Vasculhe o computador de Ágata, mergulhe em seus arquivos e
            diretórios para encontrar pistas cruciais.
          </Paragraph>
        </Info>
      </Box>

      <Box>
        <Fita1>
          <Image src={fita} alt='' width={94} height={94} />
        </Fita1>
        <Fita2>
          <Image src={fita} alt='' width={94} height={94} />
        </Fita2>

        <Info>
          <Title size={'bigger'} color={'red200'} weight={'bold'}>
            Quebra-cabeças desafiadores
          </Title>
          <Paragraph>
            Enfrente enigmas intrigantes ao longo do jogo, conectando
            informações dispersas para desvendar o mistério.
          </Paragraph>
        </Info>
      </Box>

      <Box>
        <Fita1>
          <Image src={fita} alt='' width={94} height={94} />
        </Fita1>
        <Fita2>
          <Image src={fita} alt='' width={94} height={94} />
        </Fita2>

        <Info>
          <Title size={'bigger'} color={'red200'} weight={'bold'}>
            Narrativa envolvente
          </Title>
          <Paragraph size={'big'}>
            Embarque em uma história cativante, cheia de reviravoltas e
            suspense, enquanto desvenda segredos ocultos.
          </Paragraph>
        </Info>
      </Box>
    </Container>
  )
}
