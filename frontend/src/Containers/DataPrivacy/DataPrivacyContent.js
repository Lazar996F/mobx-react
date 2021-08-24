import DataPrivacyRow from './DataPrivacyRow';
import {DataPrivacyContentWrapper} from '../../Components/Styled/Layout';

function DataPrivacyContent({ timelineData }) {
  return (
    <DataPrivacyContentWrapper>
      {timelineData.map( (item,key) => <DataPrivacyRow key={key} role={item.role} date={item.date} pdf={item.pdf} textContent={item.content}/>)}
    </DataPrivacyContentWrapper>
  );
}

export default DataPrivacyContent;
