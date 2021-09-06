import styled from 'styled-components';


const A = styled.a`
  color: black;
  font-weight: 700;
`;

export default function DownloadButton({label,urlToFile} ) {

  return (
    <>
      <A href={urlToFile} download>{label}</A>
    </>
  );
}
