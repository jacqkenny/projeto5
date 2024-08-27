import styled from 'styled-components'

export const Nav = styled.nav`
  padding-top: 30px;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 8px;

  li {
    width: min(100%, 200px);

    button {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`
