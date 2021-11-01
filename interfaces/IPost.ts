export interface IPost {
  title: string;
  category: string;
  views: string;
  photo: string;
}

export interface IUserPost {
  at: string;
  posts: IPost[];
}
