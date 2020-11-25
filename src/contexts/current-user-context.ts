import React, { ContextType } from 'react';
import { User } from '../types';

export const CurrentUserContext = React.createContext<User | undefined>(undefined);
