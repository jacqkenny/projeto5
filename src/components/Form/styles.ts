import { styled } from 'styled-components'
import colors from '../../styles/colors'

export const FormContainer = styled.div`
  width: min(100% - 30px, 1200px);
  margin: 40px auto;
  padding: 16px;
  background: ${colors.primaryLight};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-bottom: 1px solid ${colors.primary};

  h2 {
    background: ${colors.primary};
    padding: 20px 0;
    font-size: 36px;
    text-align: center;
    color: ${colors.white};
    margin: -16px -16px 16px -16px;
    border-radius: 20px 20px 0 0;
  }
`

export const Form = styled.form`
  background: #e3f2ff;
  width: min(100% - 30px, 760px);
  margin: 28px auto 5px auto;

  input {
    transition: all 0.2s ease-in-out;
    margin-bottom: 12px;
    border: 1px solid ${colors.primary};
    border-radius: 30px;
    color: ${colors.primary};

    &:focus {
      border-color: ${colors.sky};
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: #05d5e8;
    border-color: #0ebac9;
    color: ${colors.grey};
    margin: 8px 0;
    width: 50%;
  }
`
