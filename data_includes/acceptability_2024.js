var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))));

var continueMessage = ["Klikni zde"];

var aj = "AcceptabilityJudgment";

var q = "Question";

var completionMessage = "[Zadané odpovědi jsou odeslány na server. Děkujeme za spolupráci!]";

var ms = "Message";

var defaults = [    
    "Separator", { transfer: 800,
                   normalMessage: "Počkejte prosím na další položku v experimentu.",
                   errorMessage: "Špatně. Počkejte prosím na další položku v experimentu." 
		 },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5"],
                               presentAsScale: true,
                               leftComment: "(absolutně nepřijatelná věta)", rightComment: "(věta je naprosto v pořádku)" },
    "Message", { hideProgressBar: true, transfer: "click" }
];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],
 
	      ["intro", "Form", {continueMessage: "Pro vstup do experimentu, klikněte zde", html: { include: "example_intro.html" }}],

	      ["practice", aj, {s: {html: "<p>Kontext: v českých obchodech se lahvová piva obvykle prodávají po 0.5 litru.</p><p>Věta: <b>Pokud jde o piva, tak v obchodě Petr koupil tři.  </b></p><p><i>Tato věta je v daném kontextu pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve vinotékách se na začátku listopadu prodává první letošní víno.</p><p>Věta: <b>Pokud jde letošní víno, tak všechno letošní červené víno bylo už vyprodané.  </b></p><p><i>Tato věta je v daném kontextu pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve zverimexech se prodává mnoho druhů akvarijních rybiček, např. neonky, gupky, ...</p><p>Věta: <b>Pokud jde letošní neonky, tak Petr koupil všechnu neonku.  </b></p><p><i>Tato věta je v daném kontextu pořádku, ale není gramatická. Pokud souhlasíte, vyberte jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-num-nodef", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo několik druhů pěnkav. Dva biologové (A a B) si povídají o pěnkavách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o druhy pěnkav, v 18. až 20. století vědci studovali dvě pěnkavy: kanárské a obecné.  </b></p>"}}],
[["first-item1-num-def", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo několik druhů pěnkav. Dva biologové (A a B) si povídají o pěnkavách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o kanárskou pěnkavu a obecnou pěnkavu, v 18. až 20. století vědci studovali tyto dvě pěnkavy.  </b></p>"}}],

[["first-item2-num-nodef", 1], aj, {s: {html: "<p> Kontext: v současnosti je známo více než pět druhů medvědů. Dva zaměstnanci různých Zoo (A a B) si povídají o medvědech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o druhy medvědů, naše Zoo chová dva medvědy: hnědé a lední. </b></p>"}}],
[["first-item2-num-def", 1], aj, {s: {html: "<p> Kontext: v současnosti je známo více než pět druhů medvědů. Dva zaměstnanci různých Zoo (A a B) si povídají o medvědech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o hnědého medvěda a ledního medvěda, naše Zoo chová tyto dva medvědy.  </b></p>"}}],

[["first-item3-num-nodef", 1], aj, {s: {html: "<p>Kontext: v ČR je se pěstuje více než pět druhů ovocných stromů. Dva farmáři (A a B), každý z jiného regionu, si povídají o ovocných stromech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o druhy ovocných stromů, v našem regionu farmáři pěstují dva ovocné stromy: jabloně a hrušně.</b></p>"}}],
[["first-item3-num-def", 1], aj, {s: {html: "<p>Kontext: v ČR je se pěstuje více než pět druhů ovocných stromů. Dva farmáři (A a B), každý z jiného regionu, si povídají o ovocných stromech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o jabloň a hrušeň, v našem regionu farmáři pěstují tyto dva ovocné stromy.</b></p>"}}],

[["first-item4-num-nodef", 1], aj, {s: {html: "<p>Kontext: Je známo několik druhů moru. Dva lékaři (A a B) si povídají o moru a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o typy moru, u nás běžné vakcíny hubí dva mory: dýmějový a septický.</b></p>"}}],
[["first-item4-num-def", 1], aj, {s: {html: "<p>Kontext: Je známo několik druhů moru. Dva lékaři (A a B) si povídají o moru a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o dýmějový mor a septický mor, u nás běžné vakcíny hubí tyto dva mory.  </b></p>"}}],


[["first-item5-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo alespoň 300 druhů chobotnic. Dva rybáři (A a B) si povídají o chobotnicích a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o chobotnici obecnou, tak tradičně naši rybáři tuto chobotnici loví. </b></p>"}}],
[["first-item5-nonum-pl", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo alespoň 300 druhů chobotnic. Dva rybáři (A a B) si povídají o chobotnicích a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o chobotnici pacifickou a chobotnici obecnou, tak tradičně naši rybáři tyto chobotnice loví.</b></p>"}}],

[["first-item6-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo mnoho druhů ústřic. Dva prodavači v rybárně (A a B) si povídají o ústřicích a v reakci na to, co řekl A, B odpovídá: </p><p>Věta: <b>Pokud jde o ústřici jedlou, v naší zemi tuto ústřici chováme.</b></p>"}}],
[["first-item6-nonum-pl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo mnoho druhů ústřic. Dva prodavači v rybárně (A a B) si povídají o ústřicích a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o ústřici jedlou a ústřici obrovskou, v naší zemi tyto ústřice chováme.</b></p>"}}],

[["first-item7-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo několik druhů kaktusů. Dva zahradníci (A a B) si povídají o kaktusech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b> Pokud jde o kaktus hvězdnatý, v naší zahradě tento kaktus pěstujeme.  </b></p>"}}],
[["first-item7-nonum-pl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo několik druhů kaktusů. Dva zahradníci (A a B) si povídají o kaktusech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kaktus hvězdnatý a kaktus sloupcovitý, v naší zahradě tyto kaktusy pěstujeme.</b></p>"}}],

[["first-item8-nonum-nopl", 1], aj, {s: {html: "<p> Kontext: Je známo několik druhů kávy. Dva baristé (A a B) si povídají o kávě a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o kávu robustu, v přípravném kurzu jsme tuto kávu studovali.</b></p>"}}],
[["first-item8-nonum-pl", 1], aj, {s: {html: "<p> Kontext: Je známo několik druhů kávy. Dva baristé (A a B) si povídají o kávě a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kávu robustu a kávu arabiku, v přípravném kurzu jsme tyto kávy studovali.</b></p>"}}],


["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],
];
