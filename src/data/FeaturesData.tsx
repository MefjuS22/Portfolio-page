import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiStyledcomponents } from 'react-icons/si';
const iconStyle = (Icon: any) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'React',
		icon: iconStyle(FaReact),
		imgClass: 'one',
	},
	{
		name: 'JavaScript',
		icon: iconStyle(SiJavascript),
		imgClass: 'two',
	},
	{
		name: 'TypeScript',
		icon: iconStyle(SiTypescript),
		imgClass: 'three',
	},
	{
		name: 'HTML 5',
		icon: iconStyle(FaHtml5),
		imgClass: 'four',
	},
	{
		name: 'CSS',
		icon: iconStyle(FaCss3Alt),
		imgClass: 'five',
	},
	{
		name: 'Styled Components',
		icon: iconStyle(SiStyledcomponents),
		imgClass: 'six',
	},
];