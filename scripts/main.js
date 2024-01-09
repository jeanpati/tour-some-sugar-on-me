import { Bookings } from "./bookings.js";
import { Venues } from "./venues.js";
import { Bands } from "./bands.js";

const mainContainer = document.querySelector("#mainContainer")

const html = `
<h1>SAMANTHA DUCARTE</h1>
<h2>TOUR SOME SUGAR ON ME</h2>
<article class="bookings">
    <section class="detail--column list details__bookings">
        <h2>Bookings</h2>
        ${Bookings()}
    </section>
</article>

<article class='details'>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`
mainContainer.innerHTML = html;