import styled from 'styled-components';
import { COLOR_GREY } from '../../Utils/styles';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AppContentBox = styled.section`
  background-color: ${COLOR_GREY};
  width: 100%;
  padding-top: 18px;
  padding-left: 30px;
  padding-right: 30px;
`;
