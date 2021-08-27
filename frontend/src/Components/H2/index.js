import styled from 'styled-components';
import {COLOR_SECONDARY,COLOR_PRIMARY} from '../../Utils/styles';

const H2 = styled.h2`
  font-size: ${props => props['secondary'] ? '14px' : '16px' };
  color: ${props => props['secondary'] ? COLOR_SECONDARY : COLOR_PRIMARY };
  font-weight: 400;
`;

export default H2;
