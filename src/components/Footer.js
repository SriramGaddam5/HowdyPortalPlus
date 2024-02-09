import { Flex, Link, Spacer, Tooltip } from "@chakra-ui/react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div id="Footer">
      <Flex p={5} mt={10} bg="#500000" color="white" gap="5">
        <Spacer />
        <Tooltip label="Texas A&M" rounded="lg">
          <Link
            href="https://www.tamu.edu"
            isExternal
            p="1"
            _hover={{ color: "blue.50", transform: "scale(0.99)" }}
            _active={{ color: "blue.100", transform: "scale(1.01)" }}>
            Texas A&M University at College Station
          </Link>
        </Tooltip>
        <Spacer />
      </Flex>
    </div>
  );
}

export default Footer;
