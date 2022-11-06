import { Nav } from "./Nav";

export const Layout = ({ children, categories, seo }: any) => (
  <>
    <Nav categories={categories} />
    {children}
  </>
);
