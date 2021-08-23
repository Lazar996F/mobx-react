import {Container} from '../../Styled/DataPrivacy';
import DataPrivacyRow from './DataPrivacyRow';

function DataPrivacyContent({timelineData}) {
  return (
    <Container>
      {timelineData.map( (item,key) => <DataPrivacyRow key={key} role={item.role} date={item.date} pdf={item.pdf} textContent={item.content}/>)}
    </Container>
  );
}

export default DataPrivacyContent;
