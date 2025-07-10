export const HomeController = (req, res, next) => {
  res.render("home", {
    title: "Express Minco",
    layout: false,
  });
};

export const DocsController = (req, res, next) => {
  res.render("docs", {
    title: "Docs - Express Minco",
    layout: "layouts/main",
  });
};

export const helloController = (req, res, next) => {
  res
    .status(200)
    .json({ message: "Hello from modified express-minco template!" });
};
