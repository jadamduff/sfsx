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
  cursor: pointer;
  :hover {
    box-shadow: 0 4px 5px 5px rgba(0,0,0,0.06), 0 1px 10px 2px rgba(0,0,0,0.04), 0 2px 4px -1px rgba(0,0,0,0.2);
  }
`
