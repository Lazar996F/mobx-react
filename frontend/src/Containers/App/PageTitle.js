import { useContext } from 'react';
import H1 from '../../Components/H1';
import Context from './Context';
import H2 from '../../Components/H2';

function PageTitle() {
  const { state } = useContext(Context);

  return (
    <div className="padding-left-15">
      <H1>{ state?.title }</H1>
      <H2 secondary>{ state?.subtitle }</H2>
    </div>
  );
}

export default PageTitle;
