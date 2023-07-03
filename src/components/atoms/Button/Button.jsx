import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Button.scss'
import Icon from '../Icon/Icon'

const Button = ({variant,text,size,icon,disabled,...rest}) => {
  return (
    <div id="button">
        <button className={classNames(`btn-${variant}`,`btn-${size}`)} disabled={disabled} {...rest} >
          {text}
          {
            icon &&(
              <Icon iconClass={icon}></Icon>
            )
          }
          </button>
    </div>
  )
}

Button.propTypes={
variant:PropTypes.string,
size:PropTypes.string,
text: PropTypes.string
}

export default Button

