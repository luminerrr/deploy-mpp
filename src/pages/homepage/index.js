import { Flex, Heading, Text } from "@chakra-ui/react";
import UserLayout from "../../components/layout/UserLayout";

export default function Homepage() {
  return (
    <UserLayout>
      <Flex direction="column" alignItems="center" gap="4">
        <Heading>This is the homepage!</Heading>
        <Text>RAFIIIIIIIIIIIIIIIIIII</Text>
      </Flex>
    </UserLayout>
  );
}
