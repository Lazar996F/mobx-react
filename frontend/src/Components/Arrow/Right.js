import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  margin-right: 10px;
  ${({rotate}) => rotate && `
    -moz-transform:rotate(90deg);
    -webkit-transform:rotate(90deg);
    transform:rotate(90deg);
  `}
`;

function ArrowRight({rotate}) {
  return <Image src={process.env.PUBLIC_URL + '/icons/arrow_right_icon.svg'} alt="arrow_down_svg" rotate={rotate}/>
}

export default ArrowRight;
