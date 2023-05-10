import { useForm } from "react-hook-form";
import { Paragraph, Title } from "../Typography";
import {
  Button,
  Container,
  ErrorMessage,
  Field,
  Input,
  TextArea,
} from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";

const JoinUsFormSchema = z.object({
  name: z.string().min(3, { message: "Insira um nome valido." }),
  email: z.string().min(3, { message: "Insira um e-mail valido." }),
  message: z.string().min(3, { message: "Insira uma mensagem valida." }),
});

type JoinUsFormData = z.infer<typeof JoinUsFormSchema>;

export function JoinUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JoinUsFormData>({
    resolver: zodResolver(JoinUsFormSchema),
  });

  async function handleSubmitJoinUsForm(data: JoinUsFormData) {
    try {
      await api.post("/contact-form", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      reset();
      alert("🔔 E-mail enviado com sucesso! 🔔");
      console.log("🔔 E-mail enviado com sucesso! 🔔");
    } catch (err) {
      alert("🔔 Falha ao enviar o e-mail. Tente novamente. 🔔");
      console.log("🔔 Falha ao enviar o e-mail. Tente novamente. 🔔");
    }
  }

  return (
    <Container id="join-us">
      <Title size={"bigger"} color={"red200"}>
        DEIXE SUA MARCA NA HISTÓRIA DE ÁGATA
      </Title>
      <Paragraph color={"white"}>
        PREENCHA OS CAMPOS ABAIXO E DEIXE SUA MENSAGEM ETERNIZADA NA CAIXA DE
        ENTRADA DO E-MAIL DE ÁGATA.
      </Paragraph>

      <form onSubmit={handleSubmit(handleSubmitJoinUsForm)}>
        <Field>
          <Title as={"h3"}>SEU NOME</Title>
          <Input
            type="text"
            placeholder="Digite aqui seu nome..."
            {...register("name")}
          />
        </Field>
        <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>

        <Field>
          <Title as={"h3"}>SEU E-MAIL</Title>
          <Input
            type="text"
            placeholder="Digite aqui seu e-mail..."
            {...register("email")}
          />
        </Field>
        <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>

        <Field>
          <Title as={"h3"}>SUA MENSAGEM ETERNIZADA</Title>
          <TextArea
            placeholder="Digite aqui sua mensagem..."
            {...register("message")}
          />
        </Field>
        <ErrorMessage>{errors.message && errors.message.message}</ErrorMessage>

        <Button type="submit" disabled={isSubmitting}>
          ENVIAR
        </Button>
      </form>
    </Container>
  );
}
