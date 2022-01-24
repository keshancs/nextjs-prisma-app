import { prisma } from "../../prisma/client";

async function ApiProducts(request, response) {
    switch (request.method) {
        case "GET":
            const products = await prisma.product.findMany();
            response.status(200).json(products);
        case "POST":
            await prisma.product.create({
                data: request.body,
            });
            response.status(201).json({ message: "Product inserted!" });
    }

    response.status(200).json({});
}

export default ApiProducts;
