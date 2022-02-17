import PropTypes from "prop-types";

const Button = ({color, text, onClick, className}) => {
    return (
        <div>
            <button onClick={onClick} className={className ? className : "btn"} style={{backgroundColor: color,}}>{text}</button>
        </div>
    )
}

// Button.defaultProps = {
//     color: 'steelblue',
// }

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button