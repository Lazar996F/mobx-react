import { useContext, useEffect } from 'react';
import DataPrivacyContent from './DataPrivacyContent';
import AppContext, { SET_TITLE } from '../App/AppContext';
import ButtonAddNew from './ButtonAddNew';
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
      <ButtonAddNew/>
      <DataPrivacyContent timelineData={ dummyData }/>
    </>
  )
}

export default DataPrivacy;
