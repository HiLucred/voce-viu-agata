import { Title } from '@/components/Typography'
import { Container, Content, Item, Trigger } from './styles'

export function Accordion() {
  return (
    <Container type='single' defaultValue='item-1' collapsible>
      <Title color={'black'} weight={'bold'}>
        {'//'} FAQ
      </Title>

      <Item value='item-1'>
        <Trigger>+ Para quem é este jogo?</Trigger>
        <Content>Para todos os fãs de mistério e investigação.</Content>
      </Item>

      <Item value='item-2'>
        <Trigger>+ Qual a previsão para o lançamento?</Trigger>
        <Content>
          A presvisão de lançamento está programada para o primeiro semestre de
          2024.
        </Content>
      </Item>

      <Item value='item-3'>
        <Trigger>
          + Onde acompanhar os próximos passos do desenvolvimento do jogo?
        </Trigger>
        <Content>
          É simples! Basta seguir a nossa páginas nas redes sociais. Todas
          nossas redes são @VoceViuAgataJogo :)
        </Content>
      </Item>

      <Item value='item-4'>
        <Trigger>+ Em que plataformas eu posso jogar?</Trigger>
        <Content>PC, mac e Linux.</Content>
      </Item>

      <Item value='item-5'>
        <Trigger>+ Existe algum proposito maior com esta história?</Trigger>
        <Content>
          Sim, além de oferecer uma experiência envolvente de jogo, "Você viu
          Ágata? Um Mistério Inexplicável" tem como proposta maior mergulhar os
          jogadores em uma narrativa cativante, desafiando-os a pensar
          estrategicamente, tomar decisões impactantes e explorar o mundo
          digital de Ágata. O jogo visa criar uma conexão emocional com os
          jogadores, envolvendo-os em uma trama intrigante e levando-os a
          refletir sobre temas como mistério, segredos e a natureza humana.
        </Content>
      </Item>
    </Container>
  )
}
