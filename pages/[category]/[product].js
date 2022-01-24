import Head from "next/head";
import { Fragment } from "react";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import { prisma } from "../../prisma/client";

function Product(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.product.name}</title>
            </Head>
            <Breadcrumbs product={props.product} />
            <h1>{props.product.name}</h1>
            <p>{props.product.description}</p>
        </Fragment>
    );
}

export async function getStaticPaths() {
    const products = await prisma.product.findMany({
        include: {
            category: true,
        },
    });

    return {
        fallback: false,
        paths: products.map((product) => ({
            params: {
                category: product.category.slug,
                product: product.slug,
            },
        })),
    };
}

export async function getStaticProps(context) {
    const product = await prisma.product.findUnique({
        where: {
            slug: context.params.product,
        },
        include: {
            category: {
                include: {
                    parent: true,
                },
            },
        },
    });

    return {
        props: {
            product: product,
        },
    };
}

export default Product;
