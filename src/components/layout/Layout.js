
import Header from "./Header";
import MainFooter from "./MainFooter";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main
        style={{
          width: "90%",
          // maxWidth: "42rem",
          maxWidth: "50rem",
          margin: "3rem auto",
        
        }}>
        {props.children}
      </main>
      <MainFooter />
    </div>
  );
};

export default Layout;
