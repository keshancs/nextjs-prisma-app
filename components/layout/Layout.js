import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
    return (
        <div className="container">
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
