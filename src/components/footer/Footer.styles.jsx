import styled from 'styled-components';

export const FooterContainer = styled.div`
	border-top: 1px solid #222;
	background: #000;
	text-align: center;
	padding: 1rem 0;
`;

export const Text = styled.div`
	font-size: 1rem;
	color: #868686;
	cursor: default;
	@media only screen and (max-width: 768px) {
		font-size: 0.9rem;
	}
`;
