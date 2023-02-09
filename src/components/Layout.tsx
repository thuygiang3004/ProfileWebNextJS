import Nav from "./Nav";
import Meta from "./Meta";

const Layout: React.FunctionComponent<any> = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
