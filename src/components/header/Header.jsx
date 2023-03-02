import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = () => {
	return (
		<div className="header">
			<div className="headerList">
				<div className="headerListItem">
				Header
					<FontAwesomeIcon icon={faBed} />
				</div>
			</div>
		</div>
	)
}

export default Header;