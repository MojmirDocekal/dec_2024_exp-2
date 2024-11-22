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


[["first-item5-nonum-nopl", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo několik druhů pěnkav. Dva biologové (A a B) si povídají o pěnkavách a v reakci na to, co řekl A, B odpovídá: </p><p>Věta: <b>Pokud jde o kanárskou pěnkavu, v 18. až 20. století vědci studovali tuto pěnkavu.  </b></p>"}}],
[["first-item5-nonum-pl", 1], aj, {s: {html: "<p>Kontext: V současnosti je známo několik druhů pěnkav. Dva biologové (A a B) si povídají o pěnkavách a v reakci na to, co řekl A, B odpovídá:</p><p>Věta: <b>B: Pokud jde o kanárskou pěnkavu a obecnou pěnkavu, v 18. až 20. století vědci studovali tyto pěnkavy.</b></p>"}}],


["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],
];
