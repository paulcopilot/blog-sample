import { Flex, Heading, VStack, Text, Divider } from "@chakra-ui/layout";
import React from "react";
import { Composer } from "../shared/composer";
import { Row } from "../shared/row";

export const RootRunner: React.FC = () => {
  return (
    <Flex flexDir="column" w="full" alignItems="center" p="5">
      <Heading color="blue.900" pb="0.25">
        Blob's Blog
      </Heading>
      <Text color="blue.900" pb="4">
        A blog about how we should be grateful
      </Text>
      <Composer />
      <Divider w="10rem" m="1rem" borderColor="gray.500" />
      <List />
    </Flex>
  );
};

export const List: React.FC = () => {
  return (
    <VStack spacing="3">
      <Row
        title={"Today is a new day"}
        subtitle="Today this was the best day that i've ever had in my life"
      ></Row>
      <Row
        title={"This is just so wonderful"}
        subtitle="I'm so grateful, this is great"
      ></Row>
      <Row
        title={"This is just so wonderful"}
        subtitle="I'm so grateful, this is great"
      ></Row>
    </VStack>
  );
};
