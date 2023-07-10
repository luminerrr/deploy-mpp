import { Flex, Heading, Text } from "@chakra-ui/react";
import UserLayout from "../../components/layout/UserLayout";
import Calculation from "../../utils/calculation";

export default function Introduction() {
  Calculation()
  return (
    <UserLayout>
      <Flex direction='column' gap='4' textAlign='justify'>
        <Heading>What is CII?</Heading>
        <Text>
          The Carbon Intensity Indicator (CII) is a rating system for a vessel that the International Maritime Organization (IMO)
          has developed in early 2023.This will be a mandatory measure under MARPOL Annex VI which came into force on the 1st January 2023. 
          
          The Measure will applied to all vessel including cargo, Ro-Pax and cruise vessel above 5000 GT and trading internationally. 
          The CII determines the annual reduction factor needed to continously improve the ship's operational carbon intensity within a spesific
          rating level. The annual operational CII cahieved will need to be documented and verified against the required annual operational CII. 

          This will then enable the operational carbon intensity rating to be determined on a scale of A,B,C,D, or E, Indicating a major superior, 
          minor superior, moderate, minor inferior, or inferior performance level. The performance level will need to be recorded in the ship's (SEEMP). 
          In case ship rated D or E for three consecutive years will need to submit a correcticve action plan to show how the required index rating (C or above) 
          will be obtained. This short-term measure aims to achieve the carbon intensity reduction aims of the IMO's Initial GHG emissions strategy.

        </Text>
      </Flex>
    </UserLayout>
  );
}