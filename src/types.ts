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

export interface CardObj {
  name: string;
  likes: User[];
  link: string;
}
