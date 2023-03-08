export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface User {
  id: number;
  albums: Album[];
  active: boolean;
}
