import { z } from "zod"

export const searchSchema = z.object({
    title: z.string()
        .nonempty({ message: "Pesquise por um título" })
        .refine(value => !/^\s*$/.test(value), {
            message: "Pesquise por um título"
        })
})

/* refine(value => !/^\s*$/.test(value)) testa se há apenas espaço na espaço e
     está negando para que não deixe ter apenas espaço */