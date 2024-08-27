class ContactClass {
  name: string
  phone: string
  email: string
  id: number
  favorite?: boolean

  constructor(
    name: string,
    phone: string,
    email: string,
    id: number,
    favorite = false
  ) {
    this.name = name
    this.phone = phone
    this.email = email
    this.id = id
    this.favorite = favorite
  }
}

export default ContactClass
