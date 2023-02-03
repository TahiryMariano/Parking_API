const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class CustomerController {
    static listAll = async (req, res, next) => {
        try {
            //get customer from database
            const customers = await prisma.Customer.findMany({
                include: { parking_slot_reservations: true }
            })
            //send the customers object
            return res.json(customers)
        } catch (error) {
            next(error)
        }
    }

    static getOneById = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const customer = await prisma.Customer.findUnique({
                where: { id: id },
                include: { parking_slot_reservations: true }
            })
            res.json(customer)
        } catch (error) {
            res.status(401).send("customer not found")
        }
    }

    static newCustomer = async (req, res, next) => {
        try {
            const customer = await prisma.Customer.create({ data: req.body })

        } catch (error) {
            res.status(409).send("vehicule number already in use")
        }

        //if all are OK
        res.status(200).send("customer added")
    }

    static editCustomer = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const customer = await prisma.Customer.update({
                where: { id: id },
                data: req.body
            })
            res.json(customer)
        } catch (error) {
            res.status(404).send("customer not found")
        }
    }

    static deleteCustomer = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const deletedCustomer = await prisma.Customer.delete({
                where: { id: id }
            })
            // res.json(deletedCustomer)
        } catch (error) {
            res.status(404).send("customer not found")
        }

        //after all,send 204 status(no content )but accept response 
        res.status(204).send()
    }
}

module.exports = CustomerController;