import React, { useState, useEffect } from 'react';
import { Link as ScrollTo } from 'react-scroll';
import CONTENT from '../../data/content';
import NAVIGATION_LINKS from '../../data/navlinks';

import {
	Navigation,
	TitleContainer,
	Title,
	BlueDot,
	Toggle,
	Navbox,
	NavItem,
	Hamburger,
} from './Header.styles';

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [isTransparent, setTransparency] = useState(true);
	useEffect(function mount() {
		function changeBackground() {
			if (window.scrollY >= 40) {
				setTransparency(false);
			} else {
				setTransparency(true);
			}
		}
		window.addEventListener('scroll', changeBackground);
		return function unMount() {
			window.removeEventListener('scroll', changeBackground);
		};
	});

	return (
		<Navigation isTransparent={isTransparent}>
			<TitleContainer>
				<ScrollTo to='home' smooth={true} duration={1000}>
					<Title>
						{CONTENT.name}
						<BlueDot>.</BlueDot>
					</Title>
				</ScrollTo>
			</TitleContainer>
			<Toggle
				navbarOpen={navbarOpen}
				onClick={() => setNavbarOpen(!navbarOpen)}
			>
				{navbarOpen ? <Hamburger open /> : <Hamburger />}
			</Toggle>
			{navbarOpen ? (
				// Mobile mode
				<Navbox>
					{NAVIGATION_LINKS.map((link, i) => (
						<>
							(
							<ScrollTo key={i} to={link.url} duration={1000} smooth={true}>
								<NavItem onClick={() => setNavbarOpen(!navbarOpen)}>
									{link.title}
								</NavItem>
							</ScrollTo>
							)
						</>
					))}
				</Navbox>
			) : (
				// Desktop mode
				<Navbox open>
					{NAVIGATION_LINKS.map((link, i) => (
						<>
							(
							<NavItem onClick={() => setNavbarOpen(!navbarOpen)}>
								<ScrollTo key={i} to={link.url} duration={1000} smooth={true}>
									{link.title}
								</ScrollTo>
							</NavItem>
							)
						</>
					))}
				</Navbox>
			)}
		</Navigation>
	);
};

export default Header;
