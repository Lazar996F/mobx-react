import styled from 'styled-components'


export const Box = styled.section`
  background-color: rgb(242, 242, 242);
  width: 100%;
  padding-top: 12px;
  padding-left: 30px;
  padding-right: 30px;
`

export const Header = styled.div`
  float: right;
  display: flex;
`

export const HeaderText = styled.h3`
  font-size: 0.8em;
  display: inline;
  margin-top: 8px;
  padding-right: 9px;
  font-weight: 500;
`

export const MenuButton = styled.button`
    border: none;
    background-color: inherit;
  :hover{
    background-color: #aaadab;
    border-radius: 50%;
  }
`
export const ButtonWrapper = styled.div`
    float:right;
  padding-right: 20px;
`

export const Button = styled.button`
  background-color: rgb(172,172,172);
  display: inline-block;
  cursor: pointer;
  color: rgb(246,246,246);
  font-family: Arial;
  font-size: 0.8em;
  padding: 10px 25px;
  text-decoration: none;
  border: 0;
`