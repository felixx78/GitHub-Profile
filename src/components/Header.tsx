import headerBg from "../assets/header-bg.png";
import searchIcon from "../assets/Search.svg";

const Header = () => {
  return (
    <header
      className="min-h-[250px] pt-6"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Search />
    </header>
  );
};

const Search = () => {
  return (
    <div className="relative mx-auto w-[400px]">
      <img className="absolute left-0 top-0 h-full p-2" src={searchIcon} />
      <input
        className="w-full rounded-md bg-[#20293a] py-2 pl-10 pr-2 text-[#CDD5E0] outline-none"
        type="text"
        placeholder="username"
      />
    </div>
  );
};

export default Header;
