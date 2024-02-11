const MAX_HEALTH = 12;
var health = MAX_HEALTH;
var goodTab = false;

const quotes = [
    "Retire your dryer",
    "Switch to better bulbs",
    "Refresh your air filters",
    "Dial down your heat or A/C when you're away",
    "Switch to rechargeable batteries",
    "Make standard shipping your new standard",
    "Dine in instead of eating out",
    "Steer clear of steer",
    "Keep your friends close, your farmers closer",
    "Grow it yourself",
    "Pull the plug on your devices",
    "Opt for refurbished electronics",
    "Put your phone purchase on hold",
    "Get a solar charger for your phone",
    "Try a smaller screen",
    "Compost your food scraps",
    "Rig your roof with solar panels",
    "Calculate your carbon footprint",
    "Put your computer down for a power nap",
    "To the stairs",
    "Bike to work",
    "Take public transit to work",
    "Keep an eye on your PSI",
    "Scooters are polluters too",
    "Offset your flight",
    "Why fly?",
    "Avoid peak park season",
    "Downsize your travel wardrobe",
    "Ditch plastic trash bags",
    "Make your own cleanser",
    "Slow down your fast fashion",
    "Bag your polyesters",
    "Tweak your tea",
    "Bring your own bag",
    "Scoop with paper instead",
    "Cosmetics so safe, they'll make you blush",
    "Move away from microbeads",
    "Turn your bathroom into an eco-room",
    "Wash your hands of wet wipes",
    "Support your local recycler",
    "Wipe out plastic wrappers",
    "Step up to the bar",
    "This is the last straw",
    "Dismiss the disposable cups",
    "Sip smarter with a reusable coffee cup",
    "Banish bottled water",
    "Avoid single-use items",
    "Travel plastic-free",
    "Pack your own snacks",
    "Teachers: Green your classroom",
    "Swap your paper towels for washable cloths",
    "Keep a hanky handy",
    "Print smarter",
    "Spearhead an office recycling program",
    "Digitize your communications",
    "Get eco-friendly business cards",
    "Relaunch your lunch",
    "Wash your clothes in cold water",
    "Join the no-mow movement",
    "Repurpose your water",
    "Showering beats soaking",
    "Say 'no' to over-laundering",
    "Stay in sustainable lodging",
    "Reduce your rubbish",
    "Skip the Styrofoam",
    "Borrowing beats buying",
    "Green your search engine",
    "Work from home one day each week",
    "Encourage your school cafeteria to go trayless",
    "Allow your employees to telework",
    "Stay away from sketchy souvenirs", 
    "Screen your sunscreen",
    "Stick to organic glue",
    "Bike More, Drive Less",
    "Reduce, Resuse, Recycle",
    "Educate others",
    "Conserve water",
    "Volunteer",
    "Choose sustainable",
    "Shop wisely",
    "Long-lasting light bulbs are a bright idea",
    "Plant a Tree", 
    "Don't send chemicals into our waterways"

]

document.getElementById("groupPic").src = "../plant_logo/grouped_plants/plants1-removebg-preview.png";
var int = 0;

function update() {
    console.log(health);
    if (int == 0) {
        document.getElementById("groupPic").src = "../plant_logo/grouped_plants/plants2-removebg-preview.png";
        int = 1;
    } else if (int = 1) {
        document.getElementById("groupPic").src = "../plant_logo/grouped_plants/plants1-removebg-preview.png";
        int = 0;
    }
    if (isWatered) {
        water();
        health=MAX_HEALTH;
        isWatered=false;
    } else {
        if (goodTab) {
            if (health < MAX_HEALTH) {
                health++;
            } // if
        } else {
            if (health > 0) {
                health --;
            } // if
        } //else
    
        if (health == 0) {
            dead();
        } else if (health > (MAX_HEALTH / 2)) {
            alive();
        } else {
            dying();
        } // else
        
    }
    
} // update

let isWatered = false;

let waterButton = document.getElementById("waterButton");
waterButton.onclick = function () {
    isWatered=true;
        
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function water() {
    document.getElementById("status").innerHTML = quotes[getRandomInt(quotes.length)];
    document.getElementById("pic").src = "../plant_logo/water-removebg-preview.png";

}

function alive() {
    document.getElementById("status").innerHTML = "Alive and thriving!"
    document.getElementById("pic").src = "../plant_logo/originals/alive-removebg-preview.png";
}

function dying() {
    document.getElementById("status").innerHTML = "Needs watering!"
    document.getElementById("pic").src = "../plant_logo/originals/dying-removebg-preview.png";
}

function dead() {
    document.getElementById("status").innerHTML = "All hope is lost!"
    document.getElementById("pic").src = "../plant_logo/originals/dead-removebg-preview.png";
}

const currentInterval = setInterval(update, 2000);