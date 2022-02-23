import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; 2022 <a href="https://github.com/joshuaodunbaku" target="_blank">Joshua Odunbaku</a></p>
        <Link to="about">About</Link>
    </footer>
  )
}

export default Footer