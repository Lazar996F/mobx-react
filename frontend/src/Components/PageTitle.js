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


function PageTitle({ title, subtitle }) {
  return (
    <>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </>
  );
}

export default PageTitle;
