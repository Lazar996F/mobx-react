import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react';

import AppContext, { SET_TITLE_SUBTITLE } from '../App/Context';
import { fetchPolicies, fetchData } from '../../Utils/helpers';
import Store from '../../Store';
import ButtonWrapper from '../../Components/Layout/DataPrivacyButtonWrapper';
import ButtonAddNew from '../../Components/Button/Primary';
import DataPrivacyRow from './DataPrivacyRow';


const DataPrivacy = observer(() => {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({
      'type': SET_TITLE_SUBTITLE,
      payload: {
        title: 'Data Privacy',
        subtitle: 'Active and archive Data Privacy records'
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData(fetchPolicies).then((data) => Store.setPolicies(data));
  }, [])

  const DataPrivacyContent = Store.policies.map((item, i) =>
    <DataPrivacyRow
      key={ i }
      role={ item.role }
      date={ item.date }
      pdf={ item.pdf }
      textContent={ item.content }
      state={ item.state }
      notShowLine={ i === (Store.policies.length - 1) }/>)

  return (
    <>
      <ButtonWrapper>
        <ButtonAddNew linkTo="privacy/create" label="Add new Data Privacy"/>
      </ButtonWrapper>
      <div className="padding-top-15">
        { DataPrivacyContent }
      </div>
    </>
  );
})

export default DataPrivacy;
