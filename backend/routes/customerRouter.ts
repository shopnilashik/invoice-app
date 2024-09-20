import { Router, Request, Response } from "express";
const customer = require('./customer')

const router = Router();

router.get('/', customer.getCustomer)