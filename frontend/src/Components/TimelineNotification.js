import {TextWrapper, TextContent, VerticalLine,DateText} from '../Styled/TimelineNotification'

function TimelineNotification({isDraft, date}) {

  const text = isDraft ? 'DRAFT' : 'CURRENT';

  return (
    <>
      <DateText>{date}</DateText>
      <TextWrapper>
        <TextContent isDraft={isDraft}>{text}</TextContent>
      </TextWrapper>
        <VerticalLine/>
    </>
  );
}

export default TimelineNotification;
