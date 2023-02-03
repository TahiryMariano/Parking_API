const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class RegularPassController {

    static newRegularPass = async (req, res, next) => {
        try {
            const regularPass = await prisma.Regular_Pass.create({
                data: req.body
            })

        } catch (error) {
            res.status(209).send("regular pass invalid")
        }
        //OL
        res.status(200).send("regularPass created")
    }

    static getAllRegularPass = async (req, res, next) => {
        try {
            const RegularPasses = await prisma.Regular_Pass.findMany()
            res.json(RegularPasses)
        } catch (error) {
            res.status(404).send("not found")
        }
    }

    static getOneRegularPassById = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const RegularPass = await prisma.Regular_Pass.findUnique({
                where: { id: id }
            })
            res.json(RegularPass)
        } catch (error) {
            res.status(401).send("Regular pass not found")
        }
    }

    static editRegularPass = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const RegularPass = await prisma.Regular_Pass.update({
                where: { id: id },
                data: req.body
            })
            res.json(RegularPass)
        } catch (error) {
            res.status(404).send("Regular pass not found")
        }
    }

    static deleteRegularPass = async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10)
            const regularPass = await prisma.Regular_Pass.delete({
                where: { id: id }
            })
        } catch (error) {
            res.status(404).send("Regular pass not found")
        }

        res.status(204).send()
    }
}

module.exports = RegularPassController
