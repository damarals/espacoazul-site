import { z } from 'zod'

export const usercodeSchema = z.string().superRefine((v, ctx) => {
  if (!/^[0-9]{5}$/.test(v)) {
    ctx.addIssue({
      code: 'custom',
      message: 'O código de registro do usuário é um número de 5 dígitos.',
    })
  }
  return true
})

export const passwordSchema = z
  .string()
  .min(6, 'A senha deve ter pelo menos 6 caracteres')
  .max(50, 'A senha deve ter no máximo 50 caracteres')
  .superRefine((v, ctx) => {
    if (!/[a-z]/.test(v)) {
      ctx.addIssue({
        code: 'custom',
        message: 'A senha deve conter pelo menos uma letra minúscula.',
      })
    }
    if (!/[A-Z]/.test(v)) {
      ctx.addIssue({
        code: 'custom',
        message: 'A senha deve conter pelo menos uma letra maiúscula.',
      })
    }
    if (!/[0-9]/.test(v)) {
      ctx.addIssue({
        code: 'custom',
        message: 'A senha deve conter pelo menos um número.',
      })
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(v)) {
      ctx.addIssue({
        code: 'custom',
        message: 'A senha deve conter pelo menos um caractere especial.',
      })
    }
    return true
  })

export const loginSchema = z.object({
  usercode: usercodeSchema,
  password: passwordSchema,
})
export type LoginSchema = z.infer<typeof loginSchema>
