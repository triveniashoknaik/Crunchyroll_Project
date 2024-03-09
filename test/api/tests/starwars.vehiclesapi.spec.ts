import {test, expect } from '@playwright/test'
import {StarWarsVehicles} from  '../model/starwars.vehicles'
import {Base} from  '../model/starwars.base'

//Test StarWars Vehicles API
//Group tests into a suite and run parallel
test.describe.parallel("StarWars Vehicles API Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get all the StarWars vehicles count
    test("StarWars Vehicles count API Test ", async({request}) => {
        const response = await request.get(`${baseUrl}/vehicles`)
        const responseBody = JSON.parse(await response.text());
        expect (response.status()).toBe(200) //Assert Response Status
        expect(Object.keys(responseBody.results).length).toBe(10) //Assert the vehicle count value

    })

    //Test to get all details of a StarWar Vehicle - Sand Crawler
    test("Get all details of a StarWar Vehicle Sand Crawler", async({request}) => {
        const id = 4;
        const response = await request.get(`${baseUrl}/vehicles/${id}/`)
        const responseBody = JSON.parse(await response.text())
        const defaultVehicle = new StarWarsVehicles()
        expect (response.status()).toBe(200)
        expect(responseBody.result.properties).toMatchObject(defaultVehicle as unknown as Record<string, unknown>) //Assert all the details of Vehicle - Sand Crawler

    })

    //Test Invalid End Point for Vehicles
    test("StartWars Vehicles API Test - Assert Invalid Endpoint", async({request}) => {
        const id = 1;
        const response = await request.get(`${baseUrl}/vehicles/${id}/`)
        expect (response.status()).toBe(404)
        })
})