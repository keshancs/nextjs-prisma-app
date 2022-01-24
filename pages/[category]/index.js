import Head from "next/head";
import { Fragment } from "react";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import Categories from "../../components/catalog/Categories";
import Products from "../../components/catalog/Products";
import { prisma } from "../../prisma/client";

function Category(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.category.name}</title>
            </Head>
            <Breadcrumbs category={props.category} />
            <h1>{props.category.name}</h1>
            <p>{props.category.description}</p>
            <Categories categories={props.categories} />
            <Products category={props.category} products={props.products} />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const categories = await prisma.category.findMany();

    return {
        fallback: false,
        paths: categories.map((category) => ({
            params: { category: category.slug },
        })),
    };
}

export async function getStaticProps(context) {
    const category = await prisma.category.findUnique({
        where: {
            slug: context.params.category,
        },
        include: {
            parent: true,
        },
    });

    const categories = await prisma.category.findMany({
        where: {
            parent: { id: category.id },
        },
    });

    const products = await prisma.product.findMany({
        where: {
            category: { id: category.id },
        },
    });

    return {
        props: {
            category: category,
            categories: categories,
            products: products,
        },
    };
}

export default Category;
