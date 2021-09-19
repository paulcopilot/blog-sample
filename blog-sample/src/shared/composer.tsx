import React from "react";
import { Button, Flex, Input, Spacer, Textarea } from "@chakra-ui/react";

export const Composer: React.FC = () => {
  return (
    <Flex flexDir="column" w="xl" borderWidth="1px" bgColor="gray.50" p="5">
      <Input placeholder="Title" mb="3" bgColor="white"></Input>
      <Textarea
        placeholder="Here is a sample placeholder"
        mb="3"
        bgColor="white"
      />
      <Flex>
        <Spacer />
        <Button mr="5">Cancel</Button>
        <Button colorScheme="blue">Save</Button>
      </Flex>
    </Flex>
  );
};
