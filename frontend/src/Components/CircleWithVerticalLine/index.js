import { VerticalLine } from './VerticalLine';
import { Circle } from './Circle';
import { Wrapper } from './Wrapper';

function CircleWithVerticalLine({ notShowLine, state }) {
  return (
    <Wrapper>
      <Circle state={ state }/>
      <VerticalLine notShowLine={ notShowLine }/>
    </Wrapper>
  );
}

export default CircleWithVerticalLine;
