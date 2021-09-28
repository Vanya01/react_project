import React from "react";
import './buttonNav.css';
import {Link} from "react-router-dom";


const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--medium','btn--large']

export const ButtonNav =({
    children,type,onClick,buttonStyle,buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];//if true or not
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

return(
    <Link to={'/sign-up'} className={'btn-mobile'}>
      <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
      onClick={onClick}
      >
          {children}
      </button>
    </Link>
)


}