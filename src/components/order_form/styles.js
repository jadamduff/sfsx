import styled from '@emotion/styled';

export const Container = styled.form`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`

export const Label = styled.div`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  display: inline-block;
  vertical-align: top;
  margin: 4px 0 0 0;
`

export const DropdownContainer = styled.div`
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #424242;
  line-height: 50px;
  vertical-align: middle;
  cursor: pointer;
`

export const DropdownBox = styled.div`
  text-align: left;
  height: 50px;
  border-bottom: 2px solid #424242;
  padding: 0 15px;
  margin: 0 0 15px 0;
  display: flex;
  line-height: 50px;
  vertical-align: middle;
`

export const DropdownOption = styled.div`
  text-align: left;
  height: 50px;
  padding: 0 15px;
  :hover {
    background-color: #fafafa;
  };
`

export const BodyContainer = styled.div`
  text-align: left;
  margin: 25px 15px 15px 15px;
`

export const BodyRow = styled.div`
  margin: 0 0 15px 0;
  display: flex;
`

export const Input = styled.input`
  display: inline-block;
  height: 36px;
  border-radius: 3px;
  line-height: 36px;
  vertical-align: middle;
  background-color: #f1f3f4;
  color: #424242;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding: 0 10px;
  border: 0;
  margin-left: auto;
  outline: none
`

export const ToggleBodyRow = styled.div`
  margin: 30px 0 15px 0;
  text-align: center
`

export const ToggleButtonContainer = styled.div`
  display: inline-block;
  height: 20px;
  width: 36px;
  border-radius: 32px;
  padding: 2px;
  background-color: #424242;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 25px;
`

export const ToggleButtonKnob = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background-color: #fff;
  transform: ${props =>
    props.position
  };
  transition: transform .2s
`

export const Submit = styled.button`
  font-family: 'Montserrat', sans-serif;
  display: block;
  font-size: 14px;
  height: 50px;
  color: #ffffff;
  width: 100%;
  border-radius: 3px;
  background-image: linear-gradient(135deg, rgba(106,17,203,1), rgba(37,117,252,1));
  cursor: pointer;
  outline: none;
  border: 0;
  margin: 25px auto 0 auto;
`
