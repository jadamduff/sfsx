import styled from '@emotion/styled';

export const BodyGridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: minmax(auto, 1450px);
  grid-template-rows: 1fr;
  justify-content: center;
  overflow-y: scroll;
`

export const Body = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 4fr 2fr;
  grid-template-rows: 85px 375px auto;
  grid-template-areas:
    "h h h h"
    ". f g ."
    ". l l .";
`

export const Form = styled.div`
  grid-area: f;
  text-align: center;
  padding: 0 25px;
`

export const Graph = styled.div`
  height: 375px;
  grid-area: g;
  background-color: green;
`

export const List = styled.div`
  grid-area: l;
  background-color: blue;
`
