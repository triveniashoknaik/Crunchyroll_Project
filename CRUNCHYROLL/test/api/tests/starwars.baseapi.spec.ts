import {test, expect } from '@playwright/test'
import {StarWarsBase} from  '../model/starwars.base'
import {Base} from  '../model/starwars.base'

//Test StarWars Base URL
//Group tests into a suite and run parallel
test.describe.parallel("StarWars Base URL Testing", () => {
    const properties = new Base();
    const baseUrl = properties.url

    //Test to get count of all Starwars URL
    test("Get count of all StarWars URL", async({request}) => { 
        const response = await request.get(`${baseUrl}`)
        const responseBody = JSON.parse(await response.text())
        expect (response.status()).toBe(200) //Assert response status
        expect(Object.keys(responseBody.result).length).toBe(6) //Assert count of starwars URL

    })

    //Test to get basic details of StarWar Base URL
    test("Get all details for StarWars Base URL", async({request}) => {
        const response = await request.get(`${baseUrl}`)
        const responseBody = JSON.parse(await response.text());
        const base = new StarWarsBase(); 
        expect (response.status()).toBe(200) //Assert response status
        expect(responseBody.result).toMatchObject(base as unknown as Record<string, unknown>) //Assert all the basic URLs
         
    })
})

