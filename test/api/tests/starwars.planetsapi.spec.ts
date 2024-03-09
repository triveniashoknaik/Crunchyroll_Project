import {test, expect } from '@playwright/test'
import {StarWarsPlanets} from  '../model/starwars.planets'
import {Base} from  '../model/starwars.base'

//Test StarWars Planets API
//Group tests into a suite and run parallel
test.describe.parallel("StarWars Planets API Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get all the StarWars planets count
    test("StarWars Planets count API Test", async({request}) => {
        const response = await request.get(`${baseUrl}/planets`)
        const responseBody = JSON.parse(await response.text());
        expect (response.status()).toBe(200) // Assert Response Status
        expect(Object.keys(responseBody.results).length).toBe(10) // Assert planet count value

    })

    //Test to get all the details of StarWars planet - Tatooine
    test("Get all details of a StarWar Planet Tatooine", async({request}) => {
        const id = 1;
        const response = await request.get(`${baseUrl}/planets/${id}/`)
        const responseBody = JSON.parse(await response.text())
        const defaultPlanets = new StarWarsPlanets()
        expect (response.status()).toBe(200)
        expect(responseBody.result.properties).toMatchObject(defaultPlanets as unknown as Record<string, unknown>) //Assert all the details of Planet Tatoonie

    })

    //Test Invalid End Point for Planet
    test("StartWars Planets API Test - Assert Invalid Endpoint", async({request}) => {
        const id = 99;
        const response = await request.get(`${baseUrl}/planets/${id}/`)
        expect (response.status()).toBe(404)
        })
})