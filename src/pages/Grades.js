import {
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import "../styles/Grades.css";

function Grades() {
  return (
    <div id="Body">
      <Heading p={10}>Grades</Heading>
      <StatGroup p={10}>
        <Stat>
          <StatLabel>GPA</StatLabel>
          <StatNumber>3.75</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            10.25%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Attendance</StatLabel>
          <StatNumber>94%</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            5.35%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </div>
  );
}

export default Grades;
