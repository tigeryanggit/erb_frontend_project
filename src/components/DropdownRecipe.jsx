import Dropdown from 'react-bootstrap/Dropdown';

function DropdownRecipe() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        食譜簡介
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/recipe">食譜簡介</Dropdown.Item>
        <Dropdown.Item href="/hotmeal">熱食</Dropdown.Item>
        <Dropdown.Item href="/coldmeal">涼食</Dropdown.Item>
        

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownRecipe;


  // <Dropdown>
  //     <Dropdown.Toggle variant="success" id="dropdown-basic">
  //       肉類介紹
  //     </Dropdown.Toggle>

  //     <Dropdown.Menu>
  //       <Dropdown.Item href="/meat">肉類介紹</Dropdown.Item>
  //       <Dropdown.Item href="/redmeat">紅肉</Dropdown.Item>
  //       <Dropdown.Item href="/whitemeat">白肉</Dropdown.Item>
  //       <Dropdown.Item href="/seafood">海鮮</Dropdown.Item>
  //     </Dropdown.Menu>
  //   </Dropdown>


                    // <ul>

                    //     <li><Link to="/">首頁</Link></li>
                    //     <li><Link to="/map">街巿地圖</Link></li>
                    //     <li><Link to="/purchase">時令蔬菜</Link></li>
                    //     <li><Link to="/meat">肉類介紹</Link></li>
                    //     <li><Link to="/vegetable">素類介紹</Link></li>
                    //     <li><Link to="/recipe">食譜簡介</Link></li>
                    //     <li><Link to="/about">關於</Link></li>

                        
                        
                    // </ul>