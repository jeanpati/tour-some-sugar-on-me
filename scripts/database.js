const database = {
    venues: [{
        id: 1,
        name: "The Velvet Peach",
        address: "123 Main St, Nashville, TN",
        sqFootage: 1200,
        maxOccupancy:150
    },
    {
        id: 2,
        name: "Blue Whale",
        address: "321 German Rd, Nashville, TN",
        sqFootage: 800,
        maxOccupancy:100
    },
    {
        id: 3,
        name: "Hell's Lounge",
        address: "456 Packer St, Nashville, TN",
        sqFootage: 600,
        maxOccupancy:75
    },
    {
        id: 4,
        name: "The Cabin",
        address: "897 Left St, Nashville, TN",
        sqFootage: 2000,
        maxOccupancy:270
    },
    {
        id: 5,
        name: "Slinky's",
        address: "605 Link Ave, Nashville, TN",
        sqFootage: 2200,
        maxOccupancy:300
    },
    {
        id: 6,
        name: "My House",
        address: "808 Sample Rd, Nashville, TN",
        sqFootage: 3000,
        maxOccupancy:400
    },],
    bands:[{
        id: 1,
        name: "flack",
        memberNum: 6,
        genre: "disco",
        yearFormed: 2018
    },
    {
        id: 2,
        name: "PENCILS",
        memberNum: 3,
        genre: "pop",
        yearFormed: 2011
    },
    {
        id: 3,
        name: "Silas Winters",
        memberNum: 1,
        genre: "jazz",
        yearFormed: 2020
    },
    {
        id: 4,
        name: "chungus",
        memberNum: 4,
        genre: "experimental",
        yearFormed: 2023
    },
    {
        id: 5,
        name: "The Pine Collective",
        memberNum: 5,
        genre: "folk",
        yearFormed: 2017
    },
    {
        id: 6,
        name: "Fraction",
        memberNum: 4,
        genre: "experimental",
        yearFormed: 2018
    },
    {
        id: 7,
        name: "Milton Edgar",
        memberNum: 1,
        genre: "folk",
        yearFormed: 2022
    },
    {
        id: 8,
        name: "wither",
        memberNum: 2,
        genre: "r&b",
        yearFormed: 2020
    },
    {
        id: 9,
        name: "The Pomme Experiment",
        memberNum: 5,
        genre: "jazz",
        yearFormed: 2018
    },
    {
        id: 10,
        name: "RASPY",
        memberNum: 6,
        genre: "rap",
        yearFormed: 2013
    },
    {
        id: 11,
        name: "pork-belly",
        memberNum: 3,
        genre: "electronic",
        yearFormed: 2012
    },],
    bookings:[{
        id: 1,
        venueId: 2,
        bandId: 11,
        date: new Date(2023,11,14,20)
    },
    {
        id: 2,
        venueId: 5,
        bandId: 9,
        date: new Date(2023,11,15,20)
    },
    {
        id: 3,
        venueId: 6,
        bandId: 8,
        date: new Date(2023,11,16,20)
    },
    {
        id: 4,
        venueId: 4,
        bandId: 7,
        date: new Date(2023,11,20,21)
    },
    {
        id: 5,
        venueId: 3,
        bandId: 6,
        date: new Date(2023,11,22,17)
    },
    {
        id: 6,
        venueId: 6,
        bandId: 2,
        date: new Date(2023,11,22,21)
    },
    {
        id: 7,
        venueId: 2,
        bandId: 1,
        date: new Date(2023,11,28,20)
    },
    {
        id: 8,
        venueId: 1,
        bandId: 3,
        date: new Date(2023,11,29,22)
    },
    {
        id: 9,
        venueId: 1,
        bandId: 2,
        date: new Date(2023,11,31,22)
    },
    {
        id: 10,
        venueId: 4,
        bandId: 6,
        date: new Date(2024,0,5,20)
    },
    {
        id: 11,
        venueId: 4,
        bandId: 4,
        date: new Date(2024,0,6,20)
    },
    {
        id: 12,
        venueId: 6,
        bandId: 8,
        date: new Date(2024,0,10,20)
    },
    {
        id: 13,
        venueId: 5,
        bandId: 7,
        date: new Date(2024,0,10,20)
    },
    {
        id: 14,
        venueId: 3,
        bandId: 9,
        date: new Date(2024,0,12,20)
    },
    {
        id: 15,
        venueId: 2,
        bandId: 10,
        date: new Date(2024,0,13,20)
    },
    {
        id: 16,
        venueId: 1,
        bandId: 3,
        date: new Date(2024,0,15,18)
    },
    {
        id: 17,
        venueId: 1,
        bandId: 3,
        date: new Date(2024,0,15,21)
    },
    {
        id: 18,
        venueId: 6,
        bandId: 1,
        date: new Date(2024,0,17,20)
    },
    {
        id: 19,
        venueId: 5,
        bandId: 5,
        date: new Date(2024,0,20,19)
    }]
   
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBookings = () => {
    return database.bookings.map(booking =>({...booking}))
}