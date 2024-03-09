import {test, expect } from '@playwright/test'
import {StarWarsFilm} from  '../model/starwars.flim'
import {Base} from  '../model/starwars.base'

//Test StarWars Film API
//Group tests into a suite and run parallel
test.describe.parallel("StarWars Films API Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get all the StarWars film count
    test("StarWars film count API Test", async({request}) => { 
        const response = await request.get(`${baseUrl}/films/`)
        const responseBody = JSON.parse(await response.text())
        expect (response.status()).toBe(200) // Assert Response Status
        expect(Object.keys(responseBody.result).length).toBe(6) // Assert Film count value

    })

    //Test to get all Details of StarWars Film - A New Hope
    test("Get all Details of StarWars Film A New Hope", async({request}) => {
        const response = await request.get(`${baseUrl}/films/1/`)
        const responseBody = JSON.parse(await response.text());
        const defaultFilm = new StarWarsFilm();        
        expect (response.status()).toBe(200)
        expect(responseBody.result.properties).toMatchObject(defaultFilm as unknown as Record<string, unknown>) //Assert if all the properties are correct
        
    })

    //Test Invalid End Point for Films
    test("StartWars Film API Test - Assert Invalid Endpoint", async({request}) => {
        const id = 678;
        const response = await request.get(`${baseUrl}/films/${id}/`)
        expect (response.status()).toBe(404)
        })
})


