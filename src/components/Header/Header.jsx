import React, { useState, useEffect } from 'react';
import { Link as ScrollTo } from 'react-scroll';
import navlinks from '../../data/navlinks';

import {
	Navigation,
	TitleContainer,
	Title,
	BlueDot,
	Toggle,
	Navbox,
	NavItem,
	ContactButton,
	LinkTo,
	Hamburger,
} from './header.styles';

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
				<Title>
					<ScrollTo to='home' smooth={true} duration={1000} offset={-500}>
						Godnon Dsilva<BlueDot>.</BlueDot>
					</ScrollTo>
				</Title>
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
					{navlinks.map((link, i) => (
						<>
							{link.isButton ? (
								<LinkTo to='blog'>
									<NavItem
										isButton={link.isButton}
										onClick={() => setNavbarOpen(!navbarOpen)}
									>
										<ContactButton>{link.title}</ContactButton>
									</NavItem>
								</LinkTo>
							) : (
								<ScrollTo
									key={i}
									to={link.url}
									duration={1000}
									smooth={true}
									offset={link.offsetVal}
								>
									<NavItem
										isButton={link.isButton}
										onClick={() => setNavbarOpen(!navbarOpen)}
									>
										{link.title}
									</NavItem>
								</ScrollTo>
							)}
						</>
					))}
				</Navbox>
			) : (
				// Desktop mode
				<Navbox open>
					{navlinks.map((link, i) => (
						<>
							{link.isButton ? (
								<NavItem
									isButton={link.isButton}
									onClick={() => setNavbarOpen(!navbarOpen)}
								>
									<LinkTo to={link.url}>
										<ContactButton>{link.title}</ContactButton>
									</LinkTo>
								</NavItem>
							) : (
								<NavItem
									isButton={link.isButton}
									onClick={() => setNavbarOpen(!navbarOpen)}
								>
									<ScrollTo
										key={i}
										to={link.url}
										duration={1000}
										smooth={true}
										offset={link.offsetVal}
									>
										{link.title}
									</ScrollTo>
								</NavItem>
							)}
						</>
					))}
				</Navbox>
			)}
		</Navigation>
	);
};

export default Header;
