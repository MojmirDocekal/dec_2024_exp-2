var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("item"), startsWith("filler"))));

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
["practice", aj, {s: {html: "<p>Kontext: ve vinotékách se na začátku listopadu prodává první letošní víno.</p><p>Věta: <b>Pokud jde letošní víno, tak všechno letošní červené víno bylo už vyprodané.  </b></p><p><i>Tato věta je v daném kontextu v pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "<p>Kontext: ve zverimexech se prodává mnoho druhů akvarijních rybiček, např. neonky, gupky, ...</p><p>Věta: <b>Pokud jde letošní neonky, tak Petr koupil všechnu neonku.  </b></p><p><i>Tato věta je v daném kontextu v pořádku, ale není gramatická. Pokud souhlasíte, vyberte jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["item-1-num-nodef", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo několik druhů pěnkav. Dva biologové (A a B) si povídají o pěnkavách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o druhy pěnkav, v 18. až 20. století vědci studovali dvě pěnkavy: kanárské a obecné.  </b></p>"}}],
[["item-1-num-def", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo několik druhů pěnkav. Dva biologové (A a B) si povídají o pěnkavách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kanárskou pěnkavu a obecnou pěnkavu, v 18. až 20. století vědci studovali tyto dvě pěnkavy.  </b></p>"}}],

[["item-2-num-nodef", 1], aj, {s: {html: "<p> Kontext: v současnosti je známo více než pět druhů medvědů. Dva zaměstnanci různých Zoo (A a B) si povídají o medvědech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o druhy medvědů, naše Zoo chová dva medvědy: hnědé a lední. </b></p>"}}],
[["item-2-num-def", 1], aj, {s: {html: "<p> Kontext: v současnosti je známo více než pět druhů medvědů. Dva zaměstnanci různých Zoo (A a B) si povídají o medvědech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o hnědého medvěda a ledního medvěda, naše Zoo chová tyto dva medvědy.  </b></p>"}}],

[["item-3-num-nodef", 1], aj, {s: {html: "<p>Kontext: v ČR je se pěstuje více než pět druhů ovocných stromů. Dva farmáři (A a B), každý z jiného regionu, si povídají o ovocných stromech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o druhy ovocných stromů, v našem regionu farmáři pěstují dva ovocné stromy: jabloně a hrušně.</b></p>"}}],
[["item-3-num-def", 1], aj, {s: {html: "<p>Kontext: v ČR je se pěstuje více než pět druhů ovocných stromů. Dva farmáři (A a B), každý z jiného regionu, si povídají o ovocných stromech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o jabloň a hrušeň, v našem regionu farmáři pěstují tyto dva ovocné stromy.</b></p>"}}],

[["item-4-num-nodef", 1], aj, {s: {html: "<p>Kontext: Je známo několik druhů moru. Dva lékaři (A a B) si povídají o moru a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o typy moru, u nás běžné vakcíny hubí dva mory: dýmějový a septický.</b></p>"}}],
[["item-4-num-def", 1], aj, {s: {html: "<p>Kontext: Je známo několik druhů moru. Dva lékaři (A a B) si povídají o moru a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o dýmějový mor a septický mor, u nás běžné vakcíny hubí tyto dva mory.  </b></p>"}}],


[["item-5-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo alespoň 300 druhů chobotnic. Dva rybáři (A a B) si povídají o chobotnicích a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o chobotnici obecnou, tak tradičně naši rybáři tuto chobotnici loví. </b></p>"}}],
[["item-5-nonum-pl", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo alespoň 300 druhů chobotnic. Dva rybáři (A a B) si povídají o chobotnicích a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o chobotnici pacifickou a chobotnici obecnou, tak tradičně naši rybáři tyto chobotnice loví.</b></p>"}}],

[["item-6-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo mnoho druhů ústřic. Dva prodavači v rybárně (A a B) si povídají o ústřicích a v reakci na to, co řekl A, B odpovídá: </p><p>Věta: <b>B: Pokud jde o ústřici jedlou, v naší zemi tuto ústřici chováme.</b></p>"}}],
[["item-6-nonum-pl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo mnoho druhů ústřic. Dva prodavači v rybárně (A a B) si povídají o ústřicích a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o ústřici jedlou a ústřici obrovskou, v naší zemi tyto ústřice chováme.</b></p>"}}],

[["item-7-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo několik druhů kaktusů. Dva zahradníci (A a B) si povídají o kaktusech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kaktus hvězdnatý, v naší zahradě tento kaktus pěstujeme.  </b></p>"}}],
[["item-7-nonum-pl", 1], aj, {s: {html: "<p>Kontext: v současnosti je známo několik druhů kaktusů. Dva zahradníci (A a B) si povídají o kaktusech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kaktus hvězdnatý a kaktus sloupcovitý, v naší zahradě tyto kaktusy pěstujeme.</b></p>"}}],

[["item-8-nonum-nopl", 1], aj, {s: {html: "<p> Kontext: Je známo několik druhů kávy. Dva baristé (A a B) si povídají o kávě a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kávu robustu, v přípravném kurzu jsme tuto kávu studovali.</b></p>"}}],
[["item-8-nonum-pl", 1], aj, {s: {html: "<p> Kontext: Je známo několik druhů kávy. Dva baristé (A a B) si povídají o kávě a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kávu robustu a kávu arabiku, v přípravném kurzu jsme tyto kávy studovali.</b></p>"}}],


["filler1", aj, {s: {html: "<p>Kontext: v současné době se vyrábí různé druhy minerálních vod. Dva obchodníci s nápoji (A a B) si povídají o minerálních vodách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o minerální vodu Mattoni, včera jsme prodali 153 těchto vod.</b></p>"} }],

["filler2", aj, {s: {html: "<p>  Kontext: v současné době se hodně prodávají romány. Dva knihkupci (A a B) si povídají o knihách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o román od autora X, včera jsme prodali všechen jeho román.</b></p>"} }],

["filler3", aj, {s: {html: "<p> Kontext: v současnosti se vyrábí několik druhů čokolád. Dva cukráři (A a B) si povídají o čokoládách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o čokoládu s oříšky, včera jsme prodali 15 těchto čokolád.</b></p>"} }],

["filler4", aj, {s: {html: "<p> Kontext: v současnosti se hodně prodávají obrazy. Dva galeristé (A a B) si povídají o obrazech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o ten portrét od malíře X, včera jsme prodali všechen jeho portrét.</b></p>"} }],

["filler5", aj, {s: {html: "<p> Kontext: v současnosti se vyrábí několik druhů jogurtů. Dva obchodníci s mléčnými výrobky (A a B) si povídají o jogurtech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o jogurt s jahodami, včera jsme prodali 25 těchto jogurtů.</b></p>"} }],

["filler6", aj, {s: {html: "<p> Kontext: v současnosti se hodně pronajímají byty. Dva realitní makléři (A a B) si povídají o bytech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o ten byt vedle parku, včera večer jsme pronajali všechen ten byt.</b></p>"} }],

["filler7", aj, {s: {html: "<p> Kontext: v současnosti se vyrábí mnoho druhů piva. Dva pivovarníci (A a B) si povídají o pivu a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o pivo s pepřem, včera jsme v naší pivotéce prodali 5 těchto piv.</b></p>"} }],

["filler8", aj, {s: {html: "<p> Kontext: v současnosti se hodně kupují auta. Dva autoobchodníci (A a B) si povídají o autech a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o to auto od značky X, včera jsme prodali všechno to auto.</b></p>"} }],

["filler9", aj, {s: {html: "<p> Kontext: Je známo několik druhů kávy. Dva baristé (A a B) si povídají o kávě a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>Pokud jde o kávu robustu, v přípravném kurzu jsme tuto kávu studovali.</b></p>"} }],

];
