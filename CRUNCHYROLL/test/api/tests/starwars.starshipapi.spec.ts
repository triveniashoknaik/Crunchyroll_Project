import {test, expect } from '@playwright/test'
import {StarWarsStarships} from  '../model/starwars.starship'
import {Base} from  '../model/starwars.base'


//Test StarWars Starship API
//Group tests into a suite and run parallel
test.describe.parallel("StarWars Starships API Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get all the StarWars starship count
    test("StarWars Starships count API Test", async({request}) => {
        const response = await request.get(`${baseUrl}/starships`)
        const responseBody = JSON.parse(await response.text());
        expect (response.status()).toBe(200) //Assert Response Status
        expect(Object.keys(responseBody.results).length).toBe(10) //Assert the starships count value

    })

    //Test to get all details of a StarWar Starship - Death Star
    test("Get all details of a Starship Death Star ", async({request}) => {
        const id = 9;
        const response = await request.get(`${baseUrl}/starships/${id}/`)
        const responseBody = JSON.parse(await response.text())
        const defaultPeople = new StarWarsStarships()
        expect (response.status()).toBe(200)
        expect(responseBody.result.properties).toMatchObject(defaultPeople as unknown as Record<string, unknown>)//Assert all the details of Starship - Death Star

    })

    //Test Invalid End Point for Starship
    test("StartWars Starships API Test - Assert Invalid Endpoint", async({request}) => {
        const id = 1;
        const response = await request.get(`${baseUrl}/starships/${id}/`)
        expect (response.status()).toBe(404)
        })
})