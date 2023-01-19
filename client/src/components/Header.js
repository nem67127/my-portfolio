import {FiMenu} from "react-icons/fi";

const Header = () => {
return(
    //navigation bar
    // logo / title on left and hamburger dropdown on right
    // dropdown component ? 
<div className="header">
    <div className="logo">digitallytash</div>
    <div><FiMenu/></div>
</div>
);
};

export default Header;