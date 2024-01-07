import Link from 'next/link'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function ContactForm() {
  return (
    <div className="flex h-full flex-col space-y-4">
      <p className="text-md hidden text-gray-500 sm:block">
        Você pode entrar em contato diretamente conosco via WhatsApp ou
        preencher o formulário abaixo para que possamos entrar em contato com
        você.
      </p>
      <p className="text-sm text-gray-500 sm:hidden">
        Entre em contato via WhatsApp ou preencha o formulário abaixo.
      </p>
      <Link
        href="https://wa.me/5585984069438"
        target="_blank"
        className="flex w-full justify-center rounded-md bg-green-700 p-2 text-base font-bold text-white"
      >
        Entrar em contato via <Icons.whatsapp className="m-1 h-4 w-4" />{' '}
        WhatsApp
      </Link>
      <p className="text-center">ou</p>
      <div className="flex flex-1 flex-col space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome para contato</Label>
          <Input id="name" placeholder="Digite seu nome" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Checkbox
                id="email-checkbox"
                className="h-4 w-4 border-black text-white data-[state=checked]:bg-blue"
              />
              <Label htmlFor="email-checkbox" className="whitespace-nowrap">
                Contato via e-mail
              </Label>
            </div>
            <Input id="email" placeholder="Digite seu e-mail" type="email" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Checkbox
                id="phone-checkbox"
                className="h-4 w-4 border-black text-white data-[state=checked]:bg-blue"
              />
              <Label htmlFor="phone-checkbox" className="whitespace-nowrap">
                Contato via telefone
              </Label>
            </div>
            <Input
              id="phone"
              placeholder="Digite seu número de telefone"
              type="tel"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Select>
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Selecione uma pergunta" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="question1">Pergunta 1</SelectItem>
              <SelectItem value="question2">Pergunta 2</SelectItem>
              <SelectItem value="question3">Pergunta 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 flex-col space-y-2">
          <Label htmlFor="message">Sua Pergunta</Label>
          <Textarea
            className="max-h-[300px] min-h-[100px] flex-1"
            id="message"
            placeholder="Digite sua pergunta"
          />
        </div>
        <div className="flex w-full justify-end">
          <Button className="bg-blue text-base font-bold text-white">
            Enviar mensagem
          </Button>
        </div>
      </div>
    </div>
  )
}
