import type { ThemingProps } from "@chakra-ui/react"

export enum CHAMADO_STATUS {
  "pending" = "Pendente",
  "in_progress" = "Em andamento",
  "not_solved" = "Não resolvido",
  "outsourced" = "Terceirizado",
  "solved" = "Resolvido"
}

export enum CHAMADO_PRIORITY {
  "low" = "Baixa",
  "normal" = "Normal",
  "high" = "Alta",
  "urgent" = "Urgente"
}

export const statusColor = (
  status: keyof typeof CHAMADO_STATUS | undefined
) => {
  switch (status) {
    case "pending":
      return "yellow.500"

    case "in_progress":
      return "blue.400"

    case "not_solved":
      return "gray.400"

    case "solved":
      return "green.400"

    case "outsourced":
      return "purple.300"

    default:
      return "red"
  }
}

export const priorityColorMap = (
  priority: keyof typeof CHAMADO_PRIORITY | undefined
): ThemingProps["colorScheme"] => {
  switch (priority) {
    case "low":
      return "blackAlpha"

    case "normal":
      return "gray"

    case "high":
      return "yellow"

    case "urgent":
      return "red"

    default:
      return "white"
  }
}
