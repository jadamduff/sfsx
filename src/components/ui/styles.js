import styled from '@emotion/styled';

export const HeaderStyles = styled.div`
  grid-area: h;
  padding: 0 0 0 5vw;
  line-height: 80px;
  vertical-align: middle;
`

export const CloseIconStyles = styled.div`
  position: absolute;
  right: 20px;
  top: 22px;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  :before, :after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 23px;
    width: 2px;
    background-color: #333;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }

`
