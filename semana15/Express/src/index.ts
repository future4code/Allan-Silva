import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import { countries, country } from './countries';

const app: Express = express();

app.use(express.json());
app.use(cors());



app.get('/countries/all', (req: Request, res: Response) => {
    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    
    res
    .status(200)
    .send(result)
})

app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries

    if (req.query.name) {
        result = result.filter(
            country => country.name.includes(req.query.name as string)
        )
    }

    if (req.query.capital) {
        result = result.filter(
            country => country.capital.includes(req.query.capital as string)
        )
    }

    if (req.query.continent) {
        result = result.filter(
            country => country.continent.includes(req.query.continent as string)
        )
    } 
    else {
        res.status(404).send("Not found")
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found")
    }
})




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});