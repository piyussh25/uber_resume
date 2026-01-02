// =================================================================================
// GLOBAL DATA
// =================================================================================

const routes = {
    // NORTH INDIA
    "delhi-jaipur": { distance: 280, time: 330 },
    "delhi-agra": { distance: 233, time: 260 },
    "delhi-chandigarh": { distance: 245, time: 300 },
    "delhi-amritsar": { distance: 450, time: 520 },
    "delhi-dehradun": { distance: 255, time: 360 },
    "jaipur-udaipur": { distance: 395, time: 420 },
    "jaipur-jodhpur": { distance: 335, time: 390 },
    "jaipur-ajmer": { distance: 135, time: 180 },
    "chandigarh-shimla": { distance: 115, time: 210 },
    "chandigarh-manali": { distance: 310, time: 540 },

    // WEST INDIA
    "mumbai-pune": { distance: 150, time: 180 },
    "mumbai-nashik": { distance: 170, time: 210 },
    "mumbai-surat": { distance: 285, time: 330 },
    "mumbai-ahmedabad": { distance: 530, time: 600 },
    "mumbai-goa": { distance: 590, time: 720 },
    "pune-nagpur": { distance: 720, time: 840 },
    "pune-kolhapur": { distance: 230, time: 300 },
    "ahmedabad-vadodara": { distance: 110, time: 150 },
    "ahmedabad-rajkot": { distance: 215, time: 270 },
    "surat-vapi": { distance: 120, time: 150 },

    // SOUTH INDIA
    "bangalore-chennai": { distance: 350, time: 360 },
    "bangalore-hyderabad": { distance: 570, time: 660 },
    "bangalore-mysore": { distance: 145, time: 180 },
    "bangalore-mangalore": { distance: 350, time: 480 },
    "chennai-coimbatore": { distance: 505, time: 600 },
    "chennai-madurai": { distance: 460, time: 540 },
    "chennai-trichy": { distance: 330, time: 390 },
    "hyderabad-vijayawada": { distance: 275, time: 330 },
    "hyderabad-warangal": { distance: 150, time: 210 },
    "coimbatore-ooty": { distance: 85, time: 180 },

    // EAST INDIA
    "kolkata-durgapur": { distance: 170, time: 210 },
    "kolkata-siliguri": { distance: 560, time: 720 },
    "kolkata-asansol": { distance: 200, time: 240 },
    "kolkata-patna": { distance: 575, time: 720 },
    "patna-gaya": { distance: 100, time: 150 },
    "patna-ranchi": { distance: 330, time: 420 },
    "bhubaneswar-cuttack": { distance: 30, time: 60 },
    "bhubaneswar-puri": { distance: 60, time: 90 },
    "ranchi-jamshedpur": { distance: 130, time: 180 },
    "guwahati-shillong": { distance: 100, time: 180 },

    // CENTRAL INDIA
    "bhopal-indore": { distance: 195, time: 240 },
    "bhopal-jabalpur": { distance: 320, time: 390 },
    "indore-ujjain": { distance: 55, time: 90 },
    "raipur-bilaspur": { distance: 140, time: 180 },
    "raipur-nagpur": { distance: 285, time: 330 },
    "nagpur-jabalpur": { distance: 275, time: 330 },

    // EXTENDED ROUTES (AUTO-GENERATED STYLE)
    "delhi-kanpur": { distance: 495, time: 600 },
    "delhi-lucknow": { distance: 555, time: 660 },
    "lucknow-varanasi": { distance: 320, time: 390 },
    "varanasi-prayagraj": { distance: 120, time: 150 },
    "prayagraj-kanpur": { distance: 200, time: 240 },
    "kanpur-agra": { distance: 290, time: 330 },
    "agra-gwalior": { distance: 120, time: 180 },
    "gwalior-bhopal": { distance: 430, time: 510 },
    "bhopal-nagpur": { distance: 350, time: 420 },
    "nagpur-hyderabad": { distance: 500, time: 600 },
    "chennai-bangalore": { distance: 350, time: 360 }, // Reverse of bangalore-chennai
    "hyderabad-bangalore": { distance: 570, time: 660 }, // Reverse of bangalore-hyderabad
    "mysore-bangalore": { distance: 145, time: 180 }, // Reverse of bangalore-mysore
    "mangalore-bangalore": { distance: 350, time: 480 }, // Reverse of bangalore-mangalore
    "coimbatore-chennai": { distance: 505, time: 600 }, // Reverse of chennai-coimbatore
    "madurai-chennai": { distance: 460, time: 540 }, // Reverse of chennai-madurai
    "trichy-chennai": { distance: 330, time: 390 }, // Reverse of chennai-trichy
    "vijayawada-hyderabad": { distance: 275, time: 330 }, // Reverse of hyderabad-vijayawada
    "warangal-hyderabad": { distance: 150, time: 210 }, // Reverse of hyderabad-warangal
    "ooty-coimbatore": { distance: 85, time: 180 }, // Reverse of coimbatore-ooty
    "durgapur-kolkata": { distance: 170, time: 210 }, // Reverse of kolkata-durgapur
    "siliguri-kolkata": { distance: 560, time: 720 }, // Reverse of kolkata-siliguri
    "asansol-kolkata": { distance: 200, time: 240 }, // Reverse of kolkata-asansol
    "patna-kolkata": { distance: 575, time: 720 }, // Reverse of kolkata-patna
    "gaya-patna": { distance: 100, time: 150 }, // Reverse of patna-gaya
    "ranchi-patna": { distance: 330, time: 420 }, // Reverse of patna-ranchi
    "cuttack-bhubaneswar": { distance: 30, time: 60 }, // Reverse of bhubaneswar-cuttack
    "puri-bhubaneswar": { distance: 60, time: 90 }, // Reverse of bhubaneswar-puri
    "jamshedpur-ranchi": { distance: 130, time: 180 }, // Reverse of ranchi-jamshedpur
    "shillong-guwahati": { distance: 100, time: 180 }, // Reverse of guwahati-shillong
    "indore-bhopal": { distance: 195, time: 240 }, // Reverse of bhopal-indore
    "jabalpur-bhopal": { distance: 320, time: 390 }, // Reverse of bhopal-jabalpur
    "ujjain-indore": { distance: 55, time: 90 }, // Reverse of indore-ujjain
    "bilaspur-raipur": { distance: 140, time: 180 }, // Reverse of raipur-bilaspur
    "nagpur-raipur": { distance: 285, time: 330 }, // Reverse of raipur-nagpur
    "jabalpur-nagpur": { distance: 275, time: 330 }, // Reverse of nagpur-jabalpur
    "kanpur-delhi": { distance: 495, time: 600 }, // Reverse of delhi-kanpur
    "lucknow-delhi": { distance: 555, time: 660 }, // Reverse of delhi-lucknow
    "varanasi-lucknow": { distance: 320, time: 390 }, // Reverse of lucknow-varanasi
    "prayagraj-varanasi": { distance: 120, time: 150 }, // Reverse of varanasi-prayagraj
    "kanpur-prayagraj": { distance: 200, time: 240 }, // Reverse of prayagraj-kanpur
    "agra-kanpur": { distance: 290, time: 330 }, // Reverse of kanpur-agra
    "gwalior-agra": { distance: 120, time: 180 }, // Reverse of agra-gwalior
    "bhopal-gwalior": { distance: 430, time: 510 }, // Reverse of gwalior-bhopal
    "nagpur-bhopal": { distance: 350, time: 420 }, // Reverse of bhopal-nagpur
    "hyderabad-nagpur": { distance: 500, time: 600 }, // Reverse of nagpur-hyderabad

    // NEW DELHI AREA ROUTES (with pre-calculated Uber/Ola prices)
    "dwarka-mor-nsut": { distance: 6, time: 20, uber: 160, ola: 150 },
    "nsut-dwarka-mor": { distance: 6, time: 20, uber: 160, ola: 150 },
    "dwarka-sector-21-igi-airport": { distance: 10, time: 25, uber: 240, ola: 230 },
    "igi-airport-dwarka-sector-21": { distance: 10, time: 25, uber: 240, ola: 230 },
    "dwarka-sector-10-janakpuri": { distance: 7, time: 20, uber: 170, ola: 160 },
    "janakpuri-dwarka-sector-10": { distance: 7, time: 20, uber: 170, ola: 160 },
    "saket-hauz-khas": { distance: 5, time: 15, uber: 140, ola: 130 },
    "hauz-khas-saket": { distance: 5, time: 15, uber: 140, ola: 130 },
    "malviya-nagar-qutub-minar": { distance: 4, time: 12, uber: 120, ola: 110 },
    "qutub-minar-malviya-nagar": { distance: 4, time: 12, uber: 120, ola: 110 },
    "lajpat-nagar-aiims": { distance: 6, time: 18, uber: 160, ola: 150 },
    "aiims-lajpat-nagar": { distance: 6, time: 18, uber: 160, ola: 150 },
    "greater-kailash-nehru-place": { distance: 5, time: 15, uber: 150, ola: 140 },
    "nehru-place-greater-kailash": { distance: 5, time: 15, uber: 150, ola: 140 },
    "connaught-place-karol-bagh": { distance: 6, time: 20, uber: 170, ola: 160 },
    "karol-bagh-connaught-place": { distance: 6, time: 20, uber: 170, ola: 160 },
    "india-gate-rajiv-chowk": { distance: 4, time: 12, uber: 130, ola: 120 },
    "rajiv-chowk-india-gate": { distance: 4, time: 12, uber: 130, ola: 120 },
    "rajiv-chowk-kashmere-gate": { distance: 5, time: 15, uber: 150, ola: 140 },
    "kashmere-gate-rajiv-chowk": { distance: 5, time: 15, uber: 150, ola: 140 },
    "rohini-sector-18-pitampura": { distance: 8, time: 25, uber: 190, ola: 180 },
    "pitampura-rohini-sector-18": { distance: 8, time: 25, uber: 190, ola: 180 },
    "civil-lines-kashmere-gate": { distance: 4, time: 12, uber: 130, ola: 120 },
    "kashmere-gate-civil-lines": { distance: 4, time: 12, uber: 130, ola: 120 },
    "burari-timarpur": { distance: 6, time: 18, uber: 160, ola: 150 },
    "timarpur-burari": { distance: 6, time: 18, uber: 160, ola: 150 },
    "laxmi-nagar-preet-vihar": { distance: 3, time: 10, uber: 110, ola: 100 },
    "preet-vihar-laxmi-nagar": { distance: 3, time: 10, uber: 110, ola: 100 },
    "mayur-vihar-noida-sector-18": { distance: 7, time: 20, uber: 180, ola: 170 },
    "noida-sector-18-mayur-vihar": { distance: 7, time: 20, uber: 180, ola: 170 },
    "anand-vihar-karkardooma": { distance: 4, time: 12, uber: 130, ola: 120 },
    "karkardooma-anand-vihar": { distance: 4, time: 12, uber: 130, ola: 120 },
    "rajouri-garden-punjabi-bagh": { distance: 5, time: 15, uber: 150, ola: 140 },
    "punjabi-bagh-rajouri-garden": { distance: 5, time: 15, uber: 150, ola: 140 },
    "tilak-nagar-janakpuri": { distance: 6, time: 18, uber: 160, ola: 150 },
    "janakpuri-tilak-nagar": { distance: 6, time: 18, uber: 160, ola: 150 },
    "paschim-vihar-peeragarhi": { distance: 4, time: 12, uber: 130, ola: 120 },
    "peeragarhi-paschim-vihar": { distance: 4, time: 12, uber: 130, ola: 120 },
    "new-delhi-railway-station-igi-airport": { distance: 16, time: 35, uber: 380, ola: 360 },
    "igi-airport-new-delhi-railway-station": { distance: 16, time: 35, uber: 380, ola: 360 },
    "anand-vihar-railway-station-igi-airport": { distance: 25, time: 50, uber: 520, ola: 500 },
    "igi-airport-anand-vihar-railway-station": { distance: 25, time: 50, uber: 520, ola: 500 },
    "kashmere-gate-igi-airport": { distance: 20, time: 45, uber: 450, ola: 430 },
    "igi-airport-kashmere-gate": { distance: 20, time: 45, uber: 450, ola: 430 },
    "nsut-dwarka-mor": { distance: 6, time: 20, uber: 160, ola: 150 },
    "dwarka-mor-nsut": { distance: 6, time: 20, uber: 160, ola: 150 }, // Duplicate, will be overwritten if already present
    "du-north-campus-rajiv-chowk": { distance: 7, time: 20, uber: 180, ola: 170 },
    "rajiv-chowk-du-north-campus": { distance: 7, time: 20, uber: 180, ola: 170 },
    "jamia-millia-islamia-saket": { distance: 8, time: 25, uber: 190, ola: 180 },
    "saket-jamia-millia-islamia": { distance: 8, time: 25, uber: 190, ola: 180 },
    "ipu-dwarka-sector-16-janakpuri": { distance: 9, time: 25, uber: 210, ola: 200 },
    "janakpuri-ipu-dwarka-sector-16": { distance: 9, time: 25, uber: 210, ola: 200 },
};

// =================================================================================
// NAVIGATION FUNCTIONS
// =================================================================================

/* Validate input and go to Bus page */
function selectBus() {
    const from = document.getElementById("fromLocation").value;
    const to = document.getElementById("toLocation").value;

    // Basic validation
    if (from === "" || to === "") {
        alert("Please enter both Source and Destination");
        return;
    }

    // Redirect to bus comparison page with URL parameters
    window.location.href = `bus.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
}

/* Validate input and go to Cab page */
function selectCab() {
    const from = document.getElementById("fromLocation").value;
    const to = document.getElementById("toLocation").value;

    // Basic validation
    if (from === "" || to === "") {
        alert("Please enter both Source and Destination");
        return;
    }

    // Redirect to cab comparison page with URL parameters
    window.location.href = `cab.html?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
}

/* Go back to home page */
function goHome() {
    window.location.href = "index.html";
}


// =================================================================================
// PAGE-SPECIFIC LOGIC
// =================================================================================

const path = window.location.pathname;
const isIndexPage = path.endsWith("index.html") || path.endsWith("/");

// --- LOGIC FOR INDEX PAGE ---
if (isIndexPage) {
    window.addEventListener('DOMContentLoaded', () => {
        const allCities = new Set();
        Object.keys(routes).forEach(key => {
            const [from, to] = key.split('-');
            allCities.add(from);
            allCities.add(to);
        });

        const fromDatalist = document.getElementById('from-cities');
        const toDatalist = document.getElementById('to-cities');

        const sortedCities = Array.from(allCities).sort();

        sortedCities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.charAt(0).toUpperCase() + city.slice(1);
            fromDatalist.appendChild(option.cloneNode(true));
            toDatalist.appendChild(option);
        });
    });
}


// --- LOGIC FOR CAB PAGE ---
if (path.endsWith("cab.html")) {
    
    window.addEventListener('DOMContentLoaded', async (event) => {
        const urlParams = new URLSearchParams(window.location.search);
        const fromLocation = urlParams.get('from');
        const toLocation = urlParams.get('to');

        if (fromLocation && toLocation) {
            document.getElementById("uber-price").textContent = `Calculating...`;
            document.getElementById("ola-price").textContent = `Calculating...`;

            const routeData = await getSimulatedDistanceAndTime(fromLocation, toLocation);

            if (routeData.distance !== null && routeData.time !== null) {
                let uberPriceToDisplay;
                let olaPriceToDisplay;

                if (routeData.uber !== undefined && routeData.ola !== undefined) {
                    // Use pre-calculated prices if available
                    uberPriceToDisplay = routeData.uber;
                    olaPriceToDisplay = routeData.ola;
                } else {
                    // Otherwise, calculate using the formula
                    uberPriceToDisplay = calculateCabFare(routeData.distance, routeData.time);
                    olaPriceToDisplay = calculateCabFare(routeData.distance, routeData.time, 1.05); // Ola 5% more expensive
                }
                
                document.getElementById("uber-price").textContent = `₹ ${uberPriceToDisplay.toFixed(2)}`;
                document.getElementById("ola-price").textContent = `₹ ${olaPriceToDisplay.toFixed(2)}`;

            } else {
                document.getElementById("uber-price").textContent = `Route not found`;
                document.getElementById("ola-price").textContent = `Route not found`;
                alert(`Could not find a simulated route for ${fromLocation} to ${toLocation}.`);
            }
        } else {
            document.getElementById("uber-price").textContent = `Missing location data`;
            document.getElementById("ola-price").textContent = `Missing location data`;
            alert("Please provide both source and destination from the home page.");
        }
    });

    /**
     * Simulates an API call to get distance and time between two locations.
     * Returns either {distance, time} or {distance, time, uber, ola} if pre-calculated prices exist.
     */
    async function getSimulatedDistanceAndTime(from, to) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500)); 

        const key = `${from.toLowerCase()}-${to.toLowerCase()}`;
        if (routes[key]) {
            return routes[key];
        } else {
            console.warn(`Simulated route for ${from} to ${to} not found. Returning default.`);
            // Default structure must match, so include potential uber/ola as undefined
            return { distance: 50, time: 60, uber: undefined, ola: undefined }; 
        }
    }
}

// =================================================================================
// UTILITY FUNCTIONS
// =================================================================================

/**
 * Calculates the total cab fare based on distance, time, and other factors.
 */
function calculateCabFare(distanceInKm, timeInMinutes, surgeMultiplier = 1.0) {
    const baseFare = 50;
    const distanceFare = distanceInKm * 20; // Rs. 20/km
    const timeFare = timeInMinutes * 2;    // Rs. 2/minute
    const bookingFee = 20;
    const gstRate = 0.05; // 5%

    const subTotal = (baseFare + distanceFare + timeFare) * surgeMultiplier;
    const totalFare = subTotal + (subTotal * gstRate) + bookingFee;
    
    return totalFare;
}