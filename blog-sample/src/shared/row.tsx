import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export type RowProps = {
  title: string;
  subtitle: string;
};
export const Row: React.FC<RowProps> = ({ title, subtitle }) => {
  return (
    <Flex
      borderColor="blue.500"
      borderWidth="1px"
      flexDir="column"
      padding="5"
      borderRadius="lg"
      bgColor="blue.50"
      w="xl"
    >
      <Text fontWeight="bold">{title}</Text>
      <Text>{subtitle}</Text>
    </Flex>
  );
};
