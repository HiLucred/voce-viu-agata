import { Paragraph, Title } from "../Typography";
import { Button, Container, Field, Input, TextArea } from "./styles";

export function JoinUs() {
  return (
    <Container>
      <Title size={"bigger"} color={"red200"}>
        DEIXE SUA MARCA NA HISTÓRIA DE ÁGATA
      </Title>
      <Paragraph color={"white"}>
        PREENCHA OS CAMPOS ABAIXO E DEIXE SUA MENSAGEM ETERNIZADA NA CAIXA DE
        ENTRADA DO E-MAIL DE ÁGATA.
      </Paragraph>

      <form>
        <Field>
          <Title as={"h3"}>SEU NOME</Title>
          <Input type="text" placeholder="Digite aqui seu nome..." />
        </Field>

        <Field>
          <Title as={"h3"}>SEU E-MAIL</Title>
          <Input type="text" placeholder="Digite aqui seu e-mail..." />
        </Field>

        <Field>
          <Title as={"h3"}>SUA MENSAGEM ETERNIZADA</Title>
          <TextArea placeholder="Digite aqui sua mensagem..." />
        </Field>

        <Button>ENVIAR</Button>
      </form>
    </Container>
  );
}
