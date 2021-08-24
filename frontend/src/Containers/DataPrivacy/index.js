import { useContext, useEffect } from 'react';
import Context, { SET_TITLE } from '../App/Context';
import ButtonAddNew from '../../Components/Button/Primary';
import dummyData from './dummyData';
import DataPrivacyRow from './DataPrivacyRow';

function DataPrivacy() {
  const { _, dispatch } = useContext(Context);

  useEffect(() => {
    dispatch({
      type: SET_TITLE,
      payload: 'Data Privacy'
    });
  }, []);

  return (
    <>
      <ButtonAddNew/>
      <div className="padding-top-15">
        { dummyData.map((item, key) => <DataPrivacyRow key={ key } role={ item.role } date={ item.date }
                                                          pdf={ item.pdf } textContent={ item.content }/>) }
      </div>
    </>
  )
}

export default DataPrivacy;
