import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;
const PdfIcon = styled.div`
  background-image: url(${ process.env.PUBLIC_URL + '/icons/icon-file-pdf.svg' });
  background-repeat: no-repeat;
  width: 16px;
  height: 18px;
  margin-right: 5px;
`;

const A = styled.a`
  font-size: 10px;
  color: black;
  font-weight: bold;
`;

function DownloadPdf() {
  return (
    <Wrapper>
      <PdfIcon/>
      <A href="#" download>Data privacy_document.PDF</A>
    </Wrapper>
  );
}

export default DownloadPdf;
