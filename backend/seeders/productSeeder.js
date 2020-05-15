import { Seeder } from 'mongoose-data-seed';
import Product from '../models/productModel';
import Category from '../models/categoryModel';
import User from '../models/userModel';

const data = [{
    title: "Nike Air Max 2090",
    image:"/images/cat1im1.jpg",
    price: 150,
    category: "Lifestyle",
    countInStock: 15,
    description: "Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort while transparent fabric on the upper blends with timeless OG features for an edgy, modernized look.",
    rating: 6,
    numReviews: 0,
  },{
    title: "Nike Air VaporMax 360",
    image:"/images/cat1im2.jpg",
    price: 225,
    category: "Lifestyle",
    countInStock: 20,
    description: "Featuring a full-length foam midsole and VaporMax Air unit, the Nike Air VaporMax 360 gives you a cushy ride with bold '90s style. Iridescent accents on the upper combine with small Air Pod details for a fresh look with just enough flash.",
    rating: 3,
    numReviews: 1,
  },{
    title: "Nike Air Max 90",
    image:"/images/cat1im3.jpg",
    price: 120,
    category: "Lifestyle",
    countInStock: 14,
    description: "Clean lines, versatile and timeless—the people's shoe returns with the Nike Air Max 90. Featuring the same iconic Waffle sole, stitched overlays and classic TPU accents you've come to love, it lets you walk among the pantheon of Air.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Nike Air VaporMax Flyknit 3",
    image:"/images/cat1im4.jpg",
    price: 200,
    category: "Lifestyle",
    countInStock: 18,
    description: "Be bouncy and buoyant in the Nike Air VaporMax Flyknit 3. The upper features flowing, 2-tone lines of breathable, stretchable Flyknit construction for unique, street-ready style. Revolutionary VaporMax technology keeps spring in your step with toe-to-heel cushioning.",
    rating: 2,
    numReviews: 1,
  },{
    title: "Nike Daybreak-Type",
    image:"/images/cat1im5.jpg",
    price: 90,
    category: "Lifestyle",
    countInStock: 25,
    description: "Deconstruct the past and step into the present with the Nike Daybreak-Type. The airy mesh upper and exaggerated stitching of the Nike Daybreak-Type add a bold, fresh look onto early Bowerman prototypes pulled from the archives. Retro suede and heel clips designed for support keep you connected to history while the rubber Waffle outsole features flashy angling at the back for a modern look.",
    rating: 5,
    numReviews: 2,
  },{
    title: "Air Jordan 4 Retro",
    image:"/images/cat2im1.jpg",
    price: 190,
    category: "Jordan",
    countInStock: 20,
    description: "The Air Jordan 4 Retro is inspired by the original metallic colors featured on the Air Jordan 1 from 1985. Boldly original, the now-iconic colors continue to reinforce the Brand's peerless heritage.",
    rating: 6,
    numReviews: 2,
  },{
    title: "Air Jordan 1 Low",
    image:"/images/cat2im2.jpg",
    price: 110,
    category: "Jordan",
    countInStock: 10,
    description: "The Air Jordan 1 Low combines the iconic look of the original with a fit and feel that's been retooled for lightweight comfort.",
    rating: 4,
    numReviews: 3,
  },{
    title: "Air Jordan 1 Low",
    image:"/images/cat2im3.jpg",
    price: 90,
    category: "Jordan",
    countInStock: 14,
    description: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Air Jordan 1 Mid",
    image:"/images/cat2im4.jpg",
    price: 115,
    category: "Jordan",
    countInStock: 19,
    description: "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering OG fans a look at how far the Jordan brand has come since 1985.",
    rating: 4,
    numReviews: 1,
  },{
    title: "Air Jordan XXXIV Low",
    image:"/images/cat2im5.jpg",
    price: 165,
    category: "Jordan",
    countInStock: 10,
    description: "Introducing the Air Jordan XXXIV Low, a game shoe that's laser-focused on reducing design elements to make it as light as possible. It has the same shape and features of the inline 34, with some tweaks. A lower collar, synthetic leather toe cap (instead of mesh) and an updated heel overlay material outfit this low-profile shoe.",
    rating: 7,
    numReviews: 2,
  },{
    title: "Nike Air Zoom Pegasus 37",
    image:"/images/cat3im1.jpg",
    price: 120,
    category: "Running",
    countInStock: 10,
    description: "Reinvigorate your stride with the Nike Air Zoom Pegasus 37. Delivering the same fit and feel that runners love, the shoe has an all-new forefoot cushioning unit and foam for maximum responsiveness. The result is a durable, lightweight trainer designed for everyday running.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike React Phantom Run Flyknit 2",
    image:"/images/cat3im2.jpg",
    price: 140,
    category: "Running",
    countInStock: 25,
    description: "The Nike React Phantom Run Flyknit 2 offers versatility for the everyday runner. Building on the foundation of its predecessor, the shoe expands on its laceless design by adding secure support that feels like it disappears on your foot. More foam means better cushioning, keeping you comfortable as you run.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike React Infinity Run Flyknit",
    image:"/images/cat3im3.jpg",
    price: 160,
    category: "Running",
    countInStock: 100,
    description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike Zoom Pegasus Turbo 2",
    image:"/images/cat3im4.jpg",
    price: 180,
    category: "Running",
    countInStock: 12,
    description: "The Nike Zoom Pegasus Turbo 2 is updated with a featherlight upper, while innovative foam brings revolutionary responsiveness to your long distance training.",
    rating: 4,
    numReviews: 1,
  },{
    title: "Nike Air Zoom Pegasus 36 Trail",
    image:"/images/cat3im5.jpg",
    price: 130,
    category: "Running",
    countInStock: 5,
    description: "An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. A perforated mesh upper adds breathability, as double Zoom Air units underfoot cushion your stride. Opposing lugs on outsole optimize traction on your uphill climbs.",
    rating: 4,
    numReviews: 2,
  },{
    title: "LeBron 17",
    image:"/images/cat4im1.jpg",
    price: 200,
    category: "Basketball",
    countInStock: 24,
    description: "The LeBron 17 harnesses LeBron's strength and speed with containment and support for all-court domination. It features a lightweight mix of knit and heat-molded yarns that give each one a durable look and feel. Combined cushioning provides LeBron with the impact support and responsive energy return he needs to power through the long season.",
    rating: 6,
    numReviews: 2,
  },{
    title: "PG 4 PCG",
    image:"/images/cat4im2.jpg",
    price: 120,
    category: "Basketball",
    countInStock: 15,
    description: "As an avid fisherman, PG has a profound appreciation for nature. The PG4 PCG incorporates hues and textures inspired by his love for the natural environment. On the heel you’ll find a nod to an iconic mark, revamped with PG’s initials, PCG—Paul Clifton George, as an ode to his love of the outdoors.",
    rating: 5,
    numReviews: 1,
  },{
    title: "KD13 Chill",
    image:"/images/cat4im3.jpg",
    price: 160,
    category: "Basketball",
    countInStock: 16,
    description: "Before the ball is tipped, KD zeroes in on his craft with the aid of his rich and diverse music library. Ranging from soul classics to southern trap bangers, the rhythmic sounds enhance his pre-game preparation from a physical and mental standpoint, creating a laid-back vibe that gets him locked in for the task ahead.",
    rating: 6,
    numReviews: 0,
  },{
    title: "LeBron 17 Low",
    image:"/images/cat4im4.jpg",
    price: 160,
    category: "Basketball",
    countInStock: 20,
    description: "Fine-tuned with LeBron's ferocious game in mind, the LeBron 17 Low has a sleek, low-top design that features a powerful combination of impact-ready cushioning and responsiveness.",
    rating: 5,
    numReviews: 2,
  },{
    title: "PG 4",
    image:"/images/cat4im5.jpg",
    price: 90,
    category: "Basketball",
    countInStock: 17,
    description: "Paul George is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.",
    rating: 6,
    numReviews: 3,
  },{
    title: "Nike Vapor Edge Elite 360 OBJ",
    image:"/images/cat5im1.jpg",
    price: 200,
    category: "Football",
    countInStock: 20,
    description: "Engineered for speed, the Nike Vapor Edge Elite 360 Flyknit OBJ offers a new degree of agility. An internal full-foot plate creates flexible support, while wide stud placement lets you cut fast. 360 degrees of Flyknit construction around your foot combines with a NikeSkin overlay to create a lightweight, fast feel with a sock-like fit.",
    rating: 5,
    numReviews: 2,
  },{
    title: "Nike Vapor Edge Turf",
    image:"/images/cat5im2.jpg",
    price: 80,
    category: "Football",
    countInStock: 25,
    description: "The Nike Vapor Edge Turf is built for speed on turf surfaces. Featuring foam cushioning and a grippy triangular-patterned rubber sole, the turf iteration of the Vapor line helps you leave your competition in the dust.",
    rating: 4,
    numReviews: 1,
  },{
    title: "Nike Vapor Edge Elite 360 Premium",
    image:"/images/cat5im3.jpg",
    price: 180,
    category: "Football",
    countInStock: 14,
    description: "Engineered for speed, the Nike Vapor Edge Elite 360 Premium offers a new degree of agility. Its internal full-foot plate offers flexible support while wide stud placements let you cut like never before. A full, 360-degree Flyknit upper combines with a NIKESKIN overlay to create a lightweight, fast feel with durability.",
    rating: 6,
    numReviews: 1,
  },{
    title: "Nike Vapor Edge Speed 360",
    image:"/images/cat5im4.jpg",
    price: 76,
    category: "Football",
    countInStock: 10,
    description: "Engineered for speed, the Nike Vapor Edge Speed 360 offers a new degree of agility. Its internal full-foot plate offers flexible support, while wide stud placements let you cut like never before. Fabric on the upper covered with a NikeSkin overlay for durable comfort.",
    rating: 5,
    numReviews: 2,
  },{
    title: "Nike Vapor Untouchable 3 Speed",
    image:"/images/cat5im5.jpg",
    price: 53,
    category: "Football",
    countInStock: 17,
    description: "The lightweight Nike Vapor Untouchable 3 Speed Men's Football Cleat features a lightweight one-piece upper and a low-cut profile that promotes natural ankle movement.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Nike Mercurial Vapor 13 Elite FG",
    image:"/images/cat6im1.jpg",
    price: 175,
    category: "Soccer",
    countInStock: 23,
    description: "Building on the 360-degree Flyknit innovation of the 12, the Nike Mercurial Vapor 13 Elite FG adds a Nike Aerotrak zone to the forefoot and a slightly stiffer chassis to help supercharge traction. Inside, an insole with NikeGrip technology provides maximum interior traction underfoot and lightweight cushioning.",
    rating: 4,
    numReviews: 2,
  },{
    title: "Nike Mercurial Vapor 13 Elite Neymar Jr. FG",
    image:"/images/cat6im2.jpg",
    price: 189,
    category: "Soccer",
    countInStock: 18,
    description: "Building on the 360 innovation of the 12, the Nike Mercurial Vapor 13 Elite Neymar Jr. FG adds a Nike Aerotrak zone to the forefoot and a slightly stiffer chassis to help supercharge traction. Inside, an insole with NikeGrip technology provides maximum interior traction underfoot and lightweight cushioning.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Nike Tiempo Legend 8 Elite FG",
    image:"/images/cat6im3.jpg",
    price: 138,
    category: "Soccer",
    countInStock: 21,
    description: "The Nike Tiempo Legend 8 Elite FG takes the legendary touch of premium kangaroo leather and adds foot-hugging Quad-Fit mesh in the lining and a wraparound Flyknit tongue that feels supportive under your arch.",
    rating: 6,
    numReviews: 0,
  },{
    title: "Nike Phantom Venom Elite FG",
    image:"/images/cat6im4.jpg",
    price: 175,
    category: "Soccer",
    countInStock: 16,
    description: "The Nike Phantom Venom Elite FG is engineered for powerful, precise strikes that win games. Blades on the instep create spin to control the flight of the ball, while Flywire cables and a flexible plate provide the stability and traction needed to unleash at any moment.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Nike Mercurial Superfly 7 Elite MDS FG",
    image:"/images/cat6im5.jpg",
    price: 206,
    category: "Soccer",
    countInStock: 11,
    description: "Dream of speed and play fast in the Nike Mercurial Superfly 7 Elite MDS FG. A streamlined upper combines with a Nike Aerotrak zone for high-speed play and supercharged traction.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike Air Zoom SuperRep",
    image:"/images/cat7im1.jpg",
    price: 120,
    category: "Training & Gym",
    countInStock: 21,
    description: "The Nike Air Zoom SuperRep is designed for circuit training, HIIT, short runs and other fast-paced exercise. Zoom Air cushioning in the forefoot combines with a wide, stable heel to keep you moving and lifting comfortably.",
    rating: 4,
    numReviews: 1,
  },{
    title: "Nike Metcon 5",
    image:"/images/cat7im2.jpg",
    price: 130,
    category: "Training & Gym",
    countInStock: 15,
    description: "The Nike Metcon 5 is our most tuned Metcon yet. This means specific stability for heavy lifting, traction made for speed, and durability where you need it. It even includes a Hyperlift insert that's compatible with all prior versions of the Metcon. Meet your secret weapon for weight lifting and high-impact training.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Nike Free Metcon 3",
    image:"/images/cat7im3.jpg",
    price: 120,
    category: "Training & Gym",
    countInStock: 14,
    description: "The Nike Free Metcon 3 combines Nike Free flexibility around the forefoot with Metcon stability in the heel to help you get the most out of your training session.",
    rating: 6,
    numReviews: 2,
  },{
    title: "Nike SuperRep Go",
    image:"/images/cat7im4.jpg",
    price: 100,
    category: "Training & Gym",
    countInStock: 18,
    description: "The Nike SuperRep Go combines comfortable foam cushioning, flexibility and support to get you moving in circuit-based fitness classes or while streaming workouts at home.",
    rating: 5,
    numReviews: 3,
  },{
    title: "Nike Free Metcon 3 AMP",
    image:"/images/cat7im5.jpg",
    price: 130,
    category: "Training & Gym",
    countInStock: 21,
    description: "The Nike Free Metcon 3 combines Nike Free flexibility around the forefoot with Metcon stability in the heel to help you get the most out of your training session.",
    rating: 5,
    numReviews: 2,
  },{
    title: "Nike SB Shane",
    image:"/images/cat8im1.jpg",
    price: 80,
    category: "Skateboarding",
    countInStock: 10,
    description: "Shane O'Neill put the same attention to detail into every aspect of his signature shoe as he does in his almost-otherworldly skating. From the low-key perforated ventilation at the toe, to the double lacing option, to the no-break-in remastered sole, the Nike SB Shane gets all the details right.",
    rating: 4,
    numReviews: 1,
  },{
    title: "Nike SB Air Zoom Bruin Edge",
    image:"/images/cat8im2.jpg",
    price: 85,
    category: "Skateboarding",
    countInStock: 12,
    description: "The Nike SB Air Zoom Bruin Edge puts a DIY spin on an iconic skate shoe. Frayed stitching, exposed foam and a mix of materials create a patched look that's built to perform. Stencils are included so you can take the DIY look to the next level.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike SB Zoom Stefan Janoski Canvas RM Premium",
    image:"/images/cat8im3.jpg",
    price: 90,
    category: "Skateboarding",
    countInStock: 8,
    description: "The Nike SB Zoom Stefan Janoski Canvas RM Premium pairs a minimal look with a modern fit. It has been updated with a new, plush sockliner and a flexible outsole for better boardfeel right out of the box.",
    rating: 7,
    numReviews: 2,
  },{
    title: "Nike SB Alleyoop",
    image:"/images/cat8im4.jpg",
    price: 60,
    category: "Skateboarding",
    countInStock: 10,
    description: "The Nike SB Alleyoop delivers comfort that lasts in a low-top silhouette. Soft suede and plush foam hug and support your foot, long after the sun goes down.",
    rating: 6,
    numReviews: 1,
  },{
    title: "Nike SB Zoom Stefan Janoski Slip RM",
    image:"/images/cat8im5.jpg",
    price: 59,
    category: "Skateboarding",
    countInStock: 18,
    description: "The Nike SB Zoom Stefan Janoski Slip RM pairs a minimal look with a modern fit. It has been updated with a new, plush sockliner and a flexible outsole for better boardfeel right out of the box.",
    rating: 5,
    numReviews: 1,
  },{
    title: "Nike Alpha Huarache Elite 2 Low",
    image:"/images/cat9im1.jpg",
    price: 76,
    category: "Baseball",
    countInStock: 14,
    description: "The Nike Alpha Huarache Elite 2 Low features both a Nike Air and Zoom Air unit for optimal underfoot cushioning. Its 9-stud design gives you the traction and stability needed to excel at every position.",
    rating: 6,
    numReviews: 1,
  },{
    title: "Nike Force Zoom Trout 6 Turf",
    image:"/images/cat9im2.jpg",
    price: 120,
    category: "Baseball",
    countInStock: 19,
    description: "The Nike Force Zoom Trout 6 Turf is built for your pregame routine. Durable molded material and a midfoot strap help keep your foot ventilated and secure when you're taking batting practice or shagging fly balls before first pitch.",
    rating: 7,
    numReviews: 2,
  },{
    title: "Nike Alpha Huarache Elite 2 Turf",
    image:"/images/cat9im3.jpg",
    price: 62,
    category: "Baseball",
    countInStock: 14,
    description: "The Nike Alpha Huarache Elite 2 Turf features the breathability of mesh and the underfoot cushioning of soft foam. Rubber pegs provide traction on surfaces including grass, dirt, turf and rubber.",
    rating: 8,
    numReviews: 3,
  },{
    title: "Nike Alpha Huarache Varsity Turf",
    image:"/images/cat9im4.jpg",
    price: 60,
    category: "Baseball",
    countInStock: 7,
    description: "The Nike Alpha Huarache Varsity Turf features the durability of a synthetic leather upper and the underfoot cushioning of Lunarlon foam. Its aggressive rubber outsole pattern provides traction on all pre-game surfaces including grass, dirt, turf and rubber.",
    rating: 7,
    numReviews: 0,
  },{
    title: "Nike Alpha Huarache Varsity Low MCS",
    image:"/images/cat9im5.jpg",
    price: 60,
    category: "Baseball",
    countInStock: 10,
    description: "Crafted with durable, synthetic leather and soft Lunarlon cushioning, the Nike Alpha Huarache Varsity Low MCS keeps you in the game. An 11-stud configuration gives traction for bursts of speed.",
    rating: 8,
    numReviews: 1,
  },{
    title: "Nike Roshe G",
    image:"/images/cat10im1.jpg",
    price: 80,
    category: "Golf",
    countInStock: 15,
    description: "The Nike Roshe G Men's Golf Shoe features a mesh upper for breathability and a modern look, while the soft and flexible foam midsole cushions every step on and off the course.",
    rating: 7,
    numReviews: 2,
  },{
    title: "Nike Air Max 1 G",
    image:"/images/cat10im2.jpg",
    price: 98,
    category: "Golf",
    countInStock: 17,
    description: "The Nike Air Max 1 G reinvents an icon with details made for the course. A visible Max Air unit cushions every step while creating a look that transitions seamlessly from the course to the concrete.",
    rating: 7,
    numReviews: 3,
  },{
    title: "Nike Air Zoom Victory Tour",
    image:"/images/cat10im3.jpg",
    price: 134,
    category: "Golf",
    countInStock: 20,
    description: "The Nike Air Zoom Victory Tour redefines premium performance. Revolutionary cushioning delivers a soft, responsive ride, while sleek leather adds sophistication to every round.",
    rating: 6,
    numReviews: 1,
  },{
    title: "Nike Roshe G Tour",
    image:"/images/cat10im4.jpg",
    price: 82,
    category: "Golf",
    countInStock: 16,
    description: "With a waterproof upper and removable spikes, the Nike Roshe G Tour Men's Golf Shoe is designed to help you outlast the weather. A plush midsole and soft synthetic leather upper offer lasting comfort from tee box 1 to the final green.",
    rating: 6,
    numReviews: 0,
  },{
    title: "Nike React Infinity Pro",
    image:"/images/cat10im5.jpg",
    price: 120,
    category: "Golf",
    countInStock: 12,
    description: "Built with revolutionary cushioning and innovative traction, the Nike React Infinity Pro gives you the support, comfort and grip you need to play at your best.",
    rating: 7,
    numReviews: 2,
  },{
    title: "NikeCourt Tech Challenge 20",
    image:"/images/cat11im1.jpg",
    price: 120,
    category: "Tennis",
    countInStock: 11,
    description: "Celebrating the 30th anniversary of the Nike Air Tech Challenge 2, the NikeCourt Tech Challenge 20 puts a modern spin on an iconic court shoe. You'll get the same vibrant graphics found on the original design with the added comfort of modern materials.",
    rating: 6,
    numReviews: 1,
  },{
    title: "NikeCourt Air Zoom Vapor X",
    image:"/images/cat11im2.jpg",
    price: 113,
    category: "Tennis",
    countInStock: 20,
    description: "The NikeCourt Air Zoom Vapor X has an updated Dynamic Fit system with a full-length foot frame to provide ultimate lateral control. Its new generative outsole combined with a Zoom Air unit provides a lightweight, responsive feel on the court.",
    rating: 7,
    numReviews: 0,
  },{
    title: "NikeCourt Air Zoom Vapor Cage 4",
    image:"/images/cat11im3.jpg",
    price: 150,
    category: "Tennis",
    countInStock: 15,
    description: "The NikeCourt Air Zoom Vapor Cage 4 is innovated to withstand your toughest matches—thanks to durable rubber and flexible plastic. Unique laces are hidden for extra durability while sliding.",
    rating: 7,
    numReviews: 1,
  },{
    title: "NikeCourt Lite 2",
    image:"/images/cat11im4.jpg",
    price: 48,
    category: "Tennis",
    countInStock: 19,
    description: "The NikeCourt Lite 2 is designed to cushion and support your feet during practice and play. Created specifically for hard courts, its unique outsole features 5 distinctive patterns. Each pattern is designed to visually outline 1 of the 5 basic movements new tennis players learn.",
    rating: 5,
    numReviews: 1,
  },{
    title: "NikeCourt Lite 2 Premium",
    image:"/images/cat11im5.jpg",
    price: 51,
    category: "Tennis",
    countInStock: 5,
    description: "The NikeCourt Lite 2 Premium is crafted from a blend of premium materials that will elevate any look. Plush foam underfoot and padding where you need it adds comfort that lasts.",
    rating: 7,
    numReviews: 2,
  },{
    title: "Nike Zoom Rival M 9",
    image:"/images/cat12im1.jpg",
    price: 65,
    category: "Track & Field",
    countInStock: 14,
    description: "Designed to be the most versatile track spike for a wide range of events, the Nike Zoom Rival M 9 delivers a cushioned, consistent fit. The arch band offers a secure feel through the midfoot, while the overlay on the upper adds durability in high-wear areas.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike Zoom Rival S 9",
    image:"/images/cat12im2.jpg",
    price: 65,
    category: "Track & Field",
    countInStock: 17,
    description: "Designed with the sprinter in mind, the Nike Zoom Rival S 9 Unisex Track Spike is ideal for short distances, hurdles and jumping events. A soft, foot-conforming sockliner provides incredible comfort, while a rigid plate extends under the arch and includes strategic spike receptacles for maximum power, speed and traction.",
    rating: 6,
    numReviews: 1,
  },{
    title: "Nike Zoom Ja Fly 3",
    image:"/images/cat12im3.jpg",
    price: 125,
    category: "Track & Field",
    countInStock: 12,
    description: "Designed for 200-meter sprinters, the Nike Zoom Ja Fly 3 Unisex Track Spike delivers a streamlined fit, support where you need it most and superb traction for a powerful step.",
    rating: 8,
    numReviews: 2,
  },{
    title: "Nike Zoom Pegasus Turbo 2",
    image:"/images/cat12im4.jpg",
    price: 162,
    category: "Track & Field",
    countInStock: 11,
    description: "The Nike Zoom Pegasus Turbo 2 is updated with a featherlight upper, while innovative foam brings revolutionary responsiveness to your long distance training.",
    rating: 8,
    numReviews: 1,
  },{
    title: "Nike Air Zoom Pegasus 36 Trail",
    image:"/images/cat12im5.jpg",
    price: 103,
    category: "Track & Field",
    countInStock: 20,
    description: "An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. A perforated mesh upper adds breathability, as double Zoom Air units underfoot cushion your stride. Opposing lugs on outsole optimize traction on your uphill climbs.",
    rating: 7,
    numReviews: 0,
  },{
    title: "Nike Epic React Flyknit 2",
    image:"/images/cat13im1.jpg",
    price: 119,
    category: "Walking",
    countInStock: 12,
    description: "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
    rating: 6,
    numReviews: 1,
  },{
    title: "Nike Zoom Pegasus Turbo 2",
    image:"/images/cat13im2.jpg",
    price: 143,
    category: "Walking",
    countInStock: 9,
    description: "The Nike Zoom Pegasus Turbo 2 is updated with a featherlight upper, while innovative foam brings revolutionary responsiveness to your long distance training.",
    rating: 7,
    numReviews: 2,
  },{
    title: "Nike ZoomX Vaporfly NEXT%",
    image:"/images/cat13im3.jpg",
    price: 250,
    category: "Walking",
    countInStock: 25,
    description: "The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking speed with a lighter design and faster feel than before. With more cushioning underfoot and reduced weight up top, the result is unprecedented energy return and comfort.",
    rating: 7,
    numReviews: 3,
  },{
    title: "Nike Air Zoom Pegasus 36 Miami",
    image:"/images/cat13im4.jpg",
    price: 120,
    category: "Walking",
    countInStock: 17,
    description: "The iconic Nike Air Zoom Pegasus 36 returns with more perforations and mesh in the upper for breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk without compromising comfort, while exposed Flywire cables give you a snug fit at higher speeds.",
    rating: 5,
    numReviews: 0,
  },{
    title: "Nike Air Zoom Pegasus 34",
    image:"/images/cat13im5.jpg",
    price: 78,
    category: "Walking",
    countInStock: 8,
    description: "Built for beginners and experienced runners, the Nike Air Zoom Pegasus 34 Men's Running Shoe features an updated, lighter Flymesh material that helps reduce heat buildup when you run. The tried and true cushioning and support runners have come to love remains.",
    rating: 8,
    numReviews: 1,
  },
];



 
class ProductSeeder extends Seeder {
  async shouldRun() {
    return Product.countDocuments()
      .exec()
      .then(count => count === 0);
  }
 
  async run() {

    // get all categories for products
    let lifestyleCategory = await Category.findOne({name: "Lifestyle"});
    let jordanCategory = await Category.findOne({name: "Jordan"});
    let runningCategory = await Category.findOne({name: "Running"});
    let basketballCategory = await Category.findOne({name: "Basketball"});
    let footballCategory = await Category.findOne({name: "Football"});
    let soccerCategory = await Category.findOne({name: "Soccer"});
    let trainingAndGymCategory = await Category.findOne({name: "Training & Gym"});
    let skateboardingCategory = await Category.findOne({name: "Skateboarding"});
    let baseballCategory = await Category.findOne({name: "Baseball"});
    let golfCategory = await Category.findOne({name: "Golf"});
    let tennisCategory = await Category.findOne({name: "Tennis"});
    let trackAndFieldCategory = await Category.findOne({name: "Track & Field"});
    let walkingCategory = await Category.findOne({name: "Walking"});

    let users = await User.find({});

    // first fake comments
    let comments = [{
      text: "Good shoes",
      rating: 5,
      user: users[0]._id
    }, {
      text: "Great shoes",
      rating: 5,
      user: users[1]._id
    },{
      text: "Excelent shoes",
      rating: 5,
      user: users[2]._id
    }];

    // calc total rating and num reviews
    const numReviews = comments.length;
    const rating = (comments.reduce((acc, com) => acc + com.rating, 0)) / numReviews;

    data.forEach(i => {

      i.numReviews = numReviews;
      i.rating = rating;
      i.comments = comments;

      switch(i.category) {
        case "Lifestyle": { 
          i.category = lifestyleCategory;
          break;
        };
        case "Jordan": {
          i.category = jordanCategory; 
          break;
        }
        case "Running": { 
          i.category = runningCategory;
          break;
        }
        case "Basketball": { 
          i.category = basketballCategory;
          break;
        }
        case "Football": { 
          i.category = footballCategory; 
          break;
        }
        case "Soccer": { 
          i.category = soccerCategory; 
          break;
        }
        case "Training & Gym": { 
          i.category = trainingAndGymCategory;
          break;
        }
        case "Skateboarding": { 
          i.category = skateboardingCategory;
          break;
        }
        case "Baseball": { 
          i.category = baseballCategory;
          break;
        }
        case "Golf": { 
          i.category = golfCategory;
          break;
        }
        case "Tennis": { 
          i.category = tennisCategory;
          break;
        }
        case "Track & Field": { 
          i.category = trackAndFieldCategory;
          break;
        }
        case "Walking": { 
          i.category = walkingCategory;
          break;
        }
        default:
        break;
      }
  
    })

    // save all data
    return Product.create(data);
    
  }
}
 
export default ProductSeeder;