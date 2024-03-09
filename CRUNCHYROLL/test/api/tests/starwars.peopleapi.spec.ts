import {test, expect } from '@playwright/test'
import {StarWarsPeople} from  '../model/starwars.people'
import {Base} from  '../model/starwars.base'

//Test StarWars People API
//Group tests into a suite and run parallel
test.describe.parallel("StarWars People API Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get all the StarWars people count
    test("StarWars people count API Test", async({request}) => {
        const response = await request.get(`${baseUrl}/people`)
        const responseBody = JSON.parse(await response.text());
        expect (response.status()).toBe(200) // Assert Response Status
        expect(Object.keys(responseBody.results).length).toBe(10) //Assert people count value
    })

    //Test to get all details of Luke Skywalker
    test("Get all details of StarWar character Luke Skywalker", async({request}) => {
        const id = 1;
        const response = await request.get(`${baseUrl}/people/${id}/`)
        const responseBody = JSON.parse(await response.text())
        const defaultPeople = new StarWarsPeople()
        expect (response.status()).toBe(200) // Assert Response Status
        expect(responseBody.result.properties).toMatchObject(defaultPeople as unknown as Record<string, unknown>) //Assert all details of Luke Skywalker

    })

    //Test Invalid End Point for People
    test("StartWars People API Test - Assert Invalid Endpoint", async({request}) => {
        const id = 7655;
        const response = await request.get(`${baseUrl}/people/${id}/`)
        expect (response.status()).toBe(404)
        })
})