import React from 'react';

import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaSass } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiStyledcomponents } from 'react-icons/si';
const iconStyle = (Icon: any) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: 'React',
    icon: iconStyle(FaReact),
    imgClass: 'one',
  },
  {
    name: 'Vue.js',
    icon: iconStyle(FaVuejs),
    imgClass: 'two',
  },
  {
    name: 'JavaScript',
    icon: iconStyle(SiJavascript),
    imgClass: 'three',
  },
  {
    name: 'TypeScript',
    icon: iconStyle(SiTypescript),
    imgClass: 'four',
  },
  {
    name: 'Sass',
    icon: iconStyle(FaSass),
    imgClass: 'six',
  },
  {
    name: 'Styled Components',
    icon: iconStyle(SiStyledcomponents),
    imgClass: 'seven',
  },
];
