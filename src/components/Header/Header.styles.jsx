import styled from 'styled-components';

export const Navigation = styled.nav`
	height: 8vh;
	display: flex;
	background-color: #000;
	box-shadow: ${({ isTransparent }) =>
		isTransparent ? '0px 0px' : '1px 1px 10px #444'};
	position: relative;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0 10vw;
	z-index: 2;
	align-self: center;
	position: fixed;
	width: 80%;
	@media (max-width: 768px) {
		box-shadow: 1px 1px 20px #000;
		background-color: #040202;
		position: fixed;
		height: 8vh;
		top: 0;
		left: 0;
		right: 0;
		left: 0;
		-webkit-filter: none;
		filter: none;
	}
`;

export const Title = styled.div`
	font-size: 1.5rem;
	text-decoration: none;
	color: #ddd;
	font-weight: 600;
	display: inline-block;
	white-space: nowrap;
	margin: 0 1vw;
	transition: all 300ms ease-in;
	position: relative;
	cursor: pointer;
	:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0%;
		content: '.';
		color: transparent;
		background: #1e50bc;
		height: 3px;
		transition: all 0.6s ease-in-out;
	}
	:hover {
		::after {
			width: 100%;
		}
	}
`;

export const Toggle = styled.div`
	display: none;
	height: 100%;
	cursor: pointer;
	padding: 0 5vw;
	@media (max-width: 768px) {
		display: flex;
	}
`;

export const TitleContainer = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
`;

export const Navbox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		position: fixed;
		width: 100%;
		justify-content: flex-start;
		padding-top: 10vh;
		background-color: #151515;
		transition: all 0.3s ease-in;
		top: 8vh;
		left: ${(props) => (props.open ? '-100%' : '0')};
	}
`;

export const Hamburger = styled.div`
	background-color: #ddd;
	width: 30px;
	height: 3px;
	transition: all 0.3s linear;
	align-self: center;
	position: relative;
	transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

	::before,
	::after {
		width: 30px;
		height: 3px;
		background-color: #ddd;
		content: '';
		position: absolute;
		transition: all 0.3s linear;
	}

	::before {
		transform: ${(props) =>
			props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
		top: -10px;
	}

	::after {
		opacity: ${(props) => (props.open ? '0' : '1')};
		transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
		top: 10px;
	}
`;

export const NavItem = styled.span`
	text-decoration: none;
	color: #ddd;
	display: inline-block;
	white-space: nowrap;
	margin: 0 1vw;
	transition: all 300ms ease-in;
	position: relative;
	font-size: 1.1rem;
	cursor: pointer;
	:after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		width: 0%;
		content: '.';
		color: transparent;
		background: #1e50bc;
		height: 3px;
		transition: all 0.2s ease-in-out;
	}

	:hover {
		opacity: 1;
		::after {
			width: ${(props) => (props.isButton ? '0%' : '100%')};
		}
	}

	@media (max-width: 768px) {
		padding: 20px 0;
		font-size: 1.2rem;
		z-index: 6;
		:hover {
			opacity: 1;
			::after {
				width: 100%;
			}
		}
	}
`;

export const BlueDot = styled.span`
	background-image: webkit-linear-gradient(45deg, #1a8fe3 15%, #1e50bc 65%);
	background-image: linear-gradient(45deg, #1a8fe3 15%, #1e50bc 65%);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;
