import { useNavigate } from 'react-router-dom'
import { Aside, Botao, ImagemVoltar } from './styles'

type Props = {
  mostraBotaoAdd: boolean
}

const BarraLateral = ({ mostraBotaoAdd }: Props) => {
  const navigate = useNavigate()
  return (
    <Aside>
      <div>
        {mostraBotaoAdd ? (
          <>
            <Botao
              title="Adicionar novo Contato"
              type="button"
              onClick={() => navigate('/novo')}
            >
              +
            </Botao>
          </>
        ) : (
          <>
            <Botao type="button" onClick={() => navigate('/')}>
              <ImagemVoltar
                src="https://servidor-estaticos-pi-nine.vercel.app/arrow-left-circle.svg"
                alt="Voltar"
                title="Voltar"
              />
            </Botao>
          </>
        )}
      </div>
    </Aside>
  )
}

export default BarraLateral
