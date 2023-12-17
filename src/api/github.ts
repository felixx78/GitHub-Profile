import { GithubUser } from "../lib/defition";

export const fetchByUsername = async (username: string) => {
  const userResponse = await fetch(`https://api.github.com/users/${username}`);
  const userData = await userResponse.json();

  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const reposData = await reposResponse.json();

  const data = {
    user: userData,
    repos: reposData,
  };

  return data as GithubUser;
};
