import { FaTimes } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';
import itemImage from '../../assets/img/item.png';
import { menuItems, formattedDate } from '../utils';
import logoImage from '../../assets/img/nytimes.png';

const HeaderMobile = ({ toggleMenu, isMenuOpen, setSectionParam, handleSubmit }) => {
	return (
		<div className="header-mobile">
			<div className="header-mobile-top">
				<div className='header-mobile-top-left'>
					<div className="menu-button" onClick={toggleMenu}>
						<div className="menu-icon"></div>
						<div className="menu-icon"></div>
						<div className="menu-icon"></div>
					</div>
					<div className={`menu-list menu-list-mobile ${isMenuOpen ? 'active' : ''}`}>
						<div className="close-icon" onClick={toggleMenu}>
							<FaTimes />
						</div>
						<div>
							<form onSubmit={handleSubmit} className='search-form'>
								<input type='text' placeholder='SEARCH' onChange={(e) => setSectionParam(e.target.value)} />
								<button type='submit'>GO</button>
							</form>
						</div>
						<ul>
							{menuItems.map((menuItem, index) => (
								<li key={index}>
									<NavLink to={menuItem.url} onClick={toggleMenu}>
										{menuItem.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='header-mobile-top-middle'>
					<Link to="/">
						<img src={logoImage} alt="logo" className='mobile-image-logo'/>
					</Link>
				</div>
				<div className="header-mobile-top-right">
					<img src={itemImage} alt="item" className="item-icon item-icon-small" />
				</div>
			</div>
			<hr className='hr-mobile'/>
			<div className="header-mobile-bottom">
				<div className="header-mobile-bottom-middle">
					<div className="date date-mobile">
						{formattedDate()}
					</div>
				</div>
				<div className="header-mobile-bottom-right">
					<p>SUBSCRIBE FOR €0.50/WEEK</p>
				</div>
			</div>
			<hr className='hr-mobile'/>
		</div>
	)
}

export default HeaderMobile;