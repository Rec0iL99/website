import { Link } from "waku";
import { MyLink } from "./MyLink";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export const Header = () => {
  return (
    <header className="flex items-center gap-4 py-6 px-24 lg:fixed lg:left-0 lg:top-0 w-[100%]">
      <h2 className="text-lg font-bold tracking-tight text-primary-100">
        <Link to="/">Joel Mathew Koshy</Link>
      </h2>

      <div className="flex gap-6 ml-auto items-center">
        <MyLink location="/blog" type="Internal">
          Blog
        </MyLink>
        <MyLink location="/projects" type="Internal">
          Projects
        </MyLink>
        <MyLink location="https://github.com/Rec0iL99" type="External">
          <IconBrandGithub size={"21"} />
        </MyLink>
        <MyLink
          location="https://www.linkedin.com/in/joel-mathew-koshy"
          type="External"
        >
          <IconBrandLinkedin size={"21"} />
        </MyLink>
      </div>
    </header>
  );
};
