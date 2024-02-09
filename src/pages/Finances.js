import {
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import "../styles/Finances.css";

function Finances() {
  return (
    <div id="Body">
      <Heading p={10}>Finances</Heading>
      <StatGroup p={10}>
        <Stat>
          <StatLabel>Scholarship</StatLabel>
          <StatNumber>$5,000</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            5.00%
          </StatHelpText>
        </Stat>

        <Stat>
          <StatLabel>Tuition</StatLabel>
          <StatNumber>$12,317.96</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            4.23%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </div>
  );
}

export default Finances;
