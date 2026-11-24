/**
 * RADHA RANI'S KITCHEN - CENTRALIZED PRODUCT CATALOG
 * 
 * 100% PURE VEGETARIAN TRADITIONAL TELUGU FOOD
 * To update or add products (up to 60+ items):
 * Simply append or edit objects in the `products` array below.
 */

export const CATEGORIES = [
  {
    id: "all",
    name: "All Items",
    shortName: "All Items",
    icon: "UtensilsCrossed",
    description: "Explore all our pure vegetarian authentic Telugu delicacies and wholesale offerings."
  },
  {
    id: "wholesale-rotis",
    name: "Wholesale Roti Suppliers",
    shortName: "Wholesale Rotis",
    icon: "Wheat",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    description: "Daily soft Wheat Phulkas, Chapatis & Jowar Rotis delivered fresh to hostels, restaurants & caterers across Warangal & Hanamkonda."
  },
  {
    id: "snacks-sweets",
    name: "Traditional Snacks & Sweets",
    shortName: "Snacks & Sweets",
    icon: "Cookie",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
    description: "Authentic Telangana festive snacks: Sakinalu, Ariselu, Chekkalu, Sunnundalu, and pure ghee sweets made with heritage recipes."
  },
  {
    id: "prasadams",
    name: "Homemade Prasadams",
    shortName: "Prasadams",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    description: "Sanctified temple-style offerings prepared with madi (sacred purity): Temple Pulihora, Chakkera Pongali, and Daddojanam."
  },
  {
    id: "catering",
    name: "Catering Services",
    shortName: "Catering",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    description: "100% Pure vegetarian traditional Telugu catering for weddings, housewarmings, vratams, and festive family celebrations."
  },
  {
    id: "veg-meals",
    name: "Vegetarian Meals",
    shortName: "Veg Meals",
    icon: "Soup",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    description: "Daily homestyle Telugu thalis featuring hot steamed rice, pappu, sambar, rasam, freshly ground vepudu, and curd."
  },
  {
    id: "fresh-juices",
    name: "Fresh Juices",
    shortName: "Fresh Juices",
    icon: "GlassWater",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80",
    description: "100% natural, hygienic freshly pressed fruit juices, sugarcane juice with ginger-lemon, and nourishing badam milk."
  },
  {
    id: "pooja-essentials",
    name: "Pooja Essentials",
    shortName: "Pooja Essentials",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80",
    description: "Sacred pure desi cow ghee, fragrant agarbathis, pooja oil, and samagri kits curated for authentic Telugu Hindu rituals."
  }
];

export const PRODUCTS = [
  // 1. Wholesale Roti Suppliers
  {
    id: "wr-01",
    name: "Soft Wheat Phulkas (Oil-Free)",
    categoryId: "wholesale-rotis",
    categoryName: "Wholesale Roti Suppliers",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Handcrafted, pillowy soft whole wheat phulkas cooked over open flame. Zero oil, light on digestion, stays fresh for hours.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Pack of 25", "Pack of 50", "Pack of 100", "Daily Hostel Contract (500+)"],
    idealFor: "Hostels, Messes, Hotels, Corporate Tiffin Services & Parties"
  },
  {
    id: "wr-02",
    name: "Homestyle Soft Chapatis (Light Ghee/Oil)",
    categoryId: "wholesale-rotis",
    categoryName: "Wholesale Roti Suppliers",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Traditional layered soft chapatis made from 100% stone-ground wheat flour with a gentle brush of pure oil or ghee.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Pack of 25", "Pack of 50", "Pack of 100", "Bulk Catering Pack"],
    idealFor: "Family Gatherings, Corporate Canteens & Daily Orders"
  },
  {
    id: "wr-03",
    name: "Authentic Telangana Jowar Rotis (Jonna Rotte)",
    categoryId: "wholesale-rotis",
    categoryName: "Wholesale Roti Suppliers",
    isBestseller: false,
    isFeatured: true,
    pureVeg: true,
    description: "Traditional hand-patted gluten-free Sorghum (Jowar) rotis made the village-style way on hot iron tawa. High fiber & diabetic friendly.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Pack of 10", "Pack of 25", "Pack of 50", "Custom Bulk Order"],
    idealFor: "Diabetic Diet, Traditional Telugu Meals, Special Dinners"
  },
  {
    id: "wr-04",
    name: "Methi & Palak Stuffed Chapati",
    categoryId: "wholesale-rotis",
    categoryName: "Wholesale Roti Suppliers",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Wholesome chapatis kneaded with fresh aromatic methi (fenugreek) or palak leaves and mild traditional spices.",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Pack of 20", "Pack of 50", "Hostel / Event Batch"],
    idealFor: "Healthy Breakfast, School/College Mess, Office Lunches"
  },

  // 2. Traditional Snacks & Sweets
  {
    id: "ss-01",
    name: "Telangana Special Sakinalu",
    categoryId: "snacks-sweets",
    categoryName: "Traditional Snacks & Sweets",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "The crown jewel of Telangana heritage! Crispy, circular rice flour rings infused with white sesame seeds (nuvvulu) and ajwain (vaamu).",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    packOptions: ["500g Pack", "1 kg Family Pack", "2 kg Gift Box", "Wedding Talambralu Batch"],
    idealFor: "Sankranti, Weddings, Festive Gifting & Evening Tea"
  },
  {
    id: "ss-02",
    name: "Pure Bellam Ariselu (Ghee & Nuvvulu)",
    categoryId: "snacks-sweets",
    categoryName: "Traditional Snacks & Sweets",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Traditional soft and melt-in-mouth Ariselu made with aged organic jaggery, pure cow ghee, freshly pounded rice flour, and sesame.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    packOptions: ["500g Pack", "1 kg Box", "2 kg Festive Pack"],
    idealFor: "Festivals, Marriages, Seemantham & Special Occasions"
  },
  {
    id: "ss-03",
    name: "Crispy Telangana Chekkalu (Pappu Chekkalu)",
    categoryId: "snacks-sweets",
    categoryName: "Traditional Snacks & Sweets",
    isBestseller: false,
    isFeatured: true,
    pureVeg: true,
    description: "Crunchy rice crackers prepared with soaked chana dal, curry leaves, crushed green chillies, and ginger. 100% homemade crunch.",
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f240a?auto=format&fit=crop&w=700&q=80",
    packOptions: ["250g", "500g", "1 kg Bulk Pack"],
    idealFor: "Daily Snack, Travel Munching, Festive Hampers"
  },
  {
    id: "ss-04",
    name: "Pure Ghee Minapa Sunnundalu (Jaggery / Sugar)",
    categoryId: "snacks-sweets",
    categoryName: "Traditional Snacks & Sweets",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "A traditional powerhouse sweet made with slow-roasted black gram (urad dal), wholesome organic jaggery, and generous pure cow ghee.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Box of 12 pcs (500g)", "Box of 24 pcs (1 kg)", "Bulk Wedding Order"],
    idealFor: "Strength, Postpartum Nutrition, Festive Sweet Trays"
  },
  {
    id: "ss-05",
    name: "Traditional Boondi Laddu (Kalyana Laddu)",
    categoryId: "snacks-sweets",
    categoryName: "Traditional Snacks & Sweets",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Aromatic gram flour boondi soaked in cardamom-infused sugar syrup, packed with cashews, raisins, and a touch of edible camphor.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=80",
    packOptions: ["500g Box (approx 10 pcs)", "1 kg Box (approx 20 pcs)", "Custom Wedding Packs"],
    idealFor: "Weddings, Pooja Prasadam, Family Celebrations"
  },
  {
    id: "ss-06",
    name: "Murukku & Jantikalu Mix",
    categoryId: "snacks-sweets",
    categoryName: "Traditional Snacks & Sweets",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Golden fried savory spirals seasoned with hing, red chilli and carom seeds. Ultra crunchy, light, and fried in fresh clean sunflower oil.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
    packOptions: ["250g", "500g", "1 kg"],
    idealFor: "Chai Time, Kids Snack, Travel Companion"
  },

  // 3. Homemade Prasadams
  {
    id: "pr-01",
    name: "Temple Style Chintapandu Pulihora (Tamarind Rice)",
    categoryId: "prasadams",
    categoryName: "Homemade Prasadams",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Prepared in traditional madi with thick slow-cooked tamarind paste, curry leaves, roasted peanuts, mustard seeds, green chillies, and pure sesame oil.",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=700&q=80",
    packOptions: ["1 kg Tub (serves 4-5)", "2 kg Handi (serves 8-10)", "5 kg Bulk Box (serves 25+)", "10 kg Vratam Order"],
    idealFor: "Satyanarayana Swamy Vratam, Temple Annadanam, Festival Days"
  },
  {
    id: "pr-02",
    name: "Pure Ghee Chakkera Pongali (Sweet Pongal)",
    categoryId: "prasadams",
    categoryName: "Homemade Prasadams",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Rich devotional sweet cooked with roasted moong dal, aged Sona Masoori rice, organic jaggery syrup, fried cashews, raisins, and aromatic cardamom.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    packOptions: ["1 kg Tub", "2 kg Handi", "5 kg Vratam Container"],
    idealFor: "Ganesh Chaturthi, Navratri, Varalakshmi Vratam"
  },
  {
    id: "pr-03",
    name: "Traditional Daddojanam (Temple Curd Rice)",
    categoryId: "prasadams",
    categoryName: "Homemade Prasadams",
    isBestseller: false,
    isFeatured: true,
    pureVeg: true,
    description: "Soothing rice mashed with thick homemade curd, fresh milk, butter tempering with mustard seeds, ginger juliennes, green chillies, and pomegranate pearls.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    packOptions: ["1 kg Tub", "2 kg Handi", "5 kg Catering Bowl"],
    idealFor: "Deity Naivedyam, Summer Feasts, Navratri Prasadam"
  },
  {
    id: "pr-04",
    name: "Katte Pongali with Fresh Coconut Chutney",
    categoryId: "prasadams",
    categoryName: "Homemade Prasadams",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Wholesome savoury pongal tempered with generous pure cow ghee, whole black pepper, roasted cumin seeds, curry leaves, and ginger.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    packOptions: ["1 kg Tub", "2.5 kg Handi", "5 kg Festive Batch"],
    idealFor: "Morning Naivedyam, Temple Seva, Gruhapravesam Breakfast"
  },

  // 4. Catering Services
  {
    id: "cat-01",
    name: "Traditional Telugu Vivaha Bhojanam (Wedding Feast)",
    categoryId: "catering",
    categoryName: "Catering Services",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Full grand banana leaf pure vegetarian spread: 3 Sweets, 2 Hots, 2 Curries (Gutti Vankaya / Paneer), Pappu, Sambar, Rasam, Pulihora, Biryani, Curd & Paan.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    packOptions: ["50-100 Guests", "100-250 Guests", "250-500 Guests", "500+ Mega Feast"],
    idealFor: "Traditional Hindu Weddings, Receptions & Grand Engagements"
  },
  {
    id: "cat-02",
    name: "Satyanarayana Vratam & Pooja Special Catering",
    categoryId: "catering",
    categoryName: "Catering Services",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "No-onion, no-garlic (Sattvic) authentic traditional menu including Rava Prasadam, Chintapandu Pulihora, Dosakaya Pappu, Potato Fry, Sambar & Daddojanam.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    packOptions: ["25-50 Guests", "50-100 Guests", "100-200 Guests"],
    idealFor: "Satyanarayana Swamy Vratam, Housewarmings, Temple Pujas"
  },
  {
    id: "cat-03",
    name: "Gruhapravesam (Housewarming) Pure Veg Banquet",
    categoryId: "catering",
    categoryName: "Catering Services",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Auspicious housewarming catering package with welcome fresh juices, traditional Telugu breakfast or lunch buffet with live hot phulka station.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    packOptions: ["30-75 Guests", "75-150 Guests", "150+ Guests"],
    idealFor: "New Home Blessings, Gruhapravesam, Shashti Poorthi"
  },
  {
    id: "cat-04",
    name: "Mini Party & Birthday Box Catering",
    categoryId: "catering",
    categoryName: "Catering Services",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Conveniently packed individual eco-friendly meal boxes or mini buffet setups with choice of rotis, veg pulao, paneer curry, sweet, and raita.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    packOptions: ["20-40 Boxes", "40-80 Boxes", "100+ Custom Event"],
    idealFor: "Birthday Parties, Office Get-togethers, Upanayanam"
  },

  // 5. Vegetarian Meals
  {
    id: "vm-01",
    name: "Telangana Special Pure Veg Thali",
    categoryId: "veg-meals",
    categoryName: "Vegetarian Meals",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Complete authentic meal: 2 Soft Phulkas, Sona Masoori Rice, Mudda Pappu with Ghee, Telangana Vepudu (fry), Gongura Pachadi, Sambar, Rasam, Curd, and Papad.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Single Thali", "Daily Monthly Subscription", "Office Bulk Lunch (5+)"],
    idealFor: "Daily Lunch, Office Executives, Homestyle Cravings"
  },
  {
    id: "vm-02",
    name: "Daily Homestyle South Indian Tiffin Box",
    categoryId: "veg-meals",
    categoryName: "Vegetarian Meals",
    isBestseller: false,
    isFeatured: true,
    pureVeg: true,
    description: "Balanced, healthy lunch delivered hot in Warangal & Hanamkonda. Rotis/Rice, Seasonal Veg Curry, Dal, Rasam, and fresh Butter Milk (Majjiga).",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80",
    packOptions: ["1-Day Trial", "Weekly 6-Day Plan", "Monthly 26-Day Subscription"],
    idealFor: "Hostel Students, Working Professionals, Elders at Home"
  },
  {
    id: "vm-03",
    name: "Sunday Special Gutti Vankaya & Bagara Rice Meal",
    categoryId: "veg-meals",
    categoryName: "Vegetarian Meals",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Fragrant Telangana Bagara Annam paired with slow-cooked stuffed Brinjal curry in sesame-peanut gravy, Dalcha, Onion Raita, and Mirchi Ka Salan.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Regular Meal (Serves 1-2)", "Family Combo (Serves 4)"],
    idealFor: "Weekend Family Feast, Festival Lunch"
  },
  {
    id: "vm-04",
    name: "Sattvic Vratam Thali (No Onion, No Garlic)",
    categoryId: "veg-meals",
    categoryName: "Vegetarian Meals",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Pure and devotional meal prepared strictly without onions or garlic. Features Kaddu Kootu, Arbi Fry, Moong Dal, Pepper Rasam, Steamed Rice & Kheer.",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Single Plate", "Pack of 5", "Pack of 10"],
    idealFor: "Ekadashi, Sankashti, Shravana Masam, Karthika Masam"
  },

  // 6. Fresh Juices
  {
    id: "fj-01",
    name: "Fresh Pressed Sugarcane Juice (Allam & Nimma)",
    categoryId: "fresh-juices",
    categoryName: "Fresh Juices",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Crushed fresh from cleaned sugarcane stalks with crushed fresh ginger (allam), mint leaves (pudina), and zesty lemon. 100% natural and unadulterated.",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=700&q=80",
    packOptions: ["500 ml Bottle", "1 Litre Family Flask", "Event Bulk Dispensers (20L+)"],
    idealFor: "Natural Hydration, Instant Energy, Summer Catering"
  },
  {
    id: "fj-02",
    name: "Pure Mosambi (Sweet Lime) Juice",
    categoryId: "fresh-juices",
    categoryName: "Fresh Juices",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Freshly squeezed sweet lime juice with zero added water or artificial sugars. Rich in natural Vitamin C and rejuvenating minerals.",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
    packOptions: ["300 ml Glass Bottle", "1 Litre Bottle", "Catering Counter Setup"],
    idealFor: "Post-workout, Detox, Morning Refreshment"
  },
  {
    id: "fj-03",
    name: "Royal Badam Milk (Pure Saffron & Nuts)",
    categoryId: "fresh-juices",
    categoryName: "Fresh Juices",
    isBestseller: true,
    isFeatured: false,
    pureVeg: true,
    description: "Thick boiled dairy milk slow-simmered with crushed California almonds, pure Kashmiri saffron (kumkuma puvvu), cardamom, and pistachio slivers.",
    image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=700&q=80",
    packOptions: ["200 ml Bottle (Chilled/Warm)", "Pack of 6 Bottles", "Wedding Welcome Drink Counter"],
    idealFor: "Wedding Welcome Drinks, Festive Treats, Night-time Nourishment"
  },
  {
    id: "fj-04",
    name: "Fresh Pomegranate (Danamma) Juice",
    categoryId: "fresh-juices",
    categoryName: "Fresh Juices",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Cold-pressed ruby red pomegranate juice with zero bitterness. Packed with powerful antioxidants and heart-healthy nutrients.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80",
    packOptions: ["350 ml Bottle", "750 ml Bottle", "Event Bulk Pack"],
    idealFor: "Immunity Boost, Healthy Family Breakfast"
  },

  // 7. Pooja Essentials
  {
    id: "pe-01",
    name: "100% Pure Desi Cow Ghee (Bilona Method)",
    categoryId: "pooja-essentials",
    categoryName: "Pooja Essentials",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Traditional golden granulated (danedar) ghee churned from curd of grass-fed desi cows. Sacred aroma ideal for deepams, homams, and prasadam.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=700&q=80",
    packOptions: ["250 ml Glass Jar", "500 ml Glass Jar", "1 Litre Tin", "5 Litre Temple Tin"],
    idealFor: "Akhanda Deepam, Homam, Vratams, Daily Naivedyam"
  },
  {
    id: "pe-02",
    name: "Traditional Complete Telugu Pooja Samagri Kit",
    categoryId: "pooja-essentials",
    categoryName: "Pooja Essentials",
    isBestseller: true,
    isFeatured: true,
    pureVeg: true,
    description: "Comprehensive kit containing pure turmeric (pasupu), organic kumkuma, gandham (sandalwood), camphor tablets (karpuram), agarbathi, matchbox, and sacred cotton wicks.",
    image: "https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Standard Vratam Kit", "Grand Gruhapravesam Kit", "Navratri 9-Day Kit"],
    idealFor: "Satyanarayana Vratam, Gruhapravesam, Varalakshmi Vratham"
  },
  {
    id: "pe-03",
    name: "Pachha Karpuram & Bhimseni Camphor",
    categoryId: "pooja-essentials",
    categoryName: "Pooja Essentials",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "100% pure organic edible-grade camphor for temple prasadam aroma, along with pure soot-free Bhimseni camphor crystals for blissful aarti.",
    image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=700&q=80",
    packOptions: ["50g Box", "100g Box", "250g Festive Pack"],
    idealFor: "Prasadam Preparation, Daily Sandhya Aarti, Positive Aura"
  },
  {
    id: "pe-04",
    name: "Pure Cotton Deepam Wicks & Castor/Ghee Blend Diya Oil",
    categoryId: "pooja-essentials",
    categoryName: "Pooja Essentials",
    isBestseller: false,
    isFeatured: false,
    pureVeg: true,
    description: "Hand-rolled long cotton wicks (puvvu vathulu) paired with soot-free Pancha Deepam aromatic sacred lamp oil for auspicious temple and home shrines.",
    image: "https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&fit=crop&w=700&q=80",
    packOptions: ["Pack of 200 Wicks + 500ml Oil", "Monthly Pooja Bundle", "Temple Size Pack"],
    idealFor: "Daily Deeparadhana, Karthika Deepam, Temple Seva"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Smt. Lakshmi Sarada Garu",
    location: "Nakkalagutta, Hanamkonda",
    rating: 5,
    quote: "We ordered 300 soft phulkas and traditional Sakinalu for my daughter's wedding events. The taste was just like my grandmother's cooking! Soft, clean, and delivered right on time.",
    tag: "Wholesale Rotis & Sweets"
  },
  {
    id: 2,
    name: "Venkateshwara Rao",
    location: "Subedari, Warangal",
    rating: 5,
    quote: "For our Satyanarayana Swamy Vratam, Radha Rani's Kitchen provided the complete prasadam spread with tamarind pulihora and chakkera pongali. The madi purity and sacred taste were unmatched.",
    tag: "Vratam Prasadam & Pooja Samagri"
  },
  {
    id: 3,
    name: "Rajeshwar Reddy",
    location: "Madikonda, Kazipet",
    rating: 5,
    quote: "Our hostel mess has been taking 200 chapatis daily from Radha Rani's Kitchen for the last 6 months. Students love the softness and purity. Highly dependable and professional team in Warangal!",
    tag: "Daily Wholesale Roti Contract"
  }
];

export const SERVICES_DETAILED = [
  {
    id: "wholesale-rotis",
    title: "Wholesale Roti Suppliers",
    subtitle: "Fresh, Soft & Hygienic Bulk Rotis Daily",
    tagline: "Trusted by Hostels, Hotels, Restaurants & Catering Events in Tri-Cities",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=900&q=80",
    features: [
      "100% Whole Wheat Phulkas (Puffed over flame, zero oil)",
      "Layered Soft Chapatis with mild pure oil/ghee brush",
      "Traditional Telangana Jowar Rotis (Jonna Rotte) hand-patted",
      "Bulk capacity: From 25 pieces to 2,000+ pieces daily",
      "Daily morning & evening scheduled delivery in Warangal, Hanamkonda & Kazipet",
      "Strict food safety standards, hygienic packaging & hot delivery"
    ],
    idealFor: "Student Hostels, Working Women's Hostels, Cloud Kitchens, Function Halls & Corporate Pantries."
  },
  {
    id: "snacks-sweets",
    title: "Traditional Snacks & Sweets",
    subtitle: "Telangana Pindi Vantalu & Pure Ghee Sweets",
    tagline: "Handcrafted with Heritage Recipes & Pure Ingredients",
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80",
    features: [
      "Signature Telangana Sakinalu with organic sesame seeds (nuvvulu)",
      "Traditional Bellam Ariselu made with aged jaggery and pure cow ghee",
      "Crispy Pappu Chekkalu with chana dal, fresh curry leaves & green chillies",
      "Pure Ghee Minapa Sunnundalu rich in protein and authentic aroma",
      "Authentic Kalyana Boondi Laddus, Bobbatlu & Murukku varieties",
      "Zero artificial colors, zero preservatives, and fresh oil in every batch"
    ],
    idealFor: "Sankranti, Dasara, Diwali, Weddings, Seemantham & Export Gifting to Family Abroad."
  },
  {
    id: "prasadams",
    title: "Homemade Prasadams",
    subtitle: "Sacred Devotional Offerings with Strict Madi",
    tagline: "Prepared with Devotion, Purity & Temple Discipline",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=80",
    features: [
      "Temple-style Chintapandu Pulihora with slow-reduced tamarind paste",
      "Rich Chakkera Pongali simmered with cow ghee, jaggery & cashews",
      "Soothing traditional Daddojanam tempered with ginger, mustard & pomegranate",
      "Katte Pongali, Bellam Paramannam, and Rava Kesari naivedyams",
      "Strict vegetarian kitchen with sacred madi practices and clean utensils",
      "Punctual early-morning delivery for muhurthams and pooja timings"
    ],
    idealFor: "Satyanarayana Swamy Vratams, Vinayaka Chavithi, Navratri, Varalakshmi Vratam & Temple Annadanams."
  },
  {
    id: "catering",
    title: "Pure Vegetarian Catering",
    subtitle: "Grand Banana Leaf & Buffet Feasts for Memorable Occasions",
    tagline: "From Intimate Family Gatherings to Grand Celebrations",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80",
    features: [
      "Traditional Telugu Vivaha Bhojanam with authentic festive curries & sweets",
      "Customizable Sattvic (no-onion, no-garlic) menus for holy ceremonies",
      "Live tawa roti counters, hot jalebi / sweet counters, and welcome juice bars",
      "Professional, uniformed, and courteous service staff",
      "Eco-friendly dining options (Patravali banana leaf or biodegradable disposables)",
      "Flexible guest capacities: 25 to 1,500+ attendees"
    ],
    idealFor: "Weddings, Receptions, Gruhapravesam, Upanayanam, Shashti Poorthi & Birthdays."
  },
  {
    id: "veg-meals",
    title: "Vegetarian Meals & Tiffins",
    subtitle: "Nourishing, Clean & Wholesome Telugu Comfort Food",
    tagline: "Taste Like Mother's Kitchen Every Single Day",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=900&q=80",
    features: [
      "Authentic Telangana Thalis with rice, roti, dal, vepudu, sambar & curd",
      "Monthly and weekly homestyle tiffin meal subscriptions",
      "Low oil, balanced spices, and zero commercial soda or taste enhancers",
      "Fresh daily menu rotation featuring seasonal Telangana vegetables",
      "Hygienic spill-proof insulated lunch containers"
    ],
    idealFor: "Working Professionals, College Students, Elderly Parents & Daily Diners."
  },
  {
    id: "fresh-juices",
    title: "Fresh Juices & Beverages",
    subtitle: "100% Pure, Hygienic & Revitalizing Beverages",
    tagline: "Natural Goodness Without Preservatives or Added Water",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=900&q=80",
    features: [
      "Fresh crushed Sugarcane Juice with crushed ginger, lemon & mint",
      "Cold-pressed Mosambi, Orange, and Pomegranate juices",
      "Signature Rich Badam Milk with saffron and almond slivers",
      "Traditional Spiced Buttermilk (Challa / Majjiga) with curry leaves & ginger",
      "Bulk beverage dispensers and live juice counters for catering events"
    ],
    idealFor: "Summer Coolers, Event Welcome Drinks, Daily Health Boost."
  },
  {
    id: "pooja-essentials",
    title: "Pooja Essentials",
    subtitle: "Pure Desi Cow Ghee & Handpicked Pooja Samagri",
    tagline: "Everything You Need for Auspicious Rituals Under One Roof",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80",
    features: [
      "100% Pure Desi Cow Ghee prepared through traditional Bilona churning",
      "Soot-free Bhimseni Pachha Karpuram (camphor) and fragrant agarbathis",
      "Curated Satyanarayana Vratam & Gruhapravesam Samagri boxes",
      "Pure cotton deepam wicks and sacred Pancha Deepam oil blends",
      "Guaranteed unadulterated sacred purity for your deities"
    ],
    idealFor: "Daily Deeparadhana, Temple Offerings, Gruhapravesam & Special Homas."
  }
];

export const BUSINESS_INFO = {
  name: "Radha Rani's Kitchen",
  tagline: "Made with Tradition, Served with Love.",
  primaryPhone: "9879687856",
  secondaryPhone: "9989365006",
  primaryWhatsApp: "+91 9879687856",
  address: "Arepally, Near Hanuman Temple, Warangal, Telangana, India",
  serviceAreas: "Warangal, Hanamkonda, Kazipet & surrounding areas",
  businessTimings: "Open Daily, 6:00 AM – 9:00 PM",
  instagram: "@radha.raniskitchen",
  instagramUrl: "https://instagram.com/radha.raniskitchen",
  facebook: "Coming Soon",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Arepally+Warangal+Telangana+Hanuman+Temple"
};
