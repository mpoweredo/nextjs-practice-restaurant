import React from 'react'

const Button = ({children, className, width = 28}) => {
    const buttonClasses = `mt-auto px-1 py-2 whitespace-nowrap w-${width} rounded-sm text-slate-100 font-semibold flex items-center justify-center text-center leading-normal`
    const classes = `${className} ${buttonClasses}`

  return (
    <button className={classes}>{children}</button>
  )
}

export default Button