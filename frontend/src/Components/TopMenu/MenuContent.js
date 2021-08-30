import styled from 'styled-components';
import IconButton from '../Button/Icon';

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: normal;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 3px 6px #00000029;
  z-index: 1;
  top: 56px;
  right: 37px;
  width: 320px;
  padding: 28px 0px;
  >* {
    flex: 0 0 33.3333%;
    margin: 6px 0;
  }
`;

function MenuContent({menuButtonsLabels}) {

  const IconButtonsView = menuButtonsLabels.map(item => <IconButton src={item.src} title={item.title}/>)

  return (
    <IconsWrapper>
      {IconButtonsView}
    </IconsWrapper>
  );
}

export default MenuContent;
