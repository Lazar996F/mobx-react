import { useContext, useEffect } from 'react';

import { ButtonWrapper, Button } from '../../Styled/DataPrivacy';
import DataPrivacyContent from '../../Components/DataPrivacy/DataPrivacyContent';
import AppContext, { SET_TITLE } from '../../AppContext';
import dummyData from './DummyData';


function DataPrivacy() {
  const { _, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      type: SET_TITLE,
      payload: 'Data Privacy'
    });
  }, []);

  return (
    <>
      <ButtonWrapper>
        <Button>Add new Data Privacy</Button>
      </ButtonWrapper>
      <DataPrivacyContent timelineData={ dummyData }/>
    </>
  )
}

export default DataPrivacy;
