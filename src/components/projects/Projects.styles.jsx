import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #111;
	@media only screen and (max-width: 1268px) {
		background-color: #1a1a1a;
	}
`;

export const ProjectsContainer = styled.div`
	width: 1200px;
	@media only screen and (max-width: 1268px) {
		width: 400px;
	}
`;

export const HeadingContainer = styled.div`
	font-weight: 800;
	font-size: 2rem;
	color: #ddd;
	@media only screen and (max-width: 768px) {
		padding: 0 30px 0 30px;
		padding-top: 40px;
		font-size: 1.9rem;
	}
	padding-top: 80px;
	cursor: default;
`;

export const CardContainer = styled.div`
	@media (min-width: 401px) and (max-width: 1268px) {
		display: flex;
		flex-wrap: wrap;
		justfy-content: center;
		margin: 20px 40px 80px 40px;
		width: 80%;
	}
	@media only screen and (max-width: 400px) {
		display: flex;
		flex-wrap: wrap;
		justfy-content: center;
		margin: 20px 27px 80px 33px;
		width: 80%;
	}
	margin: 20px 0 80px 0;
	display: flex;
	flex-wrap: no-wrap;
	justify-content: center;
`;

export const CardsContainer = styled.div`
	padding-top: 20px;
`;

export const DescriptionContainer = styled.span`
	color: #868686;
	padding: 10px 20px 10px 0;
	@media only screen and (max-width: 768px) {
		padding: 10px 0 10px 0;
		display: block;
		width: 100%;
	}
	width: 720px;
`;
export const DescriptionTitle = styled.div`
	font-weight: 800;
	font-size: 1.8rem;
	color: #bbb;
	@media only screen and (max-width: 768px) {
		font-weight: 600;
		font-size: 1.8rem;
	}
	cursor: default;
`;

export const Skill = styled.span`
	font-weight: 600;
	font-size: 15px;
	cursor: default;
	color: #0070c9;
	border: 1px solid #0070c9;
	text-align: center;
	@media (max-width: 768px) {
		font-size: 1rem;
		margin-bottom: 5px;
	}
	display: inline-flex;
	flex-wrap: wrap;
	padding: 2px 10px;
	margin-right: 10px;
`;

export const Description = styled.div`
	color: #868686;
	font-weight: 400;
	font-size: 1.1rem;
	padding-bottom: 15px;
	@media only screen and (max-width: 768px) {
		font-weight: 200;
		font-size: 1rem;
		width: 100%;
	}
	cursor: default;
`;

export const Featured = styled.div`
	font-size: 1.1rem;
	font-weight: 400;
	color: #0070c9;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
	cursor: default;
`;

export const DescriptionButtons = styled.div`
	font-weight: 600;
	font-size: 20px;
	padding-top: 20px;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1.2rem;
		justify-content: center;
	}
`;

export const ImageContainer = styled.img`
	display: inline-block;
	width: 480px;
	height: 300px;
	@media only screen and (max-width: 768px) {
		display: block;
		width: 300px;
		height: 200px;
		margin-left: 0px;
	}
	opacity: 0.85;
	margin-left: 1rem;
	border: 1px solid #0070c9;
	border-top: 4px solid #0070c9;
`;

export const Source = styled.a`
	text-decoration: none;
	color: #bbb;
	pointer-events: ${(props) => (props.readSource ? 'auto' : 'none')};
	:hover {
		color: ${(props) => (props.readSource ? '#0070c9' : '#000')};
	}
	display: flex;
	align-items: center;
	transition: all 200ms ease-out;
`;

export const Preview = styled.a`
	text-decoration: none;
	background-color: #1e50bc;
	padding: 5px 15px 5px 15px;
	font-size: 1.1rem;
	:hover {
		background-color: #0070c9;
	}
	cursor: pointer;
	color: #ddd;
	margin: 0 0 0 10px;
	transition: all 200ms ease-out;
`;
