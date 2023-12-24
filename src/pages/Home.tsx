import { useSelector } from "react-redux";
import { RootState } from "../lib/defition";

import startIcon from "../assets/Star.svg";
import forkIcon from "../assets/Nesting.svg";

const Home = () => {
  const userData = useSelector((state: RootState) => state.search.result);
  const currentDay = new Date();

  const howManyDays = (dateString: string) => {
    const date = new Date(dateString);

    const diffTime = currentDay.getTime() - date.getTime();

    const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

    return diffDays + " days ago";
  };

  if (userData) {
    return (
      <div className="mx-auto max-w-[1000px] px-6 pb-6">
        {/* user data */}
        <div className="mb-8 flex flex-col items-center  gap-6 pt-4 lg:mb-4 lg:flex-row">
          <img
            className="mt-[-80px] rounded-lg bg-[#20293a] p-2"
            height={120}
            width={120}
            src={userData.user.avatar_url}
          />
          <div className="text-center lg:hidden">
            <a
              href={userData.user.html_url}
              target="_blank"
              className="mb-2 block text-3xl"
            >
              {userData.user.name}
            </a>
            <p className="text-lg text-[#98a3b5]">{userData.user.bio}</p>
          </div>

          <div className="flex items-center gap-4 divide-x-[1px] divide-[#364153] rounded-lg bg-[#111629] px-6 py-1">
            <div className="py-3 text-[#3b4757]">Folowers</div>
            <div className="py-3 pl-6">{userData.user.followers}</div>
          </div>

          <div className="flex items-center gap-4 divide-x-[1px] divide-[#364153] rounded-lg bg-[#111629] px-6 py-1">
            <div className="py-3 text-[#3b4757]">Folowing</div>
            <div className="py-3 pl-6">{userData.user.following}</div>
          </div>

          {userData.user.location && (
            <div className="flex items-center gap-4 divide-x-[1px] divide-[#364153] rounded-lg bg-[#111629] px-6 py-1">
              <div className="py-3 text-sm text-[#3b4757] sm:text-base">
                Location
              </div>
              <div className="py-3 pl-6 text-sm sm:text-base">
                {userData.user.location}
              </div>
            </div>
          )}
        </div>

        <div className="mb-6 hidden lg:block">
          <a
            href={userData.user.html_url}
            target="_blank"
            className="mb-1 block text-3xl"
          >
            {userData.user.name}
          </a>
          <p className="text-lg text-[#98a3b5]">{userData.user.bio}</p>
        </div>

        {/* repos */}
        <div className="mb-5 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
          {userData.repos.slice(0, 4).map((repo) => (
            <a
              target="_blank"
              href={repo.html_url}
              style={{
                background: "linear-gradient(to right, #101729, #1b1a44)",
              }}
              className="block rounded-lg p-6"
              key={repo.id}
            >
              <h1 className="mb-2 text-xl">{repo.name}</h1>
              <p className="mb-4 text-sm text-[#98a3b5]">{repo.description}</p>
              <div className="flex items-center gap-4 text-[#98a3b5]">
                <div className="flex items-center gap-2">
                  <img src={forkIcon} />
                  <span>{repo.forks}</span>
                </div>

                <div className="flex items-center gap-2">
                  <img src={startIcon} />
                  <span>{repo.stargazers_count}</span>
                </div>

                <p>{howManyDays(repo.updated_at)}</p>
              </div>
            </a>
          ))}
        </div>

        {userData.repos.length > 4 && (
          <div className="flex justify-center">
            <a
              className="text-[#97a4b7]"
              href={userData.user.html_url}
              target="_blank"
            >
              View all repositories
            </a>
          </div>
        )}
      </div>
    );
  }

  return <div className="mt-4 text-center text-2xl">Not Found</div>;
};

export default Home;
