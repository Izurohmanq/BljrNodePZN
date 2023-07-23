import supertest from "supertest"
import { PrismaClients } from "../src/applications/database.js"
import { web } from "../src/applications/web.js"


describe('POST /api/users', function() { 

    afterEach(async () => {
        await PrismaClients.user.deleteMany({
            where: {
                username: "kumalala"
            }
        })
    })


    it('should can be register new user', async() => {
        const result = await supertest(web).post('/api/users').send({
            username: "kumalala",
            password: "rahasia",
            name: "kumalala"
        })

        expect(result.status).toBe(200)
        expect(result.body.data.username).toBe("kumalala")
        expect(result.body.data.name).toBe("kumalala")
        expect(result.body.data.password).toBeUndefined()
    })
 })