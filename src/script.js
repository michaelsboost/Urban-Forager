function weedGame() {
  return {
    screen: "home",
    gameMode: "identification",
    currentQuestionIndex: 0,
    score: 0,
    selectedAnswer: null,
    isCorrect: false,
    showResults: false,
    showHelp: false,
    activeTab: "identification",
    currentWeed: null,
    searchQuery: "",
    weeds: [
      {
        id: 1,
        commonName: "Dandelion",
        emoji: "🌼",
        images: [
          "https://cdn.pixabay.com/photo/2023/05/22/14/49/dandelion-8010882_1280.jpg",
          "https://cdn.pixabay.com/photo/2012/08/11/14/21/common-dandelion-54079_1280.jpg",
          "https://cdn.pixabay.com/photo/2018/05/08/10/17/dandelion-3382663_1280.jpg",
          "https://cdn.pixabay.com/photo/2023/05/04/06/12/dandelion-7969281_1280.jpg",
          "https://cdn.pixabay.com/photo/2017/03/19/18/17/dandelion-2157222_1280.jpg",
        ],
        scientificName: "Taraxacum officinale",
        family: "Asteraceae",
        description:
          "A common perennial herb with bright yellow composite flowers and a deep taproot. All parts of the plant are useful.",
        season: "Spring to Fall",
        habitat: "Lawns, meadows, disturbed areas",
        difficulty: "Beginner",
        tags: ["Edible", "Medicinal", "Nutritious", "Common"],
        identifyingFeatures: [
          "Bright yellow flowers that turn into puffballs of seeds",
          "Deeply toothed leaves (the name comes from French 'dent de lion' meaning lion's tooth)",
          "Hollow flower stems that exude a milky sap when broken",
          "Deep taproot that can regenerate from fragments",
        ],
        lookAlikes:
          "Young dandelions can be confused with hawkweed or sow thistle, but dandelion leaves are hairless and form a basal rosette.",
        edibleParts: ["Leaves", "Flowers", "Roots"],
        harvestingNotes:
          "Harvest young leaves in spring for best flavor. Roots are best harvested in fall when energy reserves are highest.",
        culinaryUses: [
          "Young leaves in salads (bitter when mature)",
          "Flowers for fritters, wine, or syrup",
          "Roasted roots as coffee substitute",
          "All parts can be blanched to reduce bitterness",
        ],
        recipes: [
          "Dandelion greens salad with bacon and warm vinaigrette",
          "Dandelion flower fritters",
          "Dandelion root coffee",
          "Dandelion wine",
        ],
        medicinalUses: [
          "Liver tonic and detoxifier",
          "Diuretic properties (French name 'pissenlit' means 'wet the bed')",
          "Digestive aid and mild laxative",
          "Anti-inflammatory for joints",
          "Traditional use for skin conditions like eczema",
        ],
        preparationMethods: [
          "Tea from leaves or flowers",
          "Tincture from root",
          "Salve from flowers for skin",
          "Fresh leaves in salads for vitamins",
        ],
        safetyNotes:
          "Generally safe. Those with allergies to related plants (ragweed, chrysanthemums) may react. Can interact with diuretic medications.",
        nutritionalSummary:
          "Extremely nutritious. Leaves are richer in vitamin A than carrots and contain significant vitamin C, K, and E plus calcium, iron, and potassium.",
        nutrients: [
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin K", amount: "Very High" },
          { name: "Calcium", amount: "Good" },
          { name: "Iron", amount: "Good" },
          { name: "Potassium", amount: "High" },
          { name: "Antioxidants", amount: "High" },
        ],
        healthBenefits: [
          "Supports liver function and detoxification",
          "Promotes healthy digestion",
          "Anti-inflammatory properties",
          "Rich in antioxidants that fight free radicals",
          "Supports bone health through vitamin K content",
        ],
      },
      {
        id: 2,
        commonName: "Plantain (Broadleaf)",
        emoji: "🌿",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Grote_weegbree_bloeiwijze_Plantago_major_subsp._major.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f5/Grote_weegbree_Plantago_major_subsp._major.jpg",
          "https://live.staticflickr.com/8454/7982014955_ce369a7663_b.jpg",
          "https://cdn.pixabay.com/photo/2015/07/14/11/00/plantago-major-844568_1280.jpg"
        ],
        scientificName: "Plantago major",
        family: "Plantaginaceae",
        description:
          "A low-growing perennial with broad, ribbed leaves in a basal rosette and small flowers on tall spikes.",
        season: "Spring to Fall",
        habitat: "Lawns, paths, disturbed ground",
        difficulty: "Beginner",
        tags: ["Medicinal", "Edible", "First Aid", "Common"],
        identifyingFeatures: [
          "Broad, oval leaves with parallel veins",
          "Leaves form a basal rosette close to the ground",
          "Distinctive flower spikes that can reach 10 inches tall",
          "Leaves when chewed or crushed become fibrous and sticky",
        ],
        lookAlikes:
          "Broadleaf plantain can be confused with lamb's quarters when young, but plantain has distinctive parallel veins.",
        edibleParts: ["Young leaves", "Seeds"],
        harvestingNotes:
          "Harvest young leaves in spring before flower stalks appear. Older leaves become tough and fibrous.",
        culinaryUses: [
          "Young leaves in salads or as cooked greens",
          "Seeds can be used like psyllium as a thickening agent",
          "Leaves can be used to wrap food for cooking",
        ],
        recipes: [
          "Sautéed plantain greens with garlic",
          "Plantain seed pudding",
          "Plantain leaf wraps for steamed fish",
        ],
        medicinalUses: [
          "Drawing agent for splinters, bee stings, and venom",
          "Anti-inflammatory for skin irritations",
          "Respiratory support for coughs and bronchitis",
          "Wound healing and anti-bleeding properties",
          "Digestive aid and mild laxative from seeds",
        ],
        preparationMethods: [
          "Fresh leaf poultice for insect bites and wounds",
          "Tea from leaves for respiratory issues",
          "Syrup from leaves for coughs",
          "Salve from infused oil for skin conditions",
        ],
        safetyNotes: "Generally very safe. Rare allergic reactions possible.",
        nutritionalSummary:
          "Rich in mucilage, tannins, and silica. Good source of vitamin C, beta-carotene, and calcium.",
        nutrients: [
          { name: "Vitamin A", amount: "Good" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Silica", amount: "High" },
          { name: "Mucilage", amount: "Very High" },
          { name: "Tannins", amount: "High" },
        ],
        healthBenefits: [
          "Soothes skin irritations and promotes wound healing",
          "Supports respiratory health",
          "Anti-inflammatory properties",
          "Aids digestion through mucilage content",
          "Drawing action helps remove toxins from wounds",
        ],
      },
      {
        id: 3,
        commonName: "Lambs Quarters",
        emoji: "🥬",
        images: [
          "https://cdn.pixabay.com/photo/2016/07/28/20/12/lambs-quarters-1549481_1280.jpg",
          "https://cdn.pixabay.com/photo/2015/07/22/13/34/chenopodium-album-855494_1280.jpg",
        ],
        scientificName: "Chenopodium album",
        family: "Amaranthaceae",
        description:
          "A tall, erect annual with diamond-shaped leaves that often have a white, mealy coating underneath.",
        season: "Spring to Fall",
        habitat: "Gardens, fields, disturbed areas",
        difficulty: "Beginner",
        tags: ["Nutritious", "Edible", "Spinach-like", "Common"],
        identifyingFeatures: [
          "Diamond-shaped leaves with irregular teeth",
          "White, mealy coating on young leaves and stem tips",
          "Tiny green flowers in clusters at stem ends",
          "Can grow over 6 feet tall in good conditions",
        ],
        lookAlikes:
          "Young plants can be confused with foxglove (which is toxic) but lambs quarters has the distinctive mealy coating.",
        edibleParts: ["Leaves", "Young stems", "Seeds"],
        harvestingNotes:
          "Harvest young leaves and stem tips before flowering. Older leaves become tough and bitter.",
        culinaryUses: [
          "Cooked as spinach substitute",
          "Young leaves raw in salads",
          "Seeds can be ground for flour or cooked like quinoa",
          "Traditional pot herb in many cultures",
        ],
        recipes: [
          "Sautéed lambs quarters with onions",
          "Lambs quarters spanakopita",
          "Lambs quarters and lentil soup",
          "Seeds as grain in pilafs",
        ],
        medicinalUses: [
          "Nutrient-rich tonic for overall health",
          "Mild laxative properties",
          "Traditional poultice for burns and wounds",
          "Anti-inflammatory properties",
          "Seed flour used for digestive issues",
        ],
        preparationMethods: [
          "Steamed or sautéed as cooked green",
          "Fresh in salads when young",
          "Seed preparation similar to quinoa",
          "Poultice from fresh leaves",
        ],
        safetyNotes:
          "Contains oxalates - cook before eating large quantities. Those with kidney issues should consume in moderation.",
        nutritionalSummary:
          "Extremely nutritious - often called 'wild spinach'. Rich in vitamins A and C, calcium, iron, and protein.",
        nutrients: [
          { name: "Vitamin A", amount: "Very High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Calcium", amount: "Very High" },
          { name: "Iron", amount: "High" },
          { name: "Protein", amount: "Good" },
          { name: "B Vitamins", amount: "Good" },
          { name: "Fiber", amount: "High" },
        ],
        healthBenefits: [
          "Excellent nutritional profile supports overall health",
          "High calcium content supports bone health",
          "Rich in antioxidants from vitamin A and C",
          "Good plant-based protein source",
          "Supports digestive health through fiber content",
        ],
      },
      {
        id: 4,
        commonName: "Wood Sorrel",
        emoji: "🌼",
        images: [
          "https://cdn.pixabay.com/photo/2020/02/07/05/35/clover-4826210_1280.jpg",
          "https://cdn.pixabay.com/photo/2015/07/22/13/27/oxalis-stricta-855448_1280.jpg",
          "https://cdn.pixabay.com/photo/2015/07/15/16/38/oxalis-stricta-846677_1280.jpg",
        ],
        scientificName: "Oxalis stricta",
        family: "Oxalidaceae",
        description:
          "A low-growing plant with clover-like leaves and small yellow flowers. Has a distinctive lemony flavor.",
        season: "Spring to Fall",
        habitat: "Lawns, gardens, disturbed areas",
        difficulty: "Beginner",
        tags: ["Edible", "Lemony", "Refreshing", "Common"],
        identifyingFeatures: [
          "Clover-like leaves with three heart-shaped leaflets",
          "Leaves fold up at night or when stressed",
          "Small yellow flowers with five petals",
          "Distinctive seed pods that explode when ripe",
        ],
        lookAlikes:
          "Often confused with clover but wood sorrel has heart-shaped leaflets and yellow flowers (clover has round leaflets).",
        edibleParts: ["Leaves", "Flowers", "Seed pods"],
        harvestingNotes:
          "Harvest fresh leaves and flowers. Use in moderation due to oxalic acid content.",
        culinaryUses: [
          "Fresh leaves add lemony flavor to salads",
          "Can be used to make a lemony-tasting tea",
          "Refreshing addition to summer drinks",
          "Garnish for various dishes",
        ],
        recipes: [
          "Wood sorrel salad with feta and walnuts",
          "Wood sorrel lemonade",
          "Garnish for fish dishes",
          "Wood sorrel vinegar",
        ],
        medicinalUses: [
          "Traditional fever reducer",
          "Mild diuretic properties",
          "Soothing for mouth sores when chewed",
          "Historically used for digestive issues",
          "Source of vitamin C for scurvy prevention",
        ],
        preparationMethods: [
          "Fresh in salads and as garnish",
          "Tea from fresh or dried leaves",
          "Infused in vinegar or oil",
          "Poultice for minor skin irritations",
        ],
        safetyNotes:
          "Contains oxalic acid - consume in moderation, especially for those with kidney issues, gout, or rheumatoid arthritis.",
        nutritionalSummary:
          "Good source of vitamin C. Contains oxalic acid which can bind to minerals but also provides the refreshing lemony taste.",
        nutrients: [
          { name: "Vitamin C", amount: "Good" },
          { name: "Vitamin A", amount: "Some" },
          { name: "Potassium", amount: "Good" },
          { name: "Oxalic Acid", amount: "Moderate" },
          { name: "Antioxidants", amount: "Present" },
        ],
        healthBenefits: [
          "Refreshing digestive aid",
          "Source of vitamin C",
          "Mild diuretic action",
          "Antioxidant properties",
          "Soothing for mouth irritations",
        ],
      },
      {
        id: 5,
        commonName: "White Clover",
        emoji: "🍀",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/59/Bombus_barbutellus_-_Trifolium_repens_-_Keila.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/db/Trifolium_repens_%28inflorescense%29_Edit.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/42/Trifolium_repens_07_ies.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Starr_070313-5645_Trifolium_repens.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a4/Trifolium-repens-total.JPG"
        ],
        scientificName: "Trifolium repens",
        family: "Fabaceae",
        description:
          "A low-growing perennial with distinctive three-part leaves and white flower heads. Important nitrogen-fixer.",
        season: "Spring to Summer",
        habitat: "Lawns, meadows, pastures",
        difficulty: "Beginner",
        tags: ["Edible", "Nitrogen-fixer", "Bee Plant", "Common"],
        identifyingFeatures: [
          "Three oval leaflets with pale crescent markings",
          "White flower heads that turn brown with age",
          "Creeping stems that root at nodes",
          "Leaves fold up at night",
        ],
        lookAlikes:
          "Can be confused with black medic which has yellow flowers, or wood sorrel which has heart-shaped leaflets.",
        edibleParts: ["Flowers", "Leaves"],
        harvestingNotes:
          "Harvest flowers and young leaves in spring. Flowers are sweetest when freshly opened.",
        culinaryUses: [
          "Flowers raw in salads or as garnish",
          "Flowers dried for tea",
          "Young leaves in salads or as cooked greens",
          "Flowers used to make syrups or jelly",
        ],
        recipes: [
          "Clover flower tea",
          "Clover blossom syrup",
          "Clover leaf pesto",
          "Candied clover flowers",
        ],
        medicinalUses: [
          "Traditional blood purifier",
          "Mild antispasmodic for coughs",
          "Topically for skin conditions like psoriasis",
          "Estrogenic properties (use cautiously)",
          "Anti-inflammatory properties",
        ],
        preparationMethods: [
          "Tea from dried flowers",
          "Tincture from fresh plant",
          "Poultice from leaves for skin",
          "Infused oil for salves",
        ],
        safetyNotes:
          "Generally safe in moderation. Contains compounds that can convert to cyanide in large quantities, but normal use is safe. Avoid during pregnancy.",
        nutritionalSummary:
          "Good source of protein, calcium, and chromium. Flowers contain trace minerals and are rich in nectar.",
        nutrients: [
          { name: "Protein", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Chromium", amount: "Good" },
          { name: "Potassium", amount: "Good" },
          { name: "Magnesium", amount: "Good" },
          { name: "Phytoestrogens", amount: "Present" },
        ],
        healthBenefits: [
          "Supports soil health through nitrogen fixation",
          "Traditional spring tonic",
          "May help balance blood sugar",
          "Anti-inflammatory properties",
          "Supports pollinator populations",
        ],
      },
      {
        id: 6,
        commonName: "Yellow Dock",
        emoji: "🟡",
        images: [
          "https://cdn.pixabay.com/photo/2015/01/24/07/10/meadows-sauerampfer-609940_1280.jpg",
          "https://cdn.pixabay.com/photo/2015/01/24/06/47/meadows-sauerampfer-609916_1280.jpg",
          "https://cdn.pixabay.com/photo/2018/09/12/12/26/meadows-sauerampfer-3672052_1280.jpg"
        ],
        scientificName: "Rumex crispus",
        family: "Polygonaceae",
        description:
          "A perennial with distinctive wavy or curly leaf margins and tall flower stalks with dense clusters of seeds.",
        season: "Spring to Fall",
        habitat: "Fields, roadsides, disturbed areas",
        difficulty: "Intermediate",
        tags: ["Medicinal", "Edible", "Bitter", "Common"],
        identifyingFeatures: [
          "Long, lance-shaped leaves with distinctly wavy margins",
          "Reddish-brown seed clusters that persist through winter",
          "Tall flower stalks that can reach 5 feet",
          "Taproot that is yellow when cut open",
        ],
        lookAlikes:
          "Can be confused with burdock which has much larger leaves and different flower structure.",
        edibleParts: ["Young leaves", "Seeds", "Stems"],
        harvestingNotes:
          "Only young leaves should be eaten raw. Older leaves require multiple water changes when cooking to reduce oxalates.",
        culinaryUses: [
          "Young leaves in salads (lemony flavor)",
          "Cooked greens (change water to reduce bitterness)",
          "Seeds can be ground for flour",
          "Stems can be peeled and eaten raw or cooked",
        ],
        recipes: [
          "Sautéed dock greens with bacon",
          "Dock stem pickles",
          "Dock seed crackers",
          "Creamed dock greens",
        ],
        medicinalUses: [
          "Traditional blood purifier and spring tonic",
          "Mild laxative properties",
          "Topically for skin conditions like nettle rash",
          "Root used for liver and digestive issues",
          "Astringent properties for bleeding",
        ],
        preparationMethods: [
          "Tea from dried root",
          "Tincture from fresh root",
          "Poultice from leaves for skin",
          "Cooked leaves as nutritional food",
        ],
        safetyNotes:
          "High in oxalic acid - consume in moderation and cook thoroughly. Can be toxic to livestock in large quantities.",
        nutritionalSummary:
          "Rich in vitamins A and C, and iron. However, high oxalate content can interfere with mineral absorption.",
        nutrients: [
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Iron", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Fiber", amount: "Good" },
          { name: "Oxalic Acid", amount: "High" },
        ],
        healthBenefits: [
          "Nutrient-rich when properly prepared",
          "Traditional detoxifying properties",
          "Supports liver function",
          "Astringent properties for skin conditions",
          "Source of vitamins and minerals",
        ],
      },
      {
        id: 7,
        commonName: "Stinging Nettle",
        emoji: "🌿",
        images: [
          "https://live.staticflickr.com/3266/2544110170_c82d264f7d_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/e5/Common_Nettle_%28Urtica_dioica%29.jpg",
          "https://live.staticflickr.com/8156/7135152459_85b253b309_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/fe/Urtica_dioica_hairs.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/68/Urtica_dioica_stinging_hair.jpg",
          "https://live.staticflickr.com/7088/7135152615_33d358db6c_b.jpg"
        ],
        scientificName: "Urtica dioica",
        family: "Urticaceae",
        description:
          "A perennial plant with serrated leaves covered in stinging hairs that inject irritants when touched.",
        season: "Spring to Summer",
        habitat: "Moist, rich soils in partial shade",
        difficulty: "Intermediate",
        tags: ["Nutritious", "Medicinal", "Fibre", "Stinging"],
        identifyingFeatures: [
          "Serrated, heart-shaped leaves in opposite pairs",
          "Square stems with stinging hairs",
          "Small greenish flowers in clusters",
          "Grows in dense patches",
        ],
        lookAlikes:
          "Young nettles can be confused with mint family plants but are distinguished by stinging hairs and square stems.",
        edibleParts: ["Young leaves and tops"],
        harvestingNotes:
          "Wear gloves! Harvest only young plants in spring. Cooking or drying neutralizes the sting.",
        culinaryUses: [
          "Cooked as spinach-like green (must be cooked to remove sting)",
          "Nettle soup is traditional in many cultures",
          "Nettle tea from dried leaves",
          "Nettle pesto after blanching",
        ],
        recipes: [
          "Cream of nettle soup",
          "Nettle and potato frittata",
          "Nettle spanakopita",
          "Nettle tea",
        ],
        medicinalUses: [
          "Nutrient-rich tonic for anemia and fatigue",
          "Anti-inflammatory for arthritis and joint pain",
          "Diuretic for urinary issues and kidney support",
          "Historically used for allergies like hay fever",
          "Topically for joint pain (urtication)",
        ],
        preparationMethods: [
          "Tea from dried leaves",
          "Tincture from fresh plant",
          "Cooked as food for nutritional benefits",
          "Freeze-dried for allergy capsules",
        ],
        safetyNotes:
          "ALWAYS handle with gloves until cooked or dried. May interact with blood thinners, diabetes, and blood pressure medications.",
        nutritionalSummary:
          "Extremely nutrient-dense. Higher in protein than most plants. Rich in iron, calcium, and vitamins A and C.",
        nutrients: [
          { name: "Protein", amount: "Very High" },
          { name: "Iron", amount: "Very High" },
          { name: "Calcium", amount: "Very High" },
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Potassium", amount: "High" },
          { name: "Chlorophyll", amount: "Very High" },
        ],
        healthBenefits: [
          "Excellent for iron-deficiency anemia",
          "Supports joint health and reduces inflammation",
          "Kidney and urinary tract support",
          "General nutritional tonic",
          "May reduce allergy symptoms with regular use",
        ],
      },
      {
        id: 8,
        commonName: "Purslane",
        emoji: "🍋",
        images: [
          "https://cdn.pixabay.com/photo/2015/07/22/13/40/portulaca-oleracea-855543_1280.jpg",
          "https://cdn.pixabay.com/photo/2021/05/11/04/15/purslane-6244854_1280.jpg",
          "https://live.staticflickr.com/6219/6292408931_c96b4440b8_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/55/Portulaca_oleracea.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/2/2a/Portulaca_oleracea_MHNT.jpg"
        ],
        scientificName: "Portulaca oleracea",
        family: "Portulacaceae",
        description:
          "A succulent annual with fleshy leaves and stems that form mat-like growth. Small yellow flowers.",
        season: "Summer",
        habitat: "Gardens, disturbed soil, cracks in pavement",
        difficulty: "Beginner",
        tags: ["Succulent", "Nutritious", "Omega-3", "Edible"],
        identifyingFeatures: [
          "Thick, fleshy leaves clustered at stem joints",
          "Reddish, prostrate stems that radiate from center",
          "Small yellow flowers that open only in sunlight",
          "Leaves have a mild, slightly sour flavor",
        ],
        lookAlikes:
          "Can be confused with spurge which has thinner leaves and milky sap (purslane has clear sap).",
        edibleParts: ["Leaves", "Stems", "Flowers"],
        harvestingNotes:
          "Harvest before flowering for best texture. Grows best in hot weather.",
        culinaryUses: [
          "Crisp addition to salads raw",
          "Can be cooked like spinach (becomes mucilaginous)",
          "Used as thickener in soups and stews",
          "Pickled stems and leaves",
        ],
        recipes: [
          "Purslane salad with tomatoes and cucumber",
          "Purslane in yogurt sauce (Turkish 'semizotu')",
          "Purslane and potato soup",
          "Stir-fried purslane with garlic",
        ],
        medicinalUses: [
          "Traditional cooling herb for fevers and inflammation",
          "Rich in omega-3s for heart and brain health",
          "Mild diuretic properties",
          "Soothing demulcent for digestive tract",
          "Topically for skin irritations and insect bites",
        ],
        preparationMethods: [
          "Fresh in salads for maximum nutrition",
          "Cooked in soups and stews",
          "Juiced for nutritional drinks",
          "Poultice for skin applications",
        ],
        safetyNotes:
          "Generally very safe. Contains oxalates but less than spinach. Those with kidney stones should consume in moderation.",
        nutritionalSummary:
          "Extremely nutritious. One of the few leafy greens high in omega-3 fatty acids. Also rich in vitamins and antioxidants.",
        nutrients: [
          { name: "Omega-3 Fatty Acids", amount: "Very High" },
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Magnesium", amount: "High" },
          { name: "Potassium", amount: "High" },
          { name: "Iron", amount: "Good" },
          { name: "Antioxidants", amount: "High" },
        ],
        healthBenefits: [
          "Excellent plant source of omega-3s for heart and brain health",
          "Anti-inflammatory properties",
          "Supports eye health through vitamin A content",
          "Rich in antioxidants that fight cellular damage",
          "Supports bone health through mineral content",
        ],
      },
      {
        id: 9,
        commonName: "Chicory",
        emoji: "🌸",
        images: [
          "https://cdn.pixabay.com/photo/2016/01/24/01/21/wildflower-1158323_1280.jpg",
          "https://cdn.pixabay.com/photo/2020/07/18/10/55/chicory-5416863_1280.jpg",
          "https://cdn.pixabay.com/photo/2020/07/08/14/33/common-chicory-5384104_1280.jpg"
        ],
        scientificName: "Cichorium intybus",
        family: "Asteraceae",
        description:
          "A perennial with bright blue flowers and a deep taproot. Known for its use as coffee substitute.",
        season: "Summer to Fall",
        habitat: "Roadsides, fields, disturbed areas",
        difficulty: "Beginner",
        tags: ["Edible", "Coffee Substitute", "Medicinal", "Bitter"],
        identifyingFeatures: [
          "Bright blue flowers that open in morning and close by afternoon",
          "Basal rosette of dandelion-like leaves",
          "Hairy, grooved stems",
          "Deep taproot similar to dandelion",
        ],
        lookAlikes:
          "Can be confused with cornflower which has similar blue flowers but different leaf structure.",
        edibleParts: ["Leaves", "Flowers", "Roots"],
        harvestingNotes:
          "Harvest young leaves in spring for salads. Roots are best harvested in fall for coffee substitute.",
        culinaryUses: [
          "Young leaves in salads (bitter when mature)",
          "Roots roasted and ground as coffee substitute",
          "Flowers as edible garnish",
          "Blanched leaves as cooked green",
        ],
        recipes: [
          "Chicory root coffee",
          "Chicory and orange salad",
          "Braised chicory greens",
          "Chicory flower vinegar",
        ],
        medicinalUses: [
          "Liver and gallbladder tonic",
          "Mild laxative properties",
          "Traditional digestive bitter",
          "Prebiotic from inulin content in root",
          "Anti-inflammatory properties",
        ],
        preparationMethods: [
          "Roasted root as coffee substitute",
          "Tincture from fresh root",
          "Tea from leaves or flowers",
          "Fresh leaves as digestive bitter",
        ],
        safetyNotes:
          "Generally safe. Those with gallstones should use cautiously. Can cause allergic reactions in those sensitive to ragweed.",
        nutritionalSummary:
          "Rich in inulin (a prebiotic fiber), vitamins, and minerals. Leaves contain bitter compounds that aid digestion.",
        nutrients: [
          { name: "Inulin", amount: "Very High" },
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Potassium", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Bitter Compounds", amount: "High" },
        ],
        healthBenefits: [
          "Supports digestive health through prebiotic action",
          "Liver and gallbladder support",
          "Natural digestive bitter",
          "Source of dietary fiber",
          "Anti-inflammatory properties",
        ],
      },
      {
        id: 10,
        commonName: "Ground Ivy",
        emoji: "🌱",
        images: [
          "https://cdn.pixabay.com/photo/2013/06/04/19/07/ground-ivy-116261_1280.jpg",
          "https://cdn.pixabay.com/photo/2013/06/04/19/09/ground-ivy-116263_1280.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/81/Glechoma_hederacea%2C_Hondsdraf_%283%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/Glechoma_hederacea_-_Keila.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Hondsdraf_blad_Glechoma_hederacea.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Glechoma_hederacea_ENBLA03.jpg"
        ],
        scientificName: "Glechoma hederacea",
        family: "Lamiaceae",
        description:
          "A creeping perennial with scalloped leaves and small purple flowers. Also known as Creeping Charlie.",
        season: "Spring to Summer",
        habitat: "Lawns, shady areas, moist ground",
        difficulty: "Beginner",
        tags: ["Medicinal", "Edible", "Aromatic", "Invasive"],
        identifyingFeatures: [
          "Scalloped, kidney-shaped leaves with rounded teeth",
          "Square stems typical of mint family",
          "Small purple flowers in leaf axils",
          "Creeping habit that forms dense mats",
        ],
        lookAlikes:
          "Can be confused with mallow which has different flowers, or violet which has heart-shaped leaves.",
        edibleParts: ["Leaves", "Flowers"],
        harvestingNotes:
          "Harvest before flowering for best flavor. Has a strong, minty-bitter taste.",
        culinaryUses: [
          "Young leaves in salads (strong flavor)",
          "Leaves for tea",
          "Flowers as garnish",
          "Traditional in spring beers (before hops)",
        ],
        recipes: [
          "Ground ivy tea",
          "Spring salad with ground ivy",
          "Ground ivy pesto",
          "Herbal vinegar with ground ivy",
        ],
        medicinalUses: [
          "Traditional for coughs and bronchitis",
          "Mild diuretic properties",
          "Anti-inflammatory for digestive issues",
          "Historically used for tinnitus",
          "Topically for bruises and skin conditions",
        ],
        preparationMethods: [
          "Tea from fresh or dried leaves",
          "Tincture from fresh plant",
          "Syrup for coughs",
          "Poultice for bruises",
        ],
        safetyNotes:
          "Generally safe in moderation. Contains compounds that can be toxic to horses in large quantities. Avoid during pregnancy.",
        nutritionalSummary:
          "Rich in vitamin C, iron, and potassium. Contains volatile oils and bitter compounds.",
        nutrients: [
          { name: "Vitamin C", amount: "High" },
          { name: "Iron", amount: "Good" },
          { name: "Potassium", amount: "Good" },
          { name: "Volatile Oils", amount: "Present" },
          { name: "Bitter Compounds", amount: "High" },
        ],
        healthBenefits: [
          "Respiratory support for coughs and congestion",
          "Anti-inflammatory properties",
          "Mild digestive bitter",
          "Source of vitamins and minerals",
          "Traditional spring tonic",
        ],
      },
      {
        id: 11,
        commonName: "Sow Thistle",
        emoji: "🧨",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/4/40/Sonchus_oleraceus_Habitus.jpg",
          "https://live.staticflickr.com/7568/15588277794_d5f3faffd6_b.jpg",
          "https://live.staticflickr.com/8570/15590833323_7c348cbd02_b.jpg"
        ],
        scientificName: "Sonchus oleraceus",
        family: "Asteraceae",
        description:
          "An annual with dandelion-like leaves and yellow flowers. Exudes milky sap when broken.",
        season: "Spring to Fall",
        habitat: "Gardens, disturbed areas, fields",
        difficulty: "Beginner",
        tags: ["Edible", "Mild", "Nutritious", "Common"],
        identifyingFeatures: [
          "Dandelion-like leaves with soft spines on margins",
          "Clusters of yellow dandelion-like flowers",
          "Stems exude milky white sap when broken",
          "Leaves clasp the stem with ear-like lobes",
        ],
        lookAlikes:
          "Can be confused with true thistles which have much sharper spines, or dandelion which has hairless leaves.",
        edibleParts: ["Leaves", "Stems", "Roots"],
        harvestingNotes:
          "Harvest young leaves and stems before flowering. Older plants become bitter.",
        culinaryUses: [
          "Young leaves raw in salads",
          "Cooked as spinach substitute",
          "Stems peeled and eaten raw or cooked",
          "Roots cooked like salsify",
        ],
        recipes: [
          "Sow thistle salad with lemon dressing",
          "Sautéed sow thistle with garlic",
          "Creamed sow thistle",
          "Sow thistle stem stir-fry",
        ],
        medicinalUses: [
          "Mild sedative properties",
          "Traditional for nursing mothers to increase milk",
          "Digestive aid",
          "Mild anti-inflammatory",
          "Liver support",
        ],
        preparationMethods: [
          "Fresh in salads",
          "Cooked as green vegetable",
          "Tea from leaves",
          "Poultice from leaves for inflammation",
        ],
        safetyNotes:
          "Generally safe. Those with latex allergies should use caution due to milky sap.",
        nutritionalSummary:
          "Rich in vitamins A, C, and K, as well as calcium and iron. Similar nutritional profile to dandelion.",
        nutrients: [
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin K", amount: "High" },
          { name: "Calcium", amount: "Good" },
          { name: "Iron", amount: "Good" },
          { name: "Potassium", amount: "Good" },
        ],
        healthBenefits: [
          "Nutrient-rich green vegetable",
          "Supports liver function",
          "Anti-inflammatory properties",
          "Traditional galactagogue",
          "Mild calming effect",
        ],
      },
      {
        id: 12,
        commonName: "Shepherd's Purse",
        emoji: "🌿",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/f/fc/Capsella_bursa-pastoris_01.jpg",
          "https://live.staticflickr.com/4153/4972205193_36767620d9_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f1/Capsella_bursa-pastoris.JPG",
          "https://live.staticflickr.com/3845/14679440314_9c83b846a0_b.jpg",
          "https://live.staticflickr.com/8387/8545718001_1b145ae235_b.jpg",
          "https://live.staticflickr.com/5563/14678615971_92da9c8cb4_b.jpg"
        ],
        scientificName: "Capsella bursa-pastoris",
        family: "Brassicaceae",
        description:
          "A small annual with distinctive heart-shaped seed pods and white flowers.",
        season: "Year-round in mild climates",
        habitat: "Gardens, disturbed soil, paths",
        difficulty: "Beginner",
        tags: ["Medicinal", "Edible", "Astringent", "Common"],
        identifyingFeatures: [
          "Basal rosette of dandelion-like leaves",
          "Tiny white flowers on elongating stems",
          "Distinctive heart-shaped seed pods",
          "Leaves become more lobed as plant matures",
        ],
        lookAlikes:
          "Young plants can be confused with dandelion or hawkweed but distinguished by the unique seed pods.",
        edibleParts: ["Leaves", "Flowers", "Seed pods"],
        harvestingNotes:
          "Harvest young leaves before flowering for best flavor. Seed pods add peppery taste to dishes.",
        culinaryUses: [
          "Young leaves in salads (peppery flavor)",
          "Cooked as pot herb",
          "Seed pods as pepper substitute",
          "Flowers as garnish",
        ],
        recipes: [
          "Shepherd's purse salad",
          "Sautéed shepherd's purse",
          "Shepherd's purse pesto",
          "Seed pod seasoning",
        ],
        medicinalUses: [
          "Strong astringent for bleeding",
          "Traditional for heavy menstrual bleeding",
          "Diuretic properties",
          "Topically for bruises and wounds",
          "Digestive aid",
        ],
        preparationMethods: [
          "Tea from fresh or dried plant",
          "Tincture from fresh plant",
          "Poultice for wounds",
          "Fresh in salads for mild astringent effect",
        ],
        safetyNotes:
          "Generally safe. Contains compounds that can affect blood pressure - use cautiously if you have blood pressure issues.",
        nutritionalSummary:
          "Rich in vitamins K, C, and A. Contains sulfur compounds typical of mustard family.",
        nutrients: [
          { name: "Vitamin K", amount: "Very High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin A", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Potassium", amount: "Good" },
          { name: "Sulfur Compounds", amount: "Present" },
        ],
        healthBenefits: [
          "Excellent for wound healing and bleeding control",
          "Supports cardiovascular health",
          "Antioxidant properties",
          "Diuretic action",
          "Digestive support",
        ],
      },
      {
        id: 13,
        commonName: "Mallow",
        emoji: "🌼",
        images: [
          "https://live.staticflickr.com/4152/5192762054_477fa45536_b.jpg",
          "https://live.staticflickr.com/7192/13163734955_bf868760b3_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Malva_neglecta_RF.jpg"
        ],
        scientificName: "Malva neglecta",
        family: "Malvaceae",
        description:
          "A low-growing plant with rounded, lobed leaves and small white or pink flowers.",
        season: "Spring to Fall",
        habitat: "Lawns, gardens, disturbed areas",
        difficulty: "Beginner",
        tags: ["Edible", "Mucilaginous", "Soothing", "Common"],
        identifyingFeatures: [
          "Rounded leaves with shallow lobes",
          "Small white or pale pink flowers",
          "Distinctive cheese-wheel seed pods",
          "All parts mucilaginous when chewed",
        ],
        lookAlikes:
          "Can be confused with ivy-leaved speedwell or ground ivy, but mallow has distinctive rounded leaves and mucilaginous texture.",
        edibleParts: ["Leaves", "Flowers", "Seed pods", "Roots"],
        harvestingNotes:
          "Harvest young leaves and seed pods. Older leaves become tough.",
        culinaryUses: [
          "Young leaves in salads or as cooked greens",
          "Seed pods raw or cooked ('cheeses')",
          "Roots used as egg white substitute (vegan meringue)",
          "Leaves as thickener in soups",
        ],
        recipes: [
          "Mallow leaf salad",
          "Mallow soup thickener",
          "Fried mallow leaves",
          "Mallow root meringue",
        ],
        medicinalUses: [
          "Soothing demulcent for respiratory and digestive issues",
          "Topically for skin irritations and inflammation",
          "Mild laxative properties",
          "Traditional poultice for bruises and swelling",
          "Sore throat relief",
        ],
        preparationMethods: [
          "Tea from leaves for respiratory issues",
          "Poultice from leaves for skin",
          "Syrup from flowers for coughs",
          "Fresh leaves chewed for sore throat",
        ],
        safetyNotes:
          "Generally very safe. High mucilage content makes it very gentle.",
        nutritionalSummary:
          "Rich in mucilage, vitamins A and C, and calcium. Very high in soluble fiber.",
        nutrients: [
          { name: "Mucilage", amount: "Very High" },
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Iron", amount: "Good" },
          { name: "Soluble Fiber", amount: "Very High" },
        ],
        healthBenefits: [
          "Soothes irritated mucous membranes",
          "Supports digestive health",
          "Anti-inflammatory properties",
          "Respiratory support for coughs",
          "Skin soothing applications",
        ],
      },
      {
        id: 14,
        commonName: "Dead Nettle",
        emoji: "🍃",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/a/a6/Lamium_purpureum_in_the_spring2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a3/Lamium_purpureum_overz.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a8/Lamium_purpureum_jamestown1.jpg"
        ],
        scientificName: "Lamium purpureum",
        family: "Lamiaceae",
        description:
          "A low-growing plant with square stems, heart-shaped leaves, and purple flowers. Does not sting despite the name.",
        season: "Spring to Fall",
        habitat: "Shady areas, gardens, woodland edges",
        difficulty: "Beginner",
        tags: ["Edible", "Medicinal", "Mint Family", "Purple"],
        identifyingFeatures: [
          "Square stems typical of mint family",
          "Heart-shaped leaves with scalloped edges",
          "Purple-pink flowers in whorls around stem",
          "Leaves often have purple tinge, especially upper ones",
        ],
        lookAlikes:
          "Often confused with stinging nettle but dead nettle has no stinging hairs and has distinctive flowers.",
        edibleParts: ["Leaves", "Flowers"],
        harvestingNotes:
          "Harvest before flowering for best flavor. Has a mild, slightly mushroom-like taste.",
        culinaryUses: [
          "Young leaves raw in salads",
          "Cooked as spinach substitute",
          "Flowers as edible garnish",
          "Leaves in soups and stews",
        ],
        recipes: [
          "Dead nettle salad",
          "Creamed dead nettle",
          "Dead nettle pesto",
          "Spring soup with dead nettle",
        ],
        medicinalUses: [
          "Astringent properties",
          "Traditional for women's health issues",
          "Anti-inflammatory properties",
          "Mild diuretic",
          "Topically for skin irritations",
        ],
        preparationMethods: [
          "Tea from fresh or dried leaves",
          "Tincture from fresh plant",
          "Poultice for wounds",
          "Infused oil for skin salves",
        ],
        safetyNotes:
          "Generally safe. Those with mint allergies should use caution.",
        nutritionalSummary:
          "Rich in iron, vitamins A and C, and fiber. Contains beneficial phytochemicals.",
        nutrients: [
          { name: "Iron", amount: "High" },
          { name: "Vitamin A", amount: "Good" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Fiber", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Antioxidants", amount: "Present" },
        ],
        healthBenefits: [
          "Nutrient-rich spring green",
          "Anti-inflammatory properties",
          "Astringent action for minor bleeding",
          "Supports women's health",
          "Antioxidant protection",
        ],
      },
      {
        id: 15,
        commonName: "Yarrow",
        emoji: "🌾",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Achillea_millefolium_20041012_2574.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Achillea_millefolium_vallee-de-grace-amiens_80_22062007_1.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Achillea_millefolium_habito.jpg",
          "https://live.staticflickr.com/8599/15547208664_b6a6a17a3f_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/77/Achillea_millefolium_bloem.jpg"
        ],
        scientificName: "Achillea millefolium",
        family: "Asteraceae",
        description:
          "A perennial with feathery leaves and flat clusters of white or pink flowers. Named after Achilles who used it for wounds.",
        season: "Summer",
        habitat: "Fields, meadows, roadsides",
        difficulty: "Beginner",
        tags: ["Medicinal", "Wound Healing", "Astringent", "Common"],
        identifyingFeatures: [
          "Feathery, fern-like leaves that are highly divided",
          "Flat-topped clusters of small white or pink flowers",
          "Aromatic when crushed",
          "Can form dense patches",
        ],
        lookAlikes:
          "Can be confused with Queen Anne's Lace which has similar leaves but different flowers (umbels vs flat clusters).",
        edibleParts: ["Leaves", "Flowers"],
        harvestingNotes:
          "Harvest leaves before flowering for medicinal use. Flowers when fully open.",
        culinaryUses: [
          "Young leaves in salads (bitter)",
          "Leaves as hop substitute in beer",
          "Flowers as garnish",
          "Traditional in liqueurs and bitters",
        ],
        recipes: [
          "Yarrow tea",
          "Yarrow-infused honey",
          "Spring salad with yarrow",
          "Yarrow bitter tonic",
        ],
        medicinalUses: [
          "Wound healing and blood staunching",
          "Fever reducer (induces sweating)",
          "Digestive aid and bitter tonic",
          "Anti-inflammatory properties",
          "Traditional for colds and flu",
        ],
        preparationMethods: [
          "Fresh leaf poultice for wounds",
          "Tea from dried leaves and flowers",
          "Tincture from fresh plant",
          "Oil infusion for salves",
        ],
        safetyNotes:
          "Generally safe. Can cause contact dermatitis in sensitive individuals. Avoid during pregnancy.",
        nutritionalSummary:
          "Rich in volatile oils, flavonoids, and alkaloids. Contains anti-inflammatory and astringent compounds.",
        nutrients: [
          { name: "Volatile Oils", amount: "High" },
          { name: "Flavonoids", amount: "High" },
          { name: "Alkaloids", amount: "Present" },
          { name: "Tannins", amount: "High" },
          { name: "Anti-inflammatory Compounds", amount: "High" },
        ],
        healthBenefits: [
          "Excellent first aid plant for wounds",
          "Supports fever management",
          "Digestive bitter tonic",
          "Anti-inflammatory action",
          "Traditional cold and flu remedy",
        ],
      },
      {
        id: 16,
        commonName: "Mugwort",
        emoji: "🌱",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/2/23/Artemisia_vulgaris_001.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Artemisia-vulgaris-fruits.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Artemisia_vulgaris.jpeg",
          "https://upload.wikimedia.org/wikipedia/commons/9/9f/Artemisia_vulgaris_flowers%2C_Bijvoet_bloeiend.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/53/Artemisia_vulgaris_002.JPG"
        ],
        scientificName: "Artemisia vulgaris",
        family: "Asteraceae",
        description:
          "A tall perennial with deeply lobed, aromatic leaves and small greenish flowers.",
        season: "Summer to Fall",
        habitat: "Disturbed areas, roadsides, fields",
        difficulty: "Intermediate",
        tags: ["Medicinal", "Aromatic", "Dream Herb", "Bitter"],
        identifyingFeatures: [
          "Deeply lobed leaves with silver-white undersides",
          "Tall, reddish stems",
          "Small greenish-yellow flowers in spikes",
          "Strong, distinctive aroma when crushed",
        ],
        lookAlikes:
          "Can be confused with ragweed but mugwort has silver leaf undersides and different flowers.",
        edibleParts: ["Young leaves", "Flowering tops"],
        harvestingNotes:
          "Harvest before flowering for culinary use. Use sparingly due to strong flavor.",
        culinaryUses: [
          "Young leaves as seasoning (sparingly)",
          "Traditional flavoring for meats and fatty foods",
          "Used to flavor beer before hops",
          "Leaves to line cooking pits",
        ],
        recipes: [
          "Mugwort tea (sparingly)",
          "Mugwort-seasoned roast",
          "Mugwort rice cakes (traditional)",
          "Mugwort-infused oil",
        ],
        medicinalUses: [
          "Digestive bitter and tonic",
          "Traditional for menstrual issues and cramps",
          "Mild sedative and dream enhancer",
          "Antiparasitic properties",
          "Moxibustion in traditional Chinese medicine",
        ],
        preparationMethods: [
          "Tea from dried leaves (sparingly)",
          "Tincture from fresh plant",
          "Smudge sticks for aromatherapy",
          "Pillow stuffing for dream enhancement",
        ],
        safetyNotes:
          "Use in moderation. Contains thujone which can be toxic in large amounts. Avoid during pregnancy.",
        nutritionalSummary:
          "Rich in volatile oils, bitter compounds, and flavonoids. Contains small amounts of thujone.",
        nutrients: [
          { name: "Volatile Oils", amount: "High" },
          { name: "Bitter Compounds", amount: "High" },
          { name: "Flavonoids", amount: "Good" },
          { name: "Thujone", amount: "Present" },
          { name: "Antioxidants", amount: "Good" },
        ],
        healthBenefits: [
          "Digestive bitter tonic",
          "Supports women's reproductive health",
          "Mild calming effect",
          "Traditional dream enhancement",
          "Antiparasitic action",
        ],
      },
      {
        id: 17,
        commonName: "Foxtail",
        emoji: "🌾",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/f/f0/Setaria_faberi_001.jpg",
          "https://live.staticflickr.com/5340/29952376006_9223f89b7e_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Groene_naaldaar_aarpluim_%28Setaria_viridis%29.jpg"
        ],
        scientificName: "Setaria spp.",
        family: "Poaceae",
        description:
          "An annual grass with distinctive bristly seed heads that resemble fox tails.",
        season: "Summer to Fall",
        habitat: "Fields, disturbed areas, gardens",
        difficulty: "Beginner",
        tags: ["Grain", "Edible", "Caution", "Common Grass"],
        identifyingFeatures: [
          "Bristly seed heads that resemble fox tails",
          "Hollow, jointed stems typical of grasses",
          "Long, narrow leaves with parallel veins",
          "Seed heads can be green, yellow, or purple",
        ],
        lookAlikes:
          "Can be confused with other grasses but distinguished by the distinctive foxtail seed heads.",
        edibleParts: ["Seeds"],
        harvestingNotes:
          "Harvest seeds when mature but before they shatter. Winnow to remove bristles.",
        culinaryUses: [
          "Seeds can be ground for flour",
          "Whole seeds cooked as grain",
          "Seeds popped like miniature popcorn",
          "Traditional food in many cultures",
        ],
        recipes: [
          "Foxtail millet porridge",
          "Foxtail seed bread",
          "Popped foxtail seeds",
          "Foxtail grain salad",
        ],
        medicinalUses: [
          "Traditional digestive aid",
          "Source of nutrition in lean times",
          "Mild diuretic properties",
          "Historically used for blood sugar balance",
        ],
        preparationMethods: [
          "Ground seeds as flour",
          "Whole seeds cooked like rice",
          "Fermented beverages from seeds",
          "Sprouted seeds for salads",
        ],
        safetyNotes:
          "CAUTION: The bristles on seed heads can work their way into animal skin and cause serious infections. Handle with care.",
        nutritionalSummary:
          "Seeds are rich in carbohydrates, protein, and B vitamins. Similar to other small grains like millet.",
        nutrients: [
          { name: "Carbohydrates", amount: "High" },
          { name: "Protein", amount: "Good" },
          { name: "B Vitamins", amount: "Good" },
          { name: "Iron", amount: "Good" },
          { name: "Magnesium", amount: "Good" },
          { name: "Fiber", amount: "Good" },
        ],
        healthBenefits: [
          "Good source of sustainable nutrition",
          "Gluten-free grain alternative",
          "Supports digestive health through fiber",
          "Source of energy through carbohydrates",
          "Traditional survival food",
        ],
      },
      {
        id: 18,
        commonName: "Cat's Ear",
        emoji: "🍃",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/0/07/Hypochaeris_radicata_at_Game_Farm_Park_in_Auburn%2C_Washington.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hypochaeris_radicata_rosette4_%2814609597536%29.jpg/500px-Hypochaeris_radicata_rosette4_%2814609597536%29.jpg"
        ],
        scientificName: "Hypochaeris radicata",
        family: "Asteraceae",
        description:
          "A perennial that closely resembles dandelion, with similar yellow flowers but multiple flowers per stem.",
        season: "Spring to Fall",
        habitat: "Lawns, meadows, disturbed areas",
        difficulty: "Intermediate",
        tags: ["Edible", "Dandelion-like", "Common", "Nutritious"],
        identifyingFeatures: [
          "Dandelion-like leaves with hairy surfaces",
          "Multiple yellow flowers per stem (unlike dandelion)",
          "Leaves form basal rosette",
          "Flower stems are branched and solid (not hollow like dandelion)",
        ],
        lookAlikes:
          "Often confused with dandelion but has hairy leaves and multiple flowers per stem.",
        edibleParts: ["Leaves", "Roots"],
        harvestingNotes:
          "Harvest young leaves for best flavor. Roots can be used like dandelion roots.",
        culinaryUses: [
          "Young leaves in salads",
          "Cooked greens",
          "Roots as coffee substitute",
          "Flower buds pickled like capers",
        ],
        recipes: [
          "Cat's ear green salad",
          "Sautéed cat's ear greens",
          "Cat's ear root coffee",
          "Pickled cat's ear buds",
        ],
        medicinalUses: [
          "Mild diuretic properties",
          "Digestive aid",
          "Liver tonic",
          "Traditional for urinary issues",
        ],
        preparationMethods: [
          "Tea from leaves",
          "Tincture from whole plant",
          "Roasted root as coffee substitute",
          "Fresh leaves in salads",
        ],
        safetyNotes:
          "Generally safe. Those with allergies to related plants should use caution.",
        nutritionalSummary:
          "Similar nutritional profile to dandelion - rich in vitamins A, C, and K, and minerals.",
        nutrients: [
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin K", amount: "High" },
          { name: "Calcium", amount: "Good" },
          { name: "Iron", amount: "Good" },
          { name: "Potassium", amount: "Good" },
        ],
        healthBenefits: [
          "Nutrient-rich wild green",
          "Supports liver function",
          "Mild diuretic action",
          "Digestive support",
          "Antioxidant properties",
        ],
      },
      {
        id: 19,
        commonName: "Wild Mustard",
        emoji: "🟢",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/1/15/Brassicaceae_-_Sinapis_arvensis_%283%29.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/3/36/Sinapis_arvensis_marais-la-chaussee-tirancourt_80_30052007_2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Herik_17-10-2005_14.00.34.JPG/500px-Herik_17-10-2005_14.00.34.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sinapis_arvensis_s_IP0310010.jpg/500px-Sinapis_arvensis_s_IP0310010.jpg"
        ],
        scientificName: "Sinapis arvensis",
        family: "Brassicaceae",
        description:
          "An annual with yellow flowers and lobed leaves. All parts have characteristic mustard flavor.",
        season: "Spring to Summer",
        habitat: "Fields, disturbed areas, agricultural land",
        difficulty: "Beginner",
        tags: ["Edible", "Spicy", "Mustard Family", "Common"],
        identifyingFeatures: [
          "Yellow flowers with four petals in cross shape",
          "Lobed leaves with bristly hairs",
          "Long seed pods containing mustard seeds",
          "Characteristic mustard aroma when crushed",
        ],
        lookAlikes:
          "Can be confused with other mustard family plants but distinguished by flower color and leaf shape.",
        edibleParts: ["Leaves", "Flowers", "Seed pods", "Seeds"],
        harvestingNotes:
          "Harvest young leaves before flowering for mildest flavor. Seeds when pods turn brown.",
        culinaryUses: [
          "Young leaves in salads (peppery)",
          "Cooked as pot herb",
          "Flowers as garnish",
          "Seeds for mustard condiment",
        ],
        recipes: [
          "Wild mustard greens salad",
          "Sautéed mustard greens",
          "Homemade wild mustard",
          "Mustard flower garnish",
        ],
        medicinalUses: [
          "Digestive stimulant",
          "Circulatory stimulant (mustard plasters)",
          "Antimicrobial properties",
          "Traditional for respiratory congestion",
          "Source of antioxidants",
        ],
        preparationMethods: [
          "Fresh leaves as digestive bitter",
          "Mustard plaster for congestion",
          "Seed powder as seasoning",
          "Infused oil from seeds",
        ],
        safetyNotes:
          "Generally safe. Can be irritating in large quantities. Those with thyroid issues should consume cooked.",
        nutritionalSummary:
          "Rich in vitamins A, C, and K, and sulfur compounds. Seeds high in protein and healthy oils.",
        nutrients: [
          { name: "Vitamin A", amount: "High" },
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin K", amount: "High" },
          { name: "Sulfur Compounds", amount: "High" },
          { name: "Protein", amount: "Good" },
          { name: "Fiber", amount: "Good" },
        ],
        healthBenefits: [
          "Digestive stimulation",
          "Antimicrobial properties",
          "Circulatory stimulation",
          "Antioxidant protection",
          "Respiratory support",
        ],
      },
      {
        id: 20,
        commonName: "Red Clover",
        emoji: "🔴",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/Rotklee_Trifolium_pratense.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Trifolium_pratense_-_Keila2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a5/Bombus_veteranus_-_Trifolium_pratense_-_Keila.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/64/Trifolium_pratense_04.JPG"
        ],
        scientificName: "Trifolium pratense",
        family: "Fabaceae",
        description:
          "A perennial with pink-purple flower heads and three-part leaves with white markings.",
        season: "Spring to Summer",
        habitat: "Meadows, fields, roadsides",
        difficulty: "Beginner",
        tags: ["Medicinal", "Edible", "Phytoestrogen", "Common"],
        identifyingFeatures: [
          "Pink-purple rounded flower heads",
          "Three oval leaflets with pale crescent markings",
          "Hairy stems and leaves",
          "Flower heads at ends of stems",
        ],
        lookAlikes:
          "Can be confused with other clovers but distinguished by flower color and leaf markings.",
        edibleParts: ["Flowers", "Leaves"],
        harvestingNotes:
          "Harvest flowers when fully open but before they turn brown. Leaves when young.",
        culinaryUses: [
          "Flowers raw in salads",
          "Dried flowers for tea",
          "Young leaves in salads",
          "Flowers in baked goods",
        ],
        recipes: [
          "Red clover tea",
          "Red clover blossom syrup",
          "Clover flower fritters",
          "Spring salad with clover",
        ],
        medicinalUses: [
          "Traditional blood purifier",
          "Phytoestrogenic properties for menopause",
          "Skin conditions like psoriasis and eczema",
          "Mild antispasmodic for coughs",
          "Detoxification support",
        ],
        preparationMethods: [
          "Tea from dried flowers",
          "Tincture from fresh flowers",
          "Infused oil for skin",
          "Salve from flower infusion",
        ],
        safetyNotes:
          "Generally safe. Those with hormone-sensitive conditions should use cautiously. Avoid during pregnancy.",
        nutritionalSummary:
          "Rich in isoflavones (phytoestrogens), calcium, magnesium, and vitamins C and E.",
        nutrients: [
          { name: "Isoflavones", amount: "High" },
          { name: "Calcium", amount: "Good" },
          { name: "Magnesium", amount: "Good" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Vitamin E", amount: "Good" },
          { name: "Protein", amount: "Good" },
        ],
        healthBenefits: [
          "Hormone balance support",
          "Skin health promotion",
          "Respiratory support",
          "Bone health through mineral content",
          "Antioxidant protection",
        ],
      },
      {
        id: 21,
        commonName: "Pineapple Weed",
        emoji: "🍍",
        images: [
          "https://live.staticflickr.com/520/18724875243_4a3c511fda_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/3e/Matricaria_discoidea_-_l%C3%B5hnav_kummel_Keilas.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/73/Matricaria_discoidea_stem_%2805%29.jpg",
          "https://live.staticflickr.com/8028/7483108776_0002b4d093_b.jpg"
        ],
        scientificName: "Matricaria discoidea",
        family: "Asteraceae",
        description:
          "A low-growing annual with feathery leaves and cone-shaped yellow-green flowers that smell like pineapple when crushed.",
        season: "Spring to Summer",
        habitat: "Compact soil, paths, disturbed areas",
        difficulty: "Beginner",
        tags: ["Edible", "Aromatic", "Tea Plant", "Fragrant"],
        identifyingFeatures: [
          "Feathery, finely divided leaves",
          "Cone-shaped yellow-green flower heads without petals",
          "Strong pineapple scent when crushed",
          "Low-growing habit, often in compacted soil",
        ],
        lookAlikes:
          "Can be confused with chamomile but pineapple weed lacks white petals and has distinctive pineapple scent.",
        edibleParts: ["Flowers", "Leaves"],
        harvestingNotes:
          "Harvest flower heads when fully developed. The scent is strongest on warm, sunny days.",
        culinaryUses: [
          "Flowers for tea (fresh or dried)",
          "Flowers as garnish for desserts",
          "Leaves in salads (sparingly)",
          "Flower-infused syrups and vinegar",
        ],
        recipes: [
          "Pineapple weed tea",
          "Pineapple weed shortbread",
          "Pineapple weed syrup",
          "Summer salad with pineapple weed",
        ],
        medicinalUses: [
          "Calming and relaxing tea",
          "Digestive aid for gas and bloating",
          "Mild anti-inflammatory",
          "Traditional for anxiety and stress",
          "Sleep aid",
        ],
        preparationMethods: [
          "Tea from fresh or dried flowers",
          "Tincture from fresh plant",
          "Infused honey",
          "Bath infusion for relaxation",
        ],
        safetyNotes:
          "Generally very safe. Those with allergies to chamomile should use caution.",
        nutritionalSummary:
          "Contains similar compounds to chamomile including antioxidants and volatile oils.",
        nutrients: [
          { name: "Volatile Oils", amount: "High" },
          { name: "Antioxidants", amount: "Good" },
          { name: "Flavonoids", amount: "Good" },
          { name: "Anti-inflammatory Compounds", amount: "Present" },
        ],
        healthBenefits: [
          "Calming nervous system support",
          "Digestive comfort",
          "Mild anti-inflammatory action",
          "Sleep promotion",
          "Antioxidant protection",
        ],
      },
      {
        id: 22,
        commonName: "Chickweed",
        emoji: "✨",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Kaldari_Stellaria_media_01.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Stellaria_media_%28vogelmuur%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/7b/Stellaria_media_2003-02-04.jpg"
        ],
        scientificName: "Stellaria media",
        family: "Caryophyllaceae",
        description:
          "A delicate, low-growing annual with tiny white star-like flowers and juicy stems. Thrives in cool, moist weather.",
        season: "Fall to Spring (cool seasons)",
        habitat: "Gardens, lawns, disturbed soil, shady moist spots",
        difficulty: "Beginner",
        tags: ["Edible", "Nutritious", "Mild", "Common"],
        identifyingFeatures: [
          "Small white flowers that look like they have 10 petals but actually have 5 deeply split petals",
          "Opposite leaves, smooth and tender, with oval shape",
          "One single line of hairs running along one side of the stem",
          "Juicy, brittle stems that easily snap when bent",
        ],
        lookAlikes:
          "Can be confused with poisonous scarlet pimpernel and spurge. True chickweed has a single line of hairs on the stem and clear (not milky) sap.",
        edibleParts: ["Leaves", "Stems", "Flowers"],
        harvestingNotes:
          "Harvest tender tops before flowering heavily. Best in cool weather before it becomes stringy.",
        culinaryUses: [
          "Raw in salads as a mild, juicy green",
          "Added to sandwiches like lettuce",
          "Lightly wilted in soups and stir-fries",
          "Blended into pestos and green sauces",
        ],
        recipes: [
          "Chickweed and garlic salad",
          "Chickweed pesto",
          "Chickweed and potato soup",
          "Green smoothie with chickweed",
        ],
        medicinalUses: [
          "Soothing for hot, itchy skin conditions",
          "Cooling, moistening herb for 'heat' in the body",
          "Traditional support for joints and rheumatism",
          "Mild lymphatic support herb",
        ],
        preparationMethods: [
          "Fresh in salads and smoothies",
          "Tea from fresh or dried plants",
          "Infused oil for salves and creams",
          "Poultice for itchy rashes and bug bites",
        ],
        safetyNotes:
          "Generally very safe and mild. Spoils quickly after harvest, so eat fresh.",
        nutritionalSummary:
          "Exceptionally nutritious for such a small plant, rich in vitamins and minerals.",
        nutrients: [
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin A", amount: "Good" },
          { name: "Iron", amount: "Good" },
          { name: "Calcium", amount: "Good" },
          { name: "Magnesium", amount: "Good" },
          { name: "Chlorophyll", amount: "High" },
        ],
        healthBenefits: [
          "Cooling and soothing for irritated tissues",
          "Supports skin health when used internally and externally",
          "Gentle nutrient tonic",
          "May support lymphatic system",
        ],
      },
      {
        id: 23,
        commonName: "Common Burdock",
        emoji: "🧲",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Arctium_minus_in_Indiana.jpg/500px-Arctium_minus_in_Indiana.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Arctium_minus_010.jpg/500px-Arctium_minus_010.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/33/Arctium_minus_corimbo.jpg",
          "https://live.staticflickr.com/7108/8154718175_37a9d4f8ff_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/67/Arctium_minus_hoja_haz_y_env%C3%A9s.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/18/IMG_0024-Arctium_minus.jpg"
        ],
        scientificName: "Arctium minus",
        family: "Asteraceae",
        description:
          "A tall biennial with huge leaves and burrs that stick to clothing and fur. Roots are a classic food and medicine.",
        season: "Roots: Fall of first year to early spring; Leaves: Spring",
        habitat: "Roadsides, waste places, field edges, disturbed soils",
        difficulty: "Intermediate",
        tags: ["Edible", "Medicinal", "Burrs", "Common"],
        identifyingFeatures: [
          "Very large, broad leaves that are lighter and fuzzy on the underside",
          "Tall, branching flower stalks with purple thistle-like flowers",
          "Round burr seed heads that cling strongly to clothes and animal fur",
          "First-year plants form a basal rosette without a tall stalk",
        ],
        lookAlikes:
          "Can be confused with rhubarb at a glance, but burdock leaves are duller and fuzzier underneath and it produces burrs.",
        edibleParts: [
          "Roots (first year)",
          "Stems (peeled)",
          "Young leaf stalks (peeled)",
        ],
        harvestingNotes:
          "Roots are best dug in fall of the first year or very early spring of the second year before the tall stalk forms.",
        culinaryUses: [
          "Roots cooked like carrots or parsnips",
          "Roots sliced and stir-fried (common in Japanese 'gobo' dishes)",
          "Peeled stalks cooked as a vegetable",
          "Roots added to soups and stews",
        ],
        recipes: [
          "Braised burdock root (gobo kinpira style)",
          "Burdock root and carrot stir-fry",
          "Burdock root miso soup",
          "Roasted burdock root medley",
        ],
        medicinalUses: [
          "Traditional blood purifier and 'detox' herb",
          "Supports liver and skin health",
          "Used for chronic skin conditions like acne and eczema",
          "Mild lymphatic and digestive support",
        ],
        preparationMethods: [
          "Decoction (long-simmered tea) from sliced roots",
          "Tincture from fresh or dried root",
          "Cooked as food for steady long-term benefit",
          "Poultice from fresh root for skin issues",
        ],
        safetyNotes:
          "Generally safe when properly identified. Deep roots can be hard to dig; avoid contaminated soils.",
        nutritionalSummary:
          "Roots are rich in inulin (prebiotic fiber), minerals, and complex carbohydrates.",
        nutrients: [
          { name: "Inulin", amount: "High" },
          { name: "Fiber", amount: "High" },
          { name: "Potassium", amount: "Good" },
          { name: "Magnesium", amount: "Good" },
          { name: "Calcium", amount: "Some" },
          { name: "Iron", amount: "Some" },
        ],
        healthBenefits: [
          "Supports healthy digestion and gut bacteria",
          "Traditional support for clear skin",
          "Gentle liver and kidney support",
          "Nourishing food herb for long-term use",
        ],
      },
      {
        id: 24,
        commonName: "Wild Violet",
        emoji: "💜",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/3c/Viola_sororia_in_Wisconsin.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/be/Viola_septentrionalis_009.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Common_Blue_Violet_%28Viola_sororia%29_color_variant.jpg"
        ],
        scientificName: "Viola sororia",
        family: "Violaceae",
        description:
          "A low-growing perennial with heart-shaped leaves and purple, blue, or white flowers in early spring.",
        season: "Early Spring to Early Summer",
        habitat: "Lawns, shady gardens, woodland edges",
        difficulty: "Beginner",
        tags: ["Edible", "Flowers", "Medicinal", "Common"],
        identifyingFeatures: [
          "Heart-shaped leaves with slightly scalloped edges",
          "Five-petaled flowers, usually purple or blue, sometimes white",
          "Basal rosette growth, flowers held just above leaves",
          "Spreads by underground rhizomes forming patches",
        ],
        lookAlikes:
          "Often confused with ground ivy or creeping charlie from a distance, but violets have heart-shaped leaves and distinct violet flowers.",
        edibleParts: ["Leaves", "Flowers"],
        harvestingNotes:
          "Harvest fresh leaves and fully open flowers in clean areas away from chemical treatments.",
        culinaryUses: [
          "Flowers as colorful edible garnish",
          "Flowers candied for desserts",
          "Leaves in salads or light cooked greens",
          "Violet flower infused syrups and vinegars",
        ],
        recipes: [
          "Candied violet flowers",
          "Violet flower syrup",
          "Spring salad with violet leaves and flowers",
          "Violet-infused honey",
        ],
        medicinalUses: [
          "Soothing demulcent for throat and lungs",
          "Gentle lymphatic support",
          "Traditionally used for mild coughs and colds",
          "Cooling herb for irritated tissues",
        ],
        preparationMethods: [
          "Tea from fresh or dried leaves and flowers",
          "Infused honey from flowers",
          "Poultice from fresh leaves",
          "Syrup made from flowers for coughs",
        ],
        safetyNotes:
          "Generally very safe. Avoid ornamental hybrid violets that may be treated with chemicals.",
        nutritionalSummary:
          "Leaves contain vitamins A and C plus soothing mucilage.",
        nutrients: [
          { name: "Vitamin A", amount: "Good" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Mucilage", amount: "Present" },
          { name: "Calcium", amount: "Some" },
          { name: "Iron", amount: "Some" },
          { name: "Antioxidants", amount: "Good" },
        ],
        healthBenefits: [
          "Gentle support for respiratory health",
          "Soothes irritated mucous membranes",
          "Nutrient-rich spring green",
          "Beautiful, mood-lifting edible flowers",
        ],
      },
      {
        id: 25,
        commonName: "Black Medic",
        emoji: "⚫",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/b/b1/MedicagoLupulina02.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f8/Medicago_lupulina_02_ies.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Medicago_lupulina_04_ies.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/21/Medicago_lupulina_10_ies.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/dd/Medicago_lupulina_11_ies.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/88/Starr_040723-0305_Medicago_lupulina.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Medicago_lupulina_seeds.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/8/8d/Medicago_lupulina_root_nodules.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/7/77/Medicago_lupulina.jpg"
        ],
        scientificName: "Medicago lupulina",
        family: "Fabaceae",
        description:
          "A low, sprawling legume with clover-like leaves and tiny yellow flower heads that form black seed clusters.",
        season: "Spring to Fall",
        habitat: "Lawns, compacted soil, roadsides, waste ground",
        difficulty: "Beginner",
        tags: ["Nitrogen-fixer", "Bee Plant", "Edible", "Common"],
        identifyingFeatures: [
          "Three leaflets like clover, but the center leaflet has a longer stalk",
          "Tiny yellow flower heads that mature into black seed clusters",
          "Sprawling, slightly wiry stems",
          "Thrives in dry, compacted soils where grass struggles",
        ],
        lookAlikes:
          "Can be confused with white clover and hop clover. Black medic has black seed heads and the central leaflet on a longer stalk.",
        edibleParts: ["Young leaves", "Young seed pods (sparingly)"],
        harvestingNotes:
          "Not a prime food plant but occasionally used as a trail nibble. Focus on young, tender parts.",
        culinaryUses: [
          "Young leaves in small amounts in salads",
          "Trail nibble while foraging",
          "Emergency famine food if needed",
        ],
        recipes: [
          "Mixed wild salad including black medic",
          "Foraged green sprinkle (small amounts)",
        ],
        medicinalUses: [
          "Mildly similar energetics to alfalfa as a nutritive tonic",
          "Soil healing 'medicine' through nitrogen fixation",
        ],
        preparationMethods: [
          "Mostly used fresh and raw in small quantities",
          "Dried aerial parts can be blended into nutritive powders",
        ],
        safetyNotes:
          "Generally safe in small amounts. Not commonly used as a major food or medicine.",
        nutritionalSummary:
          "Related to alfalfa and contains similar nutritive compounds in smaller amounts.",
        nutrients: [
          { name: "Protein", amount: "Some" },
          { name: "Minerals", amount: "Some" },
          { name: "Chlorophyll", amount: "Present" },
        ],
        healthBenefits: [
          "Minor nutritive support plant",
          "Improves soil health through nitrogen fixation",
          "Provides nectar for pollinators",
        ],
      },
      {
        id: 26,
        commonName: "Garlic Mustard",
        emoji: "🧄",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/c/c8/Alliaria_petiolata.jpeg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/Alliaria_petiolata_marais-belloy-sur-somme_80_26042007_3.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/19/%28MHNT%29_Alliaria_petiolata_-_flowers.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/87/Alliaria_petiolataseeds.jpg"
        ],
        scientificName: "Alliaria petiolata",
        family: "Brassicaceae",
        description:
          "A biennial with garlic-scented leaves and white four-petaled flowers. Highly invasive in many regions.",
        season: "Spring to Early Summer",
        habitat: "Woodlands, edges, shaded disturbed areas",
        difficulty: "Beginner",
        tags: ["Edible", "Invasive", "Garlic-flavor", "Mustard Family"],
        identifyingFeatures: [
          "First-year rosettes with roundish, scalloped leaves",
          "Second-year plants with triangular, toothed leaves on upright stems",
          "Crushed leaves smell like garlic",
          "White flowers with four petals arranged in a cross",
        ],
        lookAlikes:
          "Can resemble other mustards or violets when young, but the garlic smell when crushed is a strong clue.",
        edibleParts: ["Leaves", "Flowers", "Young seed pods"],
        harvestingNotes:
          "Because it is invasive, harvesting and eating it can help control its spread. Pull whole plants before seeds mature.",
        culinaryUses: [
          "Leaves as garlicky herb in pestos",
          "Chopped leaves in salads in small amounts",
          "Flowers as spicy garnish",
          "Young seed pods as peppery snack",
        ],
        recipes: [
          "Garlic mustard pesto",
          "Garlic mustard chimichurri",
          "Wild greens saute with garlic mustard",
          "Spicy salad with garlic mustard tops",
        ],
        medicinalUses: [
          "Traditional mild antiseptic and digestive stimulant",
          "Historically used as a spring tonic",
        ],
        preparationMethods: [
          "Fresh leaves minced and added to food",
          "Tea from leaves (bitter, used sparingly)",
          "Poultice from crushed leaves for minor skin issues",
        ],
        safetyNotes:
          "Generally safe in normal food amounts. Strong flavor; best mixed with other greens.",
        nutritionalSummary:
          "Rich in vitamin C and mustard-family sulfur compounds.",
        nutrients: [
          { name: "Vitamin C", amount: "High" },
          { name: "Vitamin A", amount: "Good" },
          { name: "Sulfur Compounds", amount: "High" },
          { name: "Minerals", amount: "Good" },
        ],
        healthBenefits: [
          "Spring nutrient boost",
          "Digestive and circulatory stimulation",
          "Helps the ecosystem when removed from invaded areas",
        ],
      },
      {
        id: 27,
        commonName: "Cleavers",
        emoji: "🧲",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Goosegrass_%28Galium_aparine%29%2C_Loch_Clunie_-_geograph.org.uk_-_1505032.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/99/Galium_aparine.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/de/Flowers_February_2008-4.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a6/Galium.aparine.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/59/Galium_aparine_3769.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/f/ff/Cleaver_plant_leaf_under_microscope.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/9a/Galium_aparine.png"
        ],
        scientificName: "Galium aparine",
        family: "Rubiaceae",
        description:
          "A scrambling annual that clings to clothing and fur with tiny hooked hairs. Also known as 'sticky weed' or 'bedstraw'.",
        season: "Spring to Early Summer",
        habitat: "Hedges, woodland edges, gardens, disturbed ground",
        difficulty: "Beginner",
        tags: ["Medicinal", "Edible (Young)", "Lymphatic", "Sticky"],
        identifyingFeatures: [
          "Square stems covered in tiny hooked hairs that cling to surfaces",
          "Whorls of narrow leaves around the stem at each node",
          "Small white star-like flowers",
          "Stringy, clinging growth that tangles through other plants",
        ],
        lookAlikes:
          "Can be confused with some other bedstraw species, but cleavers is especially sticky to the touch.",
        edibleParts: ["Very young shoots and leaves"],
        harvestingNotes:
          "Best harvested very young before it becomes too fibrous and sticky. Commonly used more as medicine than food.",
        culinaryUses: [
          "Very young tips added to soups and stews and then removed like herbs",
          "Roasted seeds sometimes used as coffee-like beverage",
        ],
        recipes: [
          "Cleavers spring tonic tea",
          "Stock or soup infused with young cleavers (then strained)",
        ],
        medicinalUses: [
          "Classic lymphatic support herb",
          "Used for swollen glands and sluggish lymph",
          "Mild diuretic and cleansing spring tonic",
          "Cooling for inflammatory skin conditions",
        ],
        preparationMethods: [
          "Cold infusion (steeped in cool water) for fresh plant",
          "Juicing fresh cleavers as potent tonic",
          "Tea from fresh or lightly dried plant",
          "Poultice or wash for the skin",
        ],
        safetyNotes:
          "Generally safe. Can be a bit rough and fibrous; strain well if used in drinks.",
        nutritionalSummary:
          "Mildly nutritive with chlorophyll and minerals; valued more for its lymphatic action than as a food.",
        nutrients: [
          { name: "Chlorophyll", amount: "High" },
          { name: "Minerals", amount: "Moderate" },
          { name: "Silica", amount: "Some" },
        ],
        healthBenefits: [
          "Supports lymphatic drainage",
          "Mild detoxifying spring tonic",
          "Supports skin health via lymph and kidney support",
          "Gentle diuretic",
        ],
      },
      {
        id: 28,
        commonName: "Common Ragweed",
        emoji: "🤧",
        images: [
          "https://live.staticflickr.com/3092/3120452039_d1d2ef85cf_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ambrosia_artemisiifolia_080908.JPG",
          "https://live.staticflickr.com/3254/3120450559_cb6495b3de_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/84/Starr_031108-3169_Ambrosia_artemisiifolia.jpg"
        ],
        scientificName: "Ambrosia artemisiifolia",
        family: "Asteraceae",
        description:
          "A common annual weed famous for causing seasonal allergies with its abundant pollen.",
        season: "Summer to Fall",
        habitat: "Fields, roadsides, vacant lots, disturbed soils",
        difficulty: "Beginner",
        tags: ["Allergy Plant", "Caution", "Common"],
        identifyingFeatures: [
          "Deeply divided, fern-like leaves (on many species)",
          "Greenish, inconspicuous flower spikes at stem tops",
          "Not showy like goldenrod, often grows nearby",
          "Can form large stands in open, disturbed ground",
        ],
        lookAlikes:
          "Frequently confused with goldenrod, which has bright yellow flowers. Ragweed flowers are greenish and not showy.",
        edibleParts: [],
        harvestingNotes:
          "Not generally used as a food plant. Some herbalists use it in very specific ways, but pollen is a major allergen.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [
          "Some traditions use ragweed leaf as a mild astringent or even to help desensitize allergies, but this requires experience and caution.",
        ],
        preparationMethods: [
          "Occasional use as tincture or tea by experienced practitioners only",
        ],
        safetyNotes:
          "Major cause of seasonal hay fever. Pollen can trigger strong allergic reactions. Not recommended as a beginner medicinal plant.",
        nutritionalSummary: "Not typically used as a nutritive plant.",
        nutrients: [],
        healthBenefits: [
          "Primarily known as a plant to avoid breathing during pollen season",
          "Can be used educationally to teach about plant allergies and pollen",
        ],
      },
      {
        id: 29,
        commonName: "Canada Thistle",
        emoji: "🪡",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/1/1f/Cirsium_arvense_with_Bees_Richard_Bartz.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/10/Cirsium_arvense_-_p%C3%B5ldohakas.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/ee/Maniola_jurtina_2_RF.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d7/Thistle_with_cuckoo_spit.jpeg",
          "https://upload.wikimedia.org/wikipedia/commons/8/8b/Carduelis_carduelis2.jpg"
        ],
        scientificName: "Cirsium arvense",
        family: "Asteraceae",
        description:
          "A prickly perennial thistle that spreads aggressively by roots and seeds. Young parts can be used as food with care.",
        season: "Spring to Fall",
        habitat: "Fields, pastures, roadsides, disturbed soils",
        difficulty: "Intermediate",
        tags: ["Edible (Prepared)", "Invasive", "Prickly"],
        identifyingFeatures: [
          "Spiny leaves that clasp the stem and form colonies",
          "Purple flower heads typical of thistles",
          "Stems often branching near the top",
          "Spreads by creeping roots forming dense patches",
        ],
        lookAlikes:
          "Similar to other thistles; key features are colony-forming behavior and leaf shape. All require careful handling.",
        edibleParts: [
          "Young stems (peeled)",
          "Young leaf midribs (peeled)",
          "Roots (young plants)",
        ],
        harvestingNotes:
          "ALWAYS wear gloves. Peel off spines and outer layers thoroughly before eating.",
        culinaryUses: [
          "Peeled stems eaten raw or cooked as vegetable",
          "Peeled leaf midribs added to salads",
          "Young roots cooked like other root vegetables",
        ],
        recipes: [
          "Thistle stem stir-fry",
          "Peeled thistle stems with butter and salt",
          "Mixed wild root medley including young thistle roots",
        ],
        medicinalUses: [
          "Like many thistles, often associated with liver and digestive support",
          "Used occasionally as a mild bitter tonic",
        ],
        preparationMethods: [
          "Decoction of roots as tea",
          "Peeled stems eaten as food for gentle bitter action",
        ],
        safetyNotes:
          "Spines can easily puncture skin. Must be carefully peeled and cleaned. Avoid older, woody plants.",
        nutritionalSummary:
          "Provides some minerals, fiber, and bitters when properly prepared.",
        nutrients: [
          { name: "Fiber", amount: "Good" },
          { name: "Minerals", amount: "Moderate" },
          { name: "Bitter Compounds", amount: "Present" },
        ],
        healthBenefits: [
          "Mild digestive support through bitters",
          "Demonstrates how even 'nuisance' plants can be useful food with skill",
        ],
      },
      {
        id: 30,
        commonName: "Common Evening Primrose",
        emoji: "🌙",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/4/40/Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/80/Ola_kwiatek_%C5%BC%C3%B3%C5%82ty_Niemir%C3%B3w_nad_Bugiem_pl.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/0d/Oenothera_rubricaulis_2014_G1.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Oenothera_biennis_Rosette.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/6/62/Oenothera_biennis_-_Nachtkerze_mit_Samenst%C3%A4nden_und_Bl%C3%BCten.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/03/Primrose_Moth.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f4/Oenothera_biennis_ENBLA02.jpeg"
        ],
        scientificName: "Oenothera biennis",
        family: "Onagraceae",
        description:
          "A biennial with a basal rosette the first year and tall flower spikes with yellow blossoms that open in the evening.",
        season: "Summer to Fall (flowers), Roots: Fall/Spring of first year",
        habitat: "Roadsides, fields, disturbed ground, sandy soils",
        difficulty: "Intermediate",
        tags: ["Edible", "Medicinal", "Evening Blooms"],
        identifyingFeatures: [
          "First-year rosette of lance-shaped leaves",
          "Second-year tall stem with alternate leaves",
          "Yellow flowers that open at dusk and close by day",
          "Long seed pods along the stem",
        ],
        lookAlikes:
          "Other evening primrose species are similar; key is the yellow evening-opening flowers and overall structure.",
        edibleParts: [
          "Roots (first year)",
          "Leaves (young)",
          "Flower buds",
          "Flowers",
          "Seeds (oil source)",
        ],
        harvestingNotes:
          "Roots from first-year plants are best dug in fall or early spring. Flower buds and flowers harvested during bloom.",
        culinaryUses: [
          "Roots cooked like mild, slightly peppery vegetables",
          "Young leaves as cooked greens",
          "Flower buds steamed or stir-fried",
          "Flowers as edible garnish",
        ],
        recipes: [
          "Roasted evening primrose roots",
          "Stir-fried evening primrose buds",
          "Wild greens mix with evening primrose leaves",
          "Salad topped with evening primrose flowers",
        ],
        medicinalUses: [
          "Seeds are source of evening primrose oil (EPO) rich in gamma-linolenic acid (GLA)",
          "Used for skin health and hormonal balance in modern herbalism",
          "Traditional use for bruises and minor injuries",
        ],
        preparationMethods: [
          "Roots cooked in soups and stews",
          "Seed oil (usually commercially pressed) used as supplement",
          "Poultice from fresh plant for minor skin issues",
        ],
        safetyNotes:
          "Generally safe when properly identified. Seed oil supplements may interact with certain medications.",
        nutritionalSummary:
          "Roots and greens provide vitamins and minerals; seeds high in GLA and essential fatty acids.",
        nutrients: [
          { name: "Gamma-Linolenic Acid (GLA)", amount: "High (in seeds)" },
          { name: "Essential Fatty Acids", amount: "High (in seeds)" },
          { name: "Vitamin C", amount: "Some" },
          { name: "Minerals", amount: "Moderate" },
        ],
        healthBenefits: [
          "Food plus potential oil-source plant",
          "May support skin and hormonal balance via seed oil",
          "Another example of a common roadside 'weed' with multiple uses",
        ],
      },
      {
        id: 31,
        commonName: "Henbit",
        emoji: "🌸",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/b/ba/Lamium_amplexicaule_%2852878370216%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/2a/Lamium_amplexicaule_habit5_%2814648387660%29.jpg",
          "https://live.staticflickr.com/65535/49682214323_fddccedace_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Lamium_amplexicaule_2005.04.10_12.23.07.jpg",
          "https://live.staticflickr.com/3886/14648517007_2990a5a06f_b.jpg"
        ],
        scientificName: "Lamium amplexicaule",
        family: "Lamiaceae",
        description:
          "A very common early-spring mint-family plant with square stems, scalloped leaves, and pink-purple tubular flowers.",
        season: "Late Winter to Spring",
        habitat: "Lawns, gardens, disturbed soil, roadsides",
        difficulty: "Beginner",
        tags: ["Edible", "Mint Family", "Mild", "Common"],
        identifyingFeatures: [
          "Square stems typical of mint family",
          "Opposite leaves with rounded scalloped edges",
          "Upper leaves clasp the stem (key ID feature)",
          "Tubular purple-pink flowers",
          "Forms purple carpets early in spring",
        ],
        lookAlikes:
          "Easily confused with Purple Dead Nettle, but henbit's upper leaves clasp the stem and it grows more upright.",
        edibleParts: ["Leaves", "Flowers"],
        harvestingNotes:
          "Best harvested early in the season before it becomes lanky or stringy.",
        culinaryUses: [
          "Mild greens in salads",
          "Added to soups and omelets",
          "Edible flowers as garnish",
          "Lightly sautéed as wild green",
        ],
        recipes: [
          "Henbit and egg scramble",
          "Spring henbit salad",
          "Henbit pesto (mild)",
          "Henbit sauté with garlic",
        ],
        medicinalUses: [
          "Traditional mild relaxant",
          "Slight diuretic action",
          "Folk use for digestive comfort",
        ],
        preparationMethods: [
          "Fresh in salads",
          "Lightly cooked as green",
          "Tea from fresh leaves",
        ],
        safetyNotes: "Very safe. Mild flavor, not potent medicinally.",
        nutritionalSummary:
          "Contains chlorophyll, mild vitamins, and minerals typical of wild spring greens.",
        nutrients: [
          { name: "Vitamin C", amount: "Moderate" },
          { name: "Chlorophyll", amount: "Good" },
          { name: "Minerals", amount: "Moderate" },
        ],
        healthBenefits: [
          "Provides early spring nutrients",
          "Gentle digestive support",
          "Easy starter plant for foragers",
        ],
      },
      {
        id: 32,
        commonName: "Plantain (Narrowleaf)",
        emoji: "🌿",
        images: [
          "https://images.pexels.com/photos/4738081/pexels-photo-4738081.jpeg?_gl=1*19qhh0f*_ga*Njc3MDUzOTEyLjE3NjczMTA1MDc.*_ga_8JE65Q40S6*czE3NjczMTA1MDckbzEkZzEkdDE3NjczMTA1NTYkajExJGwwJGgw",
          "https://cdn.pixabay.com/photo/2022/06/14/09/50/grass-7261539_1280.jpg",
          "https://cdn.pixabay.com/photo/2014/05/05/19/50/plantain-338484_1280.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Plantago_lanceolata_P6200323_%E7%AE%86%E5%A4%A7%E8%91%89%E5%AD%90%E3%80%81%E3%83%98%E3%83%A9%E3%82%AA%E3%82%AA%E3%83%90%E3%82%B3.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/37/Plantago_lanceolata_-_Kulna.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/Galled_head_of_a_Plantain.JPG",
          "https://live.staticflickr.com/4216/34794394184_6be2cef40b_b.jpg",
          "https://live.staticflickr.com/5583/14942640085_2870012305_b.jpg"
        ],
        scientificName: "Plantago lanceolata",
        family: "Plantaginaceae",
        description:
          "A slender-leaved relative of broadleaf plantain. A potent first-aid plant with stringy, ribbed leaves.",
        season: "Spring to Fall",
        habitat: "Lawns, fields, roadsides",
        difficulty: "Beginner",
        tags: ["Medicinal", "Edible", "First Aid", "Common"],
        identifyingFeatures: [
          "Long, narrow leaves with parallel ribs",
          "Basal rosette growth",
          "Slender flower stalks with compact seed heads",
          "Fibrous leaves that become stringy when torn",
        ],
        lookAlikes:
          "Confused with young grasses, but plantain has strong parallel veins and forms a rosette.",
        edibleParts: ["Young leaves", "Seeds"],
        harvestingNotes:
          "Young leaves are tender in early spring; older leaves are tough.",
        culinaryUses: [
          "Young leaves raw or steamed",
          "Seeds as thickener similar to psyllium",
          "Leaves as wrap for pit cooking",
        ],
        recipes: [
          "Steamed narrowleaf plantain greens",
          "Plantain leaf wraps",
          "Plantain seed porridge",
        ],
        medicinalUses: [
          "Powerful drawing agent for bites and stings",
          "Stops bleeding",
          "Soothes skin irritation",
          "Respiratory support when used as tea",
        ],
        preparationMethods: [
          "Spit poultice for stings",
          "Tea for respiratory issues",
          "Infused oil for salves",
        ],
        safetyNotes: "Very safe; rare allergies possible.",
        nutritionalSummary:
          "High in silica, mucilage, minerals, and vitamin C.",
        nutrients: [
          { name: "Silica", amount: "High" },
          { name: "Vitamin C", amount: "Good" },
          { name: "Mucilage", amount: "High" },
        ],
        healthBenefits: [
          "Excellent first-aid plant",
          "Supports lungs and digestion",
          "Soothes skin irritations",
        ],
      },
      {
        id: 33,
        commonName: "Common Mullein",
        emoji: "🔥",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/Starr_040723-0030_Verbascum_thapsus.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4e/Starr_040723-0260_Verbascum_thapsus.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/26/Starr_040723-0267_Verbascum_thapsus.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/9c/Starr_040723-0074_Verbascum_thapsus.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f2/Verbascum_thapsus_fruit_kz.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c4/Starr_040723-0032_Verbascum_thapsus.jpg"
        ],
        scientificName: "Verbascum thapsus",
        family: "Scrophulariaceae",
        description:
          "A tall biennial with huge fuzzy leaves in year one and a towering yellow flower spike in year two.",
        season: "Year-round (rosette), Summer (flowers)",
        habitat: "Fields, dry soils, roadsides",
        difficulty: "Beginner",
        tags: ["Medicinal", "Respiratory", "Torches", "Common"],
        identifyingFeatures: [
          "Large velvety leaves in a basal rosette",
          "Tall flower spike up to 6 feet",
          "Yellow, five-petaled flowers",
          "Soft woolly leaf texture",
        ],
        lookAlikes:
          "Sometimes confused with lambs ear. Mullein grows much larger and has a tall flower spike.",
        edibleParts: ["Flowers", "Leaves (medicinal)"],
        harvestingNotes:
          "Leaves best in first year. Flowers must be harvested dry to prevent mold in oil.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [
          "Classic lung remedy for coughs and congestion",
          "Earache oil made from flowers",
          "Anti-inflammatory respiratory herb",
          "Smoke blends for lung soothing",
        ],
        preparationMethods: [
          "Tea from dried leaves (strain well)",
          "Infused oil from flowers",
          "Dried leaves for smoke blends",
          "Poultice for joint pain",
        ],
        safetyNotes:
          "Leaf hairs can irritate throat if tea is not strained well.",
        nutritionalSummary:
          "Contains saponins, mucilage, tannins, and anti-inflammatory compounds.",
        nutrients: [
          { name: "Mucilage", amount: "Good" },
          { name: "Saponins", amount: "Moderate" },
          { name: "Tannins", amount: "Moderate" },
        ],
        healthBenefits: [
          "Supports lung health",
          "Soothes dry cough",
          "Relieves earaches",
          "Anti-inflammatory",
        ],
      },
      {
        id: 34,
        commonName: "Goldenrod",
        emoji: "💛",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/0/01/Goldenrod_growing_wild_in_Oklahoma.jpeg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Solidago_lepida_3531.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/f/f5/Solidago_gigantea01.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Yellow_flowers_of_Solidago_canadensis.jpg",
          "https://live.staticflickr.com/8244/29375104725_5d91f62c8a_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/62/Solidago_virgaurea_var._leiocarpa_02-2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/60/Bombus_cryptarum_-_Solidago_virgaurea_-_Keila2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/Goldenrodbee.jpg"
        ],
        scientificName: "Solidago spp.",
        family: "Asteraceae",
        description:
          "A bright yellow late-summer wildflower often mistaken for causing allergies, though its pollen is insect-carried.",
        season: "Late Summer to Fall",
        habitat: "Meadows, fields, roadsides",
        difficulty: "Beginner",
        tags: ["Medicinal", "Tea Plant", "Bee Plant"],
        identifyingFeatures: [
          "Showy yellow plume-like flower clusters",
          "Alternate lance-shaped leaves",
          "Reddish or green stems",
          "Forms large colonies",
        ],
        lookAlikes:
          "Confused with ragweed, but goldenrod is bright yellow and showy.",
        edibleParts: ["Flowers", "Leaves"],
        harvestingNotes: "Harvest flowers at peak bloom.",
        culinaryUses: [
          "Tea from flowers and leaves",
          "Edible garnish",
          "Flower-infused honey",
        ],
        recipes: [
          "Goldenrod tea",
          "Goldenrod honey infusion",
          "Goldenrod latte",
        ],
        medicinalUses: [
          "Kidney and urinary support",
          "Anti-inflammatory",
          "Allergy-support herb",
          "Traditional wound herb",
        ],
        preparationMethods: [
          "Tea from dried flowers and leaves",
          "Tincture from fresh plant",
          "Infused honey",
        ],
        safetyNotes: "Generally safe; those allergic to asters may react.",
        nutritionalSummary: "Rich in flavonoids and volatile oils.",
        nutrients: [
          { name: "Flavonoids", amount: "High" },
          { name: "Volatile Oils", amount: "Moderate" },
          { name: "Tannins", amount: "Moderate" },
        ],
        healthBenefits: [
          "Supports kidney function",
          "Reduces inflammation",
          "Helps with seasonal allergies",
          "Promotes urinary tract health",
        ],
      },
      {
        id: 35,
        commonName: "Wild Lettuce",
        emoji: "🥬",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/Lactucaserriola2web.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/b1/Lactuca_serriola.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Kompassla_08-07-2006_9.39.08.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/9/90/Lactuca_serriola_clump.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/71/Lactuca_virosa_bleeding.JPG"
        ],
        scientificName: "Lactuca serriola / Lactuca virosa",
        family: "Asteraceae",
        description:
          "Tall, spiny lettuce plants known for their white latex, historically used as a sedative and pain-modulating herb.",
        season: "Summer",
        habitat: "Roadsides, vacant lots, fields",
        difficulty: "Intermediate",
        tags: ["Medicinal", "Latex", "Sedative"],
        identifyingFeatures: [
          "Milky white sap when cut",
          "Tall upright growth up to 6 feet",
          "Prickles along the leaf underside midrib",
          "Leaves orient north-south",
        ],
        lookAlikes: "Can resemble young thistles but lacks true spines.",
        edibleParts: ["Young leaves (bitter)", "Latex (advanced use)"],
        harvestingNotes: "Latex strongest during flowering.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [
          "Traditional sedative herb",
          "Mild analgesic effect",
          "Used historically as 'lettuce opium'",
          "Calming nervine",
        ],
        preparationMethods: [
          "Latex tincture",
          "Tea from dried leaves",
          "Smoke blends",
        ],
        safetyNotes: "Use cautiously. Latex can cause nausea in large doses.",
        nutritionalSummary:
          "Contains bitter sesquiterpene lactones and latex compounds.",
        nutrients: [
          { name: "Bitter Compounds", amount: "High" },
          { name: "Latex Alkaloids", amount: "Present" },
        ],
        healthBenefits: [
          "Calming effects",
          "Sleep-supportive",
          "Mild pain modulation",
        ],
      },
      {
        id: 36,
        commonName: "Pigweed (Redroot Amaranth)",
        emoji: "🔺",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/6/6b/Amaranthus_retroflexus_flower1.jpg",
          "https://live.staticflickr.com/252/459135992_5bcccbec2f_b.jpg",
          "https://live.staticflickr.com/2455/3703457603_4750519ec7_b.jpg",
          "https://live.staticflickr.com/1131/5129266205_1f2df4a53f_b.jpg"
        ],
        scientificName: "Amaranthus retroflexus",
        family: "Amaranthaceae",
        description:
          "A common summer annual with edible spinach-like leaves and protein-rich seeds.",
        season: "Summer",
        habitat: "Gardens, fields, disturbed soils",
        difficulty: "Beginner",
        tags: ["Edible", "Nutritious", "Grain"],
        identifyingFeatures: [
          "Diamond or oval leaves",
          "Reddish taproot",
          "Dense grain-like flower heads",
          "Coarse green stems",
        ],
        lookAlikes: "Similar to Lambs Quarters but lacks mealy coating.",
        edibleParts: ["Leaves", "Seeds"],
        harvestingNotes: "Leaves best before flowering.",
        culinaryUses: [
          "Spinach substitute",
          "Seeds ground for flour",
          "Seeds cooked as porridge",
          "Stir-fries",
        ],
        recipes: [
          "Amaranth leaf sauté",
          "Pigweed seed porridge",
          "Amaranth flatbread",
          "Wild greens mix",
        ],
        medicinalUses: [
          "Mild astringent",
          "Nutritive tonic",
          "Digestive support",
        ],
        preparationMethods: [
          "Cooked greens",
          "Ground seeds",
          "Tea from leaves",
        ],
        safetyNotes:
          "Avoid plants in polluted soil due to nitrate accumulation.",
        nutritionalSummary:
          "Rich in protein, calcium, iron, and vitamins A and C.",
        nutrients: [
          { name: "Protein", amount: "High" },
          { name: "Calcium", amount: "High" },
          { name: "Iron", amount: "High" },
        ],
        healthBenefits: [
          "Highly nutritious",
          "Good plant protein source",
          "Supports bone health",
        ],
      },
      {
        id: 37,
        commonName: "Queen Anne's Lace (Wild Carrot)",
        emoji: "🤍",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/2/23/Daucus_carota_May_2008-1_edit.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d1/2023-08-11_Wild_Carrot%2C_Rising_Sun_CP%2C_Northumberland_3.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/31/Wild_carrot_%28Daucus_carota%29%2C_Heartwood_Forest_%2829094210636%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a1/Daucus_carota_subsp._gummifer_%28Sea_Carrot%29-1_-_Flickr_-_Ragnhild_%26_Neil_Crawford.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/97/Wortel_violet_wortelrot_%28Helicobasidium_brebissonii_on_Daucus_carota%29.jpg",
          "https://live.staticflickr.com/2459/3881800665_bcd74c7797.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Daucus_carota_inflorescence_kz.jpg",
          "https://live.staticflickr.com/5508/18654125409_14fb84ce78_b.jpg",
          "https://live.staticflickr.com/3381/3269418347_6486590d57_b.jpg"
        ],
        scientificName: "Daucus carota",
        family: "Apiaceae",
        description:
          "A wild ancestor of cultivated carrot with lacy white flower umbels and hairy stems. Must be distinguished from deadly hemlock.",
        season: "Summer",
        habitat: "Fields, roadsides, disturbed ground",
        difficulty: "Advanced",
        tags: ["Edible (Caution)", "Medicinal", "Carrot Family"],
        identifyingFeatures: [
          "White umbrella-like flower clusters",
          "Often a single purple flower in the center",
          "Hairy stems (key ID)",
          "Carrot smell when root is crushed",
        ],
        lookAlikes:
          "EASILY confused with Poison Hemlock and Water Hemlock. Hemlock has smooth, blotchy stems with NO hair.",
        edibleParts: ["Young roots", "Leaves (sparingly)", "Seeds"],
        harvestingNotes: "Only harvest with 100% ID certainty.",
        culinaryUses: [
          "Young roots cooked",
          "Seeds as spice",
          "Leaves as aromatic herb",
        ],
        recipes: ["Wild carrot stew", "Wild carrot seed spice mix"],
        medicinalUses: [
          "Digestive tonic",
          "Traditional diuretic",
          "Historical contraceptive in seeds",
        ],
        preparationMethods: ["Cooked roots", "Seed tea", "Infusion of leaves"],
        safetyNotes: "DEADLY LOOKALIKES. Avoid unless expert at ID.",
        nutritionalSummary: "",
        nutrients: [
          { name: "Beta-Carotene", amount: "Moderate" },
          { name: "Volatile Oils", amount: "Present" },
        ],
        healthBenefits: ["Warming digestive herb", "Aromatic tonic"],
      },
      {
        id: 38,
        commonName: "Common Milkweed",
        emoji: "🟣",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/5d/Asclepias_syriaca_004.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Asclepias_syriacus.tif/lossy-page1-500px-Asclepias_syriacus.tif.jpg",
          "https://live.staticflickr.com/8012/7515056830_ef77939f07_b.jpg",
          "https://live.staticflickr.com/4186/34802137133_93ed0c5b1f_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/15/Asclepias_syriaca_2019-04-21_1738.jpg",
          "https://en.wikipedia.org/wiki/File:Asclepias_syriaca_15-p.bot-ascl.syria-71.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/e2/Asclepias_syriaca_15-p.bot-ascl.syria-71.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/bf/Common_Milkweed_Asclepias_syriaca_Unopened_Flower_Head_2223px.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/6/62/Asclepias_syriaca_%281035856056%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/e4/Milk3.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/fd/Asclepias_syriaca_close_up_of_the_seed_copy.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/79/Milkweedseeds.jpg"
        ],
        scientificName: "Asclepias syriaca",
        family: "Apocynaceae",
        description:
          "A tall perennial with thick stems, broad leaves, and fragrant spherical pink flower clusters. A multi-use edible when properly prepared.",
        season: "Spring to Summer",
        habitat: "Fields, edges, roadsides",
        difficulty: "Intermediate",
        tags: ["Edible (Cooked)", "Medicinal", "Survival", "Monarch Plant"],
        identifyingFeatures: [
          "Broad opposite leaves with white midvein",
          "Ball-like clusters of pink flowers",
          "Milky sap when broken",
          "Green pods that release silky floss",
        ],
        lookAlikes:
          "Dogbane resembles milkweed but is toxic and more branching.",
        edibleParts: ["Shoots", "Young leaves", "Flower buds", "Young pods"],
        harvestingNotes:
          "Requires boiling with water changes to remove bitterness.",
        culinaryUses: [
          "Shoots cooked like asparagus",
          "Flower buds steamed or sautéed",
          "Pods cooked when under 2 inches",
          "Flower fritters",
        ],
        recipes: [
          "Milkweed shoot stir-fry",
          "Milkweed bud fritters",
          "Boiled young pods",
        ],
        medicinalUses: [
          "Traditional expectorant",
          "Mild diuretic",
          "Poultice for warts",
        ],
        preparationMethods: ["Multiple-boil method", "Steaming", "Stir-frying"],
        safetyNotes: "Raw plant mildly toxic. MUST be cooked thoroughly.",
        nutritionalSummary: "Rich in vitamins A and C and minerals.",
        nutrients: [
          { name: "Vitamin C", amount: "Good" },
          { name: "Vitamin A", amount: "Good" },
          { name: "Minerals", amount: "Moderate" },
        ],
        healthBenefits: [
          "Nutritious survival vegetable",
          "Supports pollinators",
          "Highly versatile",
        ],
      },
      {
        id: 39,
        commonName: "Cattail",
        emoji: "🌾",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/4/4d/Typha_latifolia_Finland.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bulrush_%28Typha_latifolia%29_%288139113636%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/16/Typha_latifolia_02_bgiu.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/0e/Rohrkolben_Typha_1.JPG",
          "https://live.staticflickr.com/1024/1352564688_d80321aad9_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d8/Boy_blowing_at_a_Typha_latifolia_seed_head.jpg",
          "https://live.staticflickr.com/3816/11711568313_798762b6e9_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/0/00/Typha_latifolia.jpg"
        ],
        scientificName: "Typha latifolia",
        family: "Typhaceae",
        description:
          "An iconic wetland plant known for its edible shoots, pollen, roots, and numerous survival uses.",
        season: "Spring to Fall",
        habitat: "Wetlands, marshes, ponds",
        difficulty: "Beginner",
        tags: ["Survival", "Edible", "Multi-use"],
        identifyingFeatures: [
          "Long flat blade-like leaves",
          "Brown sausage-shaped flower heads",
          "Rhizome network in mud",
          "Forms large stands",
        ],
        lookAlikes:
          "Irises grow in similar places but are toxic and have a different smell and leaf base.",
        edibleParts: ["Shoots", "Flower spikes", "Pollen", "Rhizomes"],
        harvestingNotes:
          "Shoots best in spring. Pollen collected by shaking flowers into a container.",
        culinaryUses: [
          "Shoots raw or cooked",
          "Flower spikes boiled like corn",
          "Pollen used as flour",
          "Roots processed for starch",
        ],
        recipes: [
          "Cattail shoot salad",
          "Boiled cattail flower head",
          "Cattail pollen pancakes",
          "Cattail root bread",
        ],
        medicinalUses: [
          "Poultice for burns",
          "Wound dressing",
          "Digestive soother",
        ],
        preparationMethods: [
          "Raw shoots",
          "Boiled flower heads",
          "Dried pollen",
          "Roasted roots",
        ],
        safetyNotes: "Avoid polluted waterways. Iris lookalikes are toxic.",
        nutritionalSummary:
          "Pollen is high in protein; roots high in starch; shoots contain vitamins and minerals.",
        nutrients: [
          { name: "Protein (pollen)", amount: "High" },
          { name: "Starch (roots)", amount: "High" },
        ],
        healthBenefits: [
          "Top-tier survival food",
          "Provides multiple edible parts",
          "Useful for cordage, insulation, tinder",
        ],
      },
      {
        id: 40,
        commonName: "Poison Hemlock",
        emoji: "☠️",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/b/b2/Conium.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/eb/Conium_maculatum_Cresswell_01.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/70/Gefleckterschierling.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/f/f7/Conium_maculatum_Hauxley_2.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d4/Poison_Hemlock.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hemlockseeds.jpg",
          "https://live.staticflickr.com/208/508080682_995de583a2_b.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/5f/Conium_maculatum_stem-5-01-05.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/45/Conium_maculatum_stem_%2812%29.jpg"
        ],
        scientificName: "Conium maculatum",
        family: "Apiaceae",
        description:
          "A deadly toxic carrot-family plant with smooth purple-blotched stems and finely divided leaves.",
        season: "Spring to Summer",
        habitat: "Fields, ditches, roadsides",
        difficulty: "Advanced",
        tags: ["Toxic", "Deadly", "Lookalike Alert"],
        identifyingFeatures: [
          "Purple blotches on smooth hollow stems",
          "No hair on stems (key ID)",
          "Finely divided fern-like leaves",
          "White umbels of small flowers",
        ],
        lookAlikes:
          "Resembles Queen Anne's Lace but is hairless and blotchy; resembles water hemlock.",
        edibleParts: [],
        harvestingNotes: "NEVER harvest.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [],
        preparationMethods: [],
        safetyNotes:
          "DEADLY. Contains neurotoxic alkaloids causing respiratory failure. Do not touch or burn.",
        nutritionalSummary: "",
        nutrients: [],
        healthBenefits: [],
      },
      {
        id: 41,
        commonName: "Water Hemlock",
        emoji: "💀",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/d/df/Cicuta_maculata.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/d/d0/Cicuta_maculata_-_Flickr_-_aspidoscelis_%281%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a2/Cicuta_maculata_2%2C_Water_Hemlock%2C_Howard_County%2C_Md%2C_Helen_Lowe_Metzman_2018-07-17-12.52.39_ZS_PMax_UDR_%2849038651216%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/36/Cicuta_maculata_upper_stem_leaf%2C_Water_Hemlock%2C_Howard_County%2C_Md%2C_Helen_Lowe_Metzman_2018-07-17-13.31.32_ZS_PMax_UDR-Recovered_%2848602410012%29.jpg"
        ],
        scientificName: "Cicuta maculata",
        family: "Apiaceae",
        description:
          "One of the most poisonous plants in North America. Often grows near water. Roots contain lethal cicutoxin.",
        season: "Spring to Summer",
        habitat: "Wet areas, ponds, streams",
        difficulty: "Expert",
        tags: ["Toxic", "Deadly", "Lookalike Alert"],
        identifyingFeatures: [
          "Smooth stems with purple streaking",
          "Large, divided leaves similar to celery",
          "Roots are chambered and extremely toxic",
          "White umbrella-like flower clusters",
        ],
        lookAlikes: "Resembles edible wild carrot or parsnip but is DEADLY.",
        edibleParts: [],
        harvestingNotes: "NEVER harvest. Roots fatal even in tiny amounts.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [],
        preparationMethods: [],
        safetyNotes:
          "One of the most deadly plants. Causes seizures and organ failure.",
        nutritionalSummary: "",
        nutrients: [],
        healthBenefits: [],
      },
      {
        id: 42,
        commonName: "Poison Ivy",
        emoji: "☣️",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/5/50/Poison_ivy_in_May_beside_Appalachian_Trail_in_Rockfish_Gap_VA_area_1.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/3c/Rhus_radicans_006.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/9d/2014-10-29_13_43_39_Poison_Ivy_foliage_during_autumn_leaf_coloration_in_Ewing%2C_New_Jersey.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/0/08/Toxicodendron_radicans%2C_leaves.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/20/Poison_ivy_vine.jpg", 
          "https://upload.wikimedia.org/wikipedia/commons/7/79/Toxicodendron_radicans%2C_eastern_poison_ivy_vine%2C_Maryland_2025_01.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/4/4f/Poison_Ivy_in_Perrot_State_Park.jpg", 
          "https://upload.wikimedia.org/wikipedia/commons/6/69/Poison_ivy-roadside.jpg"
        ],
        scientificName: "Toxicodendron radicans",
        family: "Anacardiaceae",
        description:
          "A highly allergenic vine or shrub that causes severe skin rash due to urushiol oil. Extremely important for beginners to identify.",
        season: "Spring to Fall",
        habitat: "Woodlands, edges, fences, disturbed areas",
        difficulty: "Hazard",
        tags: ["Toxic", "Allergenic", "Do Not Touch", "Hazard"],
        identifyingFeatures: [
          "Classic 'leaves of three, let it be' leaflet pattern",
          "Central leaflet has longer stalk",
          "Can grow as groundcover, shrub, or climbing vine with hairy aerial roots",
          "Leaves may be shiny or dull and change color seasonally",
        ],
        lookAlikes:
          "Can be confused with young box elder, blackberry, or Virginia creeper (which has five leaflets).",
        edibleParts: [],
        harvestingNotes:
          "NEVER harvest. Avoid contact with all parts including roots and dead stems — urushiol remains active for years.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [],
        preparationMethods: [],
        safetyNotes:
          "Highly allergenic. Urushiol can cause blistering rash through direct or indirect contact. Wash clothing, tools, and pets if exposed.",
        nutritionalSummary: "Not edible. No nutritional value.",
        nutrients: [],
        healthBenefits: [
          "Primary benefit: learning to avoid it to prevent severe dermatitis",
          "Educational value for plant safety awareness",
        ],
      },
      {
        id: 43,
        commonName: "Wild Parsnip",
        emoji: "⚠️",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/b/b7/PastinakePflanzegeerntet.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/b8/Parsnip_flowering_second_year%2C_June_2016.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/e/ed/PastinacaSativa_Mosbo6.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/ae/Pastinaca_sativa_Bl%C3%BCten.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/9/9d/Pastinaca_sativa_001.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/0/04/Pastinaca_sativa_002.JPG"
        ],
        scientificName: "Pastinaca sativa",
        family: "Apiaceae",
        description:
          "A plant with yellow umbrella-like flowers and a dangerous sap that causes phototoxic burns when exposed to sunlight.",
        season: "Summer",
        habitat: "Roadsides, fields, ditches, open disturbed land",
        difficulty: "Hazard",
        tags: ["Toxic Sap", "Phototoxic", "Do Not Touch", "Invasive"],
        identifyingFeatures: [
          "Yellow umbrella-shaped flower clusters (similar to Queen Anne's lace but yellow)",
          "Grooved, hollow stems",
          "Leaves pinnately divided, similar to cultivated parsnip",
          "Common in tall roadside vegetation",
        ],
        lookAlikes:
          "Can be confused with golden alexanders or other yellow Apiaceae. Key risk: resembles edible parsnip but wild form is dangerous.",
        edibleParts: ["Root (technically edible but NOT recommended)"],
        harvestingNotes:
          "Do NOT harvest. Sap causes chemical burns (phytophotodermatitis). Burns worsen with sunlight.",
        culinaryUses: [],
        recipes: [],
        medicinalUses: [],
        preparationMethods: [],
        safetyNotes:
          "VERY dangerous. Contact with sap + sunlight causes blistering burns. Avoid cutting, mowing, or handling without full protection.",
        nutritionalSummary:
          "Not recommended as food despite being related to cultivated parsnip.",
        nutrients: [],
        healthBenefits: [
          "Only benefit is safety education about phototoxic plants",
          "Useful for teaching Apiaceae family caution",
        ],
      },
      {
        id: 44,
        commonName: "Pokeweed",
        emoji: "🧪",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/e/e6/Phytolacca_americana_cluster_-_single.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pokeweed_bush_in_Northumberland_County%2C_Pennsylvania.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/3/3a/American_pokeweed_%28lat._Phytolacca_americana%29.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pokeberries.png",
          "https://upload.wikimedia.org/wikipedia/commons/2/27/Mature_Pokeweed.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/72/Phytolacca_americana_004.JPG",
          "https://upload.wikimedia.org/wikipedia/commons/0/06/Phytolacca-americana-berries.JPG"
        ],
        scientificName: "Phytolacca americana",
        family: "Phytolaccaceae",
        description:
          "A tall perennial with toxic leaves, stems, roots, and berries. Traditionally eaten only with complex multi-boil preparation, not for beginners.",
        season: "Spring to Fall",
        habitat: "Disturbed soils, edges, fencerows, fields",
        difficulty: "Expert",
        tags: ["Toxic", "Advanced", "Not for Beginners", "Powerful"],
        identifyingFeatures: [
          "Tall plant with smooth reddish-purple stems",
          "Large alternate leaves",
          "Green berries that ripen to dark purple-black clusters",
          "Thick white taproot (toxic)",
        ],
        lookAlikes:
          "Young shoots can be confused with asparagus (dangerous confusion). Berries resemble elderberry clusters (also dangerous).",
        edibleParts: [
          "Young shoots (ONLY with expert preparation)",
          "Leaves (ONLY with expert multi-boil method)",
        ],
        harvestingNotes:
          "Best practice: DO NOT HARVEST. Improperly prepared pokeweed can cause severe illness. Roots and berries are highly toxic.",
        culinaryUses: [
          "Traditional 'poke sallet' after multiple boiling and water changes (not recommended for beginners)",
        ],
        recipes: ["Traditional poke sallet (expert-level only)"],
        medicinalUses: [
          "Historically used in tiny doses for lymphatic issues, but extremely risky and not recommended without trained supervision",
        ],
        preparationMethods: [
          "Young shoots parboiled with 2–3 complete water changes (expert preparation required)",
        ],
        safetyNotes:
          "ALL parts poisonous. Berries especially dangerous for children. Root is the most toxic. Never consume unless you fully understand the preparation.",
        nutritionalSummary: "Not used for nutrition due to toxicity.",
        nutrients: [],
        healthBenefits: [
          "Educational cautionary example",
          "Teaches users to respect potent wild plants",
          "Shows the difference between historical use and modern safety standards",
        ],
      },
      {
        id: 45,
        commonName: "Japanese Knotweed",
        emoji: "🎋",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/0/0a/Reynoutria_japonica_in_Brastad_1.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/2/26/WEEDS054.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/c/c0/Caersws_headg_row1.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/ba/Knotweed054.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/74/Fallopia_japonica_20250620_135754.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/3/31/Japanese-knotweed-philadelphia.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/5/50/Fallopia_japonica_20250620_203130.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/b/bf/Knotweed.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/1/1a/Japanese_knotweed.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/7/7e/Reynoutria_japonica_15-p.bot-polygo.cuspi-23.jpg"
        ],
        scientificName: "Reynoutria japonica (Fallopia japonica)",
        family: "Polygonaceae",
        description:
          "A highly invasive perennial with bamboo-like stems and heart-shaped leaves. Young shoots are edible, and the plant contains medicinal compounds like resveratrol.",
        season: "Spring (edible shoots), Summer to Fall (full growth)",
        habitat:
          "Roadsides, riverbanks, disturbed soil, vacant lots, urban edges",
        difficulty: "Intermediate",
        tags: ["Edible (Young)", "Invasive", "Medicinal", "Resilience"],
        identifyingFeatures: [
          "Hollow, bamboo-like stems with distinct nodes",
          "Alternate, broad, heart-shaped leaves with flat bases",
          "In late summer, clusters of small white flowers",
          "Forms tall, dense thickets 6–10 feet high",
        ],
        lookAlikes:
          "Can resemble young bamboo or giant knotweed. Key difference: Japanese knotweed has zig-zag stem growth and heart-shaped leaves.",
        edibleParts: ["Young shoots (spring)", "Young leaves (very early)"],
        harvestingNotes:
          "Harvest shoots under 12 inches tall for best texture and flavor. Older plants turn tough and acidic.",
        culinaryUses: [
          "Cooked like rhubarb in pies and jams",
          "Added to soups for tart flavor",
          "Pickled knotweed shoots",
          "Sauces and syrups for desserts",
        ],
        recipes: [
          "Knotweed crisp (like rhubarb crisp)",
          "Knotweed jam",
          "Pickled knotweed shoots",
          "Knotweed compote for pancakes",
        ],
        medicinalUses: [
          "Rich in resveratrol, supporting heart health and antioxidant activity",
          "Traditional use for Lyme protocol blends",
          "Anti-inflammatory and circulatory support",
          "Root used in herbal medicine (advanced use)",
        ],
        preparationMethods: [
          "Shoots steamed or cooked like rhubarb",
          "Chopped and simmered in jams or sauces",
          "Roots tinctured by experienced herbalists (advanced)",
        ],
        safetyNotes:
          "Young shoots are safe when cooked. Avoid root harvesting in contaminated soils. Can accumulate pollutants along roadsides.",
        nutritionalSummary:
          "High in vitamin C, antioxidants, and resveratrol (especially roots). Young shoots provide tart flavor similar to rhubarb.",
        nutrients: [
          { name: "Vitamin C", amount: "High" },
          { name: "Resveratrol", amount: "Very High (in roots)" },
          { name: "Antioxidants", amount: "High" },
          { name: "Minerals", amount: "Moderate" },
        ],
        healthBenefits: [
          "Rich antioxidant support",
          "Potential support for cardiovascular health",
          "Traditional adjunct herb in complex protocols",
          "Edible invasive promoting ecological resilience",
        ],
      },
    ],

    // Carousel state management
    carouselState: {},
    fullscreenImage: null,

    // Initialize carousel for a weed
    initCarousel(weedId) {
      if (!this.carouselState[weedId]) {
        this.carouselState[weedId] = {
          currentIndex: 0,
          autoplay: true,
          intervalId: null,
        };
      }
    },

    // Carousel navigation methods
    nextImage(weedId) {
      const carousel = this.carouselState[weedId];
      const weed = this.weeds.find((w) => w.id === weedId);
      if (weed && weed.images) {
        carousel.currentIndex =
          (carousel.currentIndex + 1) % weed.images.length;
      }
    },
    prevImage(weedId) {
      const carousel = this.carouselState[weedId];
      const weed = this.weeds.find((w) => w.id === weedId);
      if (weed && weed.images) {
        carousel.currentIndex =
          (carousel.currentIndex - 1 + weed.images.length) % weed.images.length;
      }
    },
    goToImage(weedId, index) {
      const carousel = this.carouselState[weedId];
      if (carousel) {
        carousel.currentIndex = index;
      }
    },

    // Autoplay control
    startAutoplay(weedId) {
      const carousel = this.carouselState[weedId];
      if (carousel && carousel.autoplay && !carousel.intervalId) {
        carousel.intervalId = setInterval(() => {
          this.nextImage(weedId);
        }, 3000);
      }
    },
    stopAutoplay(weedId) {
      const carousel = this.carouselState[weedId];
      if (carousel && carousel.intervalId) {
        clearInterval(carousel.intervalId);
        carousel.intervalId = null;
      }
    },

    // Fullscreen image viewer
    openFullscreen(weedId, imageIndex) {
      this.fullscreenImage = {
        weedId: weedId,
        currentIndex: imageIndex,
        show: true,
      };
      document.body.style.overflow = "hidden";
    },
    closeFullscreen() {
      this.fullscreenImage = null;
      document.body.style.overflow = "auto";
    },
    nextFullscreenImage() {
      if (this.fullscreenImage) {
        const weed = this.weeds.find(
          (w) => w.id === this.fullscreenImage.weedId,
        );
        if (weed && weed.images) {
          this.fullscreenImage.currentIndex =
            (this.fullscreenImage.currentIndex + 1) % weed.images.length;
        }
      }
    },
    prevFullscreenImage() {
      if (this.fullscreenImage) {
        const weed = this.weeds.find(
          (w) => w.id === this.fullscreenImage.weedId,
        );
        if (weed && weed.images) {
          this.fullscreenImage.currentIndex =
            (this.fullscreenImage.currentIndex - 1 + weed.images.length) %
            weed.images.length;
        }
      }
    },

    // Keyboard navigation for fullscreen viewer
    handleKeydown(event) {
      if (this.fullscreenImage?.show) {
        if (event.key === "Escape") {
          this.closeFullscreen();
        } else if (event.key === "ArrowRight") {
          this.nextFullscreenImage();
        } else if (event.key === "ArrowLeft") {
          this.prevFullscreenImage();
        }
      }
    },

    // Initialize keyboard listeners
    init() {
      document.addEventListener("keydown", (e) => this.handleKeydown(e));
      return {
        // Cleanup on component destroy
        destroy() {
          document.removeEventListener("keydown", (e) => this.handleKeydown(e));
        },
      };
    },

    questions: {
      identification: [
        {
          text: "Which weed has bright yellow flowers that turn into puffballs of seeds and deeply toothed leaves?",
          options: ["Plantain", "Dandelion", "Chickweed", "Curly Dock"],
          correctAnswer: "Dandelion",
          explanation:
            "Dandelion has bright yellow flowers that become white puffballs, with deeply toothed leaves.",
        },
        {
          text: "Which plant has broad leaves with parallel veins and is famous as a natural bandage plant?",
          options: [
            "Stinging Nettle",
            "Plantain",
            "Purslane",
            "Lambs Quarters",
          ],
          correctAnswer: "Plantain",
          explanation:
            "Broadleaf Plantain has thick parallel veins and is used as a spit-poultice for stings.",
        },
        {
          text: "Which plant must always be handled with gloves until cooked due to stinging hairs?",
          options: [
            "Wood Sorrel",
            "Stinging Nettle",
            "Purslane",
            "Shepherd's Purse",
          ],
          correctAnswer: "Stinging Nettle",
          explanation:
            "Stinging hairs inject formic acid and cause irritation.",
        },
        {
          text: "Which plant has heart-shaped seed pods resembling tiny purses?",
          options: ["Shepherd's Purse", "Ground Ivy", "Dead Nettle", "Mallow"],
          correctAnswer: "Shepherd's Purse",
          explanation: "Its triangular pods look like shepherds’ pouches.",
        },
        {
          text: "Which plant has feathery leaves and flat clusters of white flowers, and was named after Achilles?",
          options: ["Yarrow", "Mugwort", "Wild Mustard", "Foxtail"],
          correctAnswer: "Yarrow",
          explanation:
            "Yarrow is named after Achilles and has feathery leaves.",
        },
        {
          text: "Which plant has cone-shaped yellow-green flowers that smell like pineapple when crushed?",
          options: ["Pineapple Weed", "Chicory", "Red Clover", "Cat's Ear"],
          correctAnswer: "Pineapple Weed",
          explanation: "Its crushed flowers smell strongly of pineapple.",
        },
        {
          text: "Which plant has three-part leaves with white crescent markings?",
          options: [
            "Wood Sorrel",
            "White Clover",
            "Ground Ivy",
            "Lambs Quarters",
          ],
          correctAnswer: "White Clover",
          explanation: "White Clover has pale crescent marks on each leaflet.",
        },
        {
          text: "Which plant has bright blue daisy-like flowers that open in the morning?",
          options: ["Chicory", "Dead Nettle", "Ground Ivy", "Violet"],
          correctAnswer: "Chicory",
          explanation: "Chicory's blue flowers close by afternoon.",
        },
        {
          text: "Which succulent weed has reddish stems and tiny yellow flowers?",
          options: ["Purslane", "Chickweed", "Plantain", "Dead Nettle"],
          correctAnswer: "Purslane",
          explanation: "Purslane has fleshy leaves and red stems.",
        },
        {
          text: "Which creeping plant forms mats and is often called Creeping Charlie?",
          options: ["Ground Ivy", "Mallow", "Yarrow", "Mustard"],
          correctAnswer: "Ground Ivy",
          explanation: "Ground Ivy spreads via creeping runners.",
        },

        {
          text: "Which plant has three heart-shaped leaflets and a lemony sour taste?",
          options: ["Wood Sorrel", "White Clover", "Red Clover", "Plantain"],
          correctAnswer: "Wood Sorrel",
          explanation: "Wood sorrel has heart-shaped leaves and tastes lemony.",
        },
        {
          text: "Which grass has bristly seed heads resembling a fox’s tail?",
          options: ["Foxtail", "Chicory", "Yarrow", "Plantain"],
          correctAnswer: "Foxtail",
          explanation: "Foxtail grasses have bristly cylindrical seed heads.",
        },
        {
          text: "Which plant grows in early spring with purple, blue, or white five-petaled flowers?",
          options: ["Wild Violet", "Mallow", "Red Clover", "Dead Nettle"],
          correctAnswer: "Wild Violet",
          explanation:
            "Wild violets have heart-shaped leaves and 5-petaled flowers.",
        },
        {
          text: "Which weed has square stems and clings to clothing using tiny hooks?",
          options: ["Cleavers", "Plantain", "Mallow", "Chickweed"],
          correctAnswer: "Cleavers",
          explanation: "Cleavers has whorled leaves and sticky hooks.",
        },
        {
          text: "Which tall plant opens its yellow flowers at dusk?",
          options: ["Common Evening Primrose", "Yarrow", "Mugwort", "Chicory"],
          correctAnswer: "Common Evening Primrose",
          explanation: "Evening primrose blooms at night.",
        },
        {
          text: "Which huge-leafed weed produces burrs that inspired Velcro?",
          options: ["Common Burdock", "Thistle", "Mallow", "Wild Mustard"],
          correctAnswer: "Common Burdock",
          explanation: "Burdock burrs stick strongly to fur and fabric.",
        },

        {
          text: "Which plant has purple triangular leaves and fuzzy flower whorls but does NOT sting?",
          options: [
            "Dead Nettle",
            "Stinging Nettle",
            "Chickweed",
            "Garlic Mustard",
          ],
          correctAnswer: "Dead Nettle",
          explanation:
            "Dead nettle resembles nettle but has no stinging hairs.",
        },
        {
          text: "Which early spring weed has tiny white star-shaped flowers?",
          options: ["Chickweed", "Purslane", "Ground Ivy", "Red Clover"],
          correctAnswer: "Chickweed",
          explanation: "Chickweed has a single line of hairs on its stem.",
        },
        {
          text: "Which plant has deeply lobed leaves forming a basal rosette with a taproot?",
          options: ["Curly Dock", "Yarrow", "Mallow", "Ground Ivy"],
          correctAnswer: "Curly Dock",
          explanation: "Curly dock leaves have wavy margins.",
        },
        {
          text: "Which weed grows tall with pink-purple flower spikes and reddish stems?",
          options: ["Pokeweed", "Burdock", "Mugwort", "Wild Mustard"],
          correctAnswer: "Pokeweed",
          explanation: "Pokeweed has red-purple stems and dark berries.",
        },
        {
          text: "Which plant has bamboo-like hollow stems and forms dense invasive thickets?",
          options: ["Japanese Knotweed", "Foxtail", "Cat’s Ear", "Burdock"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Knotweed grows from aggressive rhizomes.",
        },

        {
          text: "Which plant has fine fern-like leaves and pungent herbal scent?",
          options: ["Mugwort", "Yarrow", "Plantain", "Chicory"],
          correctAnswer: "Mugwort",
          explanation: "Mugwort has silvery undersides and aromatic leaves.",
        },
        {
          text: "Which plant has tiny yellow flowers in umbrella-like clusters and causes skin burns?",
          options: ["Wild Parsnip", "Yarrow", "Queen Anne's Lace", "Mugwort"],
          correctAnswer: "Wild Parsnip",
          explanation: "Wild parsnip sap causes phototoxicity.",
        },
        {
          text: "Which plant has purple tubular flowers and square stems, common in lawns?",
          options: ["Henbit", "Ground Ivy", "Dead Nettle", "Cat’s Ear"],
          correctAnswer: "Henbit",
          explanation: "Henbit has scalloped leaves but stands upright.",
        },
        {
          text: "Which tall plant has fuzzy leaves and a huge vertical flower spike?",
          options: ["Mullein", "Burdock", "Yarrow", "Mallow"],
          correctAnswer: "Mullein",
          explanation: "Mullein forms a tall candlestick-like stalk.",
        },
        {
          text: "Which plant has umbrella-shaped white flowers with a purple center?",
          options: [
            "Queen Anne's Lace",
            "Wild Parsnip",
            "Yarrow",
            "Garlic Mustard",
          ],
          correctAnswer: "Queen Anne's Lace",
          explanation: "Also called wild carrot; often confused with hemlock.",
        },

        {
          text: "Which creeping weed produces small yellow flower heads and grows in dry lawns?",
          options: ["Black Medic", "White Clover", "Ground Ivy", "Mugwort"],
          correctAnswer: "Black Medic",
          explanation: "Black medic has yellow flowers and trifoliate leaves.",
        },
        {
          text: "Which plant has clusters of tiny white flowers and produces strong carrot scent when crushed?",
          options: ["Queen Anne's Lace", "Poison Hemlock", "Yarrow", "Chicory"],
          correctAnswer: "Queen Anne's Lace",
          explanation:
            "Its root smells like carrot, unlike poisonous lookalikes.",
        },
        {
          text: "Which plant has reddish-purple stems, massive leaves, and spiky burs?",
          options: [
            "Common Burdock",
            "Canada Thistle",
            "Wild Mustard",
            "Ground Ivy",
          ],
          correctAnswer: "Common Burdock",
          explanation: "Burdock leaves are huge and velvety.",
        },
        {
          text: "Which weed has tall slender stems topped with cylindrical seed heads?",
          options: ["Plantain (narrowleaf)", "Foxtail", "Chicory", "Mugwort"],
          correctAnswer: "Plantain (narrowleaf)",
          explanation: "Narrowleaf plantain has tall grass-like leaves.",
        },

        {
          text: "Which plant grows tall with spiny leaves and purple flower heads?",
          options: ["Canada Thistle", "Burdock", "Yellow Dock", "Yarrow"],
          correctAnswer: "Canada Thistle",
          explanation: "Canada thistle spreads aggressively via rhizomes.",
        },
        {
          text: "Which aromatic herb has silvery, deeply cut leaves and is used in smudging?",
          options: ["Mugwort", "Yarrow", "Plantain", "Dead Nettle"],
          correctAnswer: "Mugwort",
          explanation: "Mugwort has a strong herbal scent.",
        },
        {
          text: "Which weed has small white cross-shaped flowers typical of the mustard family?",
          options: ["Garlic Mustard", "Wild Mustard", "Chicory", "Plantain"],
          correctAnswer: "Garlic Mustard",
          explanation: "Crushing the leaf releases a garlic smell.",
        },

        {
          text: "Which tall, prickly plant has purple thistle-like flowers?",
          options: ["Canada Thistle", "Burdock", "Yarrow", "Wild Mustard"],
          correctAnswer: "Canada Thistle",
          explanation: "A major invasive; sharp spines line the leaves.",
        },

        {
          text: "Which spring plant has purple tops and grows in dense patches in lawns?",
          options: ["Dead Nettle", "Henbit", "Ground Ivy", "Mallow"],
          correctAnswer: "Dead Nettle",
          explanation: "Dead nettle forms purple pyramids of leaves.",
        },

        {
          text: "Which plant has a zig-zag stem pattern and heart-shaped leaves on alternate sides?",
          options: ["Japanese Knotweed", "Mallow", "Yarrow", "Curly Dock"],
          correctAnswer: "Japanese Knotweed",
          explanation: "The zig-zag pattern distinguishes knotweed.",
        },

        {
          text: "Which plant has feather-like leaves but produces tall spikes of yellow flowers?",
          options: ["Mullein", "Yarrow", "Mugwort", "Foxtail"],
          correctAnswer: "Mullein",
          explanation: "Mullein's fuzzy leaves make it unmistakable.",
        },

        {
          text: "Which low-growing plant has spoon-shaped leaves forming a rosette?",
          options: ["Broadleaf Plantain", "Chickweed", "Dead Nettle", "Mallow"],
          correctAnswer: "Broadleaf Plantain",
          explanation: "Plantain is common along footpaths and trails.",
        },

        {
          text: "Which plant produces tiny yellow cruciform flowers and spicy-tasting leaves?",
          options: ["Wild Mustard", "Garlic Mustard", "Chicory", "Dock"],
          correctAnswer: "Wild Mustard",
          explanation: "Wild mustard leaves and pods have a spicy bite.",
        },

        {
          text: "Which plant forms tall multi-branched stems with bluish-purple flowers and milky sap?",
          options: ["Wild Lettuce", "Chicory", "Dead Nettle", "Ground Ivy"],
          correctAnswer: "Wild Lettuce",
          explanation:
            "Wild lettuce has milky latex used traditionally as a sedative.",
        },

        {
          text: "Which early spring weed grows as a low rosette with round leaves and purple flowers on short stalks?",
          options: ["Henbit", "Dead Nettle", "Ground Ivy", "Chickweed"],
          correctAnswer: "Henbit",
          explanation:
            "Henbit leaves are scalloped and sit directly on the stem.",
        },

        {
          text: "Which plant has large triangular leaves with long petioles and produces a lemony flavor?",
          options: [
            "Wood Sorrel",
            "Curly Dock",
            "Lambs Quarters",
            "Wild Mustard",
          ],
          correctAnswer: "Wood Sorrel",
          explanation: "Its oxalic acid gives a refreshing taste.",
        },

        {
          text: "Which plant smells strongly of garlic when crushed and has small white flowers?",
          options: ["Garlic Mustard", "Yarrow", "Chickweed", "Plantain"],
          correctAnswer: "Garlic Mustard",
          explanation: "A highly invasive herb that spreads rapidly.",
        },

        {
          text: "Which common weed forms a tall stalk with spherical seed heads resembling tiny brushes?",
          options: [
            "Plantain (narrowleaf)",
            "Foxtail",
            "Chicory",
            "Curly Dock",
          ],
          correctAnswer: "Plantain (narrowleaf)",
          explanation: "Its seed heads extend above grass height.",
        },

        {
          text: "Which plant grows aggressively in waterways and can regrow from tiny root fragments?",
          options: ["Japanese Knotweed", "Curly Dock", "Burdock", "Chicory"],
          correctAnswer: "Japanese Knotweed",
          explanation: "One of the most resilient invasive plants.",
        },

        {
          text: "Which plant forms a basal rosette in its first year with long spear-shaped leaves and produces edible roots?",
          options: ["Common Evening Primrose", "Mullein", "Yarrow", "Chicory"],
          correctAnswer: "Common Evening Primrose",
          explanation: "Its roots are edible when cooked.",
        },

        {
          text: "Which aromatic weed has purple tubular flowers and round scalloped leaves but grows horizontally?",
          options: ["Ground Ivy", "Henbit", "Dead Nettle", "Chickweed"],
          correctAnswer: "Ground Ivy",
          explanation: "Creeping growth pattern distinguishes it.",
        },

        {
          text: "Which nutritious weed has dusty-looking leaves and a powdery underside?",
          options: ["Lambs Quarters", "Curly Dock", "Yarrow", "Chickweed"],
          correctAnswer: "Lambs Quarters",
          explanation: "Leaves appear frosted due to a powdery coating.",
        },

        {
          text: "Which weed has a reddish central stem and produces dark purple berries on pink stalks?",
          options: ["Pokeweed", "Dead Nettle", "Red Clover", "Mallow"],
          correctAnswer: "Pokeweed",
          explanation: "Pokeweed is highly toxic unless expertly processed.",
        },

        {
          text: "Which plant produces tiny purple or blue flowers with white centers and heart-shaped leaves?",
          options: ["Wild Violet", "Henbit", "Chickweed", "Ground Ivy"],
          correctAnswer: "Wild Violet",
          explanation: "Common in lawns during spring.",
        },

        {
          text: "Which cold-loving green forms lush mats and has juicy stems that snap easily?",
          options: ["Chickweed", "Purslane", "Plantain", "Lambs Quarters"],
          correctAnswer: "Chickweed",
          explanation: "Chickweed is tender and cool-season.",
        },

        {
          text: "Which tall plant smells earthy, bitter, and is often used for smudging or as a dream herb?",
          options: ["Mugwort", "Yarrow", "Plantain", "Red Clover"],
          correctAnswer: "Mugwort",
          explanation: "Aromatic with silvery undersides.",
        },

        {
          text: "Which woodland plant has large arrow-like leaves and blooms tall yellow spires?",
          options: ["Mullein", "Dock", "Yarrow", "Chicory"],
          correctAnswer: "Mullein",
          explanation: "Second-year plants grow a tall yellow spike.",
        },

        {
          text: "Which common roadside plant blooms with bright blue flowers along tall stems?",
          options: ["Chicory", "Foxtail", "Dead Nettle", "Mallow"],
          correctAnswer: "Chicory",
          explanation: "Chicory flowers open early and fade by afternoon.",
        },
      ],
      edible: [
        {
          text: "Which succulent weed is one of the highest plant sources of omega-3 fatty acids?",
          options: ["Purslane", "Chickweed", "Plantain", "Mallow"],
          correctAnswer: "Purslane",
          explanation: "Purslane contains abundant alpha-linolenic acid.",
        },
        {
          text: "Which plant's roots can be roasted to make a caffeine-free coffee substitute?",
          options: ["Dandelion", "Chicory", "Yellow Dock", "All of the above"],
          correctAnswer: "All of the above",
          explanation: "All three roots can be roasted for herbal 'coffee.'",
        },

        {
          text: "Which plant's young seed pods are called 'cheeses' and are eaten raw?",
          options: ["Mallow", "Dead Nettle", "Chickweed", "Ground Ivy"],
          correctAnswer: "Mallow",
          explanation: "Mallow seed pods resemble tiny cheeses.",
        },
        {
          text: "Which plant's flowers smell like pineapple and make great tea?",
          options: ["Pineapple Weed", "Yarrow", "Red Clover", "Garlic Mustard"],
          correctAnswer: "Pineapple Weed",
          explanation: "The flowers release pineapple aroma.",
        },
        {
          text: "Which plant's seeds can be eaten like quinoa or ground into flour?",
          options: ["Lambs Quarters", "Plantain", "Chicory", "Dock"],
          correctAnswer: "Lambs Quarters",
          explanation: "A relative of quinoa with edible seeds.",
        },
        {
          text: "Which plant must always be cooked before eating to neutralize its sting?",
          options: ["Stinging Nettle", "Purslane", "Dead Nettle", "Plantain"],
          correctAnswer: "Stinging Nettle",
          explanation: "Cooking destroys the stinging hairs.",
        },

        {
          text: "Which wild plant has a lemony taste due to oxalic acid?",
          options: ["Wood Sorrel", "Chicory", "Garlic Mustard", "Ground Ivy"],
          correctAnswer: "Wood Sorrel",
          explanation: "Refreshing but should be eaten moderately.",
        },

        {
          text: "Which flowering plant makes a sweet syrup and has phytoestrogens?",
          options: ["Red Clover", "Dandelion", "Dead Nettle", "Mallow"],
          correctAnswer: "Red Clover",
          explanation: "Red clover blossoms are edible and medicinal.",
        },

        {
          text: "Which mild weed with juicy stems is excellent as a raw salad green?",
          options: ["Chickweed", "Plantain", "Curly Dock", "Mallow"],
          correctAnswer: "Chickweed",
          explanation: "Tender and cooling.",
        },

        {
          text: "Which invasive plant tastes like garlic and makes excellent pesto?",
          options: [
            "Garlic Mustard",
            "Wild Mustard",
            "Ground Ivy",
            "Dead Nettle",
          ],
          correctAnswer: "Garlic Mustard",
          explanation: "Harvesting helps control the invasive species.",
        },

        {
          text: "Which clover produces edible white flower heads usable in tea?",
          options: ["White Clover", "Red Clover", "Foxtail", "Chicory"],
          correctAnswer: "White Clover",
          explanation: "Mild flavor and high in minerals.",
        },

        {
          text: "Which weed’s taproot is eaten as gobo in Japanese cuisine?",
          options: ["Common Burdock", "Yellow Dock", "Chicory", "Curly Dock"],
          correctAnswer: "Common Burdock",
          explanation: "Burdock root is a valued vegetable.",
        },

        {
          text: "Which wild plant produces edible roots in its first year and edible buds in the second?",
          options: ["Common Evening Primrose", "Chicory", "Plantain", "Yarrow"],
          correctAnswer: "Common Evening Primrose",
          explanation: "Roots taste like mild radish when cooked.",
        },

        {
          text: "Which mustard-family plant has spicy seed pods eaten raw?",
          options: [
            "Wild Mustard",
            "Garlic Mustard",
            "Shepherd's Purse",
            "Chickweed",
          ],
          correctAnswer: "Wild Mustard",
          explanation: "Pods taste peppery and crisp.",
        },

        {
          text: "Which spring flower is edible and can be candied?",
          options: ["Wild Violet", "Dead Nettle", "Red Clover", "Mallow"],
          correctAnswer: "Wild Violet",
          explanation: "Violet blossoms are delicate and sweet.",
        },

        {
          text: "Which weed has edible leaves and stems but becomes bitter as it matures?",
          options: ["Lambs Quarters", "Garlic Mustard", "Mallow", "Yarrow"],
          correctAnswer: "Garlic Mustard",
          explanation: "Best harvested very young.",
        },

        {
          text: "Which plant produces edible lemon-flavored seed pods useful as seasoning?",
          options: [
            "Shepherd's Purse",
            "Wild Mustard",
            "Plantain",
            "Dead Nettle",
          ],
          correctAnswer: "Shepherd's Purse",
          explanation: "The pods have a peppery kick.",
        },

        {
          text: "Which edible plant has starchy roots once used as a famine food?",
          options: ["Curly Dock", "Chicory", "Plantain", "Foxtail"],
          correctAnswer: "Curly Dock",
          explanation: "Dock roots must be carefully prepared.",
        },

        {
          text: "Which weed produces edible flower heads that can be fried like fritters?",
          options: ["Red Clover", "Mallow", "Yarrow", "Henbit"],
          correctAnswer: "Red Clover",
          explanation: "Clover blossoms make a sweet fritter.",
        },

        {
          text: "Which plant has edible shoots in spring that resemble rhubarb when cooked?",
          options: ["Japanese Knotweed", "Curly Dock", "Chicory", "Pokeweed"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Young shoots are tart and lemony.",
        },

        {
          text: "Which common weed’s entire plant is edible including the root, leaves, and flowers?",
          options: ["Dandelion", "Chickweed", "Plantain", "Foxtail"],
          correctAnswer: "Dandelion",
          explanation: "One of the most versatile wild edibles.",
        },

        {
          text: "Which plant produces edible seeds used as a trail-snack by many foragers?",
          options: ["Plantain", "Wild Mustard", "Lambs Quarters", "Mallow"],
          correctAnswer: "Plantain",
          explanation: "Its tiny seeds are edible and nutritious.",
        },

        {
          text: "Which weed produces edible shoots with a tart citrus-like flavor but becomes woody fast?",
          options: ["Japanese Knotweed", "Curly Dock", "Burdock", "Chicory"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Harvest before 12 inches tall.",
        },

        {
          text: "Which weed has edible young leaves that taste similar to spinach?",
          options: ["Lambs Quarters", "Mallow", "Plantain", "Dead Nettle"],
          correctAnswer: "Lambs Quarters",
          explanation: "High in protein and minerals.",
        },

        {
          text: "Which wild edible contains mucilage that thickens soups?",
          options: ["Mallow", "Chickweed", "Plantain", "Curly Dock"],
          correctAnswer: "Mallow",
          explanation: "Mallow has okra-like mucilage.",
        },

        {
          text: "Which spring plant makes a refreshing lemonade-like beverage?",
          options: ["Wood Sorrel", "Chicory", "Red Clover", "Mallow"],
          correctAnswer: "Wood Sorrel",
          explanation: "Its oxalic acid makes a tart drink.",
        },

        {
          text: "Which edible plant produces sweet nectar that children often suck from its flowers?",
          options: ["Red Clover", "White Clover", "Violet", "Henbit"],
          correctAnswer: "Red Clover",
          explanation: "Red clover blossoms contain sweet nectar.",
        },

        {
          text: "Which plant produces edible yellow flowers that can be fried as fritters?",
          options: ["Dandelion", "Chickweed", "Curly Dock", "Ground Ivy"],
          correctAnswer: "Dandelion",
          explanation: "Dandelion flowers make excellent fritters.",
        },

        {
          text: "Which wild plant produces edible roots that taste earthy and slightly bitter when roasted?",
          options: ["Chicory", "Dandelion", "Curly Dock", "All of the above"],
          correctAnswer: "All of the above",
          explanation: "All three are used for roasted coffee substitutes.",
        },

        {
          text: "Which edible green grows best in hot weather and fills sidewalk cracks?",
          options: ["Purslane", "Chickweed", "Lambs Quarters", "Plantain"],
          correctAnswer: "Purslane",
          explanation: "A summer-loving succulent.",
        },

        {
          text: "Which plant produces edible flower buds that can be pickled like capers?",
          options: ["Dandelion", "Chicory", "Shepherd's Purse", "Henbit"],
          correctAnswer: "Dandelion",
          explanation: "Dandelion buds make great pickled capers.",
        },

        {
          text: "Which edible green is mild, cooling, and excellent for spring salads?",
          options: ["Chickweed", "Mallow", "Plantain", "Burdock"],
          correctAnswer: "Chickweed",
          explanation: "Thrives in cool moist weather.",
        },
      ],
      medicinal: [
        {
          text: "Which herb is a famous wound healer named after Achilles?",
          options: ["Yarrow", "Plantain", "Mugwort", "Dead Nettle"],
          correctAnswer: "Yarrow",
          explanation: "Used traditionally to stop bleeding.",
        },
        {
          text: "Which weed is used as a poultice for bee stings and splinters?",
          options: ["Plantain", "Chickweed", "Mallow", "Curly Dock"],
          correctAnswer: "Plantain",
          explanation: "Plantain draws out infection and venom.",
        },
        {
          text: "Which plant is used as a dream-enhancing herb?",
          options: ["Mugwort", "Chicory", "Dead Nettle", "Yarrow"],
          correctAnswer: "Mugwort",
          explanation: "Used in teas and pillow stuffing.",
        },
        {
          text: "Which herb is an astringent that can stop bleeding?",
          options: ["Shepherd's Purse", "Yarrow", "Plantain", "Chickweed"],
          correctAnswer: "Shepherd's Purse",
          explanation: "Used historically to control bleeding.",
        },
        {
          text: "Which plant is high in mucilage and soothes digestion?",
          options: ["Mallow", "Chickweed", "Plantain", "Curly Dock"],
          correctAnswer: "Mallow",
          explanation: "Its gelatinous texture soothes tissues.",
        },

        {
          text: "Which weed is a natural diuretic called 'piss-a-bed'?",
          options: ["Dandelion", "Chicory", "Plantain", "Mullein"],
          correctAnswer: "Dandelion",
          explanation: "The French name 'pissenlit' means wet-the-bed.",
        },

        {
          text: "Which plant supports women’s health due to phytoestrogens?",
          options: ["Red Clover", "Mugwort", "Dead Nettle", "Yarrow"],
          correctAnswer: "Red Clover",
          explanation: "Contains beneficial isoflavones.",
        },

        {
          text: "Which weed makes a calming digestive tea?",
          options: ["Pineapple Weed", "Chickweed", "Lemon Balm", "Mint"],
          correctAnswer: "Pineapple Weed",
          explanation: "A mild sedative and digestive aid.",
        },
        {
          text: "Which cooling plant is used for hot, itchy skin?",
          options: ["Chickweed", "Mallow", "Plantain", "Dead Nettle"],
          correctAnswer: "Chickweed",
          explanation: "Used in salves for irritated skin.",
        },
        {
          text: "Which plant is a classic lymphatic tonic?",
          options: ["Cleavers", "Yarrow", "Mugwort", "Chickweed"],
          correctAnswer: "Cleavers",
          explanation: "Aids lymph flow and swollen glands.",
        },

        {
          text: "Which nutrient-dense herb is used for allergies and joint pain?",
          options: ["Stinging Nettle", "Dandelion", "Mallow", "Dead Nettle"],
          correctAnswer: "Stinging Nettle",
          explanation: "Rich in minerals and anti-inflammatory compounds.",
        },
        {
          text: "Which root is used for liver and blood purification?",
          options: ["Yellow Dock", "Dandelion", "Curly Dock", "Burdock"],
          correctAnswer: "Yellow Dock",
          explanation: "Has strong laxative and liver actions.",
        },
        {
          text: "Which burr-producing plant detoxifies the skin and liver?",
          options: ["Common Burdock", "Foxtail", "Chicory", "Canada Thistle"],
          correctAnswer: "Common Burdock",
          explanation: "Used for acne, eczema, and chronic skin issues.",
        },
        {
          text: "Which weed causes hay fever due to airborne pollen?",
          options: ["Common Ragweed", "Goldenrod", "Yarrow", "Red Clover"],
          correctAnswer: "Common Ragweed",
          explanation: "Wind-pollinated and highly allergenic.",
        },

        {
          text: "Which gentle plant soothes irritated lungs and throat?",
          options: ["Wild Violet", "Mallow", "Plantain", "Dead Nettle"],
          correctAnswer: "Wild Violet",
          explanation: "Contains soothing mucilage.",
        },
        {
          text: "Which plant’s seeds produce GLA-rich oil for skin health?",
          options: [
            "Common Evening Primrose",
            "Red Clover",
            "Mugwort",
            "Yarrow",
          ],
          correctAnswer: "Common Evening Primrose",
          explanation: "Used for eczema, hormonal balance, etc.",
        },

        {
          text: "Which aromatic herb is used for smudging and clearing energy?",
          options: ["Mugwort", "Yarrow", "Plantain", "Curly Dock"],
          correctAnswer: "Mugwort",
          explanation: "Traditional ceremonial herb.",
        },

        {
          text: "Which herb is antiviral and used as an immune tonic?",
          options: ["Yarrow", "Mugwort", "Plantain", "Red Clover"],
          correctAnswer: "Yarrow",
          explanation: "Yarrow has broad antimicrobial actions.",
        },

        {
          text: "Which plant contains demulcent gel useful for coughs and sore throats?",
          options: ["Mallow", "Chickweed", "Plantain", "Curly Dock"],
          correctAnswer: "Mallow",
          explanation: "Its mucilage coats irritated tissues.",
        },

        {
          text: "Which herb is used to support lymph movement during illness?",
          options: ["Cleavers", "Yarrow", "Plantain", "Dead Nettle"],
          correctAnswer: "Cleavers",
          explanation: "A gentle lymphatic herb.",
        },

        {
          text: "Which weed is a powerful anti-inflammatory when cooked or dried?",
          options: [
            "Stinging Nettle",
            "Dandelion",
            "Chicory",
            "Garlic Mustard",
          ],
          correctAnswer: "Stinging Nettle",
          explanation: "Used for joint pain and allergies.",
        },

        {
          text: "Which detoxifying root is used in traditional blood purifying formulas?",
          options: [
            "Burdock Root",
            "Yellow Dock",
            "Dandelion Root",
            "All of the above",
          ],
          correctAnswer: "All of the above",
          explanation: "Each has a role in cleansing protocols.",
        },

        {
          text: "Which plant is used topically for cuts and minor wounds?",
          options: ["Plantain", "Yarrow", "Mallow", "Chickweed"],
          correctAnswer: "Plantain",
          explanation: "Astringent and antimicrobial.",
        },

        {
          text: "Which herb is used for enhanced dreaming and lucid states?",
          options: ["Mugwort", "Yarrow", "Red Clover", "Plantain"],
          correctAnswer: "Mugwort",
          explanation: "Used in ritual teas and smoke blends.",
        },

        {
          text: "Which plant has anti-allergy properties useful in spring?",
          options: ["Stinging Nettle", "Cleavers", "Red Clover", "Yarrow"],
          correctAnswer: "Stinging Nettle",
          explanation: "Nettle reduces histamine response.",
        },

        {
          text: "Which common weed strengthens the kidneys and is used as a diuretic?",
          options: ["Dandelion Leaf", "Yarrow", "Mallow", "Garlic Mustard"],
          correctAnswer: "Dandelion Leaf",
          explanation: "A mineral-rich diuretic that replenishes potassium.",
        },

        {
          text: "Which wild plant with purple flowers soothes irritated skin when applied as a poultice?",
          options: ["Wild Violet", "Red Clover", "Dead Nettle", "Chickweed"],
          correctAnswer: "Wild Violet",
          explanation: "Used historically for hot inflamed skin.",
        },

        {
          text: "Which large weed has roots used to support liver detoxification?",
          options: ["Common Burdock", "Curly Dock", "Chicory", "Yarrow"],
          correctAnswer: "Common Burdock",
          explanation: "Burdock root cleanses blood and skin.",
        },
      ],
      toxic: [
        {
          text: "Which plant causes severe burns when sap touches skin and sunlight hits it?",
          options: ["Wild Parsnip", "Mugwort", "Yarrow", "Chickweed"],
          correctAnswer: "Wild Parsnip",
          explanation: "Contains phototoxic furanocoumarins.",
        },

        {
          text: "Which plant contains urushiol and causes severe blistering rashes?",
          options: ["Poison Ivy", "Pokeweed", "Ground Ivy", "Dead Nettle"],
          correctAnswer: "Poison Ivy",
          explanation: "Urushiol causes dermatitis.",
        },

        {
          text: "Which plant is extremely toxic raw and traditionally requires multiple boilings?",
          options: ["Pokeweed", "Curly Dock", "Burdock", "Chicory"],
          correctAnswer: "Pokeweed",
          explanation: "All parts are poisonous if improperly prepared.",
        },

        {
          text: "Which weed is the main cause of late-summer allergies?",
          options: ["Common Ragweed", "Goldenrod", "Red Clover", "Yarrow"],
          correctAnswer: "Common Ragweed",
          explanation: "Produces huge amounts of airborne pollen.",
        },

        {
          text: "Which grass has barbed seed awns that can injure pets?",
          options: ["Foxtail", "Plantain", "Chicory", "Clover"],
          correctAnswer: "Foxtail",
          explanation: "Awns embed in skin and cause infection.",
        },

        {
          text: "Which plant should NEVER be burned because its smoke spreads toxic oils?",
          options: ["Poison Ivy", "Mullein", "Yarrow", "Dead Nettle"],
          correctAnswer: "Poison Ivy",
          explanation: "Burning can aerosolize urushiol.",
        },

        {
          text: "Which plant's purple berries are toxic and dangerous for children?",
          options: ["Pokeweed", "Red Clover", "Violet", "Chickweed"],
          correctAnswer: "Pokeweed",
          explanation: "Berries look edible but are poisonous.",
        },

        {
          text: "Which invasive plant looks safe but can become extremely acidic and unpleasant when mature?",
          options: ["Japanese Knotweed", "Curly Dock", "Chicory", "Plantain"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Older stems are too woody and sour.",
        },

        {
          text: "Which plant’s sap can remain active on clothing and still burn skin later?",
          options: ["Wild Parsnip", "Plantain", "Chicory", "Mallow"],
          correctAnswer: "Wild Parsnip",
          explanation: "Sap remains phototoxic when dried.",
        },

        {
          text: "Which toxic plant is sometimes mistaken for edible asparagus shoots?",
          options: ["Pokeweed", "Curly Dock", "Garlic Mustard", "Chickweed"],
          correctAnswer: "Pokeweed",
          explanation: "Young shoots resemble asparagus.",
        },

        {
          text: "Which plant can cause respiratory injury if burned, inhaled, or touched?",
          options: ["Poison Ivy", "Wild Parsnip", "Chicory", "Ground Ivy"],
          correctAnswer: "Poison Ivy",
          explanation: "Burning produces toxic smoke.",
        },

        {
          text: "Which toxic weed grows tall with reddish stems and fat poisonous roots?",
          options: ["Pokeweed", "Dock", "Yarrow", "Plantain"],
          correctAnswer: "Pokeweed",
          explanation: "Roots are especially dangerous.",
        },

        {
          text: "Which weed often grows with Goldenrod but is the REAL cause of allergies?",
          options: ["Ragweed", "Red Clover", "Mullein", "Chickweed"],
          correctAnswer: "Ragweed",
          explanation: "Goldenrod is insect-pollinated, not airborne.",
        },

        {
          text: "Which toxic plant forms huge woody thickets and regrows from root fragments?",
          options: ["Japanese Knotweed", "Yarrow", "Chicory", "Plantain"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Highly invasive and persistent.",
        },

        {
          text: "Which common-looking plant contains oxalates that can cause nausea if eaten in large quantities?",
          options: ["Yellow Dock", "Curly Dock", "Lambs Quarters", "Chickweed"],
          correctAnswer: "Yellow Dock",
          explanation: "Leaves must be cooked to reduce oxalates.",
        },

        {
          text: "Which plant’s juice can cause overheating and dizziness in sensitive individuals?",
          options: ["Mugwort", "Yarrow", "Chickweed", "Red Clover"],
          correctAnswer: "Mugwort",
          explanation: "Contains thujone in small amounts.",
        },

        {
          text: "Which plant’s mature seeds can harm livestock if ingested?",
          options: ["Foxtail", "Plantain", "White Clover", "Chickweed"],
          correctAnswer: "Foxtail",
          explanation: "Seeds can lodge in mouths and digestive tracts.",
        },

        {
          text: "Which herb’s leaves can cause dermatitis in some people due to volatile oils?",
          options: ["Yarrow", "Mugwort", "Plantain", "Chicory"],
          correctAnswer: "Yarrow",
          explanation: "Some individuals are sensitive to yarrow oils.",
        },

        {
          text: "Which common wild plant contains latex that may cause stomach upset?",
          options: ["Wild Lettuce", "Mullein", "Plantain", "Chickweed"],
          correctAnswer: "Wild Lettuce",
          explanation: "Lactucarium latex can irritate digestion.",
        },

        {
          text: "Which small plant’s seeds can cause poisoning in livestock due to oxalates?",
          options: ["Yellow Dock", "Curly Dock", "Dandelion", "Mallow"],
          correctAnswer: "Curly Dock",
          explanation: "Oxalates affect calcium metabolism.",
        },

        {
          text: "Which otherwise edible plant becomes toxic when contaminated by roadside pollutants?",
          options: ["Japanese Knotweed", "Dandelion", "Chickweed", "Plantain"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Often grows along polluted roadsides.",
        },

        {
          text: "Which tall plant with purple-black berries is dangerously toxic to pets and humans?",
          options: ["Pokeweed", "Elderberry", "Chicory", "Dead Nettle"],
          correctAnswer: "Pokeweed",
          explanation: "Pokeweed berries resemble elderberry but are toxic.",
        },

        {
          text: "Which weed can cause mild stomach upset if over-consumed despite being edible?",
          options: ["Garlic Mustard", "Red Clover", "Chickweed", "Ground Ivy"],
          correctAnswer: "Red Clover",
          explanation: "Excess can overload phytoestrogens.",
        },

        {
          text: "Which toxic invasive species can grow 10 feet tall and block waterways?",
          options: ["Japanese Knotweed", "Curly Dock", "Chicory", "Plantain"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Forms dense monocultures.",
        },

        {
          text: "Which toxic plant contains compounds that depress the nervous system if consumed?",
          options: ["Pokeweed", "Mugwort", "Yarrow", "Red Clover"],
          correctAnswer: "Pokeweed",
          explanation: "Alkaloids make pokeweed dangerous.",
        },
      ],
      lookalikes: [
        {
          text: "Which plant is often mistaken for clover but has heart-shaped leaves and lemony taste?",
          options: ["Wood Sorrel", "White Clover", "Red Clover", "Chickweed"],
          correctAnswer: "Wood Sorrel",
          explanation: "Wood sorrel has heart-shaped leaflets.",
        },
        {
          text: "Which toxic plant resembles asparagus shoots when young?",
          options: ["Pokeweed", "Japanese Knotweed", "Curly Dock", "Chickweed"],
          correctAnswer: "Pokeweed",
          explanation: "Young poke shoots can deceive beginners.",
        },
        {
          text: "Which plant resembles bamboo with hollow jointed stems but is invasive?",
          options: ["Japanese Knotweed", "Foxtail", "Mullein", "Chicory"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Often mistaken for bamboo.",
        },
        {
          text: "Which plant looks like stinging nettle but does NOT sting?",
          options: ["Dead Nettle", "Chickweed", "Cleavers", "Mugwort"],
          correctAnswer: "Dead Nettle",
          explanation: "Has purple tops but no stinging hairs.",
        },
        {
          text: "Which weed resembles dandelion but has hairy leaves and multiple flowers per stem?",
          options: ["Cat's Ear", "Chicory", "Yarrow", "Plantain"],
          correctAnswer: "Cat's Ear",
          explanation: "Distinguished by hairy leaves.",
        },
        {
          text: "Which plant resembles Queen Anne’s Lace but causes phototoxic burns?",
          options: ["Wild Parsnip", "Yarrow", "Ground Ivy", "Chickweed"],
          correctAnswer: "Wild Parsnip",
          explanation: "Yellow umbels vs white umbels.",
        },
        {
          text: "Which invasive species looks like violet rosettes when young?",
          options: ["Garlic Mustard", "Chickweed", "Red Clover", "Ground Ivy"],
          correctAnswer: "Garlic Mustard",
          explanation: "Crushing reveals garlic odor.",
        },
        {
          text: "Which plant looks like mint due to square stems but clings with hooks?",
          options: ["Cleavers", "Ground Ivy", "Dead Nettle", "Chickweed"],
          correctAnswer: "Cleavers",
          explanation: "Hooked hairs cling to clothing.",
        },
        {
          text: "Which large plant can be mistaken for yarrow from afar but grows burrs?",
          options: [
            "Common Burdock",
            "Canada Thistle",
            "Chickweed",
            "Ground Ivy",
          ],
          correctAnswer: "Common Burdock",
          explanation: "Huge leaves distinguish it.",
        },
        {
          text: "Which succulent edible is easily confused with toxic spurge?",
          options: ["Purslane", "Chickweed", "Lambs Quarters", "Plantain"],
          correctAnswer: "Purslane",
          explanation: "Spurge has white milky sap.",
        },

        {
          text: "Which plant resembles wild carrot but has hollow purple-blotched stems?",
          options: ["Poison Hemlock", "Yarrow", "Wild Parsnip", "Chickweed"],
          correctAnswer: "Poison Hemlock",
          explanation: "Hemlock has toxic alkaloids.",
        },
        {
          text: "Which plant resembles Queen Anne’s Lace but grows much taller and is extremely toxic?",
          options: [
            "Giant Hogweed",
            "Wild Parsnip",
            "Yarrow",
            "Daisy Fleabane",
          ],
          correctAnswer: "Giant Hogweed",
          explanation: "Causes severe burns.",
        },
        {
          text: "Which plant resembles broadleaf plantain but has tall grass-like leaves?",
          options: ["Narrowleaf Plantain", "Chickweed", "Mallow", "Purslane"],
          correctAnswer: "Narrowleaf Plantain",
          explanation: "More slender compared to broadleaf.",
        },
        {
          text: "Which bitter herb looks like mugwort but has uniform fern-like leaves?",
          options: ["Yarrow", "Mugwort", "Cleavers", "Dead Nettle"],
          correctAnswer: "Yarrow",
          explanation: "Yarrow leaves are evenly divided.",
        },
        {
          text: "Which edible weed looks like lambs quarters but has reddish stems and sour taste?",
          options: ["Sheep Sorrel", "Chicory", "Dock", "Chickweed"],
          correctAnswer: "Sheep Sorrel",
          explanation: "Classic sour flavor.",
        },

        {
          text: "Which plant is often mistaken for chicory but produces latex when cut?",
          options: ["Wild Lettuce", "Chicory", "Mullein", "Ground Ivy"],
          correctAnswer: "Wild Lettuce",
          explanation: "Latex oozes when stems are cut.",
        },

        {
          text: "Which plant resembles violet leaves but has small spiky seed pods?",
          options: ["Garlic Mustard", "Mallow", "Henbit", "Ground Ivy"],
          correctAnswer: "Garlic Mustard",
          explanation: "Leaves look similar early on.",
        },

        {
          text: "Which plant resembles thistle but has smoother leaves and no sharp spines?",
          options: ["Burdock", "Canada Thistle", "Curly Dock", "Wild Lettuce"],
          correctAnswer: "Burdock",
          explanation: "Burdock leaves are soft and huge.",
        },

        {
          text: "Which creeping plant resembles chickweed but has square stems and purple flowers?",
          options: ["Ground Ivy", "Chickweed", "Mallow", "White Clover"],
          correctAnswer: "Ground Ivy",
          explanation: "Square stems = mint family.",
        },

        {
          text: "Which mustard-family plant resembles wild mustard but smells strongly of garlic?",
          options: ["Garlic Mustard", "Wild Mustard", "Chickweed", "Plantain"],
          correctAnswer: "Garlic Mustard",
          explanation: "Crushed leaf test reveals garlic scent.",
        },

        {
          text: "Which weed resembles plantain but has a more pointed leaf shape?",
          options: ["Curly Dock", "Burdock", "Mallow", "Ground Ivy"],
          correctAnswer: "Curly Dock",
          explanation: "Dock leaves are long and wavy.",
        },

        {
          text: "Which tall plant resembles chicory but produces a night-blooming flower?",
          options: ["Common Evening Primrose", "Chicory", "Yarrow", "Mullein"],
          correctAnswer: "Common Evening Primrose",
          explanation: "Opens flowers at dusk.",
        },

        {
          text: "Which plant resembles cat's ear but has smooth leaves and single flower heads?",
          options: ["Dandelion", "Cat's Ear", "Chicory", "Mallow"],
          correctAnswer: "Dandelion",
          explanation: "One flower stem per flower.",
        },

        {
          text: "Which tall plant resembles poison hemlock but has a solid green stem with no purple blotches?",
          options: ["Queen Anne's Lace", "Yarrow", "Chicory", "Curly Dock"],
          correctAnswer: "Queen Anne's Lace",
          explanation: "Crush root to smell carrot.",
        },

        {
          text: "Which edible plant resembles chickweed but has fuzzy leaves and purple flowers?",
          options: ["Henbit", "Chickweed", "Plantain", "Wild Mustard"],
          correctAnswer: "Henbit",
          explanation: "Henbit has hairy leaves, chickweed does not.",
        },
      ],
      habitat: [
        {
          text: "Which plant thrives in compacted soil like driveways, paths, and playgrounds?",
          options: ["Pineapple Weed", "Chickweed", "Red Clover", "Ground Ivy"],
          correctAnswer: "Pineapple Weed",
          explanation: "Loves packed soil where grass won’t grow.",
        },
        {
          text: "Which summer-loving succulent thrives in sidewalk cracks?",
          options: ["Purslane", "Chickweed", "Mallow", "Plantain"],
          correctAnswer: "Purslane",
          explanation: "Purslane is heat-tolerant and drought-tolerant.",
        },
        {
          text: "Which plant dominates shady lawns and moist, dark areas?",
          options: ["Ground Ivy", "Chickweed", "Dead Nettle", "White Clover"],
          correctAnswer: "Ground Ivy",
          explanation: "Thrives in low light and moist soil.",
        },
        {
          text: "Which invasive weed forms dense bamboo-like stands near rivers?",
          options: ["Japanese Knotweed", "Mugwort", "Curly Dock", "Burdock"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Often grows near waterways.",
        },
        {
          text: "Which weed dominates late-summer vacant lots and fields?",
          options: ["Common Ragweed", "Yarrow", "Chickweed", "Mallow"],
          correctAnswer: "Common Ragweed",
          explanation: "Prefers sandy disturbed soils.",
        },
        {
          text: "Which plant thrives in moist shady lawns and produces spring flowers?",
          options: ["Wild Violet", "Chickweed", "Garlic Mustard", "Red Clover"],
          correctAnswer: "Wild Violet",
          explanation: "Moist shade is ideal habitat.",
        },
        {
          text: "Which cold-loving weed thrives in winter and spring but dies back in heat?",
          options: ["Chickweed", "Purslane", "Lambs Quarters", "Plantain"],
          correctAnswer: "Chickweed",
          explanation: "Prefers cool, moist weather.",
        },
        {
          text: "Which plant prefers rich moist soils and forms dense stinging colonies?",
          options: ["Stinging Nettle", "Curly Dock", "Mallow", "Dead Nettle"],
          correctAnswer: "Stinging Nettle",
          explanation: "Indicator of nutrient-rich soil.",
        },
        {
          text: "Which biennial herb grows a rosette the first year and tall stalk second year?",
          options: [
            "Common Evening Primrose",
            "Mullein",
            "Curly Dock",
            "Chicory",
          ],
          correctAnswer: "Common Evening Primrose",
          explanation: "Typical biennial pattern.",
        },
        {
          text: "Which creeping weed grows best in dry, compacted lawns?",
          options: ["Black Medic", "White Clover", "Ground Ivy", "Mustard"],
          correctAnswer: "Black Medic",
          explanation: "Thrives in dry, low-nitrogen soil.",
        },
        {
          text: "Which plant forms colonies along forest edges and disturbed woodland?",
          options: ["Garlic Mustard", "Chickweed", "Mallow", "Red Clover"],
          correctAnswer: "Garlic Mustard",
          explanation: "Invasive woodland species.",
        },
        {
          text: "Which common weed grows in disturbed garden soil and bare earth?",
          options: ["Lambs Quarters", "Curly Dock", "Chicory", "Ground Ivy"],
          correctAnswer: "Lambs Quarters",
          explanation: "Often found in rich garden soil.",
        },
        {
          text: "Which plant prefers sunny open fields and produces tall blue flowers?",
          options: ["Chicory", "Mugwort", "White Clover", "Plantain"],
          correctAnswer: "Chicory",
          explanation: "Common along roadsides and fields.",
        },
        {
          text: "Which plant grows aggressively near waterways and easily floods out natives?",
          options: [
            "Japanese Knotweed",
            "Curly Dock",
            "Chickweed",
            "Ground Ivy",
          ],
          correctAnswer: "Japanese Knotweed",
          explanation: "Thrives on wet disturbed soils.",
        },
        {
          text: "Which weed grows freely in lawns, meadows, and everywhere grass is cut short?",
          options: ["White Clover", "Chickweed", "Plantain", "Dead Nettle"],
          correctAnswer: "White Clover",
          explanation: "Hosts nitrogen-fixing bacteria.",
        },
      ],
      preparation: [
        {
          text: "Which plant must ALWAYS be cooked or dried to neutralize its sting?",
          options: ["Stinging Nettle", "Dead Nettle", "Chickweed", "Mallow"],
          correctAnswer: "Stinging Nettle",
          explanation: "Heat or drying destroys stinging hairs.",
        },
        {
          text: "Which toxic plant requires multiple boilings to make it safe to eat?",
          options: ["Pokeweed", "Curly Dock", "Burdock", "Wild Mustard"],
          correctAnswer: "Pokeweed",
          explanation: "Traditional 'poke sallet' requires expert prep.",
        },
        {
          text: "Which plant’s sour leaves should be eaten in moderation due to oxalates?",
          options: ["Wood Sorrel", "Wild Mustard", "Mallow", "Plantain"],
          correctAnswer: "Wood Sorrel",
          explanation: "Oxalic acid can irritate kidneys.",
        },
        {
          text: "Which root must be peeled and cooked to reduce bitterness?",
          options: [
            "Burdock Root",
            "Curly Dock Root",
            "Chicory Root",
            "All of the above",
          ],
          correctAnswer: "All of the above",
          explanation: "All have bitter compounds toned down by cooking.",
        },
        {
          text: "Which plant’s edible shoots must be harvested before 12 inches tall?",
          options: ["Japanese Knotweed", "Curly Dock", "Mullein", "Yarrow"],
          correctAnswer: "Japanese Knotweed",
          explanation: "Older stems become woody and sour.",
        },
        {
          text: "Which wild green becomes too bitter to eat once it bolts?",
          options: ["Garlic Mustard", "Chickweed", "Plantain", "Curly Dock"],
          correctAnswer: "Garlic Mustard",
          explanation: "Best harvested very young.",
        },
        {
          text: "Which herb should be infused cold to preserve mucilage?",
          options: ["Mallow", "Chickweed", "Plantain", "Curly Dock"],
          correctAnswer: "Mallow",
          explanation: "Cold infusion extracts soothing mucilage.",
        },
        {
          text: "Which plant's flowers are commonly used to make fritters?",
          options: ["Dandelion", "Mallow", "Red Clover", "Wild Violet"],
          correctAnswer: "Dandelion",
          explanation: "Flower heads are dipped in batter and fried.",
        },
        {
          text: "Which plant is best preserved by drying and used as a tea for dreaming?",
          options: ["Mugwort", "Yarrow", "Plantain", "Chickweed"],
          correctAnswer: "Mugwort",
          explanation: "Drying concentrates its aromatics.",
        },
        {
          text: "Which plant's taproot is best harvested in fall or early spring when energy is stored?",
          options: ["Burdock", "Dandelion", "Chicory", "All of the above"],
          correctAnswer: "All of the above",
          explanation: "Roots are sweetest and most nutritious then.",
        },
      ],
    },
    startGame(mode) {
      this.screen = "game";
      this.gameMode = mode;
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.selectedAnswer = null;
      this.showResults = false;
      this.shuffleQuestions();
    },
    shuffleQuestions() {
      for (let mode in this.questions) {
        for (let i = this.questions[mode].length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.questions[mode][i], this.questions[mode][j]] = [
            this.questions[mode][j],
            this.questions[mode][i],
          ];
        }
      }
    },
    get currentQuestion() {
      return this.questions[this.gameMode][this.currentQuestionIndex];
    },
    get totalQuestions() {
      return this.questions[this.gameMode].length;
    },
    get gameModeTitle() {
      const titles = {
        identification: "Weed Identification Quiz",
        edible: "Edible Uses Quiz",
        medicinal: "Medicinal Uses Quiz",
      };
      return titles[this.gameMode];
    },
    get featuredWeeds() {
      return this.weeds.slice(0, 8);
    },
    get filteredWeeds() {
      if (!this.searchQuery) return this.weeds;
      const query = this.searchQuery.toLowerCase();
      return this.weeds.filter(
        (weed) =>
          weed.commonName.toLowerCase().includes(query) ||
          weed.scientificName.toLowerCase().includes(query) ||
          weed.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          weed.description.toLowerCase().includes(query),
      );
    },
    viewWeedDetails(weed) {
      this.currentWeed = weed;
      this.activeTab = "identification";
      this.screen = "details";
    },
    selectAnswer(answer) {
      this.selectedAnswer = answer;
      this.isCorrect = answer === this.currentQuestion.correctAnswer;
      if (this.isCorrect) {
        this.score++;
      }
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.totalQuestions - 1) {
        this.currentQuestionIndex++;
        this.selectedAnswer = null;
      } else {
        this.showResults = true;
      }
    },
    exitGame() {
      this.selectedAnswer = null;
      this.showResults = false;
      this.score = 0;
      this.currentQuestionIndex = 0;
      this.screen = "home";
    },
    restartGame() {
      this.startGame(this.gameMode);
    },
    getResultMessage() {
      const percentage = (this.score / this.totalQuestions) * 100;
      if (percentage >= 90) {
        return "Outstanding! You're a true weed wisdom expert!";
      } else if (percentage >= 75) {
        return "Excellent work! You have impressive knowledge of useful weeds.";
      } else if (percentage >= 60) {
        return "Good job! You're well on your way to mastering weed wisdom.";
      } else if (percentage >= 50) {
        return "Not bad! Keep learning and you'll be an expert in no time.";
      } else {
        return "Keep studying! Every weed has a story and a use worth knowing.";
      }
    },
  };
}
