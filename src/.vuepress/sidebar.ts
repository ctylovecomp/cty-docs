import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "HTML目录",
      icon: "file-code",
      prefix: "/MeLearnHTML/",
      link: "MeLearnHTML/",
      children: [
        "intro.md",
        "url.md",
        "attribute.md",
        "encode.md",
        "semantic.md",
        "text.md",
        "list.md",
        "image.md",
      ],
    },
    {
      text: "JS目录",
      icon: "file-code",
      prefix: "MeLearnJS/",
      link: "MeLearnJS/",
      children: "structure",
    },
    {
      text: "C语言目录",
      icon: "file-code",
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
