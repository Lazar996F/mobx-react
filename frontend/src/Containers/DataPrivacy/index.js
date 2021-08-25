import { useContext, useEffect, useMemo } from 'react';
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

  const DataPrivacyContent = useMemo(() => dummyData.map((item, i) =>
    <DataPrivacyRow key={ i }
                    role={ item.role }
                    date={ item.date }
                    pdf={ item.pdf }
                    textContent={ item.content }
                    notShowLine={ i === (dummyData.length - 1) }/>
  ), []);

  return (
    <>
      <ButtonAddNew/>
      <div className="padding-top-15">
        { DataPrivacyContent }
      </div>
    </>
  );
}

export default DataPrivacy;
