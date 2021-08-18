import styled from 'styled-components'

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

function PageTitle({ title, subtitle }) {
  return (
    <TitleWrapper>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </TitleWrapper>
  );
}

export default PageTitle;
