import { IconExternalLink } from "@tabler/icons-react";

export const ExternalLink = ({
  children,
  customHref,
}: {
  children: React.ReactNode;
  customHref: string;
}) => {
  return (
    <a
      className="flex items-center gap-2 `text-primary-100 hover:text-primary-300 transition ease-in-out"
      href={customHref}
      target="_blank"
    >
      {children} <IconExternalLink size={"16"} />
    </a>
  );
};
