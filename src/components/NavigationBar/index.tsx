import { UserPlus, UsersThree, Star } from '@phosphor-icons/react'
import { Slide } from 'react-awesome-reveal'

import { Button, GreenButton, YellowButton } from '../../styles/colors'
import { List, Nav } from './styles'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <Nav>
      <Slide>
        <List>
          <li>
            <Link to={'/new'}>
              <GreenButton>
                <UserPlus weight="fill" size={20} />
                Adicionar Contato
              </GreenButton>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <Button>
                <UsersThree weight="fill" size={20} />
                Meus Contatos
              </Button>
            </Link>
          </li>

          <li>
            <Link to={'/favoritos'}>
              <YellowButton>
                <Star weight="fill" size={20} />
                Favoritos
              </YellowButton>
            </Link>
          </li>
        </List>
      </Slide>
    </Nav>
  )
}

export default NavigationBar
