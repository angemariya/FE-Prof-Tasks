const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon";

class LoadingMessage {
    static loadingStart(url) {
        console.log(`Start loading ${url}. Please wait.`);
    }
    static loadingFinished(url) {
        console.log(`Finished loading ${url}`);
    }
}

class CurrentlyLoading {
    static cache = { };
    static loadingStart(url) {
        CurrentlyLoading.cache[url] = true;
    }
    static loadingFinished(url) {
        delete CurrentlyLoading.cache[url];
    }
}

class User {
    pokemons = new Set();
    location = null;

    constructor(name) {
        console.log(`${name} is created!`);
        this.name = name;
    }

    async getPokemon(url) {
        const loader = new UrlLoader();
        const pokemon = await loader.load(url);
        this.pokemons.add(pokemon.name);
        console.log(`${this.name} got ${pokemon.name}!`);
    }

    async getPokemons() {
        const promises = [ ];
        const set = new Set(arguments);
        set.forEach((pokemonName) => {
            promises.push(this.getPokemon(`${POKEMON_URL}/${pokemonName}`));
        });
        // const alreadySeen = this.pokemons.reduce((acc, value) => {
        //     acc[value] = true;
        //     return acc;
        // }, { });
        // for (let i = 0; i < arguments.length; i++) {
        //     const pokemonName = arguments[i];
        //     if (alreadySeen[pokemonName] === undefined) {
        //         alreadySeen[pokemonName] = true;
        //         promises.push(this.getPokemon(`${POKEMON_URL}/${arguments[i]}`));
        //     }
        // }
        return Promise.all(promises);
    }

    async moveToLocation(locationName) {
        locationName = locationName.toLowerCase().replace(" ", "-");
        const location = await new UrlLoader().load(`https://pokeapi.co/api/v2/location/${locationName}`);
        this.location = location;
    }
}

class UrlLoader {
    static cache = { }; // { [url]: data }
    static eventCallbacks = {
        start: [],
        finish: []
    };
    static addEventListener(eventName, fn) {
        const arr = UrlLoader.eventCallbacks[eventName];
        if (arr === undefined) {
            return;
        }
        arr.push(fn);
    }
    static trigger(eventName, url) {
        const arr = UrlLoader.eventCallbacks[eventName];
        arr.forEach((fn) => fn(url));
    }
    async load(url) {
        if (CurrentlyLoading.cache[url]) {
            throw Error("You should use await!");
        }
        if (UrlLoader.cache[url]) {
            return UrlLoader.cache[url];
        }

        UrlLoader.trigger("start", url);

        const response = await fetch(url);
        const data = await response.json();

        UrlLoader.trigger("finish", url);

        UrlLoader.cache[url] = data;
        return data;
    }
}

async function start() {
    UrlLoader.addEventListener("start", LoadingMessage.loadingStart);
    UrlLoader.addEventListener("start", CurrentlyLoading.loadingStart);
    UrlLoader.addEventListener("finish", LoadingMessage.loadingFinished);
    UrlLoader.addEventListener("finish", CurrentlyLoading.loadingFinished);

    // const locations = await new UrlLoader().load("https://pokeapi.co/api/v2/location/");
    // console.log(locations.results);

    const petya = new User("Petya");
    const vasya = new User("Vasya");
    const katya = new User("Katya");

    await petya.getPokemons(`charizard`, `charizard`, `pikachu`);
    await petya.getPokemons(`squirtle`, `pikachu`);
    await vasya.getPokemons(`charizard`, `eevee`);
    await katya.getPokemons(`bulbasaur`);

    await petya.moveToLocation("Canalave-city");
    await vasya.moveToLocation("Wayward Cave");
    await katya.moveToLocation("Canalave-city");

    console.log(petya, vasya, katya);
}

start();