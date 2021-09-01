import styled from 'styled-components';
import {COLOR_SECONDARY_LIGHT} from '../../Utils/styles';

const P = styled.p`
  font-size: ${props => props['variant']==='subtext' ? '12px' : '14px'};
  font-weight: ${props => props['variant']==='subtext' ? 'normal' : '700'};
  color: ${props => props['variant'] === 'subtext' && `${COLOR_SECONDARY_LIGHT}`};
`;

export default P;
