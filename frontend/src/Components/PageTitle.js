import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.7em;
  margin-bottom: 0;
`
const Subtitle = styled.h2`
  font-size: 0.8em;
  color: #808080c7;
  font-weight: 400;
`
const Wrapper = styled.div`
  padding-top: 30px;
`

function PageTitle({ title, subtitle }) {
  return (
    <Wrapper>
      <Title>{ title }</Title>
      <Subtitle>{ subtitle }</Subtitle>
    </Wrapper>
  );
}

export default PageTitle;
