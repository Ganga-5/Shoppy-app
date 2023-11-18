import React from 'react'

export const CustomInput = (props) => {
  const { type, name, placeholder, classname, id, val, onCh, onBl } = props;
  return (
    <>
        <div>
            <input
                type = {type}
                name = {name}
                placeholder = {placeholder}
                className = {`form-control ${classname}`}
                id= {id}
                value={val}
                onChange={onCh}
                onBlur={onCh}
            />
        </div>
    </>
  )
}
