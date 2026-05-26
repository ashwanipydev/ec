export const curriculumPhases = [
  {
    id: 1,
    title: "Phase 1: Foundation",
    days: "Days 1–15",
    focus: "Grammar basics, sentence structure, pronunciation",
    hindi: "नीव बनाना",
    color: "var(--color-primary-light)"
  },
  {
    id: 2,
    title: "Phase 2: Communication",
    days: "Days 16–35",
    focus: "Speaking, listening, real conversations",
    hindi: "बातचीत की practice",
    color: "var(--color-accent-light)"
  },
  {
    id: 3,
    title: "Phase 3: Professional",
    days: "Days 36–50",
    focus: "Office English, emails, meetings",
    hindi: "Office के लिए English",
    color: "var(--color-secondary-light)"
  },
  {
    id: 4,
    title: "Phase 4: Fluency Push",
    days: "Days 51–60",
    focus: "Speed, confidence, thinking in English",
    hindi: "Fluency और confidence",
    color: "var(--color-alert-light)"
  }
];

export const curriculumDays = [
  {
    day: 1,
    phase: 1,
    title: "The Sentence Structure Secret",
    focus: "Subject + Verb + Object",
    hindiTitle: "वाक्य बनाने का नियम",
    quote: "Hindi speakers already understand sentence logic — we just need to remap it to English structure.",
    theory: [
      "The single biggest difference between Hindi and English is word order. In Hindi, we place the object before the verb, whereas in English, the verb always comes before the object.",
      "Hindi Order: Subject + Object + Verb (S + O + V) -> 'मैं (S) खाना (O) खाता हूँ (V)'",
      "English Order: Subject + Verb + Object (S + V + O) -> 'I (S) eat (V) food (O)'"
    ],
    formula: "S + V + O (Subject + Verb + Object)",
    examples: [
      { hindi: "मैं पानी पीता हूँ।", english: "I drink water." },
      { hindi: "वो English बोलती है।", english: "She speaks English." },
      { hindi: "हम office जाते हैं।", english: "We go to office." },
      { hindi: "वे project पर काम करते हैं।", english: "They work on the project." }
    ],
    drill: {
      question: "Convert this Hindi sentence to English structure: 'हम file भेजते हैं'",
      hint: "Subject (हम = We) + Verb (भेजते हैं = send) + Object (file)",
      answer: "We send the file",
      choices: ["We send file", "We send the file", "File we send"]
    },
    speakingTask: "Say 10 sentences about your daily routine using the S+V+O structure out loud (e.g., 'I wake up. I drink tea. I start my computer.')."
  },
  {
    day: 2,
    phase: 1,
    title: "Verbs: The Heart of Every Sentence",
    focus: "Be verbs, Action verbs, Helper verbs",
    hindiTitle: "क्रिया (Verbs) के प्रकार",
    quote: "Common Mistake: Hindi speakers often drop 'am/is/are' (e.g., 'I developer' instead of 'I am a developer').",
    theory: [
      "Every English sentence needs a verb. Verbs describe what someone is, does, or experiences.",
      "1. Be Verbs (State of being): am, is, are, was, were. Used to describe identity, location, or status (e.g., 'I am at office').",
      "2. Action Verbs (Physical/mental action): eat, write, work, speak, code (e.g., 'She codes fast').",
      "3. Helper/Modal Verbs (Expressing ability/necessity): can, will, should, must (e.g., 'We should start')."
    ],
    formula: "Subject + Be Verb + Noun/Adjective",
    examples: [
      { hindi: "मैं एक developer हूँ।", english: "I am a developer." },
      { hindi: "वो busy है।", english: "He/She is busy." },
      { hindi: "हम meeting में हैं।", english: "We are in the meeting." },
      { hindi: "आप सही हैं।", english: "You are right." }
    ],
    drill: {
      question: "Correct this sentence: 'They in the cabin.'",
      hint: "Don't forget the 'Be' verb for 'They'.",
      answer: "They are in the cabin",
      choices: ["They is in the cabin", "They are in the cabin", "They was in the cabin"]
    },
    speakingTask: "Introduce yourself 5 times, increasing your speed and confidence: 'My name is ___. I am a ___. I work at ___. I live in ___.'"
  },
  {
    day: 3,
    phase: 1,
    title: "Present Tense: Simple vs. Continuous",
    focus: "Routine vs. Actions Happening Right Now",
    hindiTitle: "वर्तमान काल (Routine बनाम अभी का काम)",
    quote: "The Trick: If you say 'अभी' (right now) — use Continuous. If it is a habit/routine — use Simple Present.",
    theory: [
      "Simple Present is used for habits, routines, or general facts. Formula: Subject + V1 (add 's/es' for singular he/she/it). E.g., 'He checks emails.'",
      "Present Continuous is used for actions happening at this exact moment. Formula: Subject + am/is/are + Verb-ing. E.g., 'He is checking emails now.'"
    ],
    examples: [
      { hindi: "मैं रोज काम करता हूँ। (Routine)", english: "I work every day." },
      { hindi: "मैं अभी काम कर रहा हूँ। (Right Now)", english: "I am working right now." },
      { hindi: "वो meeting attend करती है। (Habit)", english: "She attends meetings." },
      { hindi: "वो meeting attend कर रही है। (Right Now)", english: "She is attending a meeting." }
    ],
    drill: {
      question: "Complete: 'Look! She _______ the presentation.'",
      hint: "It is happening right now, visual cue: 'Look!'.",
      answer: "is presenting",
      choices: ["presents", "is presenting", "are presenting"]
    },
    speakingTask: "Speak 5 sentences about your daily routine (Simple Present) and 5 sentences about what is happening around you right now (Present Continuous)."
  },
  {
    day: 4,
    phase: 1,
    title: "Past Tense: The Only Two You Need",
    focus: "Simple Past (V2) & Past Continuous",
    hindiTitle: "भूतकाल (बीता हुआ समय)",
    quote: "Learn the 20 most common irregular V2 forms like 'went', 'sent', 'met', 'did', 'spoke'.",
    theory: [
      "Simple Past: Refers to an action completed in the past. Formula: Subject + V2. E.g., 'I sent the email.'",
      "Past Continuous: Refers to an action that was ongoing in the past when another action occurred. Formula: Subject + was/were + Verb-ing. E.g., 'I was typing when she entered.'"
    ],
    examples: [
      { hindi: "मैंने report भेजी।", english: "I sent the report." },
      { hindi: "मैं कल office गया था।", english: "I went to office yesterday." },
      { hindi: "हम कल discuss कर रहे थे।", english: "We were discussing yesterday." },
      { hindi: "जब उसने call किया, मैं code कर रहा था।", english: "I was coding when he called." }
    ],
    drill: {
      question: "What is the past form (V2) of the verb 'take'?",
      hint: "It is an irregular verb. E.g., 'I ____ the decision.'",
      answer: "took",
      choices: ["taken", "taked", "took"]
    },
    speakingTask: "Describe your entire yesterday in detail using at least 10 Simple Past (V2) sentences."
  },
  {
    day: 5,
    phase: 1,
    title: "Future Tense: 3 Simple Ways",
    focus: "Will, Going To, and Present Continuous",
    hindiTitle: "भविष्य काल (आने वाला समय)",
    quote: "We use 'will' for instant decisions, 'going to' for planned actions, and 'continuous' for fixed schedules.",
    theory: [
      "1. Will: Used for spontaneous choices, promises, or predictions. E.g., 'I will help you.'",
      "2. Going to: Used for intentions or pre-planned actions. E.g., 'I am going to buy a laptop.'",
      "3. Present Continuous for Future: Used for fixed arrangements with a specific time/place. E.g., 'I am meeting the client tomorrow.'"
    ],
    examples: [
      { hindi: "मैं आपको call करूँगा। (Decision right now)", english: "I will call you." },
      { hindi: "मैं कल training attend करने वाला हूँ। (Planned)", english: "I am going to attend the training tomorrow." },
      { hindi: "हम शुक्रवार को client से मिल रहे हैं। (Fixed arrangement)", english: "We are meeting the client on Friday." }
    ],
    drill: {
      question: "Which form is best for a quick promise? 'I _____ you the file in 5 minutes.'",
      hint: "Instant promise or reaction.",
      answer: "will send",
      choices: ["am sending", "will send", "going to send"]
    },
    speakingTask: "Plan your day tomorrow. Speak 10 sentences out loud outlining your plans, using a mix of 'will', 'going to', and 'meeting/working' formats."
  },
  {
    day: 6,
    phase: 1,
    title: "Questions: The Most Important Skill",
    focus: "Yes/No and WH- Questions",
    hindiTitle: "सवाल पूछना सीखें",
    quote: "WH-Question Formula: WH-Word + Helper Verb + Subject + Main Verb? E.g., Where are you going?",
    theory: [
      "If you can ask questions, you can lead any conversation. There are two categories:",
      "1. Yes/No Questions: Shift the helping verb to the front. E.g., 'You are busy' -> 'Are you busy?'",
      "2. WH Questions: Use question words like What, Where, When, Who, Why, How. Apply the golden formula: WH-word + Helper + Subject + Main Verb."
    ],
    examples: [
      { hindi: "क्या आप आ रहे हैं?", english: "Are you coming?" },
      { hindi: "आपकी meeting कब है?", english: "When is your meeting?" },
      { hindi: "यह task कौन handle कर रहा है?", english: "Who is handling this task?" },
      { hindi: "हम इसे कैसे solve कर सकते हैं?", english: "How can we solve this?" }
    ],
    drill: {
      question: "Arrange into a proper WH-question: 'she / when / arrive / will'",
      hint: "WH-word (When) + Helper (will) + Subject (she) + Verb (arrive)?",
      answer: "When will she arrive?",
      choices: ["When she will arrive?", "When will she arrive?", "Will when she arrive?"]
    },
    speakingTask: "Imagine you are interviewing a new colleague. Ask 8 different WH questions out loud (e.g., 'What is your background?', 'Where do you work?')."
  },
  {
    day: 7,
    phase: 1,
    title: "Weekly Revision & Mock Session",
    focus: "Synthesizing Sentence Building & Tenses",
    hindiTitle: "साप्ताहिक दोहराव (Revision)",
    quote: "Revision day! Look back at sentence structure, be verbs, questions, and the three core tenses.",
    theory: [
      "Review the concepts of Days 1 through 6. Focus on speed and removing hesitation.",
      "Checklist:",
      "- Can you confidently form Subject + Verb + Object sentences?",
      "- Do you avoid dropping 'am/is/are'?",
      "- Can you switch between simple tenses (routine) and continuous tenses (actions in progress)?",
      "- Can you correctly construct past tense sentences and ask questions?"
    ],
    examples: [
      { hindi: "मैं कल office गया था और client से मिला।", english: "I went to the office yesterday and met the client." },
      { hindi: "क्या आप project complete कर रहे हैं?", english: "Are you completing the project?" }
    ],
    drill: {
      question: "Identify the incorrect sentence in this group:",
      hint: "Look closely at tenses and auxiliary verbs.",
      answer: "I yesterday went to office.",
      choices: ["I went to office yesterday.", "I yesterday went to office.", "I am going to office now."]
    },
    speakingTask: "Introduce yourself, talk about your routine, summarize your yesterday, and list your future plans. Try to speak continuously for 3 minutes without halting."
  },
  {
    day: 8,
    phase: 1,
    title: "Modal Verbs: The Polite English Secret",
    focus: "Could, Should, Would, Can, May, Must",
    hindiTitle: "विनम्रता से बात करना (Polite English)",
    quote: "Office Upgrade: Never say 'Send me the file.' (sounds rude). Say: 'Could you please send me the file?'",
    theory: [
      "Modal verbs change the mood of the sentence, expressing ability, advice, permission, or politeness.",
      "1. Could / Would: The ultimate polite tools for requests (e.g., 'Could you help me?' / 'Would you like some tea?').",
      "2. Should: Used for giving recommendations/advice (e.g., 'You should review this').",
      "3. Must / Have to: Used for strong necessity or obligations (e.g., 'We must deliver this today').",
      "4. May: Formal permission (e.g., 'May I share my screen?')."
    ],
    examples: [
      { hindi: "क्या आप check कर सकते हैं? (Polite)", english: "Could you please check this?" },
      { hindi: "क्या मैं screen share करूँ? (Formal)", english: "May I share my screen?" },
      { hindi: "आपको update भेजना चाहिए। (Advice)", english: "You should send the update." },
      { hindi: "हमें deadline meet करनी होगी। (Obligation)", english: "We have to meet the deadline." }
    ],
    drill: {
      question: "Which modal verb makes this request the most polite? '_____ you please review this draft?'",
      hint: "Used for polite professional requests.",
      answer: "Could",
      choices: ["Can", "Should", "Could"]
    },
    speakingTask: "Take 5 commands you might say to colleagues (e.g., 'Help me', 'Listen to me', 'Read this email') and convert them into very polite modal requests."
  },
  {
    day: 9,
    phase: 1,
    title: "Articles: A, An, The",
    focus: "Definite vs. Indefinite Noun Markers",
    hindiTitle: "छोटे शब्द जो जरूरी हैं (Articles)",
    quote: "Articles do not exist in Hindi, which is why Hindi speakers make the most mistakes here.",
    theory: [
      "1. A / An (Indefinite): Used when talking about something in general, or for the first time.",
      "- Use 'A' before consonant sounds (e.g., a meeting, a report, a computer).",
      "- Use 'An' before vowel sounds: A, E, I, O, U (e.g., an email, an hour, an office, an employee). Note: vowel *sound* matters, not just the spelling ('an hour' sounds like 'our').",
      "2. The (Definite): Used when both the speaker and listener know exactly which specific object is being discussed (e.g., 'Check the email I sent yesterday')."
    ],
    examples: [
      { hindi: "मैंने आपको एक email भेजा है।", english: "I have sent you an email." },
      { hindi: "Meeting start हो गई है। (Specific meeting)", english: "The meeting has started." },
      { hindi: "मुझे एक laptop चाहिए। (Any laptop)", english: "I need a laptop." },
      { hindi: "वह एक intelligent employee है।", english: "She is an intelligent employee." }
    ],
    drill: {
      question: "Fill in the blank: 'We have _____ urgent meeting at 3 PM.'",
      hint: "Urgent starts with a vowel sound ('uh-gent').",
      answer: "an",
      choices: ["a", "an", "the"]
    },
    speakingTask: "Describe the objects in your office or room. Make sure to use 'a', 'an', or 'the' appropriately (e.g., 'I see a monitor. The monitor is black. I have an apple.')."
  },
  {
    day: 10,
    phase: 1,
    title: "Prepositions: In, On, At",
    focus: "Connecting Time and Place",
    hindiTitle: "स्थान और समय बताने वाले शब्द",
    quote: "For Time: In the morning, On Monday, At 9 AM. For Place: In Delhi, On the desk, At the entrance.",
    theory: [
      "Prepositions show how nouns relate to other words. 'In', 'On', and 'At' are the main pillars:",
      "1. AT: Used for specific times (at 3 PM) and specific spots (at my desk, at the office).",
      "2. ON: Used for days/dates (on Monday, on May 26th) and surfaces (on the table).",
      "3. IN: Used for wide time periods like months/years (in May, in 2026) and enclosed spaces or geographical areas (in the room, in Mumbai)."
    ],
    examples: [
      { hindi: "Meeting सोमवार को सुबह 9 बजे होगी।", english: "The meeting is on Monday at 9 AM." },
      { hindi: "File desk पर रखी है।", english: "The file is on the desk." },
      { hindi: "वो Bangalore में काम करता है।", english: "He works in Bangalore." },
      { hindi: "मैं 10 मिनट में free हो जाऊँगा।", english: "I will be free in 10 minutes." }
    ],
    drill: {
      question: "Correct the prepositions: 'I will meet you at Tuesday in 4 PM.'",
      hint: "Use 'on' for days and 'at' for specific times.",
      answer: "on Tuesday at 4 PM",
      choices: ["in Tuesday on 4 PM", "on Tuesday at 4 PM", "at Tuesday on 4 PM"]
    },
    speakingTask: "Speak 5 sentences describing your schedule using 'at [time]', 'on [day]', and 'in [month/room]' naturally."
  },
  {
    day: 11,
    phase: 1,
    title: "Conjunctions: Connecting Sentences",
    focus: "And, But, Or, So, Because, However",
    hindiTitle: "वाक्यों को आपस में जोड़ना",
    quote: "Conjunctions help you stop speaking in short, robotic sentences and start expressing complex thoughts.",
    theory: [
      "Instead of saying two disconnected statements, use connectors:",
      "- And: Adds similar information ('I write code and I test it').",
      "- But / However: Shows contrast ('I tried to fix it, but it failed').",
      "- Because: Explains the reason ('I was late because of traffic').",
      "- So / Therefore: Explains the result ('The file was large, so it took time to download')."
    ],
    examples: [
      { hindi: "मैं थका हुआ था इसलिए मैं जल्दी सो गया।", english: "I was tired, so I went to sleep early." },
      { hindi: "वो मेहनती है लेकिन वो कम बोलती है।", english: "She is hardworking, but she speaks less." },
      { hindi: "मैंने call किया क्योंकि मुझे मदद चाहिए थी।", english: "I called because I needed help." },
      { hindi: "हम call कर सकते हैं या email भेज सकते हैं।", english: "We can make a call or send an email." }
    ],
    drill: {
      question: "Connect: 'The server was down.' + 'We stopped coding.'",
      hint: "The down server is the REASON, or coding stoppage is the RESULT.",
      answer: "The server was down, so we stopped coding.",
      choices: [
        "The server was down, so we stopped coding.",
        "The server was down because we stopped coding.",
        "The server was down but we stopped coding."
      ]
    },
    speakingTask: "Take 5 separate thoughts about your job and link them into longer sentences using 'so', 'because', 'although', and 'but'."
  },
  {
    day: 12,
    phase: 1,
    title: "Pronunciation Foundations",
    focus: "TH, V vs. W, Short Vowels, Word Stress",
    hindiTitle: "सही उच्चारण के मूल नियम",
    quote: "English is stress-timed! Some syllables are spoken longer and louder, unlike Hindi where all syllables are equal.",
    theory: [
      "Pronunciation issues can make correct grammar sound confusing. Master these four keys:",
      "1. 'TH' sound: Place your tongue between your front teeth. Blow air for 'think/thanks' (unvoiced) and vibrate for 'this/that/there' (voiced).",
      "2. 'V' vs 'W': 'V' involves teeth touching your bottom lip (very, video). 'W' requires rounding your lips in a circle (work, week).",
      "3. Word Stress: Emphasizing the wrong syllable changes the word type. E.g., 'PRO-ject' (noun) vs 'pro-JECT' (verb)."
    ],
    examples: [
      { hindi: "Very good (वेरी गुड - teeth on lip)", english: "very good" },
      { hindi: "Work (वर्क - rounded lips)", english: "work" },
      { hindi: "Think (थिंक - tongue between teeth)", english: "think" },
      { hindi: "This (दिस - voiced TH)", english: "this" }
    ],
    drill: {
      question: "Which letter is silent in the word 'honest'?",
      hint: "Pronounced 'on-est'.",
      answer: "h",
      choices: ["h", "n", "s"]
    },
    speakingTask: "Repeat this classic tongue twister out loud 5 times, focusing on 'TH' and 'V' sounds: 'Victor's violin vivifies thirty-three vibrant vocal varieties.'"
  },
  {
    day: 13,
    phase: 1,
    title: "Vocabulary Strategy",
    focus: "The POWER Method & Word Families",
    hindiTitle: "शब्द याद रखने का सही तरीका",
    quote: "Never learn words in isolation. Always learn them inside a sentence context.",
    theory: [
      "Do not memorize long alphabetic lists. Instead, use the **POWER** system:",
      "**P**ick words from actual context (emails, videos).",
      "**O**ne word, many forms (learn its noun, adjective, and verb families).",
      "**W**rite it, say it, use it in real life.",
      "**E**xample sentences created by you.",
      "**R**eview at day 1, 3, 7, and 14 (spaced repetition).",
      "Example Word Family:",
      "- Verb: **Communicate** ('We must communicate')",
      "- Noun: **Communication** ('Communication is key')",
      "- Adjective: **Communicative** ('He is very communicative')"
    ],
    examples: [
      { hindi: "स्पष्ट करना (Clarify)", english: "Could you clarify the next steps?" },
      { hindi: "सुधारना (Improve)", english: "We need to improve our process." },
      { hindi: "संभालना (Manage)", english: "She manages the database." }
    ],
    drill: {
      question: "What is the noun form of the verb 'manage'?",
      hint: "It ends with the suffix '-ment'.",
      answer: "management",
      choices: ["manager", "management", "manageable"]
    },
    speakingTask: "Pick three English words you often hear at work but don't use. Look up their word families, and make 3 sentences for each."
  },
  {
    day: 14,
    phase: 1,
    title: "Reading Confidence Builder",
    focus: "Phrasal Chunking and Context Clues",
    hindiTitle: "इंग्लिश पढ़ने की कला",
    quote: "Stop translating word-by-word! Read in logical chunks for general meaning first.",
    theory: [
      "To read English fluently, you need two skills:",
      "1. Chunking: Reading groups of words together rather than one by one. E.g., read 'The marketing team / will present / the quarterly report / on Friday' instead of word-by-word.",
      "2. Context Clues: Guessing the meaning of unfamiliar words based on the surrounding sentences, instead of stopping to look at the dictionary every time."
    ],
    examples: [
      { hindi: "हमारा team leader / project update / कल share करेगा।", english: "Our team leader / will share / the project update / tomorrow." }
    ],
    drill: {
      question: "In the sentence 'The server is down, so the team is idle', what does 'idle' most likely mean?",
      hint: "The server is broken, so they cannot work. What is their status?",
      answer: "not active / free",
      choices: ["working hard", "not active / free", "angry"]
    },
    speakingTask: "Find a short 5-sentence news blurb. Read it aloud twice, grouping words into logical chunks, then summarize the meaning in Hindi and English out loud."
  },
  {
    day: 15,
    phase: 1,
    title: "Phase 1 Final Assessment",
    focus: "Testing Grammar, Tenses & Pronunciation",
    hindiTitle: "नींव की परीक्षा (First Phase Test)",
    quote: "Assessment Day! Measure your grammar accuracy, hesitation level, and article placement.",
    theory: [
      "Today is your test. You must write and speak without consulting your notebooks. The focus is strictly on correct sentence structure and confidence.",
      "Self-Assessment Checklist:",
      "- [ ] Introduce yourself (2 min)",
      "- [ ] Talk about yesterday's tasks (Simple Past)",
      "- [ ] Outline your schedule for next week (Future)",
      "- [ ] Ask 5 polite requests in office terms"
    ],
    examples: [
      { hindi: "Self-Test complete", english: "Let's check our logs and score ourselves." }
    ],
    drill: {
      question: "Which sentence has ZERO errors?",
      hint: "Check articles, prep positions, and tenses.",
      answer: "Could you please send me an update on Tuesday?",
      choices: [
        "I sent mail to you yesterday night.",
        "Could you please send me an update on Tuesday?",
        "He is more senior than me in office."
      ]
    },
    speakingTask: "Record a 3-minute voice memo answering: 'Tell me about yourself, what you did yesterday, and how you will handle your next project.' Listen back and log errors."
  }
];

export const officePhrases = [
  {
    category: "Emails",
    phrases: [
      { english: "Please find the attached report.", context: "जब email में file attachment भेज रहे हों" },
      { english: "I am writing to follow up on our last conversation.", context: "पुरानी बात पर दोबारा update माँगने के लिए" },
      { english: "Could you please review and share your feedback?", context: "काम check करवा कर राय माँगने के लिए" },
      { english: "Thank you for getting back to me so quickly.", context: "जल्दी reply देने के लिए धन्यवाद करने हेतु" },
      { english: "Please let me know if you need any further information.", context: "अंत में, अगर कुछ और चाहिए तो पूछने के लिए" }
    ]
  },
  {
    category: "Meetings",
    phrases: [
      { english: "Let's get started.", context: "Meeting की शुरुआत करने के लिए" },
      { english: "Can everyone hear me clearly?", context: "आवाज check करने के लिए" },
      { english: "Let's move on to the next point.", context: "अगले topic पर चर्चा करने के लिए" },
      { english: "Can we take that offline?", context: "अलग से (meeting के बाद) बात करने के लिए" },
      { english: "Let's wrap up.", context: "Meeting ख़त्म/समाप्त करने के लिए" }
    ]
  },
  {
    category: "Status Updates",
    phrases: [
      { english: "The task is in progress.", context: "काम चल रहा है" },
      { english: "We are on track to meet the deadline.", context: "समय पर काम ख़त्म होने की उम्मीद है" },
      { english: "I'm waiting on input from the marketing team.", context: "दूसरी team की जानकारी का इंतज़ार है" },
      { english: "We encountered a blocker, and I am working to resolve it.", context: "रुकावट आई है, सुलझा रहा हूँ" },
      { english: "Everything is going as planned.", context: "योजना के अनुसार काम हो रहा है" }
    ]
  }
];

export const commonMistakes = [
  {
    wrong: "I sent mail to you yesterday night.",
    correct: "I sent you an email last night.",
    reason: "Hindi speakers drop articles ('an email') and misuse 'yesterday night' instead of 'last night'.",
    category: "Grammar"
  },
  {
    wrong: "Please revert by end of day.",
    correct: "Please reply by the end of the day.",
    reason: "In standard English, 'revert' means 'to return to a previous state'. Use 'reply' or 'respond' for communication.",
    category: "Vocabulary"
  },
  {
    wrong: "Please prepone the meeting.",
    correct: "Could we move the meeting earlier?",
    reason: "'Prepone' is not a standard English word outside the Indian subcontinent. Use 'move earlier' or 'bring forward'.",
    category: "Vocabulary"
  },
  {
    wrong: "I am working here since 3 years.",
    correct: "I have been working here for 3 years.",
    reason: "For ongoing actions with duration, use Present Perfect Continuous ('have been working') and 'for' (duration) instead of 'since' (point in time).",
    category: "Grammar"
  },
  {
    wrong: "I have a doubt in this code.",
    correct: "I have a question about this code.",
    reason: "In English, 'doubt' implies mistrust/suspicion. If you have an inquiry, always say 'I have a question' or 'I have a query'.",
    category: "Vocabulary"
  },
  {
    wrong: "I yesterday went to office.",
    correct: "I went to the office yesterday.",
    reason: "Time descriptors like 'yesterday' should generally go at the end or the beginning of the sentence, not between Subject and Verb.",
    category: "Grammar"
  },
  {
    wrong: "My self is Amit.",
    correct: "I am Amit. / My name is Amit.",
    reason: "Never introduce yourself using 'Myself is...' as it is grammatically incorrect reflexive pronoun usage.",
    category: "Grammar"
  },
  {
    wrong: "We will discuss about this today.",
    correct: "We will discuss this today.",
    reason: "The verb 'discuss' does not take the preposition 'about'. You discuss a topic directly.",
    category: "Grammar"
  }
];

export const vocabularyLayers = [
  {
    layer: 1,
    title: "Survival Words",
    description: "Daily conversational anchors.",
    cards: [
      { english: "Please", hindi: "कृपया", example: "Could you please help me?" },
      { english: "Thank you", hindi: "धन्यवाद", example: "Thank you for the quick response." },
      { english: "Excuse me", hindi: "माफ़ कीजिये (ध्यान खींचने के लिए)", example: "Excuse me, where is the room?" }
    ]
  },
  {
    layer: 3,
    title: "Office Terminology",
    description: "Terms used in professional environments.",
    cards: [
      { english: "Deadline", hindi: "काम पूरा करने की अंतिम तिथि", example: "The deadline is Friday." },
      { english: "Feedback", hindi: "सुझाव/प्रतिक्रिया", example: "I appreciate your valuable feedback." },
      { english: "Blocker", hindi: "काम में आने वाली रुकावट", example: "I have a blocker in the backend API." },
      { english: "Update", hindi: "ताज़ा जानकारी", example: "Can you share the project update?" }
    ]
  },
  {
    layer: 6,
    title: "Useful Phrasal Verbs",
    description: "Action phrases combining verbs + prepositions.",
    cards: [
      { english: "Follow up", hindi: "बाद में फिर से जांच या चर्चा करना", example: "I will follow up with him tomorrow." },
      { english: "Look into", hindi: "मामले की जांच करना", example: "The support team is looking into the bug." },
      { english: "Touch base", hindi: "संक्षेप में संपर्क करना", example: "Let's touch base on Monday." },
      { english: "Point out", hindi: "किसी चीज़ की ओर ध्यान दिलाना", example: "He pointed out an error in the calculation." }
    ]
  }
];

export const flexResources = {
  youtube: [
    { channel: "BBC Learning English", focus: "Grammar + Practical speaking", level: "Beginner-Intermediate" },
    { channel: "Rachel's English", focus: "American Pronunciation & Sounds", level: "All Levels" },
    { channel: "Learn English with TV Series", focus: "Real-world movie and casual idioms", level: "Intermediate" }
  ],
  apps: [
    { name: "Duolingo", purpose: "Daily vocabulary habits" },
    { name: "ELSA Speak", purpose: "AI-powered pronunciation feedback" },
    { name: "Anki", purpose: "Spaced repetition flashcards" }
  ]
};

export const flexibleSchedules = [
  { hours: 2, title: "Standard Schedule", details: "Cut writing to 15 mins, focus strictly on Speaking Drills (30m) and Reading (30m)." },
  { hours: 3, title: "Intense Fluency Sprint", details: "Add 30 mins of active listening and repeat subtitles out loud. Do two article readings instead of one." }
];

export const fortyFiveDaysCalendar = Array.from({ length: 30 }, (_, i) => ({
  day: i + 31,
  challenge: [
    "Record a 2-minute video introduction.",
    "Call a friend and talk only in English for 5 minutes.",
    "Describe your daily commute using a voice recorder.",
    "Read a short news article and explain it out loud in 5 sentences.",
    "Roleplay: Explain why you are late to a meeting to your manager.",
    "Talk about your favorite movie out loud for 2 minutes.",
    "Roleplay: Ask your manager for a day off.",
    "Describe your dream workspace in detail.",
    "Shadow a 1-minute YouTube clip completely.",
    "Record yourself explaining your job profile to a kid.",
    "Roleplay: Lead a 3-minute team sync session.",
    "Describe a challenging work problem you solved.",
    "Call a local restaurant or business and ask questions in English.",
    "Describe a recent photo from your gallery in 5 sentences.",
    "Roleplay: Give constructive feedback to a team colleague.",
    "Read 1 paragraph from a book, record it, and check silent letters.",
    "Give a 2-minute TED-style talk on workspace rules.",
    "Roleplay: Negotiate a project deadline extension.",
    "Describe your home city as if talking to a tourist.",
    "Record a high-end 3-minute professional biography video.",
    "Roleplay: Deal with an unexpected question in a call.",
    "Summarize an English YouTube video you watched today.",
    "Talk about your career plan for the next 5 years.",
    "Roleplay: Welcome and introduce a new developer on the team.",
    "Give your detailed opinion on artificial intelligence at work.",
    "Record a 4-minute mock project presentation.",
    "Run a complete self-interview answering typical HR questions.",
    "Have a 10-minute uninterrupted dialogue with yourself on work-life balance.",
    "Write down a professional bio, practice it, and deliver it.",
    "🎓 FINAL CHALLENGE: 5-minute video presentation: Who am I, what do I do, and what are my plans?"
  ][i]
}));
