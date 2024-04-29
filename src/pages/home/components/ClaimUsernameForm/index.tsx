import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUserNameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUserNameFormData>()

  async function handlePreRegister(data: ClaimUserNameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handlePreRegister)}>
      <TextInput
        size="sm"
        prefix="agenda.com/"
        placeholder="seu-usuario"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        crossOrigin={undefined}
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Reservar usuário
        <ArrowRight />
      </Button>
    </Form>
  )
}
