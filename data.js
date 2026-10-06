/* ------------------------------------------------------------------
   Everything on the page lives here. The page is rendered from DATA
   by app.js. To add a project, append an object to DATA.projects.
   To add a job, append to DATA.experience. Nothing else changes.

   The icon wall under the name is built automatically from every
   `apps` array found in DATA.projects.
------------------------------------------------------------------ */

const DATA = {

  /* -------------------------------------------------------------
     PROJECTS — newest first. Only `name` is required.
     {
       name, org, period, status,
       summary:  "One or two sentences.",
       bullets:  ["..."],
       links:    [{ label, url }],
       tech:     ["Swift", "SwiftUI"],
       apps:     [{ id, name, icon }]   // live App Store apps
     }
  ------------------------------------------------------------- */
  projects: [
    {
      name: "TrackEnsure ELD",
      org: "TrackEnsure",
      period: "2025 – present",
      summary: "An electronic logging device system for US and Canadian fleets, certified by FMCSA and Transport Canada: hours-of-service compliance, DVIR inspections, IFTA fuel-tax tracking and DOT inspection mode.",
      bullets: [
        "The app ingests continuous telemetry from vehicles over an unreliable link, so late, duplicate and out-of-order readings are the normal case. A gap in the record is a regulatory failure, which makes offline behaviour, reconciliation and background execution the core of the work.",
        "Kotlin Multiplatform project: business logic lives in a shared module that is compiled into an iOS framework, with a SwiftUI and MVVM presentation layer on top. I built the iOS module from scratch and review all iOS work from four contributors.",
        "Shipped under several white-label brands from one codebase. GitLab CI, SwiftLint as a build-tool plugin, per-brand configuration."
      ],
      tech: ["Swift", "SwiftUI", "Kotlin Multiplatform", "Realm", "MapLibre", "Keychain", "GitLab CI"]
    },
    {
      name: "Yapartner",
      org: "Fleet Soft",
      period: "2023 – 2026",
      summary: "A driver app for taxi, courier and delivery fleets across Kazakhstan, Uzbekistan, Kyrgyzstan and Georgia, shipped as a separate branded app per operator from one codebase.",
      bullets: [
        "Real-time shift tracking with a taximeter UI, balance and instant payouts, park and team administration, QR payments, Face ID and Touch ID, JWT auth. Two regions with separate backends.",
        "Sole iOS engineer. UIKit and Storyboards with Combine, newer screens in SwiftUI. Charts, TinyConstraints, Kingfisher, Firebase. Per-brand Xcode targets; 140K+ lifetime downloads across the platform.",
        "A dozen further brands have since been delisted as their operators wound down."
      ],
      tech: ["Swift", "UIKit", "SwiftUI", "Combine", "Firebase", "Kingfisher", "TinyConstraints", "CocoaPods", "SPM"],
      apps: [
        { id: "6462872437", name: "Yapartner моментальные выплаты", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6f/9c/59/6f9c595a-f46e-0963-9e45-2ed1fd5bdd84/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6466409181", name: "Yapartner Доставка", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/17/8b/ac/178bac3c-7fe1-bf4c-a8ab-de4cc587bb7f/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6467635493", name: "Yapartner Узбекистан", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e5/33/ee/e533ee21-1cca-422f-a2ac-c44155dc4496/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6466794905", name: "Yapartner Кыргызстан", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/fe/55/ae/fe55aee6-958d-0551-3d28-76b949be3744/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6466275218", name: "Алга Выплаты", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/9e/2d/54/9e2d5476-b6aa-58f1-776f-f0bc12eba70e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6474038014", name: "ABYROY", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/cf/28/31/cf283155-8fba-8538-1041-a6d05941bf64/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6468660954", name: "Tarlan park", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/70/ab/a0/70aba062-b782-49fb-a5ff-9a25de7d9052/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6472653054", name: "Temirlan такси", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/85/09/11/850911f8-07b5-db0a-e94e-6758b23f3805/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6468870520", name: "IDIRIS SERVICE", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/41/39/66/41396691-6985-4cc4-8c5c-79eaec849ba4/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6605931855", name: "Euro Park", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/20/20/e6/2020e63a-fdcf-9398-900f-e4ac06d897a2/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6670748292", name: "Esentaitaxi", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b1/33/3c/b1333c8c-6f8e-cda4-18e5-10a6ad952f0e/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6760363678", name: "Esentaitaxi 2", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d7/38/8a/d7388ae3-a538-08e8-6ae2-d3ae98972e1a/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6736765311", name: "ТАКСОПАРК PAYDA", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7d/30/b3/7d30b343-d188-3b2b-7b54-3346ae4d9c9c/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6743156549", name: "TITAN TAXI", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ac/d9/b2/acd9b26a-398c-c726-26a8-1c490731544d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6745899827", name: "MenTaxi", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/73/66/13/736613f1-ccb7-14ff-d4b2-3163eef07fab/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6746418390", name: "One Click Taxi", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d1/11/da/d111da95-ff94-276e-e331-7707b168d665/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6747514280", name: "YATAXI Таксопарк No.1", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ee/89/74/ee8974c2-8422-c25d-e816-f3a1f49aa9dd/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg" },
        { id: "6751726573", name: "DeLUXE", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/c6/34/d5/c634d5e0-4796-756e-41fc-c1a7239a3a6a/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.jpg" },
        { id: "6752662592", name: "Boomtaxi", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3e/d9/4d/3ed94d0a-a145-925f-618e-b1d5c0e46c05/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6754195937", name: "CourierPRO", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/3d/40/9d/3d409d5d-e8bd-21ab-e055-7395693f1ebc/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6757017269", name: "Go24", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/2f/ff/8d/2fff8da6-cf08-c2f0-f99e-64fd16416d98/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6759922442", name: "TaxiPAY.ge", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/48/b7/7a48b7ae-ccc7-5de6-c119-000ffaba02f8/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6760033068", name: "Jet Group", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/56/15/82/5615826e-955f-abac-b908-cb0bd3ac6927/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6761935068", name: "Global.Taxi", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/82/51/ec/8251ec4c-81b2-6b88-4542-b20930c5227c/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-85-220.png/512x512bb.jpg" },
        { id: "6762038612", name: "Сат Сапар", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/14/50/06/14500693-eaeb-2fb3-11a2-168200932802/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6776316712", name: "017 PARK", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/c8/88/4a/c8884a20-257c-dcae-fe3b-d65b9f7c25b8/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6776331166", name: "Global Driver", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e9/4b/97/e94b9783-64c2-d529-867c-8237fd95058d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6740812693", name: "FleetSoft.Lite", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5b/cc/10/5bcc10bc-20ae-2930-483c-13f75c988ba1/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" },
        { id: "6771455319", name: "Driver-Pro WB", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6c/84/4c/6c844c19-a699-f1ff-1ff4-4f890a4d8475/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" }
      ]
    },
    {
      name: "Driver Pro",
      org: "Fleet Soft",
      period: "2024 – 2026",
      summary: "Second-generation driver platform, rebuilt SwiftUI-first on a separate codebase, with the same white-label model: one target per brand over a shared core.",
      bullets: [
        "MVVM with Combine, Keychain-backed auth, Firebase, Kingfisher. 28 build configurations across 14 brands."
      ],
      tech: ["Swift", "SwiftUI", "Combine", "Keychain", "Firebase"],
      apps: [
        { id: "6692622166", name: "Driver-Pro", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/71/18/78/711878e4-36d5-2bdd-1c23-14f0321fa921/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6744142656", name: "SPACE — Taxi & Delivery", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3b/c1/d3/3bc1d314-d56e-399c-d57f-a93a64567a80/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6745568399", name: "White partner", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d9/c1/67/d9c16750-917d-83ff-6bbf-83768cd3100b/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6747824284", name: "Napruga", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/1b/b5/cd/1bb5cd14-aad8-bb6c-79d7-dd0594e8cd08/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6752306963", name: "Level Drive Partner", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a8/a8/f9/a8a8f947-b60b-e56a-6bda-cbeda95dd996/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg" },
        { id: "6752789704", name: "X-PARTNER", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/bd/ea/54/bdea54c7-93c1-59b1-1cc6-0f7e3f17e023/AppIcon-0-0-1x_U007emarketing-0-11-0-sRGB-85-220.png/512x512bb.jpg" },
        { id: "6754648239", name: "VIVA Partner", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a5/85/9e/a5859e47-fc94-6fa0-519c-b5c44b1607e6/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6754889409", name: "Ready Group", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/27/f0/fc/27f0fc9f-6782-049d-e9a8-c47651ffd75a/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6758021153", name: "Star Partner", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/25/9d/ec/259decc5-0c73-8e77-dd6d-604db5b558ca/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6761129876", name: "PWR CAR Partner", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d7/9b/73/d79b73ca-853d-af68-72d3-21f3e5ce2191/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6761775058", name: "SOWA Taxi Driver", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/3e/65/39/3e653945-017b-3559-0c8c-a4bf8964426c/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6765459962", name: "Delivery Pro", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f5/1c/ea/f51ceabb-d2e8-aada-892e-bf3d2bde526f/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" },
        { id: "6776701441", name: "NEXT partner", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f0/5c/07/f05c07aa-508b-5d77-b6c5-704f83d6178f/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" }
      ]
    },
    {
      name: "IronFleet",
      org: "Fleet Soft",
      period: "2024 – 2026",
      summary: "Car-rental fleet management: real-time vehicle status and financial accounting for operators. SwiftUI, Swift-JWT, Keychain.",
      tech: ["Swift", "SwiftUI", "Swift-JWT", "Keychain", "Firebase"],
      apps: [
        { id: "6741416311", name: "Alma Taxi", icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cf/4e/74/cf4e74b1-830a-6113-6b81-29bee97dfc60/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/512x512bb.jpg" }
      ]
    }
  ],

  /* -------------------------------------------------------------
     EXPERIENCE — newest first
     { company, period, location, paragraphs: [...] }
  ------------------------------------------------------------- */
  experience: [
    {
      company: "TrackEnsure Inc.",
      period: "2025 – present",
      location: "remote",
      paragraphs: [
        "US and Canada logistics tech. Built the iOS module of the ELD product from scratch — architecture, conventions, a SwiftUI and MVVM layer over shared Kotlin Multiplatform use cases. I review all iOS work from four contributors and stand in for the iOS lead when needed, including two spells covering the role while it was vacant."
      ]
    },
    {
      company: "Fleet Soft",
      period: "2023 – 2026",
      location: "Kyiv",
      paragraphs: [
        "Sole iOS engineer, full-time to 2025 and part-time since. Owned everything iOS across four codebases: architecture, releases, App Store publishing, the Apple Developer account and App Review communication."
      ]
    },
    {
      company: "CHI Software",
      period: "2022 – 2023",
      location: "remote",
      paragraphs: [
        "First commercial role, three-person iOS team, daily client communication in English. Fleet monitoring for a US carrier: GPS route tracking with real-time sensors — tire pressure, container door status, accelerometer-based driving-style analysis."
      ]
    }
  ],

  /* -------------------------------------------------------------
     SKILLS — grouped. Each group is one line on the page.
  ------------------------------------------------------------- */
  skills: [
    { label: "Language and UI", items: "Swift, SwiftUI, UIKit, Combine, Swift Concurrency" },
    { label: "Architecture", items: "Clean Architecture, MVVM, MVP, multi-target white-label codebases" },
    { label: "Cross-platform", items: "Kotlin Multiplatform — consuming shared logic from iOS" },
    { label: "Data and network", items: "URLSession, REST, GraphQL, Realm, Core Data, Keychain" },
    { label: "Platform", items: "APNs, Firebase, localization, App Store publishing end to end" },
    { label: "Process", items: "XCTest, code review, GitLab CI, SwiftLint, SPM, CocoaPods" }
  ],

  /* -------------------------------------------------------------
     WRITING — optional. Empty array hides the section.
     { title, summary, url }
  ------------------------------------------------------------- */
  writing: []
};
