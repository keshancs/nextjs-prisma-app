import Link from "next/link";
import { Fragment } from "react";

function Categories(props) {
    if (!props.categories.length) {
        return <Fragment></Fragment>;
    }

    return (
        <Fragment>
            <div className="row g-3 mt-5">
                {props.categories.map((category) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <Link href={`/${category.slug}`}>
                            <a className="card text-decoration-none">
                                <div className="card-body">
                                    <h5 className="card-title text-dark">
                                        {category.name}
                                    </h5>
                                    <p className="card-text text-dark">
                                        {category.description}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </Fragment>
    );
}

export default Categories;
