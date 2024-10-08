const express = require("express");
const { PrismaClient } = require("@prisma/client");
// const customerRoutes = require('./routes/customerRouter');
const prisma = new PrismaClient();
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200, 
        // Some legacy browsers choke on 204
    })
);


// Use the customer routes under the '/api/customer' path
// app.get('/api/customer', customerRoutes);

app.get("/user", async (req: any, res: any) => {
    try {
        const users = await prisma.user.findMany({});
        res.send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
// get by id
app.get("/user/:id", async (req: any, res: any) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// create
app.post("/user/", async (req: any, res: any) => {
    try {
        const newUser = await prisma.user.create({
			data: {
				name: req.body.name,
				email: req.body.email,
			},
		});
        res.send(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// update
app.post("/user/:id", async (req: any, res: any) => {
    const id = req.params.id;
    try {
        const updateUser = await prisma.user.update({
            where: {
                id: parseInt(id),
            },
            data: {
                name: req.body.name,
            },
        });
        res.send(updateUser);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// delete by id
app.delete("/user/:id", async (req: any, res: any) => {
    const id = req.params.id;
    try {
        await prisma.user.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.send(true);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.get("/customer", async (req: any, res: any) => {
    try {
        const customers = await prisma.customer.findMany({});
        res.send(customers);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/customer/:id", async (req: any, res: any) => {
    const id = req.params.id;
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id) },
        });
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
