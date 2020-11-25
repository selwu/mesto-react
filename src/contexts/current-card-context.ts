import React from 'react';
import { CardObj } from '../types';

export const CurrentCardContext = React.createContext<CardObj[] | undefined>(undefined);
