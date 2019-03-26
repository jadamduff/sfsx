import styled from '@emotion/styled';

/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

export const GraphSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: 100% 100%;
  grid-template-areas:
    "c g"
    ". b";
  width: 100%;
  height: 100%;
  overflow: visible;
  font-family: 'Montserrat', sans-serif;
  padding: 25px;
  box-sizing: border-box;
`

export const GraphLabelColumn = styled.div`
  grid-area: c;
  height: 100%;
  width: 50px;
  display: inline-block;
  margin: -7px 0 0 0;
  overflow: visible;
`

export const GraphLabelColumnRow = styled.div`
  display: block;
  height: 25%;
  background-color: #fff;
  font-size: 12px;
  color: #9e9e9e;
`

export const GraphContainer = styled.div`
  grid-area: g;
  display: flex;
  flex: 1;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  overflow-x: scroll;
  overflow-y: visible;
  border-bottom: 1px solid #e0e0e0
`

export const GraphRow = styled.div`
  display: block;
  border-top: 1px solid #e0e0e0;
  height: 25%;
  box-sizing: border-box;
  position: relative;
  z-index: 3
`

export const GraphBarsContainer = styled.div`
  grid-area: b;
  display: block;
  height: 375px;
  margin: -325px 0 0 0;
  overflow-x: scroll;
  position: relative;
  z-index: 3;
  white-space: nowrap;
`

export const GraphBarWrapper = styled.div`
  display: inline-block;
  width: 60px;
  height: 100%;
  margin: 0 5px;
  vertical-align: top;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`
export const GraphBarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 325px auto;
  grid-template-areas:
    "t"
    "b";
`

export const GraphBarTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  grid-area: t;
`

const growHeight = keyframes`
  from {
    height: 0px;
  }
  to {
    height: ${props => props.height}
  }
`

export const GraphBar = styled.div`
  width: 25px;
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  cursor: pointer;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 -1px 5px 0 rgba(0,0,0,0.14), 0 0 6px 0 rgba(0,0,0,0.12), 0 0px 4px -1px rgba(0,0,0,0.2);
  animation: ${growHeight};
  animation-duration: .2s;
  animation-timing-function: ease-in-out;
  transition: height .2s;
`

export const GraphBarBottom = styled.div`
  grid-area: b;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`
