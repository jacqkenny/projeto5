import Header from '../../components/Header'
import NavigationBar from '../../components/NavigationBar'
import ContactsList from '../../containers/ContactsList'

const Favorites = () => (
  <>
    <Header />
    <NavigationBar />
    <ContactsList favorites />
  </>
)

export default Favorites
