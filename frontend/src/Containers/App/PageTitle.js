import styled from 'styled-components'
import { useContext } from 'react';
import H1 from '../../Components/H1';
import AppContext from './AppContext';
import H2 from '../../Components/H2';

const TitleWrapper = styled.div`
  padding-left: 15px;
`;

function PageTitle() {
  const { state } = useContext(AppContext);

  return (
    <TitleWrapper>
      <H1>{ state?.title }</H1>
      <H2>{ state?.subtitle }</H2>
    </TitleWrapper>
  );
}

export default PageTitle;
