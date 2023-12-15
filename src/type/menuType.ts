export interface typeMenuChirl {
  nameMenuChirl: string;
}
export interface typeMenuNav {
  key: number;
  nameMenu: string;
  active: boolean;
  menuChirl?: typeMenuChirl[];
}
