import styled from 'styled-components';
import { BACKGROUND_COLOR_SECONDARY } from '../../Utils/styles';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AppContentBox = styled.section`
  background-color: ${BACKGROUND_COLOR_SECONDARY};
  width: 100%;
  padding-top: 18px;
  padding-left: 30px;
  padding-right: 30px;
`;

// Main wrapper for sidebar component
export const SidebarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 10px 20px 20px;
`;

export const DataPrivacyContentWrapper = styled.div`
  padding-top: 15px;
`;
