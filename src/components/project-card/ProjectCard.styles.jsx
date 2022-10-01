import styled from 'styled-components';

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 40px;

	@media (max-width: 1268px) {
		flex-direction: column;
	}
`;

export const Card = styled.span`
	color: #868686;
	width: 60%;

	@media (max-width: 1268px) {
		width: 100%;
	}
`;

export const ProjectTitle = styled.div`
	font-weight: 600;
	font-size: 1.8rem;
	color: #bbb;
`;

export const SkillContainer = styled.div`
	display: flex;
	gap: 10px;
	padding-bottom: 15px;
`;

export const Skill = styled.span`
	font-weight: 600;
	font-size: 14px;
	color: #0070c9;
	border: 1px solid #0070c9;
	padding: 2px 10px;
`;

export const Description = styled.div`
	color: #868686;
	font-weight: 400;
	font-size: 1.1rem;
	padding-bottom: 15px;
`;

export const Featured = styled.div`
	font-size: 1.1rem;
	font-weight: 400;
	color: #0070c9;
`;

export const ButtonContainer = styled.div`
	font-weight: 600;
	font-size: 20px;
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Source = styled.a`
	text-decoration: none;
	color: #bbb;
	pointer-events: ${(props) => (props.readSource ? 'auto' : 'none')};
	display: flex;
	align-items: center;
	transition: all 200ms ease-out;

	:hover {
		color: ${(props) => (props.readSource ? '#0070c9' : '#000')};
	}
`;

export const Preview = styled.a`
	text-decoration: none;
	color: #ddd;
	background-color: #1e50bc;
	padding: 5px 15px;
	font-size: 1rem;
	transition: all 200ms ease-out;
	cursor: pointer;

	:hover {
		background-color: #0070c9;
	}
`;

export const ImageContainer = styled.div`
	max-width: 400px;
	opacity: 0.85;
	border: 1px solid #0070c9;
	border-top: 4px solid #0070c9;
`;
