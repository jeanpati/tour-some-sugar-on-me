import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const Venues = () => {
    let html = "<ul>";
    for (const venue of venues) {
        html += `<li data-type="venues" data-id="${venue.id}" data-name="${venue.name}"}>${venue.name}</li>`
    }
    html += "</ul>"
    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const clicked = clickEvent.target;
        if (clicked.dataset.type === "venues"){
            let bandList = []
            // loop through bookings
            for (const booking of bookings){
                if (booking.venueId === parseInt(clicked.dataset.id)){
                    for (const band of bands) {
                        if (booking.bandId === band.id){
                            if (bandList.indexOf(band.name)===-1){
                            bandList.push(band.name);
                            }
                        }
                    }
                }
            }
            window.alert(`Upcoming artists at ${clicked.dataset.name}: ${bandList.join(`, `)} `)
        }
    }
)

// if statement match data attribute band.id to bookings.bandid 
// loop through venues
// if statement venue.id === bookings.venueid
// venuelist.push(venue.name)
// output 