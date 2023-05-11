import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DialogContent, ErrorMessage, IconButton, Overlay } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";

const NewsLetterFormSchema = z.object({
  name: z.string().min(3, { message: "Insira um nome valido" }),
  email: z.string().min(3, { message: "Insira um e-mail valido" }),
});

type NewsLetterFormData = z.infer<typeof NewsLetterFormSchema>;

export function NewsLetterModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsLetterFormData>({
    resolver: zodResolver(NewsLetterFormSchema),
  });

  async function handleNewsLetterFormData(data: NewsLetterFormData) {
    try {
      await api.post("/news-letter-form", {
        name: data.name,
        email: data.email,
      });
      reset();
      alert("🔔 Obrigado por assinar nossa Newsletter! 🔔");
    } catch (err) {
      alert("🔔 Falha ao assinar. Tente novamente. 🔔");
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <DialogContent>
        <Dialog.Title>Assine nossa NewsLetter</Dialog.Title>
        <Dialog.Description>
          e fique antenado as novidades semanais sobre &quot;Você viu
          Ágata?&quot;
        </Dialog.Description>

        <form onSubmit={handleSubmit(handleNewsLetterFormData)}>
          <label>
            SEU NOME
            <input
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
          </label>
          <ErrorMessage>{errors.name && errors.name.message}</ErrorMessage>

          <label>
            SEU E-MAIL
            <input
              type="text"
              placeholder="Digite aqui seu e-mail"
              {...register("email")}
            />
          </label>
          <ErrorMessage>{errors.email && errors.email.message}</ErrorMessage>

          <button type="submit" disabled={isSubmitting}>
            ASSINAR
          </button>
        </form>

        <Dialog.Close asChild>
          <IconButton aria-label="Close">
            <Cross2Icon />
          </IconButton>
        </Dialog.Close>
      </DialogContent>
    </Dialog.Portal>
  );
}
