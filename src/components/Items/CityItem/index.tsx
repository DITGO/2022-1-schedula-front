import { useCallback } from "react"

import { DeleteButton } from "@components/ActionButtons/DeleteButton"
import { EditButton } from "@components/ActionButtons/EditButton"
import { Item } from "@components/ListItem"
import { deleteCity } from "@services/Cidades"
import { request } from "@services/request"

interface CityItemProps {
  city: City
  onEdit: (city: City) => void
  onDelete: (result: Result<ApiResponse<null>>, city: City) => void
}

export const CityItem = ({ city, onEdit, onDelete }: CityItemProps) => {
  const handleDelete = useCallback(
    async ({ id }: City) => {
      const response = await request<null>(deleteCity(id))

      onDelete?.(response, city)
    },
    [city, onDelete]
  )

  return (
    <Item<City> title={city?.name} description="">
      <Item.Actions item={city}>
        <EditButton onClick={onEdit} label={city.name} />
        <DeleteButton onClick={handleDelete} label={city.name} />
      </Item.Actions>
    </Item>
  )
}