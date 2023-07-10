import { Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function SidebarChildren({ sidebarData, index }) {
  const navigate = useNavigate();

  return (
    <Flex
      border="1px solid"
      flexDir="column"
      alignItems="center"
      w="60"
      _hover={{ cursor: "pointer" }}
      onClick={() => navigate(sidebarData.url)}
    >
      <Heading>{index}</Heading>
      <Text>{sidebarData.name}</Text>
    </Flex>
  );
}
