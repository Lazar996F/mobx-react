import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;


export const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;


export const Button = styled.button`
  background-color: black;
  display: inline-block;
  cursor: pointer;
  color: rgb(246, 246, 246);
  font-family: Arial, sans-serif;
  font-size: 0.8em;
  padding: 10px 25px;
  text-decoration: none;
  border: 0;
`;

export const RowContent = styled.div`
  display: flex;
  width: 100%;
`;

// View box 1/3 column inside row named RowContent
export const ActiveDateView = styled.div`
  display: flex;
  flex-direction: row;
`;

// 1/2 Column inside row named ActiveDateView
export const DateView = styled.div`
  font-weight: bold;
  font-size: 0.76em;
`;

export const TimelineChip = styled.div`
  padding: 0 6px;
  border-radius: 25px;
  background-color: #CF1F14;
  color: #ffff;
  height: 13px;
  line-height: 5px;
`;

export const ChipText = styled.span`
  font-size: 0.46em;
`;

export const ChipWrapper = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-top: 2px;
`;

export const RoleText = styled.div`
  flex: 2;
  font-size: 0.76em;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

export const ChangeButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const ChangeButton = styled.button`
  background-color: inherit;
  border: 1px solid #8080802e;
  color: #80808059;
  cursor: pointer;
`;

export const AccordionBox = styled.div`
position: relative;
}
    :before {
    content: "";
    position: absolute;
    height: 0px;
    width: 0px;
    top: 14px;
    left: -18px;
    border-width: 9px;
    border-color: transparent white transparent transparent;
    border-style: solid;
`;
