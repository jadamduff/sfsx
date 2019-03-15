import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

export const Container = styled.div`
  width: 450px;
  background-color: #fff;
  border-top: 2px solid #424242;
  position: absolute;
  bottom: 0;
  right: 25px;
  z-index: 3;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.2);
  transition: height .2s;
  transition-timing-function: ease;
  font-family: 'Montserrat', sans-serif;
  :hover {
    box-shadow: 0 4px 5px 5px rgba(0,0,0,0.06), 0 1px 10px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.2);
  }
`

export const Tab = styled.div`
  display: grid;
  width: 450px;
  height: 65px;
  line-height: 65px;
  vertical-align: middle;
  position: fixed;
  font-weight: 500px;
  grid-template-columns: 1fr auto;
  cursor: pointer
`

export const TabLeft = styled.div`
  grid-column: 1 / 2;
  padding: 0 0 0 25px;
`

export const TabRight = styled.div`
  grid-column: 2 / 3;
  text-align: right;
  padding: 0 25px 0 0;
`
