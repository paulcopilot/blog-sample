import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { RootRunner } from "./list/list";

function App() {
  return (
    <ChakraProvider>
      <RootRunner />
    </ChakraProvider>
  );
}

export default App;
