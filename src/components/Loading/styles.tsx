/**
 * Developed by: Inatel Competence Center
 * Copyright 2019, Prática
 * Author: Lucas Marciano
 * All rights are reserved. Reproduction in whole or part is
 * prohibited without the written consent of the copyright owner.
 */

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const Spin = styled.div`
	animation: spin 2s linear infinite;
	border: 10px solid #f7f7f7;
	border-radius: 50%;
	border-top: 10px solid #104079;
	height: 60px;
	width: 60px;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
