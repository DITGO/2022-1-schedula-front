import { useCallback } from "react"
import { ModalProps } from "@chakra-ui/react"

import { UserForm, UserFormValues } from "@components/Forms/UserForm"
import { Modal } from "@components/Modal"
import { request } from "@services/request"
import { createUser, updateUser } from "@services/Usuarios"

interface UserModalProps extends Partial<ModalProps> {
  user?: User | undefined
  onSubmit: (result: Result<ApiResponse<User>>) => void
  isOpen: boolean
  onClose: () => void
}

export const UserModal = ({
  onClose,
  user,
  onSubmit,
  ...props
}: UserModalProps) => {
  const handleSubmit = useCallback(
    async (data: UserFormValues) => {
      console.log("DATA: ", data)

      const payload: RegisterUserPayload = {
        ...data,
        acess: data?.acess?.value
      }

      const response = await request<User>(
        user ? updateUser(user.username)(payload) : createUser(payload)
      )

      onSubmit?.(response)

      if (response.type === "error") {
        // Let hook form know that submit was not successful
        return Promise.reject(response.error?.message)
      } else {
        onClose?.()
      }
    },
    [user, onClose, onSubmit]
  )

  return (
    <Modal
      size="2xl"
      title={`${user ? "Editar" : "Novo"} Usuário`}
      onClose={onClose}
      {...props}
    >
      <UserForm defaultValues={user} onSubmit={handleSubmit} />
    </Modal>
  )
}
