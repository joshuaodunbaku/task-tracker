import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {
    let a = 0;
    const onClick = () => {
        console.log('Click from Header', ++a);
    }

    return ( 
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
     );
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// HAVING CSS STYLING IN JS FILE
// const headerStyling = {
//     color: 'red',
//     backgroundColor: 'black',
//     borderRadius: "10px"
// }

export default Header;