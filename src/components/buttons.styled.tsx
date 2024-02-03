import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    primary?: boolean,
    outlined?: boolean,
}

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`

export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  font-size: 10px;
  white-space: nowrap;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 25px;
  border-color: #4E71FE;
  font-weight: bold;
  
  
  ${props => props.primary && css<StyledBtnPropsType>`
    background-color: #4E71FE;
    color: white;

    &:hover {
      width: 100px;
      height: 40px;
      background-color: #bd0aae;
      border-color: #bd0aae;
      margin-top: 20px;
    }
  `
}

  ${props => props.outlined && css<StyledBtnPropsType>`
    background-color: white;
    color: #4E71FE;

    &:hover {
      width: 100px;
      height: 40px;
      background-color: #05960c;
      border-color: #05960c;
      color: white;
      margin-top: 20px;
    }
  `
  }
`
