import styled from 'styled-components'
import colors from '../../styles/colors'

export const MainContainer = styled.main`
  width: min(100% - 30px, 1200px);
  padding: 40px 0;
  margin: 0 auto;
`

export const Title = styled.h2`
  width: 100%;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  border-radius: 20px 20px 0 0;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 28px;
  }

  @media (max-width: 470px) {
    font-size: 20px;
  }
`

export const Table = styled.table`
  border-spacing: unset;
  border-collapse: collapse;
  width: 100%;
  border-bottom: 1px solid ${colors.primary};

  td,
  th {
    color: ${colors.primary};
    padding: 10px;
  }

  td {
    text-align: center;
    margin: auto 0;
  }

  th {
    background-color: ${colors.primaryLight};
    font-weight: bold;

    @media (max-width: 767px) {
      display: none;
    }
  }

  tr {
    &:nth-child(2n) {
      background-color: ${colors.primaryLight};
    }
    &:nth-child(2n + 1) {
      background-color: ${colors.white};
    }

    @media (max-width: 767px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 8px 0;
    }

    @media (max-width: 470px) {
      grid-template-columns: 1fr;
    }
  }
`
