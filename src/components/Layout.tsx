import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout: React.FunctionComponent<any> = ({ children }: any) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
