import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


function DropdownItem({link, item}) {
  return (
        <Dropdown.Item href={link}>{item}</Dropdown.Item>
  )
}

export default DropdownItem