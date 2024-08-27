import { Fade } from 'react-awesome-reveal'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

import { MainContainer, Table, Title } from './styles'
import Contact from '../../components/Contact'

type Props = {
  favorites?: boolean
}

const ContactsList = ({ favorites }: Props) => {
  const contacts = useSelector((state: RootReducer) => state.contacts.items)

  const contactsFilter = () => {
    if (favorites) {
      return contacts.filter((contact) => contact.favorite)
    }
    return contacts
  }

  return (
    <MainContainer>
      <Fade duration={2000}>
        <Title>{favorites ? 'Favoritos' : 'Contatos'}</Title>
        <Table>
          <thead>
            <tr>
              <th>Nome Completo</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {contactsFilter().map(({ id, name, email, phone, favorite }) => {
              return (
                <tr key={id}>
                  <Contact
                    id={id}
                    name={name}
                    email={email}
                    phone={phone}
                    favorite={favorite}
                  />
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Fade>
    </MainContainer>
  )
}

export default ContactsList
