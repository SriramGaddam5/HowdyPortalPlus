import { Heading, ButtonGroup, Tooltip, IconButton } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import "../styles/Home.css";

function Home() {
  return (
    <div id="Body">
      <Heading p="30px">Home</Heading>
      <ButtonGroup spacing={2} p={30}>
        <Tooltip label="Schedule" rounded="lg">
          <IconButton
            href="/schedule"
            variant="ghost"
            colorScheme="blackAlpha"
            color="#500000"
            p={10}
            icon={<FaRegCalendarAlt size="50" />}
          />
        </Tooltip>
        <Tooltip label="Grades" rounded="lg">
          <IconButton
            variant="ghost"
            colorScheme="blackAlpha"
            color="#500000"
            p={10}
            icon={<HiOutlineDocumentReport size="50" />}
          />
        </Tooltip>
        <Tooltip label="Finance" rounded="lg">
          <IconButton
            variant="ghost"
            colorScheme="blackAlpha"
            color="#500000"
            p={10}
            icon={<MdAttachMoney size="50" />}
          />
        </Tooltip>
      </ButtonGroup>
    </div>
  );
}

export default Home;
