import {MapLinks} from "../data"

const MLinks = () => {
    return (
    <ul className="area">
    {
        MapLinks.map((link)=>(
            <a href={link.href}>
            <i className={link.icon} />
            {link.text}
            </a>
        ))
    }
    </ul>
    )
}

export default MLinks


    // <li>
    //     <a href="#HKI">
    //     <i className="fa-solid fa-location-dot" />
    //     香港島
    //     </a>
    // </li>
    // <li>
    //     <a href="#KLN">
    //     <i className="fa-solid fa-location-dot" />
    //     九龍
    //     </a>
    // </li>
    // <li>
    //     <a href="#NT">
    //     <i className="fa-solid fa-location-dot" />
    //     新界及離島
    //     </a>
    // </li>