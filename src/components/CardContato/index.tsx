import { Trash, import { BotoesDeAcao, Card, Grid, ImagemBotao, LinkBotao } from './styles'
import { Campo, TituloCampo } from '../../styles'
import Contato from '../../models/Contato'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { editar, remover } from '../../store/reducers/contatos'

type Props = Contato

const CardContato = ({
  nome: nomeContato,
  email: emailContato,
  telefone: telefoneContato,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditanto, setEstaEditando] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (nomeContato.length > 0) {
      setNome(nomeContato)
    }
    if (emailContato.length > 0) {
      setEmail(emailContato)
    }
    if (telefoneContato.length > 0) {
      setTelefone(telefoneContato)
    }
  }, [nomeContato, emailContato, telefoneContato])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNome(nomeContato)
    setEmail(emailContato)
    setTelefone(telefoneContato)
  }

  return (
    <>
      {estaEditanto && <em>Editando...</em>}
      <Card>
        <Grid>
          <TituloCampo htmlFor="nome">Nome Completo:</TituloCampo>
          <TituloCampo htmlFor="email">E-mail:</TituloCampo>
          <TituloCampo htmlFor="telefone">Telefone:</TituloCampo>
        </Grid>
        <Grid>
          <Campo
            type="text"
            id="nome"
            disabled={!estaEditanto}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Campo
            type="email"
            id="email"
            disabled={!estaEditanto}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Campo
            type="text"
            id="telefone"
            disabled={!estaEditanto}
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </Grid>
        <BotoesDeAcao>
          {estaEditanto ? (
            <>
              <LinkBotao
                onClick={() => {
                  dispatch(
                    editar({
                      id,
                      nome,
                      telefone,
                      email
                    })
                  )
                  setEstaEditando(false)
                }}
              >
                <ImagemBotao
                  src="https://servidor-estaticos-pi-nine.vercel.app/save.svg"
                  alt="Salvar Contato"
                  title="Salvar Contato"
                />
              </LinkBotao>
              <LinkBotao onClick={cancelarEdicao}>
                <ImagemBotao
                  src="https://servidor-estaticos-pi-nine.vercel.app/x-circle.svg"
                  alt="Cancelar"
                  title="Cancelar"
                />
              </LinkBotao>
            </>
          ) : (
            <>
              <LinkBotao onClick={() => setEstaEditando(true)}>
                <ImagemBotao
                  src="https://servidor-estaticos-pi-nine.vercel.app/edit.svg"
                  alt="Editar Contato"
                  title="Editar Contato"
                />
              </LinkBotao>
              <LinkBotao onClick={() => dispatch(remover(id))}>
                <ImagemBotao
                  src="https://servidor-estaticos-pi-nine.vercel.app/trash-2.svg"
                  alt="Excluir Contato"
                  title="Excluir Contato"
                />
              </LinkBotao>
            </>
          )}
        </BotoesDeAcao>
      </Card>
    </>
  )
}

export default CardContato
