import { getBookings, getBands, getVenues } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

const currentVenue = (booking) => {
    let bookingVenue = ""
    for (const venue of venues) {
        if (venue.id === booking.venueId){
            bookingVenue = venue.name
        }
    }
    return bookingVenue
}

const currentBand = (booking) => {
    let bookingBand = ""
    for (const band of bands) {
        if (band.id === booking.bandId){
            bookingBand = band.name
        }
    }
    return bookingBand
}


export const Bookings = () => {
    let html = "<ul>";
    for (const booking of bookings) {
        const venue = currentVenue(booking);
        const  band = currentBand(booking);
        html += `<li data-type="bookings" data-id="${booking.bandId}">${band} is playing at ${venue} on ${booking.date}</li>`
    }
    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const clicked = clickEvent.target;
        if (clicked.dataset.type === "bookings"){
                        let bandName =""
                        let bandGenre =""
                        let yearFormed= ""
                        let memberNum=""
            // loop through bookings
            for (const band of bands){
                if (band.id === parseInt(clicked.dataset.id)){

                      bandName = band.name
                      bandGenre = band.genre
                      yearFormed = band.yearFormed
                      memberNum = band.memberNum
                }
            }
            window.alert(`${bandName}\n${bandGenre}\nFormed in ${yearFormed}\n${memberNum} band members `)
        }
    }
)