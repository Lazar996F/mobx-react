import ButtonAddNew from '../../Components/Button/Primary';
import { useEffect, useContext } from 'react';
import DataPrivacyRow from './DataPrivacyRow';
import DataPrivacyContext, { SET_POLICIES } from './Context';
import dummyData from './dummyData';

function Content() {
  const { state, dispatch } = useContext(DataPrivacyContext);

  useEffect(() => {
    dispatch({
      type: SET_POLICIES,
      payload: dummyData
    });
  }, [ state.policies,dispatch ]);

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
      <ButtonAddNew linkTo="privacy/create" label="Add new Data Privacy"/>
      <div className="padding-top-15">
        { DataPrivacyContent }
      </div>
    </>
  );
}

export default Content;
