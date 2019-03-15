import styled from '@emotion/styled';

export const BodyGridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: minmax(auto, 1450px);
  grid-template-rows: 1fr;
  justify-content: center;
  overflow-y: scroll;
`

export const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 4fr 2fr;
  grid-template-rows: 85px auto;
  grid-template-areas:
    "h h h h"
    ". f g .";
`

export const Form = styled.div`
  grid-area: f;
  text-align: center;
  padding: 0 25px;
`

export const Graph = styled.div`
  height: 100%;
  grid-area: g;
  background-color: green;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 375px auto
`

export const GraphTop = styled.div`
  grid-row: 1 / 2;
  background-color: yellow;
`

export const GraphBottom = styled.div`
  grid-row: 2 / 3;
  background-color: orange
`

export const List = styled.div`
  grid-area: l;
  background-color: blue
`
