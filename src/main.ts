console.log("Firing !!!!!!!!!!!!!!");

type TopLevelProps = "user" | "current_user" | "user_public" | "timeline";

interface SecondLevelProps {
  href: string;
  type: string;
}

type Links = Record<TopLevelProps, SecondLevelProps>;

const links: Links = {
  user: {
    href: "url",
    type: "abc",
  },
  current_user: {
    href: "url",
    type: "abc",
  },
  user_public: {
    href: "url",
    type: "abc",
  },
  timeline: {
    href: "url",
    type: "abc",
  },
};
