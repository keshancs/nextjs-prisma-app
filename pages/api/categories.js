import { prisma } from "../../prisma/client";

async function ApiCategories(request, response) {
    switch (request.method) {
        case "GET":
            const categories = await prisma.category.findMany();
            response.status(200).json(categories);
        case "POST":
            await prisma.category.create({
                data: request.body,
            });
            response.status(201).json({ message: "Category inserted!" });
    }

    client.close();

    response.status(200).json({});
}

export default ApiCategories;
