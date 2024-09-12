export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ]
}
const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {
            id: 1,
            name: "Joker",
            power: "Giggles"
        },
        {
            id: 2,
            name: "Wicked",
            power: "Tickles"
        },
        {
            id: 3,
            name: "Slo-Mo",
            power: "Super Slow"
        }
    ]
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}