import { Link } from "waku";

export const MyLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Link
      className="text-primary-100 hover:text-primary-200 transition ease-in-out"
      to="/"
    >
      {children}
    </Link>
  );
};
