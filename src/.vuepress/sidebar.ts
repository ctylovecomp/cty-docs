import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "HTML",
      icon: "file-code",
      prefix: "MeLearnHTML/",
      link: "MeLearnHTML/",
      children: "structure",
    },
    {
      text: "JS",
      icon: "file-code",
      prefix: "MeLearnJS/",
      link: "MeLearnJS/",
      children: "structure",
    },
    {
      text: "C语言",
      icon: "code",
      prefix: "MeLearnC/",
      link: "MeLearnC/",
      children: "structure",
    },
    {
      text: "阮一峰大佬GitHub",
      icon: "person-chalkboard",
      link: "https://github.com/ruanyf",
    },
  ],
});
