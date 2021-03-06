import { CharityCategory } from "../types";

export const charities = [
    {
        name: "Petners",
        description: "A collaboration of volunteers from Ukraine, Berlin and Barcelona who evacuate animals from Ukrainian shelters to Europe.",
        payment_link: "https://www.paypal.com/donate/?hosted_button_id=W7L3AWC4XECZJ&source=qr",
        category: CharityCategory.animals,
        link: "https://instagram.com/petners.berlin",
    },
    {
        name: "Serhiy Zhadan",
        description: "Renowned Ukrainian poet and activist, Serhiy Zhadan, supports a variety of local humanitarian and defensive military initiatives in Kharkiv.",
        paypal_address: "sirozhazhadan@gmail.com",
        category: CharityCategory.mixed,
        link: "https://war.ukraine.ua/heroes/writer-and-poet-serhii-zhadan-is-volunteering-in-kharkiv/",
    },
    {
        name: "Hochu kota/Wannacat",
        description: "Hochukota is a non-profitable organisation whose mission is to save stray cats through treatment, care and adoption. Right now it is evacuating and providing medical help to cats affected by the war.",
        payment_link: "https://www.paypal.com/donate/?hosted_button_id=2FTP8JARFNRVL",
        category: CharityCategory.animals,
        link: "https://wannacat.org/",
    },
    {
        name: "Kyiv Angels",
        description: "Local volunteering organisation  distributing food, medicine and household good to vulnerable people in Kyiv. Moreover, they deliver humanitarian help to affected villages in other areas of Ukraine.",
        payment_link: "https://www.paypal.com/paypalme/dj69dj",
        category: CharityCategory.humanitarian,
        link: "https://www.itsnicethat.com/news/clifford-jago-kyiv-angels-photography-290322",
    },
    {
        name: "UAnimals",
        description: "Ukrainian animal rights organisation that helps animals during the war.",
        paypal_address: "paypal@uanimals.org",
        category: CharityCategory.animals,
        link: "https://www.instagram.com/uanimals.eng/?hl=en",
    },
    {
        name: "Come Back Alive",
        description: "A fund supporting the Armed Forces of Ukraine through financing purely defence initiatives. In addition to the material support, it increased technological capabilities of the military through providing tablets with Armor software aimed at stopping the artillery. It also organizes trainings to equip Ukrainian military with crucial skills.",
        payment_link: "https://www.comebackalive.in.ua/donate",
        category: CharityCategory.military,
        link: "https://www.comebackalive.in.ua/",
    },
    {
        name: "Serhiy Pritula Charity Foundation",
        description: "Serhiy Prytula has been volunteering for the Ukrainian military since 2014, when Russia began occupying Crimea and Donbas. The Pritula Foundation purchases equipment, supplies, medical help and vehicles for the military. Another area of ??????their work is humanitarian aid.",
        paypal_address: "serhiy.prytula.kyiv@gmail.com",
        category: CharityCategory.mixed,
        link: "https://prytulafoundation.org/",
    },
    {
        name: "Zoopatrul.UA",
        description: "A volunteer organisation saving and providing medical treatment for animals from Kyiv and Kyiv region.",
        paypal_address: "zoopatrul.ua@gmail.com",
        category: CharityCategory.animals,
        link: "https://instagram.com/zoopatrul.ua",
    },
    {
        name: "Ukrainian Student League",
        description: "An organization created by Ukrainian students. They focus on humanitarian aid for the victims of the war and defenders of Ukraine (e.g. first aid kits for the military).",
        payment_link: "https://en.usl.org.ua/first-aid-kits-for-ukrainian-army",
        category: CharityCategory.military,
        link: "https://en.usl.org.ua/",
    },
    {
        name: "Kharkiv Help",
        description: "An association of Kharkiv volunteers helping those in need. E.g. they cook more than 4000 portions of food daily and deliver it to places where it is needed.",
        paypal_address: "monomaslo@gmail.com",
        category: CharityCategory.humanitarian,
        link: "https://www.kharkiv-help.com/en",
    },
    {
        name: "Kyiv Volunteer",
        description: "Kyiv Volunteer is a charitable organization uniting 26 restaurants and 3 bakeries. They provide nearly 13 000 people with food on a daily basis - supplies go to the Armed Forces of Ukraine and territorial defense units, healthcare institutions and maternity hospitals, orphanages, and elderly people.",
        payment_link: "https://secure.wayforpay.com/payment/s25adb544ee3c",
        category: CharityCategory.humanitarian,
        link: "https://www.kyiv-volunteer.com/eng",
    },
    {
        name: "Asti vet clinic",
        description: "A vet clinic in Kyiv taking care of animals affected by the war.",
        paypal_address: "sms25031992@gmail.com",
        category: CharityCategory.animals,
        link: "https://instagram.com/asti_vetclinic",
    },
    {
        name: "Help animals Ukraine",
        description: "An animal rescue volunteer who collects food and meds and sends it to the shelters affected by the war.",
        paypal_address: "sofiafaingold@gmail.com",
        category: CharityCategory.animals,
        link: "https://instagram.com/helpanimalsukraine",
    },
    {
        name: "Voices of children",
        description: "The Voices of Children Foundation provides psychological and psychosocial support to children affected by the war. It helps them overcome the consequences of armed conflict and develop.",
        payment_link: "https://www.paypal.com/donate/?hosted_button_id=P2GWSRT7EJKUS&sdkMeta=eyJ1cmwiOiJodHRwczovL3d3dy5wYXlwYWxvYmplY3RzLmNvbS9kb25hdGUvc2RrL2RvbmF0ZS1zZGsuanMiLCJhdHRycyI6eyJkYXRhLXVpZCI6IjM5OTYyMzAwMGZfbXRhNm50YzZtdG0ifX0&targetMeta=eyJ6b2lkVmVyc2lvbiI6IjlfMF81OCIsInRhcmdldCI6IkRPTkFURSIsInNka1ZlcnNpb24iOiIwLjguMCJ9",
        category: CharityCategory.humanitarian,
        link: "https://voices.org.ua/en/",
    },
    {
        name: "We have a future",
        description: "A volunteering organisation, created by five friends, that now helps both the army (with military equipment) and civilians (with food and medicine) in a quick and direct way.",
        paypal_address: "labirint.69q@gmail.com",
        category: CharityCategory.mixed,
        link: "https://e-maibutnie.com/en",
    },
    {
        name: "SupportUkraineWithUs",
        description: "A dedicated group of Ukrainian-Americans working with volunteers on the ground in Ukraine to purchase and deliver food directly to people trapped in its embattled cities. They collect and send funds directly to locals who drive out to towns that haven't been bombed or raided to purchase food staples and deliver them to women, children, and the elderly who cannot provide for themselves.",
        paypal_address: "team@supportukrainewithus.com",
        category: CharityCategory.humanitarian,
        link: "https://www.instagram.com/support.ukraine.with.us/",
    },
]