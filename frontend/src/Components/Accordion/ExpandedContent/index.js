import AccordionDetails from '@material-ui/core/AccordionDetails';
import styled from 'styled-components';
import H3 from '../../H3';
import Tabs from './Tabs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

function ExpandedContent({date,textContent}) {
  return (
    <AccordionDetails>
      <Wrapper>
        <H3>Data privacy changes on the date { date }</H3>
        <Tabs/>
      </Wrapper>
    </AccordionDetails>
  );
}

export default ExpandedContent;
