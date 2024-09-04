import { z } from "zod"

export const signupSchema = z.object({

    nome: z.string()
        .min(3, { message: "O nome deve ter no mínimo 3 caracteres." })
        .transform((nome) =>
            nome
                .trim()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")
        ),

    username: z.string()
        .min(3, { message: "O nome de usuário deve ter no mínimo 3 caracteres." }),

    email: z.string()
        .email({ message: "Email inválido." })
        .toLowerCase(),

    senha: z.string()
        .min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),

    confpassword: z.string()
        .min(6, { message: "Confirmação de senha inválida." })

})
.refine((data) => data.senha === data.confpassword, {
    message:"Senhas não correspondem.",
    path: ["confpassword"],
})