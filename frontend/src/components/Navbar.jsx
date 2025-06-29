import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="my-5 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="flex shrink-0">
            <Link
              aria-current="page"
              className="flex items-center text-2xl italic font-bold bg-gradient-to-r from-slate-900 via-violet-600 to-indigo-600 bg-clip-text text-transparent"
              to="/"
            >
              <p>Hamro-Books</p>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-3">
            <Link to={"/create-page"}>
              <Button buttonName={"+ Create"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
