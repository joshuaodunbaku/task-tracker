import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, showTaskForm, onToggleAddTask}) => {
    // let a = 0;
    // const onClick = () => {
    //     console.log('Click from Header', ++a);
    //     onToggleAddTask(showTaskForm);  
    // }

    return ( 
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showTaskForm ? "red" : "green"} text={showTaskForm ? "Close" : "Add"} onClick={onToggleAddTask} />
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