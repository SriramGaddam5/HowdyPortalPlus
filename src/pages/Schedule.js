import { Heading, Grid, GridItem } from "@chakra-ui/react";
import "../styles/Schedule.css";

function Schedule() {
  return (
    <div id="Body">
      <Heading p={10}>Schedule</Heading>
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        p={10}>
        <GridItem colSpan={1} rowSpan={3} bg="#3C0000" />
        <GridItem colSpan={1} rowSpan={3} bg="#003C71" />
        <GridItem colSpan={1} rowSpan={3} bg="#5B6236" />
        <GridItem colSpan={1} rowSpan={3} bg="#744F28" />
        <GridItem colSpan={1} rowSpan={3} bg="#998542" />
      </Grid>
    </div>
  );
}

export default Schedule;
