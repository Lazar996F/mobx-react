import styled from 'styled-components';
import {Wrapper} from './Wrapper';
import {Label} from './Label';

export const Chip = styled.div`
  padding: 0 6px;
  border-radius: 25px;
  background-color: #CF1F14;
  color: #ffff;
  height: 13px;
  line-height: 5px;
`;

function TimelineChip() {
  return (
    <Wrapper>
      <Chip>
        <Label>CURRENT</Label>
      </Chip>
    </Wrapper>
  );
}

export default TimelineChip;
