import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
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
              <LanguageIcon className="icon"/>
              English 
            </div>
            <div className="item">
              <DarkModeOutlinedIcon className="icon"/>
              
            </div>
            <div className="item">
              <FullscreenExitIcon className="icon"/>
             
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
              <ListOutlinedIcon className="icon"/>
            </div>
            <div className="item">
                 <img src="https://www.pexels.com/photo/scenic-photo-of-lake-surrounded-by-trees-1903702/"
                 alt=""
                  className="avatar"
                  />
            </div>

            </div>
            
          </div> 
        </div>
      
  )
}

export default Navbar
