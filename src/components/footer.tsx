import { IconBrandReact, IconExternalLink } from "@tabler/icons-react";
import { ExternalLink } from "./MyExternalLink";

export const Footer = () => {
  return (
    <footer className="p-6 text-primary-200 lg:fixed lg:bottom-0 lg:left-0 w-[100%]">
      <div className="flex items-center gap-2 justify-center">
        Built using the{" "}
        <ExternalLink customHref="https://github.com/dai-shi/waku">
          Waku
        </ExternalLink>{" "}
        React framework and <IconBrandReact /> Server Components
      </div>
    </footer>
  );
};
