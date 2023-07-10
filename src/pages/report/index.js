import { Flex } from "@chakra-ui/react";
import UserLayout from "../../components/layout/UserLayout";
import { ReportingGraph } from "../../components/graph";

export default function Report() {
  return(
    <UserLayout>
      <Flex>
        <ReportingGraph />
      </Flex>
    </UserLayout>
  )
}