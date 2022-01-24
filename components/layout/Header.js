import Link from "next/link";
import { Fragment } from "react";

function Header() {
    return (
        <Fragment>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <ul className="nav col-md-6 offset-md-3 mb-2 justify-content-center mb-md-0">
                    <li>
                        <Link href="/">
                            <a className="nav-link px-2">Home</a>
                        </Link>
                    </li>
                </ul>
            </header>
        </Fragment>
    );
}

export default Header;
