Which modules should you create?
bands venues bookings database

What is the responsibility of each module?
What functions should be in which modules?
use .map to get arrays from database and import them into other modules

-venues: returns bulleted list of band names
contain eventClicker and window.alert displaying all of the bands that have booked the venue
-bands: returns bulleted list of band names
contain eventClicker and window.alert displaying all of the venues at which the band is playing
-bookings: display bulleted list of bookings
contain eventClicker and window.alert displaying all of the band's information (name,genre,yearformed,number of members)


What is the responsibility of each function?
venueList(), bandlist(), and bookinglist() will output lines of html.
window.alert and event clicker will display a popup when clicked.
What should each function return?
Each function will return lines of html strings that will be input into index.html to display lists

In which order should you invoke your functions?
imports>getvenues>getbands>getbookings

What data do you need to get from your database when an event listener is triggered?
bookings array and ids (pks and fks)

In what order should the data be navigated with for..of loops?

What is the spcific algorithm for each function? Does the function need parameters? Should it return something?
getbands, getvenues
loop thorugh array
output name as an html string for each object in the array


let band = ""
loop through array of bands
if statement booking.bandId === band.id
return band name

let venue = ""
loop through array of venues
if statement booking.venueId === venue.id
return venue name

getbookings
loop through array of booking
output html strings for each object (band) is playing at (venue) on (booking.date)


venuelist=[]
loop through bookings
if statement match data attribute band.id to bookings.bandid 
loop through venues
if statement venue.id === bookings.venueid
venuelist.push(venue.name)
output 

