
$(function() {

    // Populate using an object literal

//    WTF.init({
//
//        heading: [
//			"Let me tell you what happened last night...",
//			"Check this shit out,",
//			"You had a wild night? Let me tell you about my night!",
//			"So remember when I said I haven't had sex in a while...",
//			"Dude, you won't believe this!",
//			"There I was at the bar when...",
//        ],
//        response: [
//            "I need a cold shower now.",
//			"Get your mind out of the gutter!",
//			"Pardon me, I've got a hot flash coming on...",
//			"I feel like a sinner in church!",
//			"Good gravy!",
//        ],
//
//        template: [
//			"@adjective @loveinterest @verbed and @verbed me!",
//			"I was caught @verbing the @adjective @loveinterest in the @locations!",
//			"A @adjective @loveinterest stuck thier @bodypart in my @bodypart!",
//			"Author @author wrote a smutty erotica about me @verbing a @adjective @loveinterest! How cool!",
//        ],
//
//        author: [
//			"Honey Cummings",
//			"Ali Whippe",
//			"Grayson Ace",
//			"Leo Sparx",
//			"Dalia Lance",
//			"Randy Cloose",
//			"Chastity Veldt",
//		],
//		
//		adjective: [
//            "bigoted",
//            "bitchy",
//            "blunt",
//            "boisterous",
//            "bossy",
//            "brave",
//            "callous",
//            "cautious",
//            "charming",
//            "cheerful",
//            "churlish",
//            "cold",
//            "composed",
//            "conceited",
//            "condescending",
//            "confident",
//            "conscientious",
//            "cool-headed",
//            "courageous",
//            "crabby",
//            "crass",
//            "critical",
//            "cruel",
//            "cunning",
//            "curious",
//            "cynical",
//            "decisive",
//            "dependable",
//            "determined",
//            "driven",
//            "fearless",
//            "flamboyant",
//            "flirtatious",
//            "friendly",
//            "gruff",
//            "headstrong",
//            "hot-headed",
//            "lazy",
//            "loud",
//            "Machiavellian",
//            "moody",
//            "philosophical",
//            "pompous",
//            "pretty chill",
//            "romantic",
//            "selfish",
//            "sensitive",
//            "tactless",
//            "thoughtful",
//            "wary",
//            "depressed",
//            "delightful",
//            "demure",
//            "diligent",
//            "disruptive",
//            "discerning",
//            "dramatic",
//            "dutiful",
//            "frank",
//            "funny",
//            "fussy",
//            "generous",
//            "gentle",
//            "gloomy",
//            "grave",
//            "grouchy",
//            "guarded",
//            "hateful",
//            "helpful",
//            "hot-headed",
//            "hypercritical",
//            "level-headed",
//            "mean",
//            "methodical",
//            "meticulous",
//            "miserable",
//            "motivated",
//            "morose",
//            "naive",
//            "nosy",
//            "peaceful",
//            "pensive",
//            "plain-speaking",
//            "playful",
//            "plucky",
//            "positive",
//            "proud",
//            "prejudiced",
//            "quick-tempered",
//            "reliable",
//            "reluctant",
//            "resentful",
//            "resourceful",
//            "respectful",
//            "restless",
//            "sassy",
//            "sentimental",
//            "short-tempered",
//            "snobby",
//            "sombre",
//            "sophisticated",
//            "spiteful",
//            "soulless",
//            "stern",
//            "stoic",
//            "surly",
//            "sweet",
//            "suspicious",
//            "talented",
//            "warm-hearted",
//            "wary",
//            "well-intentioned",
//            "adventurous",
//            "agreeable",
//            "ambitious",
//            "anxious",
//            "apathetic",
//            "argumentative",
//            "assertive",
//            "attentive",
//            "impulsive",
//            "intolerant",
//            "inventive",
//            "overemotional",
//            "unpredictable",
//            "eager",
//            "easy-going",
//            "egotistical",
//            "emotional",
//            "enterprising",
//            "enthusiastic",
//            "excitable",
//            "impatient",
//            "impetuous",
//            "inconsiderate",
//            "insensitive",
//            "irritable",
//            "obnoxious",
//            "old-fashioned",
//            "outgoing",
//            "outspoken",
//            "unbalanced",
//            "unstable",
//            "absent minded",
//            "melodramatic",
//            "paranoid",
//            "chipper",
//            "passive-aggressive",
//            "amicable",
//            "broad-minded",
//            "compassionate",
//            "considerate",
//            "diplomatic",
//            "faithful",
//            "hard-working",
//            "modest",
//			"naked",
//			"sexy",
//			"sultry",
//			"handsome",
//			"gorgeous",
//        ],
//
//        loveinterest: [
//            "Professor",
//			"Bouncer",
//			"Chef",
//			"Chupacabra",
//			"Sasquatch",
//			"Bigfoot",
//			"Skunk Ape",
//			"Blue Lady",
//			"Woman in White",
//			"Bloody Mary",
//			"Yeti",
//			"Jersey Devil",
//			"Leprachaun",
//			"Faerie",
//			"Mermaid",
//			"Siren",
//			"Minotaur",
//			"Billionnaire",
//			"Bodyguard",
//			"Bartender",
//			"Guber Driver",
//			"Biker",
//			"Prince",
//			"Priest",
//			"Archbishop",
//			"Blacksmith",
//			"Princess",
//			"Janitor",
//			"Comedian",
//			"Yoga Instructor",
//			"Dante",
//			"John",
//			"Cedric",
//			"Incubus",
//			"Succubus",
//			"Demon",
//			"Vampire",
//			"Bloodeater",
//			"Champion",
//			"Troll",
//			"Wolf",
//			"Big Bad Wolf",
//			"Red",
//			"Goldie",
//			"Peter von Schmidt",
//			"Organ Player",
//        ],
//
//        verbed: [
//            "kissed",
//			"hugged",
//			"groped",
//			"licked",
//			"touched",
//			"goosed",
//			"fingered",
//			"banged",
//			"fucked",
//			"bit",
//        ],
//		
//		verbing: [
//            "kissing",
//			"hugging",
//			"groping",
//			"licking",
//			"touching",
//			"goosing",
//			"fingering",
//			"banging",
//			"fucking",
//			"biting",
//        ],
//		
//		       
//		verb: [
//            "kiss",
//			"hug",
//			"grope",
//			"lick",
//			"touch",
//			"goose",
//			"finger",
//			"bang",
//			"fuck",
//			"bite",
//        ],
//		
//				       
//		bodypart: [
//            "tongue",
//			"ear",
//			"mouth",
//			"finger",
//			"hand",
//			"foot",
//			"pussy",
//			"cock",
//			"dick",
//			"devl doorbell",
//        ],
//		
//        locations: [
//			"closet",
//			"office",
//			"garage",
//			"bed",
//			"boat",
//			"canoe",
//			"car",
//			"movie theater",
//			"classroom",
//			"teacher's office",
//		],
//		
//		
//    });

    // Populate using a JSON file
    // WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );
    WTF.init( '1ETfPSeCQJoLRRkqQQ6b8P4hvVJ8UrXbuNFZ9SRUqOsA' );

}); 
