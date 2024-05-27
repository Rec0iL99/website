import { Link } from "waku";

export const MyLink = ({
  children,
  location,
  type,
}: {
  children: React.ReactNode;
  location: string;
  type: "Internal" | "External";
}) => {
  // links that go to an outside site
  if (type === "External") {
    return (
      <a
        className="text-primary-100 hover:text-primary-200 transition ease-in-out"
        href={location}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      className="text-primary-100 hover:text-primary-200 transition ease-in-out"
      to={location}
    >
      {children}
    </Link>
  );
};
