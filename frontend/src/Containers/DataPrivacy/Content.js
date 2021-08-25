import ButtonAddNew from '../../Components/Button/Primary';
import { useMemo, useEffect, useContext } from 'react';
import DataPrivacyRow from './DataPrivacyRow';
import DataPrivacyContext, { SET_DATA } from './Context';
import dummyData from './dummyData';


function Content() {
  const { state, dispatch } = useContext(DataPrivacyContext);

  useEffect(() => {
    dispatch({
      type: SET_DATA,
      payload: dummyData
    });
  }, [ state.policies ]);

  const DataPrivacyContent = state.policies.map((item, i) =>
    <DataPrivacyRow
      key={ i }
      role={ item.role }
      date={ item.date }
      pdf={ item.pdf }
      textContent={ item.content }
      state={item.state}
      notShowLine={ i === (state.policies.length - 1) }/>)
  return (
    <>
      <ButtonAddNew/>
      <div className="padding-top-15">
        { DataPrivacyContent }
      </div>
    </>
  );
}

export default Content;
