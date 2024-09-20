import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

const handleCustomer = {
    getCustomers: async (req: Request, res: Response) => {
        try {
            const customers = await prisma.customer.findMany();
            res.json(customers);
        } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
}

// Get all customers
router.get("/", async (req: Request, res: Response) => {
    try {
        const customers = await prisma.customer.findMany();
        res.json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Get customer by ID
router.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const customer = await prisma.customer.findUnique({
            where: { id },
        });
        if (!customer) {
            return res.status(404).send("Customer not found");
        }
        res.json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Create a new customer
// router.post("/", async (req: Request, res: Response) => {
//     try {
//         const { name, email } = req.body;
//         const newCustomer = await prisma.customer.create({
//             data: {
//                 name,
//                 email,
//             },
//         });
//         res.status(201).json(newCustomer);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// Update a customer by ID
// router.put("/:id", async (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     try {
//         const { name, email } = req.body;
//         const updatedCustomer = await prisma.customer.update({
//             where: { id },
//             data: { name, email },
//         });
//         res.json(updatedCustomer);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// Delete a customer by ID
router.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        await prisma.customer.delete({
            where: { id },
        });
        res.sendStatus(204);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// export default router;
module.exports = handleCustomer;
