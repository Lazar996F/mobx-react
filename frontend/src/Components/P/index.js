import styled from 'styled-components';
import {COLOR_SECONDARY_LIGHT} from '../../Utils/styles';

const P = styled.p`
  font-size: ${props => props['variant']==='subtext' ? '12px' : '14px'};
  font-weight: ${props => (props['variant']==='subtext' || props['variant']==='blue') ? 'normal' : '700'};
  color: ${props => props['variant'] === 'subtext' ? `${COLOR_SECONDARY_LIGHT}` : props['variant']==='blue' ? '#2B8FFC' : 'black'};
  margin-top: ${props => props['mt']==='0' && '0'};
`;

export default P;
