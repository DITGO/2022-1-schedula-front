import { memo } from "react"
import { useSession } from "next-auth/react"
import { FaRegUser } from "react-icons/fa"
import { RiLogoutCircleFill } from "react-icons/ri"
import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  VStack
} from "@chakra-ui/react"

import { useSignOut } from "@hooks/useSignOut"
import { routes } from "@routes"

import { SideBarItem } from "./SidebarItem/SideBarItem"

export const SideBar = memo(() => {
  const { data: session } = useSession()
  const signOut = useSignOut()

  return (
    <Flex
      flexDirection="column"
      gap={2}
      width={"fit-content"}
      height="100%"
      maxHeight="calc(100vh - 8rem)" // 4rem padding 2x
      position="sticky"
      top={16}
    >
      <Heading margin="0 auto" textAlign="center" fontWeight="hairline">
        Schedula
      </Heading>
      <Divider />

      <VStack spacing={4} align="stretch">
        {routes.map((route) => (
          <SideBarItem key={route.label} {...route} />
        ))}
      </VStack>

      <Box marginTop="auto">
        <Divider marginBottom={2} />
        <Flex gap={2} justifyContent={"space-between"} alignItems={"center"}>
          <FaRegUser size={25} />
          <Text maxWidth={140} noOfLines={1}>
            {session?.user?.name ?? "Username"}
          </Text>
          <Icon
            as={RiLogoutCircleFill}
            onClick={signOut}
            fontSize={24}
            cursor="pointer"
          />
        </Flex>
      </Box>
    </Flex>
  )
})

SideBar.displayName = "SideBar"
