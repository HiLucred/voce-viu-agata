import { Title } from "@/components/Typography";
import { Container, Content, Item, Trigger } from "./styles";

export function Accordion() {
  return (
    <Container type="single" defaultValue="item-1" collapsible>
      <Title color={"black"} weight={"bold"}>
        {"//"} FAQ
      </Title>

      <Item value="item-1">
        <Trigger>+ Para quem é este jogo?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-2">
        <Trigger>+ Qual a previsão para o lançamento?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-3">
        <Trigger>+ Onde acompanhar os próximos passos do desenvolvimento do jogo?</Trigger>
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          debitis rerum inventore aperiam? Dolore, mollitia! Laborum, placeat ut
          ipsa veritatis ipsam natus nesciunt obcaecati iusto repellat quasi
          mollitia sapiente architecto.
        </Content>
      </Item>

      <Item value="item-4">
        <Trigger>+ Em que plataformas eu posso jogar?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-5">
        <Trigger>+ Existe algum proposito maior com esta história?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>
    </Container>
  );
}
