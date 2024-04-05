import { FaStore, FaUpload } from "react-icons/fa";
import { MdCardGiftcard, MdCardTravel } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

interface iProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const Header = () => {
  const storeData = useSelector((state: any) => state.cart);
  const navData: iProps[] = [
    {
      name: "purchase product",
      link: "",
      icon: <MdCardGiftcard />,
    },
    {
      name: "my store",
      link: "",
      icon: <FaStore />,
    },
  ];
  return (
    <div>
      <main className="flex justify-between px-10 h-[70px] border-b items-center">
        <div className="cursor-pointer font-bold text-[18px]">
          <NavLink to="/">Logo</NavLink>
        </div>

        <NavLink
          to="/cart"
          className="w-8 h-8 rounded-full hover:bg-slate-200 cursor-pointer transition-all duration-300 flex items-center justify-center relative "
        >
          <p className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-[10px] text-white rounded-full flex items-center justify-center">
            {storeData.length}
          </p>{" "}
          <MdCardTravel className="" />
        </NavLink>

        <section className="flex gap-6">
          {navData?.map(({ name, link, icon }: iProps) => (
            <NavLink
              to={`${link}`}
              className="cursor-pointer flex items-center gap-1"
            >
              {icon}
              <span className="text-[12px] uppercase font-medium">{name}</span>
            </NavLink>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Header;
