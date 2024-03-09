export class StarWarsPeople{
    public birth_year: string = "19BBY" ;
    public eye_color: string = "blue";
    public gender: string = "male";
    public hair_color: string = "blond" ; 
    public height: string = "172"; 
    public homeworld: string = "https://www.swapi.tech/api/planets/1" ; 
    public mass: string = "77" ;
    public name: string = "Luke Skywalker" ;
    public skin_color: string = "fair"; 
    // public created: string = "2024-03-09T07:33:52.153Z";
    // public edited: string = "2024-03-09T07:33:52.153Z";
    public url: string = "https://www.swapi.tech/api/people/1" ;

    public getBirth_year(): string {
        return this.birth_year;
    }

    public setBirth_year(birth_year: string): void {
        this.birth_year = birth_year;
    }

    public getEye_color(): string {
        return this.eye_color;
    }

    public setEye_color(eye_color: string): void {
        this.eye_color = eye_color;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(gender: string): void {
        this.gender = gender;
    }

    public getHair_color(): string {
        return this.hair_color;
    }

    public setHair_color(hair_color: string): void {
        this.hair_color = hair_color;
    }

    public getHeight(): string {
        return this.height;
    }

    public setHeight(height: string): void {
        this.height = height;
    }

    public getHomeworld(): string {
        return this.homeworld;
    }

    public setHomeworld(homeworld: string): void {
        this.homeworld = homeworld;
    }

    public getMass(): string {
        return this.mass;
    }

    public setMass(mass: string): void {
        this.mass = mass;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getSkin_color(): string {
        return this.skin_color;
    }

    public setSkin_color(skin_color: string): void {
        this.skin_color = skin_color;
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

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }




}
    

    