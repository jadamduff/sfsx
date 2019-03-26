import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
`

export const Header = styled.div`
  display: flex;
  background-color: #fafafa;
  border: 1px solid #eee;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 25px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 500;
  color: #424242;
`

export const List = styled.div`
  display: block;
  margin: 15px;
  height: 100px;
  font-size: 14px;
  font-weight: 400;
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
