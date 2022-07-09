import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


export default function Navbar() {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>Navbar</nav>
  )
}

Navbar.defaultProps = {
    title: 'Github Finder'
}

Navbar.propTypes = {
    title: PropTypes.string,
}
