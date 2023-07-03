import React from 'react'
import '@styles/icon.scss'
import classNames from 'classnames'

const Icon = ({iconClass,onIconClick}) => {
  return (
    <span className={classNames(`icon-${iconClass}`)} onClick={onIconClick}></span>
  )
}

export default Icon
