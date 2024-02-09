import {
  Heading,
  ButtonGroup,
  Tooltip,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import "../styles/Home.css";

function Home() {
  return (
    <div id="Body">
      <Heading p={10}>Home</Heading>
      <ButtonGroup spacing={2} p={5}>
        <Tooltip label="Schedule" rounded="lg">
          <IconButton
            as="a"
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
            as="a"
            href="/grades"
            variant="ghost"
            colorScheme="blackAlpha"
            color="#500000"
            p={10}
            icon={<HiOutlineDocumentReport size="50" />}
          />
        </Tooltip>
        <Tooltip label="Finances" rounded="lg">
          <IconButton
            as="a"
            href="/finances"
            variant="ghost"
            colorScheme="blackAlpha"
            color="#500000"
            p={10}
            icon={<MdAttachMoney size="50" />}
          />
        </Tooltip>
      </ButtonGroup>
      <HStack p={10}>
        <Card m={10} shadow="2xl" w="40%">
          <CardHeader>
            <Heading size="md">Quick Report</Heading>
          </CardHeader>
          <CardBody p={10}>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading>
                <Text pt="2" fontSize="sm">
                  View a summary of all your grades over the last month.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Overview
                </Heading>
                <Text pt="2" fontSize="sm">
                  Check out the overview of your schedule.
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Analysis
                </Heading>
                <Text pt="2" fontSize="sm">
                  See a detailed analysis of all your finances.
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        <Card m={10} shadow="2xl" w="40%">
          <CardHeader>
            <Heading size="md">Campus News</Heading>
          </CardHeader>
          <CardBody p={10}>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Clubs
                </Heading>
                <Text pt="2" fontSize="sm">
                  TAGD meeting this Thursday at 7:30 pm at ARCC 307
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Sports
                </Heading>
                <Text pt="2" fontSize="sm">
                  Football game this Saturday at 2:00 pm at the stadium
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Events
                </Heading>
                <Text pt="2" fontSize="sm">
                  VIZ Art Show this Friday at 6:00 pm at the Art Gallery
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </HStack>
    </div>
  );
}

export default Home;
