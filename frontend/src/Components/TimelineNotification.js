import {Frame, TextContent, VerticalLine} from '../Styled/TimelineNotification'

function TimelineNotification({isDraft, date}) {

  const text = isDraft ? 'DRAFT' : 'CURRENT';

  return (
    <>
      <span>{date}</span>
      <Frame>
        <TextContent isDraft={isDraft}>{text}</TextContent>
      </Frame>
      <VerticalLine/>
    </>
  );
}

export default TimelineNotification;
