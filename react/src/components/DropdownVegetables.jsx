import Dropdown from 'react-bootstrap/Dropdown';

function DropdownVegetables() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        素類介紹
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/vegetables">素類介紹</Dropdown.Item>
        <Dropdown.Item href="/fruits">水果</Dropdown.Item>
        <Dropdown.Item href="/grains">五谷</Dropdown.Item>
        <Dropdown.Item href="/vegetable">蔬菜</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}



export default DropdownVegetables;