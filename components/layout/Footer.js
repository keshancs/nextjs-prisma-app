import Link from "next/link";
import { Fragment } from "react";

function Footer() {
    return (
        <Fragment>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link px-2 text-muted">Home</a>
                            </Link>
                        </li>
                    </ul>
                    <p className="text-center text-muted">
                        &copy; 2021 Company, Inc
                    </p>
                </footer>
            </div>
        </Fragment>
    );
}

export default Footer;
