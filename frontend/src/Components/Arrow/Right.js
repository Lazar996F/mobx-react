import React from 'react';
import styled from 'styled-components';

export const Image = styled.img`
  margin-right: 10px;
`;

function ArrowRight() {
  return <Image src={process.env.PUBLIC_URL + '/icons/arrow_right_icon.svg'} alt="arrow_down_svg"/>
}

export default ArrowRight;
