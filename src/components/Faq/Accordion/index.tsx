import { Title } from "@/components/Typography";
import { Container, Content, Item, Trigger } from "./styles";

export function Accordion() {
  return (
    <Container type="single" defaultValue="item-1" collapsible>
      <Title color={"black"}>// FAQ</Title>
      <Item value="item-1">
        <Trigger>- Is it accessible?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-2">
        <Trigger>- Is it accessible?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-3">
        <Trigger>- Is it accessible?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-4">
        <Trigger>- Is it accessible?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>

      <Item value="item-5">
        <Trigger>- Is it accessible?</Trigger>
        <Content>Yes. It adheres to the WAI-ARIA design pattern.</Content>
      </Item>
    </Container>
  );
}
