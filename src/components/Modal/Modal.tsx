import {
  Heading,
  Modal as ModalContainer,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps as ChakraModalProps
} from "@chakra-ui/react"

export interface ModalProps extends ChakraModalProps {
  title: string
  children: React.ReactNode
}

export const Modal = ({ children, title, ...props }: ModalProps) => {
  return (
    <ModalContainer {...props}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(16px) hue-rotate(10deg)"
      />
      <ModalContent
        bg="blackAlpha.600"
        backdropFilter="blur(10px)"
        color="white"
      >
        <ModalCloseButton />
        <ModalHeader
          textAlign="center"
          borderTopRadius="md"
          bg="blackAlpha.600"
          boxShadow="lg"
        >
          <Heading fontSize="2xl" color="white" fontWeight="semibold">
            {title}
          </Heading>
        </ModalHeader>

        <ModalBody p={[6, 8, 10, 12]} bg="blackAlpha.200">
          {children}
        </ModalBody>
      </ModalContent>
    </ModalContainer>
  )
}
