import Link from "next/link";
import { Fragment } from "react";

function Products(props) {
    return (
        <Fragment>
            <div className="row g-3 mt-5">
                {props.products.map((product) => (
                    <div
                        key={product._id}
                        className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                    >
                        <Link href={`/${props.category.slug}/${product.slug}`}>
                            <a className="card text-decoration-none">
                                <div className="card-body">
                                    <h5 className="card-title text-dark">
                                        {product.name}
                                    </h5>
                                    <p className="card-text text-dark">
                                        {product.description}
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

export default Products;
