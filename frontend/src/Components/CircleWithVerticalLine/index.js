import {VerticalLine} from './VerticalLine';
import {Circle} from './Circle';
import {Wrapper} from './Wrapper';

function CircleWithVerticalLine({notShowLine}) {
  return (
    <Wrapper>
      <Circle/>
      <VerticalLine notShowLine={notShowLine}/>
    </Wrapper>
  );
}

export default CircleWithVerticalLine;
