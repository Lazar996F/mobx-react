import styled from 'styled-components';

// View box 1/3 column inside row named RowContent
export const ActiveDateView = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ChipText = styled.span`
  font-size: 0.46em;
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

export const ChipWrapper = styled.div`
  padding-left: 10px;
  padding-top: 2px;
`;

function ActiveDateInfo() {
  return (
    <ActiveDateView>
      <DateView>Active from 15.11.2021</DateView>
      <ChipWrapper>
        <TimelineChip>
          <ChipText>CURRENT</ChipText>
        </TimelineChip>
      </ChipWrapper>
    </ActiveDateView>
  );
}

export default ActiveDateInfo;
