import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactContainer = styled.div`
	background: #040402;
	@media only screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 6rem;
	}
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 500px;
	@media only screen and (max-width: 768px) {
		width: 300px;
		height: 500px;
		display: block;
	}
`;

export const DataContainer = styled.span`
	padding: 10px auto;
`;

export const HeadingContainer = styled.div`
	font-weight: 800;
	font-size: 2.5rem;
	color: #ddd;
	cursor: default;
	@media only screen and (max-width: 768px) {
		padding-bottom: 0;
		font-size: 2rem;
	}
	padding-bottom: 1rem;
`;

export const DescriptionContainer = styled.div`
	display: inline-block;
	@media only screen and (max-width: 768px) {
		padding-bottom: 3rem;
	}
`;

export const Description = styled.div`
	font-size: 1.1rem;
	color: #868686;
	cursor: default;
	width: 500px;
	padding-bottom: 2rem;
	@media only screen and (max-width: 768px) {
		width: 300px;
	}
`;

export const TextContainer = styled.div`
	width: 600px;
	@media only screen and (max-width: 768px) {
		width: 200px;
	}
`;

export const LightButton = styled(Link)`
	padding: 5px 15px;
	background-color: #1e50bc;
	color: #ddd;
	font-size: 1.2rem;
	:hover {
		background-color: #0070c9;
	}
	transition: all ease 500ms;
	text-decoration: none;
	cursor: pointer;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
	text-align: center !important;
`;

export const IconContainer = styled.div``;

export const IconData = styled.a`
	color: white;
	margin: 15px 10px;
	text-decoration: none;
	display: flex;
	align-items: center;
`;

export const IconText = styled.span`
	color: #868686;
	padding-left: 1rem;
	:hover {
		color: #bbb;
	}
	transition: all ease 300ms;
`;

export const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
	color: #1e50bc;
	:hover {
		color: #0070c9;
	}
	transition: all ease 300ms;
`;
