export class StarWarsFilm {
    private title: string = "A New Hope";
    private episode_id: number = 4;
    private opening_crawl: string = "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....";
    private director: string = "George Lucas";
    private producer: string = "Gary Kurtz, Rick McCallum";
    private release_date: string = "1977-05-25";
    private species: string[] = ["https://www.swapi.tech/api/species/1",
    "https://www.swapi.tech/api/species/2",
    "https://www.swapi.tech/api/species/3",
    "https://www.swapi.tech/api/species/4",
    "https://www.swapi.tech/api/species/5"];
    private starships: string[] = ["https://www.swapi.tech/api/starships/2",
    "https://www.swapi.tech/api/starships/3",
    "https://www.swapi.tech/api/starships/5",
    "https://www.swapi.tech/api/starships/9",
    "https://www.swapi.tech/api/starships/10",
    "https://www.swapi.tech/api/starships/11",
    "https://www.swapi.tech/api/starships/12",
    "https://www.swapi.tech/api/starships/13"];
    private vehicles: string[] = ["https://www.swapi.tech/api/vehicles/4",
    "https://www.swapi.tech/api/vehicles/6",
    "https://www.swapi.tech/api/vehicles/7",
    "https://www.swapi.tech/api/vehicles/8"];
    private characters: string[] = ["https://www.swapi.tech/api/people/1",
    "https://www.swapi.tech/api/people/2",
    "https://www.swapi.tech/api/people/3",
    "https://www.swapi.tech/api/people/4",
    "https://www.swapi.tech/api/people/5",
    "https://www.swapi.tech/api/people/6",
    "https://www.swapi.tech/api/people/7",
    "https://www.swapi.tech/api/people/8",
    "https://www.swapi.tech/api/people/9",
    "https://www.swapi.tech/api/people/10",
    "https://www.swapi.tech/api/people/12",
    "https://www.swapi.tech/api/people/13",
    "https://www.swapi.tech/api/people/14",
    "https://www.swapi.tech/api/people/15",
    "https://www.swapi.tech/api/people/16",
    "https://www.swapi.tech/api/people/18",
    "https://www.swapi.tech/api/people/19",
    "https://www.swapi.tech/api/people/81"];
    private planets: string[] = ["https://www.swapi.tech/api/planets/1",
    "https://www.swapi.tech/api/planets/2",
    "https://www.swapi.tech/api/planets/3"];
    private url: string = "https://www.swapi.tech/api/films/1";
    // private created: string = "2024-03-08T07:23:49.257Z";
    // private edited: string = "2024-03-08T07:23:49.257Z";

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getEpisode_id(): number {
        return this.episode_id;
    }

    public setEpisode_id(episode_id: number): void {
        this.episode_id = episode_id;
    }

    public getOpening_crawl(): string {
        return this.opening_crawl;
    }

    public setOpening_crawl(opening_crawl: string): void {
        this.opening_crawl = opening_crawl;
    }

    public getDirector(): string {
        return this.director;
    }

    public setDirector(director: string): void {
        this.director = director;
    }

    public getProducer(): string {
        return this.producer;
    }

    public setProducer(producer: string): void {
        this.producer = producer;
    }

    public getRelease_date(): string {
        return this.release_date;
    }

    public setRelease_date(release_date: string): void {
        this.release_date = release_date;
    }

    public getSpecies(): string[] {
        return this.species;
    }

    public setSpecies(species: string[]): void {
        this.species = species;
    }

    public getStarships(): string[] {
        return this.starships;
    }

    public setStarships(starships: string[]): void {
        this.starships = starships;
    }

    public getVehicles(): string[] {
        return this.vehicles;
    }

    public setVehicles(vehicles: string[]): void {
        this.vehicles = vehicles;
    }

    public getCharacters(): string[] {
        return this.characters;
    }

    public setCharacters(characters: string[]): void {
        this.characters = characters;
    }

    public getPlanets(): string[] {
        return this.planets;
    }

    public setPlanets(planets: string[]): void {
        this.planets = planets;
    }

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }

    // public getCreated(): string {
    //     return this.created;
    // }

    // public setCreated(created: string): void {
    //     this.created = created;
    // }

    // public getEdited(): string {
    //     return this.edited;
    // }

    // public setEdited(edited: string): void {
    //     this.edited = edited;
    // }


}