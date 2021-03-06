import styled from '@emotion/styled';
import { keyframes } from '@emotion/core'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px auto;
  grid-template-areas:
    "t"
    "b";
  width: 425px;
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
  grid-area: t;
  display: grid;
  width: 425px;
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
  display: flex;
  align-items: center;
  padding: 0 0 0 25px;
`

export const UnreadCounter = styled.div`
  height: 28px;
  min-width: 28px;
  border-radius: 16px;
  background-color: #6521D0;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 15px
`

export const TabRight = styled.div`
  grid-column: 2 / 3;
  text-align: right;
  padding: 0 25px 0 0;
`

export const BodyWrapper = styled.div`
  grid-area: b;
  overflow: scroll;
`

export const Body = styled.div`
  padding: 5px 30px 20px 30px;
  white-space: nowrap;
  font-size: 12px;
`

export const BodyHeader = styled.div`
  font-weight: 500;
  padding: 0 0 10px 0;
`

export const BodyRow = styled.div`
  padding: 10px 0;
  font-color: #616161;
  :nth-child(even) {
    background-color: #f6fcfe
  }
`

export const BodyRowCell = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 75px;
`
