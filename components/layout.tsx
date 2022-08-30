import Navbar from "../components/Navbar/Navbar";
import { ContextProvider } from "../context/context";
interface props {
  children: JSX.Element;
}

function Layout(props: props) {
  return (
    <ContextProvider>
      <>
        <Navbar />
        {props.children}
      </>
    </ContextProvider>
  );
}

export default Layout;
