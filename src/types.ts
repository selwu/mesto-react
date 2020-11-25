export interface User {
  about: string;
  avatar: string;
  cohort: string;
  name: string;
  _id: string;
}

export interface Popup {
  title: string;
  name: string;
  onClose: () => void;
  children: JSX.Element;
}

export interface CardsOgj {}

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
