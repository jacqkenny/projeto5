import { Trash, PencilSimple, Star, Check, X } from '@phosphor-icons/react'
import { Zoom } from 'react-awesome-reveal'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { edit, remove, switchFavorite } from '../../store/reducers/contacts'
import ContactClass from '../../models/Contact'
import * as S from './styles'
import { Button, GreenButton, Input, RedButton } from '../../styles/colors'

type ContactProps = ContactClass

const Contact = ({
  id,
  email: originalEmail,
  name: originalName,
  phone: originalPhone,
  favorite
}: ContactProps) => {
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    setEmail(originalEmail)
    setPhone(originalPhone)
    setName(originalName)
  }, [originalName, originalEmail, originalPhone])

  const cancelEditing = () => {
    setName(originalName)
    setEmail(originalEmail)
    setPhone(originalPhone)
    setEditing(false)
  }

  const editContact = () => {
    const editedContact = {
      id,
      name,
      email,
      phone,
      favorite
    }

    dispatch(edit(editedContact))
    setEditing(false)
  }

  return (
    <>
      <td>
        <Input
          disabled={!editing}
          type="text"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </td>
      <td>
        <Input
          disabled={!editing}
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </td>
      <td>
        <Input
          disabled={!editing}
          type="text"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </td>
      <S.Actions>
        {editing ? (
          <>
            <GreenButton onClick={editContact}>
              <Zoom>
                <Check weight="fill" size={24} />
              </Zoom>
            </GreenButton>
            <RedButton onClick={cancelEditing}>
              <Zoom>
                <X weight="fill" size={24} />
              </Zoom>
            </RedButton>
          </>
        ) : (
          <Zoom>
            <RedButton onClick={() => dispatch(remove(id))}>
              <Trash weight="fill" size={24} />
            </RedButton>
            <Button onClick={() => setEditing(true)}>
              <PencilSimple weight="fill" size={24} />
            </Button>
            <S.FavoriteStar
              className={favorite ? 'active' : ''}
              onClick={() => dispatch(switchFavorite(id))}
            >
              <Star weight="fill" size={24} />
            </S.FavoriteStar>
          </Zoom>
        )}
      </S.Actions>
    </>
  )
}

export default Contact
