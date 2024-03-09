import {test, expect } from '@playwright/test'
import {StarWarsSpecies} from  '../model/starwars.species'
import {Base} from  '../model/starwars.base'


//Test StarWars Species API
//Group tests into a suite and run parallel
test.describe.parallel("StarWars Species API Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get all the StarWars species count
    test("StarWars Species count API Test ", async({request}) => {
        const response = await request.get(`${baseUrl}/species`)
        const responseBody = JSON.parse(await response.text());
        expect (response.status()).toBe(200) //Assert species count value
        expect(Object.keys(responseBody.results).length).toBe(10) //Assert the species count value

    })

    // Test to get all details of a StarWar Specie - Wookie
    test("Get all details of a StarWar Specie Wookie", async({request}) => {
        const id = 3;
        const response = await request.get(`${baseUrl}/species/${id}/`)
        const responseBody = JSON.parse(await response.text())
        const defaultSpecies = new StarWarsSpecies()
        expect (response.status()).toBe(200)
        expect(responseBody.result.properties).toMatchObject(defaultSpecies as unknown as Record<string, unknown>) //Assert all the details of Specie - Wookie
    })

    //Test Invalid End Point for Specie
    test("StartWars Species API Test - Assert Invalid Endpoint", async({request}) => {
        const id = 99;
        const response = await request.get(`${baseUrl}/species/${id}/`)
        expect (response.status()).toBe(404)
        })
})