import styled from 'styled-components';

import { Wrapper } from './Wrapper';
import { Label } from './Label';

export const Chip = styled.div`
  display: ${ props => props['state'] === 'archive' && 'none' };
  padding: 3px 6px;
  width: 45px;
  text-align: center;
  border-radius: 25px;
  background-color: ${ props => props['state'] === 'draft' ? 'inherit' : '#CF1F14' };
  color: ${ props => props['state'] === 'draft' ? 'black' : 'white' };
  border: ${ props => props['state'] === 'draft' ? '1px solid' : '1px solid #CF1F14' };
  line-height: 7px;
`;

function TimelineChip({ state }) {
  const label = state && (state === 'archive' ? '' : state.toUpperCase());

  return (
    <Wrapper>
      <Chip state={ state }>
        <Label>{ label }</Label>
      </Chip>
    </Wrapper>
  );
}

export default TimelineChip;
