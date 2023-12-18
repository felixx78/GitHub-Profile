export type RootState = {
  search: {
    result: GithubUser;
  };
};

export type GithubUser = {
  user: {
    name: string;
    bio: string;
    avatar_url: string;
    followers: number;
    following: number;
    login: string;
    location: string;
  };
  repos: {
    id: number;
    name: string;
    description: string;
    stargazers_count: number;
    updated_at: string;
  }[];
};
