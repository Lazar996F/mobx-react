import styled from 'styled-components';
import {COLOR_SECONDARY} from '../../Utils/styles';

export const VerticalLine = styled.div`
  border-left: ${props => props['notShowLine'] ? '0' : `2px solid ${COLOR_SECONDARY}`};
  margin-left: 6px;
  margin-top: 8px;
  height: 100%;
  align-items: stretch;
`;
