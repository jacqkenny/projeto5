import { useDispatch, useSelector } from 'react-redux'
import CardContato from '../../components/CardContato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import { ContainerBusca, CampoBusca } from './styles'
import { alteraTermo } from '../../store/reducers/filtro'

const ListaDeContatos = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <ContainerBusca>
        <Titulo>Lista de Contatos</Titulo>
        <CampoBusca
          type="text"
          placeholder="Procurar por Nome"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
      </ContainerBusca>
      <ul>
        {contatos.map((c) => (
          <li key={c.telefone}>
            <CardContato
              id={c.id}
              nome={c.nome}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
