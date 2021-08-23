import styled from 'styled-components';
import DataPrivacyRow from './DataPrivacyRow';

export const Container = styled.div`
  padding-top: 15px;
  display: flex;
  flex-direction: column;
`;

function DataPrivacyContent({ timelineData }) {
  return (
    <Container>
      {timelineData.map( (item,key) => <DataPrivacyRow key={key} role={item.role} date={item.date} pdf={item.pdf} textContent={item.content}/>)}
    </Container>
  );
}

export default DataPrivacyContent;
