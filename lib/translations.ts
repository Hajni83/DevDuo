export type Language = "en" | "hu";

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Start a Project",
      privacy_policy: "Privacy Policy",
      terms_of_service: "Terms of Service",
    },
    hero: {
      title_part1: "Your website either ",
      title_gradient: "convinces",
      title_part2: " or drives away.",
      description: "Unfortunately, most small business websites do the latter – not on purpose, they are just outdated. We change this with modern, fast, and high-converting websites.",
      cta_primary: "View Our Work",
      cta_secondary: "Talk to Us",
    },
    about: {
      badge: "Our Mission",
      title_part1: "What do you get ",
      title_accent: "when working with us?",
      description1: "You don't just fill out a form and then receive something weeks later. You know exactly where the project stands, what is happening, and why. The two of us work together – which means there is always a real person you can ask.",
      description2: "The completed website is not a closed chapter. If you have a question, want to make a change, or if your business grows – we are there. Not a generic support desk, but two real people who know your system inside out.",
      quote: "A great website is your best salesperson.",
      subquote: "We handle the technical heavy lifting, so you can focus on running your business.",
      stats: {
        why_choose_us: "Why choose us?",
        experience: "We don't look at whether it is pretty. We look at whether it works. Does it generate inquiries? Does it convince? Does it sell? If the answer is not a clear yes, there is work to be done. We build websites where this is measurable.",
        exp_value: "Because a website either brings business – or it brings nothing",
        collab: "A template is good until you start to grow. After that, it is more of an obstacle than a help. We adapt the system to your operations – not the other way around.",
        collab_value: "Because your business does not fit in a box",
        perf: "We don't think in one-off projects, we think in foundations. What we build is scalable, understandable, and does not collapse when something changes.",
        perf_value: "Because a good system works for you for years",
      },
    },
    services: {
      badge: "Capabilities",
      title_part1: "Our ",
      title_accent: "Services",
      items: [
        {
          title: "Business Websites",
          desc: "Professional online presence that builds trust and showcases your services beautifully.",
        },
        {
          title: "Landing Pages",
          desc: "Targeted, high-converting pages for marketing campaigns and product launches.",
        },
        {
          title: "E-commerce Solutions",
          desc: "User-friendly online stores that help you sell your products 24/7 with ease.",
        },
        {
          title: "Search Engine Optimization (SEO)",
          desc: "Technical and content optimization so customers can easily find you on Google.",
        },
        {
          title: "Mobile-First Design",
          desc: "Flawless and responsive experience on every device – smartphones, tablets, and desktops.",
        },
        {
          title: "Maintenance & Support",
          desc: "Ongoing updates and technical support to keep your website secure and running smoothly.",
        },
      ],
    },
    process: {
      badge: "How We Work",
      title_part1: "How we will ",
      title_accent: "work with you",
      subheading: "YOU ALWAYS KNOW WHAT'S HAPPENING",
      steps: [
        {
          number: "1",
          title: "Consultation",
          desc: "First, we get to know your business – only then do we suggest anything. A short conversation is enough to figure out what you actually need, and together we set the direction."
        },
        {
          number: "2",
          title: "Development",
          desc: "We plan, we build, and we don't disappear in the process. You can see where things stand, have a say when something changes – no surprises at the end."
        },
        {
          number: "3",
          title: "Testing",
          desc: "Before anyone else sees it, we've already checked everything. Phone, tablet, browser – we test across every device to make sure it works flawlessly and reliably."
        },
        {
          number: "4",
          title: "Launch & Support",
          desc: "We go live, walk you through how to manage it, and we don't disappear after that either. Questions, changes, growth – we're there for all of it."
        }
      ]
    },
    portfolio: {
      badge: "Selected Work",
      title_part1: "Proven ",
      title_accent: "Track Record",
      projects: [
        {
          title: "VibeVaults",
          category: "Business Solution",
          description: "A modern platform that simplifies customer interactions and accelerates workflows.",
        },
        {
          title: "Tar Engineering",
          category: "Industrial Website",
          description: "Modern, multilingual showcase platform for a manufacturing and technology company.",
        },
      ],
    },
    contact: {
      badge: "Get in Touch",
      title_part1: "Let's Build Something ",
      title_accent: "Exceptional",
      description: "Whether you need a simple presentation site or a complete webshop, we are here to help your business succeed.",
      email_label: "Email Us",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        choose: "Choose option",
        submit: "Send Message",
        options: ["Business Website", "E-commerce", "Landing Page", "Maintenance", "Consultation"],
      },
    },
    footer: {
      description: "Professional web solutions for micro and small businesses, delivered with personal attention and technical mastery.",
      nav_title: "Navigation",
      connect_title: "Connect",
      built_with: "Built with",
      by: "by DevDuo",
    },
    terms_of_service: {
      title: "Terms of Service",
      last_updated: "Last updated: May 15, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: ["By using our website, you agree to these Terms of Service."]
        },
        {
          title: "2. Purpose of the Website",
          content: ["DEV DUO presents web development, design, and digital services."]
        },
        {
          title: "3. Intellectual Property",
          content: ["All content on the website, including texts, graphics, logos, and source code, is the property of DEV DUO."]
        },
        {
          title: "4. User Obligations",
          content: ["The user agrees not to:"],
          list: [
            "Use the website for illegal purposes",
            "Attempt to gain unauthorized access",
            "Distribute malicious software",
            "Copy or distribute the content on the site without permission"
          ]
        },
        {
          title: "5. Disclaimer of Warranties",
          content: ["The information on the website is for informational purposes. We do not guarantee its accuracy or completeness."]
        },
        {
          title: "6. Limitation of Liability",
          content: ["DEV DUO is not liable for any direct or indirect damages resulting from the use of the website."]
        },
        {
          title: "7. External Links",
          content: ["The website may contain external links for which we are not responsible."]
        },
        {
          title: "8. Modification of Terms",
          content: ["We reserve the right to modify the terms without prior notice."]
        },
        {
          title: "9. Governing Law",
          content: ["These terms are governed by the laws of Hungary and the European Union."]
        },
        {
          title: "10. Contact",
          content: ["For questions: hajnalka@devduo.eu, jozsef@devduo.eu"]
        }
      ]
    },
    privacy_policy: {
      title: "Privacy Policy",
      last_updated: "Last updated: May 15, 2026",
      sections: [
        {
          title: "1. Introduction",
          content: ["DEV DUO is committed to protecting your personal data in compliance with the GDPR and applicable data protection laws."]
        },
        {
          title: "2. Data Controller Information",
          content: ["Service name: DEV DUO<br />Operator: Maró Hajnalka, Tar József<br />Contact: hajnalka@devduo.eu, jozsef@devduo.eu <br />Location: European Union (Hungary)"]
        },
        {
          title: "3. Scope of Managed Data",
          list: [
            "Name",
            "Email address",
            "Message provided via the contact form",
            "IP address and browser data",
            "Analytics and usage data"
          ]
        },
        {
          title: "4. Purpose of Data Processing",
          list: [
            "Communication",
            "Providing services",
            "Website development and optimization",
            "Security purposes",
            "Fulfillment of legal obligations"
          ]
        },
        {
          title: "5. Legal Basis for Processing",
          list: [
            "Consent of the data subject",
            "Legitimate interest",
            "Legal obligation",
            "Contract fulfillment or offering"
          ]
        },
        {
          title: "6. Cookies",
          content: [
            "The website may use cookies to ensure proper operation and improve the user experience.",
            "Cookies can be disabled in the browser settings."
          ]
        },
        {
          title: "7. Third-Party Service Providers",
          content: ["Certain services may be provided by external partners, such as hosting, analytics, or email services."]
        },
        {
          title: "8. Data Retention Period",
          content: ["We only store data for the necessary time or as required by law."]
        },
        {
          title: "9. Rights of Data Subjects",
          list: [
            "Access to personal data",
            "Request data correction",
            "Request data deletion",
            "Restriction or prohibition of data processing",
            "Data portability",
            "Withdrawal of consent",
            "Lodging a complaint with the authority"
          ]
        },
        {
          title: "10. Data Security",
          content: ["We apply appropriate technical and organizational measures to protect your data."]
        },
        {
          title: "11. Contact",
          content: ["For questions: hajnalka@devduo.eu, jozsef@devduo.eu"]
        }
      ]
    }
  },
  hu: {
    nav: {
      services: "Szolgáltatások",
      about: "Rólunk",
      portfolio: "Referenciák",
      contact: "Kapcsolat",
      cta: "Projekt indítása",
      privacy_policy: "Adatvédelmi tájékoztató",
      terms_of_service: "Általános Szerződési Feltételek",
    },
    hero: {
      title_part1: "A weboldalad vagy ",
      title_gradient: "meggyőz,",
      title_part2: " vagy elriaszt.",
      description: "A legtöbb kisvállalkozó weboldala sajnos az utóbbit csinálja – nem szándékosan, csak elavult. Mi ezen változtatunk: modern, gyors, és ügyfelet hozó weboldalakkal.",
      cta_primary: "Munkáink megtekintése",
      cta_secondary: "Beszélgessünk",
    },
    about: {
      badge: "Küldetésünk",
      title_part1: "Mit kapsz, ",
      title_accent: "ha velünk dolgozol?",
      description1: "Nem egy űrlapot töltesz ki, majd hetek múlva átveszel valamit. Végig tudod, hol tart a projekt, mi történik, és miért. Ketten dolgozunk – ez azt jelenti, hogy mindig van egy konkrét ember, akit megkérdezhetsz.",
      description2: "Az elkészült weboldal nem egy lezárt fejezet. Ha kérdésed van, ha változtatni szeretnél, ha növekszik a vállalkozásod – ott vagyunk. Nem ügyfélszolgálat, hanem két ember, aki ismeri a te rendszeredet.",
      quote: "Egy jó weboldal a legértékesebb üzletkötője.",
      subquote: "Levesszük a technikai terheket a válláról, hogy Ön a saját üzletére fókuszálhasson.",
      stats: {
        why_choose_us: "Miért választanak minket?",
        experience: "Nem azt nézzük, hogy szép-e. Azt nézzük, hogy működik-e. Megkereséseket generál? Meggyőz? Elad? Ha a válasz nem egyértelmű igen, ott van tennivaló. Mi olyan weboldalakat építünk, ahol ez mérhető.",
        exp_value: "Mert a weboldal üzletet hoz – vagy nem hoz semmit",
        collab: "A sablon addig jó, amíg el nem kezdesz növekedni. Utána inkább akadály, mint segítség. A rendszert a működésedhez igazítjuk – nem fordítva.",
        collab_value: "Mert a te vállalkozásod nem illik dobozba",
        perf: "Nem projektekben gondolkodunk, hanem alapokban. Amit építünk, az bővíthető, érthető, és nem omlik össze, ha változik valami.",
        perf_value: "Mert egy jó rendszer évekig dolgozik helyetted",
      },
    },
    services: {
      badge: "Szolgáltatások",
      title_part1: "Miben ",
      title_accent: "Segíthetünk?",
      items: [
        {
          title: "Céges Bemutatkozó Oldalak",
          desc: "Professzionális megjelenés, amely bizalmat épít és bemutatja szolgáltatásait.",
        },
        {
          title: "Landing Oldalak",
          desc: "Célzott, konverziónövelő oldalak marketing kampányokhoz és termékbevezetésekhez.",
        },
        {
          title: "Webshopok és E-kereskedelem",
          desc: "Felhasználóbarát online boltok, hogy termékeit a nap 24 órájában értékesíthesse.",
        },
        {
          title: "Keresőoptimalizálás (SEO)",
          desc: "Technikai és tartalmi beállítások, hogy a vásárlók könnyen rátaláljanak a Google-ben.",
        },
        {
          title: "Mobilbarát Kialakítás",
          desc: "Tökéletes megjelenés minden eszközön – okostelefonon, tableten és asztali gépen is.",
        },
        {
          title: "Üzemeltetés és Támogatás",
          desc: "Üzemeltetés, frissítések és segítségnyújtás, hogy weboldala mindig biztonságos legyen.",
        },
      ],
    },
    process: {
      badge: "Hogyan dolgozunk",
      title_part1: "Így fogunk ",
      title_accent: "dolgozni veled",
      subheading: "NÁLUNK MINDIG TUDOD, MI TÖRTÉNIK",
      steps: [
        {
          number: "1",
          title: "Konzultáció",
          desc: "Először megértjük a vállalkozásodat – csak utána javaslunk bármit. Egy rövid beszélgetésből kiderül, mire van tényleg szükséged, és közösen kijelöljük az irányt."
        },
        {
          number: "2",
          title: "Fejlesztés",
          desc: "Tervezünk, építünk, és közben nem tűnünk el. Látod, hol tart a projekt, beleszólhatsz, ha valami változik – nem a végén szembesülsz az eredménnyel."
        },
        {
          number: "3",
          title: "Tesztelés",
          desc: "Mielőtt bárki más látja, mi már mindent átfésültünk. Telefon, tablet, böngésző – minden eszközön megnézzük, hogy hibátlanul és stabilan működjön."
        },
        {
          number: "4",
          title: "Élesítés",
          desc: "Elindítjuk az oldalt, megmutatjuk hogyan kezeld, és utána sem tűnünk el. Ha kérdés van, ha valami változik, ha növekszik a vállalkozásod – ott vagyunk."
        }
      ]
    },
    portfolio: {
      badge: "Válogatott Munkáink",
      title_part1: "Eddigi ",
      title_accent: "Eredményeink",
      projects: [
        {
          title: "VibeVaults",
          category: "Üzleti Megoldás",
          description: "Egy modern platform, amely megkönnyíti az ügyfélkapcsolatokat és felgyorsítja a folyamatokat.",
        },
        {
          title: "Tar Engineering",
          category: "Ipari Weboldal",
          description: "Gépgyártással és technológiai megoldásokkal foglalkozó vállalat modern, többnyelvű, bemutatkozó oldala.",
        },
      ],
    },
    contact: {
      badge: "Kapcsolatfelvétel",
      title_part1: "Lépjünk a ",
      title_accent: "Következő Szintre",
      description: "Legyen szó egy egyszerű bemutatkozó oldalról vagy egy webshopról, keressen minket bizalommal!",
      email_label: "Írjon Nekünk",
      form: {
        name: "Név",
        email: "Email",
        subject: "Tárgy",
        message: "Üzenet",
        choose: "Válassz opciót",
        submit: "Üzenet Küldése",
        options: ["Céges Weboldal", "Webshop", "Landing Oldal", "Karbantartás", "Konzultáció", "Egyéb"],
      },
    },
    footer: {
      description: "Professzionális webes megoldások mikro- és kisvállalkozások számára, személyre szabott figyelemmel.",
      nav_title: "Navigáció",
      connect_title: "Kapcsolat",
      built_with: "Készült",
      by: "által - DevDuo",
    },
    terms_of_service: {
      title: "Általános Szerződési Feltételek",
      last_updated: "Utolsó frissítés: 2026. május 15.",
      sections: [
        {
          title: "1. A feltételek elfogadása",
          content: ["A weboldal használatával Ön elfogadja a jelen Általános Szerződési Feltételeket."]
        },
        {
          title: "2. A weboldal célja",
          content: ["A DEV DUO webfejlesztési, design és digitális szolgáltatásokat mutat be."]
        },
        {
          title: "3. Szellemi tulajdon",
          content: ["A weboldalon található minden tartalom, beleértve a szövegeket, grafikákat, logókat és forráskódot, a DEV DUO tulajdonát képezi."]
        },
        {
          title: "4. Felhasználói kötelezettségek",
          content: ["A felhasználó vállalja, hogy nem:"],
          list: [
            "Használja a weboldalt jogellenes célokra",
            "Kísérel meg jogosulatlan hozzáférést szerezni",
            "Terjeszt rosszindulatú szoftvereket",
            "Másolja vagy terjeszti az oldalon található tartalmat engedély nélkül"
          ]
        },
        {
          title: "5. Felelősség kizárása",
          content: ["A weboldalon található információk tájékoztató jellegűek. Nem vállalunk garanciát azok pontosságára vagy teljességére."]
        },
        {
          title: "6. Felelősség korlátozása",
          content: ["A DEV DUO nem felelős semmilyen közvetlen vagy közvetett kárért, amely a weboldal használatából ered."]
        },
        {
          title: "7. Külső hivatkozások",
          content: ["A weboldal külső linkeket tartalmazhat, amelyek tartalmáért nem vállalunk felelősséget."]
        },
        {
          title: "8. Feltételek módosítása",
          content: ["Fenntartjuk a jogot a feltételek előzetes értesítés nélküli módosítására."]
        },
        {
          title: "9. Irányadó jog",
          content: ["A jelen feltételekre Magyarország és az Európai Unió jogszabályai az irányadók."]
        },
        {
          title: "10. Kapcsolat",
          content: ["Kérdés esetén: hajnalka@devduo.eu, jozsef@devduo.eu"]
        }
      ]
    },
    privacy_policy: {
      title: "Adatvédelmi tájékoztató",
      last_updated: "Utolsó frissítés: 2026. május 15.",
      sections: [
        {
          title: "1. Bevezetés",
          content: ["A DEV DUO elkötelezett az Ön személyes adatainak védelme mellett, a GDPR és az alkalmazandó adatvédelmi jogszabályok betartásával."]
        },
        {
          title: "2. Adatkezelő adatai",
          content: ["Szolgáltatás neve: DEV DUO<br />Üzemeltető: Maró Hajnalka, Tar József<br />Kapcsolat: hajnalka@devduo.eu, jozsef@devduo.eu <br />Helyszín: European Union (Hungary)"]
        },
        {
          title: "3. Kezelt adatok köre",
          list: [
            "Név",
            "E-mail cím",
            "Kapcsolatfelvételi űrlapon megadott üzenet",
            "IP cím és böngésző adatok",
            "Analitikai és használati adatok"
          ]
        },
        {
          title: "4. Az adatkezelés célja",
          list: [
            "Kapcsolattartás",
            "Szolgáltatások nyújtása",
            "Weboldal fejlesztése és optimalizálása",
            "Biztonsági célok",
            "Jogi kötelezettségek teljesítése"
          ]
        },
        {
          title: "5. Az adatkezelés jogalapja",
          list: [
            "Az érintett hozzájárulása",
            "Jogos érdek",
            "Jogi kötelezettség",
            "Szerződés teljesítése vagy ajánlatadás"
          ]
        },
        {
          title: "6. Sütik (Cookie-k)",
          content: [
            "A weboldal cookie-kat használhat a megfelelő működés és a felhasználói élmény javítása érdekében.",
            "A cookie-k letilthatók a böngésző beállításaiban."
          ]
        },
        {
          title: "7. Harmadik fél szolgáltatók",
          content: ["Bizonyos szolgáltatásokat külső partnerek biztosíthatnak, például tárhelyszolgáltatás, analitika vagy email szolgáltatás."]
        },
        {
          title: "8. Adatmegőrzési idő",
          content: ["Az adatokat csak a szükséges ideig tároljuk, illetve a jogszabályokban előírt időtartamig."]
        },
        {
          title: "9. Az érintettek jogai",
          list: [
            "Hozzáférés a személyes adatokhoz",
            "Adathelyesbítés kérése",
            "Adattörlés kérése",
            "Adatkezelés korlátozása vagy tiltása",
            "Adathordozhatóság",
            "Hozzájárulás visszavonása",
            "Panasztétel a NAIH-nál"
          ]
        },
        {
          title: "10. Adatbiztonság",
          content: ["Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adatok védelme érdekében."]
        },
        {
          title: "11. Kapcsolat",
          content: ["Kérdés esetén: hajnalka@devduo.eu, jozsef@devduo.eu"]
        }
      ]
    }
  },
};
