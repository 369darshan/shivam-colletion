import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

interface checkboxProps {
  label: string
  value: string
  isSelected: boolean
  onClickHandler: (value: string) => void
}
const Checkbox: React.FC<checkboxProps> = ({ label, value, isSelected, onClickHandler }) => {
  const [isChecked, setIsChecked] = useState(isSelected)
  const handlecheckboxchange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onClickHandler(value)
  }
  return (
    <label className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handlecheckboxchange}
        className={classes.checkbox}
      />
      {label}
    </label>
  )
}

export default Checkbox
