import LanguageIcon from '@mui/icons-material/Language';
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon/>
        </div>
          <div className="items">
            
            <div className="item">
              <DarkModeOutlinedIcon className="icon"/>
              
            </div>
           
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
             <div className="counter">4</div>
            </div>
            
            <div className="item">
                 <img src=""
                    alt="user"
                  className="avatar"
                  />
            </div>

            </div>
            
          </div> 
        </div>
      
  )
}

export default Navbar
