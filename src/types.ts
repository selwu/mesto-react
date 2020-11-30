import { FormEvent } from 'react';

export interface User {
  about: string;
  avatar?: string;
  cohort?: string;
  name: string;
  _id?: string;
}

export interface Popup {
  title: string;
  name: string;
  onClose: () => void;
  children: JSX.Element;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface CardObj {
  name: string;
  likes: User[];
  link: string;
}

export interface MainType {
  onEditProfile: () => void;
  onAddPlace: () => void;
  onCardClick: (link: string | undefined) => void;
}

export interface EditProfileType {
  onClose: () => void;
  onUpdateUser: ({}: User) => void;
}
