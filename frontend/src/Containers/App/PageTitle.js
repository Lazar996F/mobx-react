import styled from 'styled-components'
import { useContext } from 'react';

import AppContext from './AppContext';

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 0;
`;

const Subtitle = styled.h2`
  font-size: 0.8em;
  color: #808080c7;
  font-weight: 400;
`;

const TitleWrapper = styled.div`
  padding-left: 15px;
`;

function PageTitle() {
  const { state } = useContext(AppContext);

  return (
    <TitleWrapper>
      <Title>{ state?.title }</Title>
      <Subtitle>{ state?.subtitle }</Subtitle>
    </TitleWrapper>
  );
}

export default PageTitle;
