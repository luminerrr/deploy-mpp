import { Box, Flex, Image, Select, SimpleGrid } from "@chakra-ui/react";
import UserLayout from "../../components/layout/UserLayout";
import dharmaFerryImg from "../../components/images/dharma-ferry-8.jpg";
import dharmaKencanaImg from "../../components/images/dharma-kencana-9.jpg";
import { CIIGraph } from "../../components/graph";
import { useEffect, useState } from "react";
import useShipStore from "../../store/useShipStore";

export default function Monitor() {
  const { ship, setShip, fetchData } = useShipStore((state) => ({
    ship: state.ship,
    setShip: state.setShip,
    fetchData: state.fetchData
  }));


  return (
    <UserLayout>
      <Flex direction="column">
        <SimpleGrid columns={2}>
          <Flex direction="column" gap="32px">
            <Select onChange={(e) => setShip(e)}>
              <option value="ferry">KM Dharma Ferry VIII</option>
              <option value="kencana">KM Dharma Kencana IX</option>
            </Select>
            <Image
              src={ship === "ferry" ? dharmaFerryImg : dharmaKencanaImg}
              borderRadius="8px"
              w="700px"
            />
          </Flex>
          <Box>
            <CIIGraph />
          </Box>
        </SimpleGrid>

        {/* </Flex> */}
      </Flex>
    </UserLayout>
  );
}
