import { getBookings, getBands, getVenues } from "./database.js";

const venues = getVenues();
const bands = getBands();
const bookings = getBookings();

export const Bands = () => {
    let html = "<ul>";
    for (const band of bands) {
        html += `<li data-type="bands" data-id="${band.id}" data-name="${band.name}">${band.name}</li>`
    }
    html += "</ul>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const clicked = clickEvent.target;
        if (clicked.dataset.type === "bands"){
            let venueList = []
            // loop through bookings
            for (const booking of bookings){
                if (booking.bandId === parseInt(clicked.dataset.id)){
                    for (const venue of venues) {
                        if (booking.venueId === venue.id){
                            if (venueList.indexOf(venue.name)===-1){
                            venueList.push(venue.name);
                            }
                        }
                    }
                }
            }
            window.alert(`${clicked.dataset.name} will be playing at ${venueList.join(`, `)} `)
        }
    }
)