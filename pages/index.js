// import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import Categories from "../components/catalog/Categories";
import { prisma } from "../prisma/client";

function Home(props) {
    return (
        <Fragment>
            <Head>
                <title>Home</title>
            </Head>
            <Categories categories={props.categories} />
        </Fragment>
    );
}

export async function getStaticProps() {
    const categories = await prisma.category.findMany({
        where: {
            parent: null,
        },
        include: {
            parent: true,
        },
    });

    return {
        props: {
            categories: categories,
        },
    };
}

export default Home;
