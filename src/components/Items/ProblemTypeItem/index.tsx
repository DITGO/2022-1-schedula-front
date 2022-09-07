import { useCallback } from "react"

import { DeleteButton } from "@components/ActionButtons/DeleteButton"
import { EditButton } from "@components/ActionButtons/EditButton"
import { Item } from "@components/ListItem"
import { deleteProblemType } from "@services/Problemas"
import { request } from "@services/request"

interface ProblemTypeItemProps {
  problemType: TipoProblema
  onEdit: (problemType: TipoProblema) => void
  onDelete: (
    result: Result<ApiResponse<null>>,
    problemType: TipoProblema
  ) => void
}

export const ProblemTypeItem = ({
  problemType,
  onEdit,
  onDelete
}: ProblemTypeItemProps) => {
  const handleDelete = useCallback(
    async ({ id }: TipoProblema) => {
      const response = await request<null>(deleteProblemType(id))

      onDelete?.(response, problemType)
    },
    [problemType, onDelete]
  )

  return (
    <Item<TipoProblema>
      title={problemType?.name}
      description={problemType?.description}
    >
      <Item.Actions item={problemType}>
        <EditButton onClick={onEdit} label={problemType.name} />
        <DeleteButton onClick={handleDelete} label={problemType.name} />
      </Item.Actions>
    </Item>
  )
}