import React,{ useState } from 'react'
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext } from "react-icons"
const Menu=()=>{
	const [sidebar,setSidebar] = useState(false);
	const showSidebar = ()=> setSidebar(!sidebar);
	
	return(
		<IconContext.Provider value={{color:'red'}}>
		<div className="menu_container">
			
			<div className="menu_left">
				<Link to='#' className="menu-bars-open">
					{!sidebar?<FaIcons.FaBars className="open-icon" onClick={showSidebar} />:<AiIcons.AiOutlineClose className="open-icon" onClick={showSidebar} />}
				</Link>
				<h1>Resume-Generator</h1>
			</div>
			<div className="menu_right">
				<Link className="link" to="/">Home</Link>
				<Link className="link" to="/CreateResume">CreateResume</Link>
				<Link className="link" to="/Contact">Contact</Link>

			</div>
			
		</div>
		<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
			<ul className="nav_menu-item" onClick={showSidebar}>
				<li className="navbar-toggle">

					<h1 className="title"><span><AiIcons.AiOutlineClose className="open-icon" onClick={showSidebar} /></span>Resume-Generator</h1>						
				</li>
				
				{SidebarData.map((item,index)=>{
					return(
						<li key={index} className={item.cName}>
							<Link to={item.path} className="icons">
								<span>{item.icon}</span>
								<span>{item.title}</span>
							</Link>
						</li>
					);
				})}


			</ul>
		</nav>
		</IconContext.Provider>
	
	);

}
export default Menu;