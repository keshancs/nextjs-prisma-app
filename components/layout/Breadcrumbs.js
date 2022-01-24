import Link from "next/link";
import { Fragment } from "react";

function Breadcrumbs(props) {
    let active,
        parent,
        breadcrumbs = [];

    if (props.product) {
        breadcrumbs.push(props.product.category);

        parent = props.product.category.parent;

        active = (
            <li className="breadcrumb-item active" aria-current="page">
                {props.product.name}
            </li>
        );
    } else if (props.category) {
        parent = props.category.parent;

        active = (
            <li className="breadcrumb-item active" aria-current="page">
                {props.category.name}
            </li>
        );
    }

    while (parent) {
        breadcrumbs.push(parent);

        parent = parent.parent;
    }

    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {breadcrumbs.reverse().map((category) => (
                        <li className="breadcrumb-item">
                            <Link href={`/${category.slug}`}>
                                <a>{category.name}</a>
                            </Link>
                        </li>
                    ))}
                    {active}
                </ol>
            </nav>
        </Fragment>
    );
}

export default Breadcrumbs;
