// @flow
import React from "react";
// import PropTypes from "prop-types";
import './buttonAng.scss';
import bem from "../../bem";

type Props =  {
    label: string,
    onClick: {} => void,
    outline: boolean,
    type: "primary" | "secondary",
    disabled: boolean,
    pill: boolean
}

const ButtonAng = ({label, onClick, disabled, outline, type, pill}: Props) => {
    const baseClass = "c-ang-button";


    return (
        <button type="button"
                className={bem(baseClass,null,  {hasOutline: outline, isDisabled: disabled, buttonType: type, pill: pill} )}
                disabled={disabled}
                onClick={onClick}>

            {label}
        </button>
    )
};


// ButtonAng.propTypes = {
//     label: PropTypes.string.isRequired,
//     backgroundColor: PropTypes.string,
//     onClick: PropTypes.func,
//     outlineOnly: PropTypes.bool
//
// };

ButtonAng.defaultProps = {
    label: "Button",
    outline: false,
    disabled: false
};

export default ButtonAng;

// props, label, onClick, outline, backgroundcolor, disabled , primary, secondary, fun
