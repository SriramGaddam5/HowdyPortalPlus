import { Heading, HStack, Text } from "@chakra-ui/react";
import "../styles/Error.css";

function Error() {
  return (
    <div id="Body">
      <Heading p={10}>Error</Heading>
      <HStack p={10} spacing="5px">
        <Text color="red.500">{window.location.pathname}</Text>
        <Text>not found</Text>
      </HStack>
    </div>
  );
}

export default Error;
