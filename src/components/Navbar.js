import {
  Flex,
  Link,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tooltip,
  Center,
  ButtonGroup,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoNotificationsOutline } from "react-icons/io5";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div id="Navbar">
      <Flex
        px={20}
        py={5}
        bg="#500000"
        color="white"
        fontWeight="bold"
        shadow="sm">
        <Tooltip label="Home page" rounded="lg">
          <Link
            href="/"
            _hover={{ color: "#d1d1d1", transform: "scale(0.99)" }}
            _active={{ color: "#a7a7a7", transform: "scale(1.01)" }}
            fontSize="xl">
            Howdy
          </Link>
        </Tooltip>
        <Spacer />
        <Center>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaSearch color="#a7a7a7" />
            </InputLeftElement>
            <Input bg="white" color="black" placeholder="Search" w={500} />
          </InputGroup>
        </Center>
        <Spacer />
        <ButtonGroup spacing={2}>
          <Menu>
            <Tooltip label="Profile" rounded="lg">
              <MenuButton
                as={IconButton}
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
                p={5}
                icon={<CgProfile size="30" />}
              />
            </Tooltip>
            <MenuList color="black">
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <Tooltip label="Notifications" rounded="lg">
              <MenuButton
                as={IconButton}
                variant="ghost"
                colorScheme="whiteAlpha"
                color="white"
                p={5}
                icon={<IoNotificationsOutline size="30" />}
              />
            </Tooltip>
            <MenuList color="black">
              <MenuItem>Notifications</MenuItem>
              <MenuItem>Alerts</MenuItem>
              <MenuItem>Holds</MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Flex>
    </div>
  );
}

export default Navbar;
