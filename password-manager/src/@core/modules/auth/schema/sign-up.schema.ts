import {z} from 'zod'

export const signUpSchema = z.object({
    name: z
        .string({
            error: 'O nome precisa ser um texto.',
        })
        .min(3, {error: "Digite um nome com ao menos 3 letras."})
        .nonempty({error: "Digite um nome válido."}),


    email: z
    .email({
        error: 'O email precisa ser válido.',
    })
    .nonempty({error: "O email é obrigatório."}),


    password: z.string({
        error: 'Digite uma senha.',
    })
    .min(8, {error: "Digite uma senha com ao menos 8 caracteres."}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .nonempty({error: "A senha é obrigatória."}),


    confirmPassword: z.string({
        error: 'Digite uma senha de confirmação.',
    })
    .min(8, {error: "Digite uma senha de confirmação com ao menos 8 caracteres."}).regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .nonempty({error: "A confirmação de senha é obrigatória."}),



}).refine((data) => data.password === data.confirmPassword, {
    error: 'As senhas não coincidem.',
    path: ['confirmPassword']

    
}).transform((data) => ({
    name: data.name,
    email: data.email,
    password: data.password,
}));