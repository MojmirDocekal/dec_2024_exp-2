var shuffleSequence = seq("intro", sepWith("sep",  seq("practice")), "practiceover", sepWith("sep", rshuffle(startsWith("first-item"), startsWith("firstfiller"))),"description-followup", sepWith("sep", rshuffle(startsWith("followup"), startsWith("filler"))));

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

	      ["practice", aj, {s: {html: "<p>Pavel uviděl Marušku.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Ačkoliv byla Marie unavená, navštívila včera ještě vedoucího hasičské jednotky Tříbětice.</p><p><i>Tato věta je v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v pravém konci škály (nejspíš 5).</i></p>"}}],
["practice", aj, {s: {html: "Byla Marie unavená ačkoliv, navštívila včera ještě ho v Tříběticích.</p><p><i>Tato věta není v pořádku. Pokud souhlasíte, vyberte jako odpověď jednu z možností v levém konci škály (nejspíš 1).</i></p>"}}],

	      ["practiceover", "Message", {continueMessage: "Klikněte zde pro pokračování experimentu", html: ["div", ["p", "Zde končí přípravná část experimentu. Klikněte níže pro vstup do experimentu."]]}],

[["first-item1-NR", 1], aj, {s: "Nový bača v Tatrách nechce, aby se ztratila ani jedna ovce."}],
[["first-item1-middle", 1], aj, {s: "Nový bača v Tatrách si nemyslí, že se ztratila ani jedna ovce."}],
[["first-item1-notNR", 1], aj, {s: "Nový bača v Tatrách neříká, že se ztratila ani jedna ovce."}],
[["first-item1-pos", 1], aj, {s: "Ztratila se ani jedna ovce."}],
[["first-item1-neg", 1], aj, {s: "Neztratila se ani jedna ovce."}],

[["first-item2-NR", 2], aj, {s: "Nový vedoucí katedry nehodlá dopustit, aby studenti vynechali ani jednu výběrovou přednášku."}],
[["first-item2-middle", 2], aj, {s: "Nový vedoucí katedry nevěří, že studenti vynechali ani jednu výběrovou přednášku."}],
[["first-item2-notNR", 2], aj, {s: "Nový vedoucí katedry neslyšel, že studenti vynechali ani jednu výběrovou přednášku."}],
[["first-item2-pos", 2], aj, {s: "Studenti vynechali ani jednu výběrovou přednášku."}],
[["first-item2-neg", 2], aj, {s: "Studenti nevynechali ani jednu výběrovou přednášku."}],

[["first-item3-NR", 3], aj, {s: "Tenhle renomovaný architekt nemá v úmyslu, aby tu vznikla ani jedna novostavba."}],
[["first-item3-middle", 3], aj, {s: "Tenhle renomovaný architekt nepředpokládá, že by tu vznikla ani jedna novostavba."}],
[["first-item3-notNR", 3], aj, {s: "Tenhle renomovaný architekt netvrdil, že tu vznikla ani jedna novostavba."}],
[["first-item3-pos", 3], aj, {s: "Vznikla tu ani jedna novostavba."}],
[["first-item3-neg", 3], aj, {s: "Nevznikla tu ani jedna novostavba."}],

[["first-item4-NR", 4], aj, {s: "Náš nový knihovník si nepřeje, aby zmizela ani jedna knížka."}],
[["first-item4-middle", 4], aj, {s: "Náš nový knihovník si nepředstavuje, že zmizela ani jedna knížka."}],
[["first-item4-notNR", 4], aj, {s: "Náš nový knihovník neslyšel, že zmizela ani jedna knížka."}],
[["first-item4-pos", 4], aj, {s: "Zmizela ani jedna knížka."}],
[["first-item4-neg", 4], aj, {s: "Nezmizela ani jedna knížka."}],

[["first-item5-NR", 5], aj, {s: "Starý vévoda by nebyl rád, aby ze sklepa zmizela ani jedna láhev vína."}],
[["first-item5-middle", 5], aj, {s: "Starý vévoda neočekává, že by ze sklepa zmizela ani jedna láhev vína."}],
[["first-item5-notNR", 5], aj, {s: "Starý vévoda nerozhlašoval, že ze sklepa zmizela ani jedna láhev vína."}],
[["first-item5-pos", 5], aj, {s: "Zmizela ani jedna láhev vína."}],
[["first-item5-neg", 5], aj, {s: "Nezmizela ani jedna láhev vína."}],

[["first-item6-NR", 6], aj, {s: "Nová vláda se nechystá, že by zrušila ani jeden z původních zákonů."}],
[["first-item6-middle", 6], aj, {s: "Nová vláda neodhaduje, že by zrušila ani jeden z původních zákonů."}],
[["first-item6-notNR", 6], aj, {s: "Nová vláda nenaznačila, že by zrušila ani jeden z původních zákonů."}],
[["first-item6-pos", 6], aj, {s: "Nová vláda zruší ani jeden z původních zákonů."}],
[["first-item6-neg", 6], aj, {s: "Nová vláda nezruší ani jeden z původních zákonů."}],

[["first-item7-NR", 7], aj, {s: "Ten známý zpěvák nevyžadoval, aby o něm psali ani v jedněch místních novinách."}],
[["first-item7-middle", 7], aj, {s: "Ten známý zpěvák nepočítal s tím, že by o něm psali ani v jedněch místních novinách."}],
[["first-item7-notNR", 7], aj, {s: "Ten známý zpěvák nepochopil, že o něm psali ani v jedněch místních novinách."}],
[["first-item7-pos", 7], aj, {s: "O tom známém zpěvákovi psali ani v jedněch místních novinách."}],
[["first-item7-neg", 7], aj, {s: "O tom zpěvákovi nepsali ani v jedněch místních novinách."}],

[["first-item8-NR", 8], aj, {s: "Tenhle spisovatel detektivek nepotřebuje, aby ho chválil ani jeden novinář."}],
[["first-item8-middle", 8], aj, {s: "Tenhle spisovatel detektivek nemá pocit, že ho chválil ani jeden novinář."}],
[["first-item8-notNR", 8], aj, {s: "Tenhle spisovatel detektivek neprozradil, že ho chválil ani jeden novinář."}],
[["first-item8-pos", 8], aj, {s: "Tohohle spisovatele detektivek chválil ani jeden novinář."}],
[["first-item8-neg", 8], aj, {s: "Tohohle spisovatele detektivek nechválil ani jeden novinář."}],

[["first-item9-NR", 9], aj, {s: "Tento národ neusiloval o to, aby vyvinul ani jednu zbraň hromadného ničení."}],
[["first-item9-middle", 9], aj, {s: "Tento národ neuvažoval o tom, že by vyvinul ani jednu zbraň hromadného ničení."}],
[["first-item9-notNR", 9], aj, {s: "Tento národ nesdělil, že by vyvinul ani jednu zbraň hromadného ničení."}],
[["first-item9-pos", 9], aj, {s: "Tento národ vyvinul ani jednu zbraň hromadného ničení."}],
[["first-item9-neg", 9], aj, {s: "Tento národ nevyvinul ani jednu zbraň hromadného ničení."}],

[["first-item10-NR", 10], aj, {s: "Ti mniši by neusilovali o to, aby se ztratila ani jedna kniha."}],
[["first-item10-middle", 10], aj, {s: "Ti mniši nebyli přesvědčení o tom, že by se ztratila ani jedna kniha."}],
[["first-item10-notNR", 10], aj, {s: "Ti mniši nám nezavolali, že se ztratila ani jedna kniha."}],
[["first-item10-pos", 10], aj, {s: "Těm mnichům se ztratila ani jedna kniha."}],
[["first-item10-neg", 10], aj, {s: "Těm mnichům se neztratila ani jedna kniha."}],

[["first-item11-NR", 11], aj, {s: "Jako váš vedoucí vám neradím, abyste vynechali ani jedno školení."}],
[["first-item11-middle", 11], aj, {s: "Jako váš vedoucí se nedomnívám, že vynecháte ani jedno školení."}],
[["first-item11-notNR", 11], aj, {s: "Jako váš vedoucí nechápu, proč jste vynechali ani jedno školení."}],
[["first-item11-pos", 11], aj, {s: "Vynechali jste ani jedno školení."}],
[["first-item11-neg", 11], aj, {s: "Nevynechali jste ani jedno školení."}],

[["first-item12-NR", 12], aj, {s: "S touhle novou zbraní by nemělo dojít k tomu, abychom přišli ani o jednoho vojáka."}],
[["first-item12-middle", 12], aj, {s: "S touhle novou zbraní neočekávám, že bychom přišli ani o jednoho vojáka."}],
[["first-item12-notNR", 12], aj, {s: "S touhle novou zbraní mě nepřekvapuje, že jsme přišli ani o jednoho vojáka."}],
[["first-item12-pos", 12], aj, {s: "Přišli jsme ani o jednoho vojáka."}],
[["first-item12-neg", 12], aj, {s: "Nepřišli jsme ani o jednoho vojáka."}],

[["first-item13-NR", 13], aj, {s: "Jeho lékař Karlovi nedoporučil, aby vynechal ani jednu léčebnou proceduru."}],
[["first-item13-middle", 13], aj, {s: "Jeho lékař Karlovi nevěřil, že by vynechal ani jednu léčebnou proceduru."}],
[["first-item13-notNR", 13], aj, {s: "Jeho lékař Karlovi neřekl, aby vynechal ani jednu léčebnou proceduru."}],
[["first-item13-pos", 13], aj, {s: "Karel vynechal ani jednu léčebnou proceduru."}],
[["first-item13-neg", 13], aj, {s: "Karel nevynechal ani jednu léčebnou proceduru."}],

[["first-item14-NR", 14], aj, {s: "Podle našeho učitele češtiny není žádoucí, aby na konci řádku zůstala ani jedna jednoslabičná předložka."}],
[["first-item14-middle", 14], aj, {s: "Podle našeho učitele češtiny se neočekává, že by na konci řádku zůstala ani jedna jednoslabičná předložka."}],
[["first-item14-notNR", 14], aj, {s: "Náš učitel češtiny nenapsal na tabuli, že na konci řádku zůstala ani jedna jednoslabičná předložka."}],
[["first-item14-pos", 14], aj, {s: "Na konci řádku zůstala ani jedna jednoslabičná předložka."}],
[["first-item14-neg", 14], aj, {s: "Na konci řádku nezůstala ani jedna jednoslabičná předložka."}],

[["first-item15-NR", 15], aj, {s: "Administrátoři těch stránek nenavrhovali, aby se zrušilo ani jedno fórum."}],
[["first-item15-middle", 15], aj, {s: "Administrátoři těch stránek nesoudí, že by se mělo zrušit ani jedno fórum."}],
[["first-item15-notNR", 15], aj, {s: "Administrátoři těch stránek nezpůsobili, aby zaniklo ani jedno fórum."}],
[["first-item15-pos", 15], aj, {s: "Zaniklo ani jedno fórum."}],
[["first-item15-neg", 15], aj, {s: "Nezaniklo ani jedno fórum."}],

[["first-item16-NR", 16], aj, {s: "Není povinností policisty, aby přehlédl ani jeden přestupek."}],
[["first-item16-middle", 16], aj, {s: "Policista nespoléhá na to, že by přehlédl ani jeden přestupek."}],
[["first-item16-notNR", 16], aj, {s: "Policista nás nevyrozuměl o tom, že přehlédl ani jeden přestupek."}],
[["first-item16-pos", 16], aj, {s: "Policista přehlédl ani jeden přestupek."}],
[["first-item16-neg", 16], aj, {s: "Policista nepřehlédl ani jeden přestupek."}],

[["first-item17-NR", 17], aj, {s: "Milí řidiči, nebylo by dobré, abyste nabourali ani jeden kužel."}],
[["first-item17-middle", 17], aj, {s: "Milí řidiči, nespoléháme na to, že byste nabourali ani jeden kužel."}],
[["first-item17-notNR", 17], aj, {s: "Milí řidiči, nenutíme vás, abyste nabourali ani jeden kužel."}],
[["first-item17-pos", 17], aj, {s: "Milí řidiči, nabourali jste ani jeden kužel."}],
[["first-item17-neg", 17], aj, {s: "Milí řidiči, nenabourali jste ani jeden kužel."}],

[["first-item18-NR", 18], aj, {s: "Podle nové směrnice by nebylo vhodné, aby telefonní operátoři zrušili ani jeden tarif."}],
[["first-item18-middle", 18], aj, {s: "Podle nové směrnice se neočekává, že by telefonní operátoři zrušili ani jeden tarif."}],
[["first-item18-notNR", 18], aj, {s: "V té nové směrnici jsme se nedočetli, že by telefonní operátoři zrušili ani jeden tarif."}],
[["first-item18-pos", 18], aj, {s: "Telefonní operátoři zrušili ani jeden tarif."}],
[["first-item18-neg", 18], aj, {s: "Telefonní operátoři nezrušili ani jeden tarif."}],

[["first-item19-NR", 19], aj, {s: "Současný náčelník policie nechce, aby se tam objevil ani jeden nováček."}],
[["first-item19-middle", 19], aj, {s: "Současný náčelník policie si nemyslí, že se tam objeví ani jeden nováček."}],
[["first-item19-notNR", 19], aj, {s: "Současný náčelník policie neříká, že se tam objeví ani jeden nováček."}],
[["first-item19-pos", 19], aj, {s: "Objeví se tam ani jeden nováček."}],
[["first-item19-neg", 19], aj, {s: "Neobjeví se tam ani jeden nováček."}],

[["first-item20-NR", 20], aj, {s: "Jako dobrý znalec místních poměrů vám neradím, abyste šli ani jednou z těch cest."}],
[["first-item20-middle", 20], aj, {s: "Jako dobrý znalec místních poměrů se nedomnívám, že byste měli jít ani jednou z těch cest."}],
[["first-item20-notNR", 20], aj, {s: "Jako dobrý znalec místních poměrů nechápu, proč jste šli ani jednou z těch cest."}],
[["first-item20-pos", 20], aj, {s: "Šli jste ani jednou z těch cest."}],
[["first-item20-neg", 20], aj, {s: "Nešli jste ani jednou z těch cest."}],

[["first-item21-NR", 21], aj, {s: "Nový velitel stráže nechce, aby se vojáci vystřídali až do půlnoci."}],
[["first-item21-middle", 21], aj, {s: "Nový velitel stráže si nemyslí, že se vojáci vystřídají až do půlnoci."}],
[["first-item21-notNR", 21], aj, {s: "Nový velitel stráže neříkal, že se vojáci vystřídají až do půlnoci."}],
[["first-item21-pos", 21], aj, {s: "Vojáci se vystřídají až do půlnoci."}],
[["first-item21-neg", 21], aj, {s: "Vojáci se nevystřídají až do půlnoci."}],

[["first-item22-NR", 22], aj, {s: "Nový bača v Tatrách nehodlá dopustit, aby se ovce vrátily až do pozdního večera."}],
[["first-item22-middle", 22], aj, {s: "Nový bača v Tatrách nevěří, že se ovce vrátí až do pozdního večera."}],
[["first-item22-notNR", 22], aj, {s: "Nový bača v Tatrách neslyšel, že se ovce vrátily až do pozdního večera."}],
[["first-item22-pos", 22], aj, {s: "Ovce se vrátily až do pozdního večera."}],
[["first-item22-neg", 22], aj, {s: "Ovce se nevrátily až do pozdního večera."}],

[["first-item23-NR", 23], aj, {s: "Šéf nakladatelství nemá v úmyslu, aby tu knihu vydali až do Vánoc."}],
[["first-item23-middle", 23], aj, {s: "Šéf nakladatelství nepředpokládá, že by tu knihu vydali až do Vánoc."}],
[["first-item23-notNR", 23], aj, {s: "Šéf nakladatelství netvrdil, že tu knihu vydají až do Vánoc."}],
[["first-item23-pos", 23], aj, {s: "Tu knihu v nakladatelství vydali až do Vánoc."}],
[["first-item23-neg", 23], aj, {s: "Tu knihu v nakladatelství nevydali až do Vánoc."}],

[["first-item24-NR", 24], aj, {s: "Maminka si nepřeje, aby tatínek přijel až do Vánoc."}],
[["first-item24-middle", 24], aj, {s: "Maminka si nepředstavuje, že by tatínek přijel až do Vánoc."}],
[["first-item24-notNR", 24], aj, {s: "Maminka neslyšela, že tatínek přijede až do Vánoc."}],
[["first-item24-pos", 24], aj, {s: "Tatínek přijede až do Vánoc."}],
[["first-item24-neg", 24], aj, {s: "Tatínek nepřijede až do Vánoc."}],

[["first-item25-NR", 25], aj, {s: "Velitel hasičů by nebyl rád, kdybys nastoupil až do Velikonoc."}],
[["first-item25-middle", 25], aj, {s: "Velitel hasičů neočekává, že bys nastoupil až do Velikonoc."}],
[["first-item25-notNR", 25], aj, {s: "Velitel hasičů nerozhlašoval, že bys nastoupil až do Velikonoc."}],
[["first-item25-pos", 25], aj, {s: "Nastoupil jsi až do Velikonoc."}],
[["first-item25-neg", 25], aj, {s: "Nenastoupil jsi až do Velikonoc."}],

[["first-item26-NR", 26], aj, {s: "Přísný učitel se nechystá, že by studenty propustil až do setmění."}],
[["first-item26-middle", 26], aj, {s: "Přísný učitel neodhaduje, že by studenty propustil až do setmění."}],
[["first-item26-notNR", 26], aj, {s: "Přísný učitel nenaznačil, že by studenty propustil až do setmění."}],
[["first-item26-pos", 26], aj, {s: "Přísný učitel propustil studenty až do setmění."}],
[["first-item26-neg", 26], aj, {s: "Přísný učitel nepropustil studenty až do setmění."}],

[["first-item27-NR", 27], aj, {s: "Kapitán po námořnících nevyžadoval, aby z lodi vyskočili až do konce."}],
[["first-item27-middle", 27], aj, {s: "Kapitán nepočítal s tím, že by námořníci vyskočili z lodi až do konce."}],
[["first-item27-notNR", 27], aj, {s: "Kapitán nepochopil, že námořníci vyskočili z lodi až do konce."}],
[["first-item27-pos", 27], aj, {s: "Námořníci vyskočili z lodi až do konce."}],
[["first-item27-neg", 27], aj, {s: "Námořníci nevyskočili z lodi až do konce."}],

[["first-item28-NR", 28], aj, {s: "Spisovatel téhle pohádky nepotřebuje, aby vlk snědl Karkulku až do příchodu myslivce."}],
[["first-item28-middle", 28], aj, {s: "Spisovatel téhle pohádky nemá pocit, že vlk snědl Karkulku až do příchodu myslivce."}],
[["first-item28-notNR", 28], aj, {s: "Spisovatel téhle pohádky neprozradil, že by vlk snědl Karkulku až do příchodu myslivce."}],
[["first-item28-pos", 28], aj, {s: "Vlk snědl Karkulku až do příchodu myslivce."}],
[["first-item28-neg", 28], aj, {s: "Vlk nesnědl Karkulku až do příchodu myslivce."}],

[["first-item29-NR", 29], aj, {s: "Karel celou dobu neusiloval o to, aby ho starost o Kláru opustila až do posledního dne jejich společného života."}],
[["first-item29-middle", 29], aj, {s: "Karel neuvažoval o tom, že by ho starost o Kláru opustila až do posledního dne jejich společného života."}],
[["first-item29-notNR", 29], aj, {s: "Karel nám neřekl, že by ho starost o Kláru opustila až do posledního dne jejich společného života."}],
[["first-item29-pos", 29], aj, {s: "Karla starost o Kláru opustila až do posledního dne jejich společného života."}],
[["first-item29-neg", 29], aj, {s: "Karla starost o Kláru neopustila až do posledního dne jejich společného života."}],

[["first-item30-NR", 30], aj, {s: "Její rodiče by nepřipustili, aby si Karel vzal Kláru až do jejích 20 let."}],
[["first-item30-middle", 30], aj, {s: "Její rodiče nebyli přesvědčení o tom, že by si Karel měl vzít Kláru až do jejích 20 let."}],
[["first-item30-notNR", 30], aj, {s: "Její rodiče netvrdili Karlovi, že by si Kláru měl vzít až do jejích 20 let."}],
[["first-item30-pos", 30], aj, {s: "Karel by si měl vzít Kláru až do jejích 20 let."}],
[["first-item30-neg", 30], aj, {s: "Karel by si neměl vzít Kláru až do jejích 20 let."}],

[["first-item31-NR", 31], aj, {s: "Jako správce parku vám neradím, abyste to jezero navštívili až do začátku léta."}],
[["first-item31-middle", 31], aj, {s: "Jako správce parku se nedomnívám, že byste to jezero měli navštívit až do začátku léta."}],
[["first-item31-notNR", 31], aj, {s: "Jako správce parku nechápu, proč jste to jezero navštívili až do začátku léta."}],
[["first-item31-pos", 31], aj, {s: "To jezero jste navštívili až do začátku léta."}],
[["first-item31-neg", 31], aj, {s: "To jezero jste nenavštívili až do začátku léta."}],

[["first-item32-NR", 32], aj, {s: "Díky naší nové taktice by nemělo dojít k tomu, aby soupeř dal gól až do konce zápasu."}],
[["first-item32-middle", 32], aj, {s: "Díky naší nové taktice neočekáváme, že by soupeř dal gól až do konce zápasu."}],
[["first-item32-notNR", 32], aj, {s: "Díky naší nové taktice mě nepřekvapuje, že soupeř dal gól až do konce zápasu."}],
[["first-item32-pos", 32], aj, {s: "Soupeř dal gól až do konce zápasu."}],
[["first-item32-neg", 32], aj, {s: "Soupeř nedal gól až do konce zápasu."}],

[["first-item33-NR", 33], aj, {s: "Můj lékař mi nedoporučil, abych ty lázně opustil až do konce příštího měsíce."}],
[["first-item33-middle", 33], aj, {s: "Můj lékař nevěřil, že bych ty lázně opustil až do konce příštího měsíce."}],
[["first-item33-notNR", 33], aj, {s: "Můj lékař mi neřekl, abych ty lázně opustil až do konce příštího měsíce."}],
[["first-item33-pos", 33], aj, {s: "Já jsem ty lázně opustil až do konce příštího měsíce."}],
[["first-item33-neg", 33], aj, {s: "Já jsem ty lázně neopustil až do konce příštího měsíce."}],

[["first-item34-NR", 34], aj, {s: "Vzhledem k vaší minulosti není žádoucí, abyste se vrátil až do konce příštího roku."}],
[["first-item34-middle", 34], aj, {s: "Vzhledem k vaší minulosti se neočekává, že byste se vrátil až do konce příštího roku."}],
[["first-item34-notNR", 34], aj, {s: "Vzhledem k vaší minulosti velvyslanec nenapsal, abyste se vrátil až do konce příštího roku."}],
[["first-item34-pos", 34], aj, {s: "Vrátíte se až do konce příštího roku."}],
[["first-item34-neg", 34], aj, {s: "Nevrátíte se až do konce příštího roku."}],

[["first-item35-NR", 35], aj, {s: "Jeho editor Karlovi nenavrhoval, aby ten článek dopsal až do konce prázdnin."}],
[["first-item35-middle", 35], aj, {s: "Jeho editor nesoudí, že by Karel dopsal ten článek až do konce prázdnin."}],
[["first-item35-notNR", 35], aj, {s: "Jeho editor nezpůsobil, že Karel dopsal ten článek až do konce prázdnin."}],
[["first-item35-pos", 35], aj, {s: "Karel dopsal ten článek až do konce prázdnin."}],
[["first-item35-neg", 35], aj, {s: "Karel nedopsal ten článek až do konce prázdnin."}],

[["first-item36-NR", 36], aj, {s: "Není povinností zaměstnanců, aby tu práci odevzdali až do začátku září."}],
[["first-item36-middle", 36], aj, {s: "Zaměstnanci nespoléhali na to, že by tu práci odevzdali až do začátku září."}],
[["first-item36-notNR", 36], aj, {s: "Zaměstnavatelé nevyrozuměli zaměstnance, aby tu práci odevzdali až do začátku září."}],
[["first-item36-pos", 36], aj, {s: "Zaměstnanci odevzdali tu práci až do začátku září."}],
[["first-item36-neg", 36], aj, {s: "Zaměstnanci neodevzdali tu práci až do začátku září."}],

[["first-item37-NR", 37], aj, {s: "Vzhledem k daním by nebylo dobré, abyste tu neschopenku ukončil až do začátku příštího roku."}],
[["first-item37-middle", 37], aj, {s: "Vzhledem k daním nespoléháme na to, že byste tu neschopenku ukončil až do začátku příštího roku."}],
[["first-item37-notNR", 37], aj, {s: "Vzhledem k daním vás nenutím, abyste tu neschopenku ukončil až do začátku příštího roku."}],
[["first-item37-pos", 37], aj, {s: "Tu neschopenku ukončíte až do začátku příštího roku."}],
[["first-item37-neg", 37], aj, {s: "Tu neschopenku neukončíte až do začátku příštího roku."}],

[["first-item38-NR", 38], aj, {s: "Kvůli naší bezpečnosti by nebylo vhodné, aby policisté našli mrtvolu až do svítání."}],
[["first-item38-middle", 38], aj, {s: "Kvůli naší bezpečnosti se neočekává, že by policisté našli mrtvolu až do svítání."}],
[["first-item38-notNR", 38], aj, {s: "Kvůli naší bezpečnosti jsme neříkali, že policisté našli mrtvolu až do svítání."}],
[["first-item38-pos", 38], aj, {s: "Policisté našli mrtvolu až do svítání."}],
[["first-item38-neg", 38], aj, {s: "Policisté nenašli mrtvolu až do svítání."}],

[["first-item39-NR", 39], aj, {s: "Pořadatel závodu nechce, aby ten kůň vyběhl až do výstřelu ze startovní pistole."}],
[["first-item39-middle", 39], aj, {s: "Pořadatel závodu si nemyslí, že ten kůň vyběhne až do výstřelu startovní pistole."}],
[["first-item39-notNR", 39], aj, {s: "Pořadatel závodu neříká, že ten kůň vyběhne až do výstřelu startovní pistole."}],
[["first-item39-pos", 39], aj, {s: "Ten kůň vyběhl až do výstřelu startovní pistole."}],
[["first-item39-neg", 39], aj, {s: "Ten kůň nevyběhl až do výstřelu startovní pistole."}],

[["first-item40-NR", 40], aj, {s: "Starý sadař nám neradil, abychom ty ovocné stromy vysadily až do konce března."}],
[["first-item40-middle", 40], aj, {s: "Starý sadař se nedomníval, že bychom měli ty ovocné stromy vysadit až do konce března."}],
[["first-item40-notNR", 40], aj, {s: "Starý sadař neříkal, že máme ty ovocné stromy vysadit až do konce března."}],
[["first-item40-pos", 40], aj, {s: "Ty ovocné stromy máme vysadit až do konce března."}],
[["first-item40-neg", 40], aj, {s: "Ty ovocné stromy nemáme vysadit až do konce března."}],

["firstfiller1", aj, {s: "Já, starý sadař nejsem přišel do lesa celé roky." }],
["firstfiller_item2", aj, {s: "Já, starý sadař, jsem nepřišel do lesa celé roky." }],
["firstfiller_item3", aj, {s: "Ten nový student bude zítra přečíst tu vyžádanou knihu." }],
["firstfiller_item4", aj, {s: "Ten nový student přečte zítra tu vyžádanou knihu." }],
["firstfiller_item5", aj, {s: "Černý kocour pronásledovala po dvorku bílou kočku." }],
["firstfiller_item6", aj, {s: "Bílá kočka pronásledovala po dvorku černého kocoura." }],
["firstfiller_item7", aj, {s: "Svůj dědeček viděl Karla na nádraží." }],
["firstfiller_item8", aj, {s: "Karel viděl svého dědečka na nádraží." }],
["firstfiller_item9", aj, {s: "Petr chtěl, aby mu Karel pomůže se štípáním dřeva." }],
["firstfiller_item10", aj, {s: "Petr přijel včera až do půlnoci." }],
["firstfiller_item11", aj, {s: "Petr přečetl tu novou knihu celou noc." }],
["firstfiller_item12", aj, {s: "Petr slyšel Karlem zpívat celou noc." }],
["firstfiller_item13", aj, {s: "Pět chlapci přišli na dvůr hrát fotbal." }],
["firstfiller_item14", aj, {s: "Trojice chlapců včera v baru vypila pivo každý." }],
["firstfiller_item15", aj, {s: "Každý student se sešel včera na dvorku." }],
["firstfiller_item16", aj, {s: "Petr přinesl na dvůr všechen pes." }],
["firstfiller_item17", aj, {s: "Většina chlapců přinesli zadaný úkol v pořádku." }],
["firstfiller_item18", aj, {s: "Málo dívek přišlo na schůzku pozdě." }],
["firstfiller_item19", aj, {s: "Petr včera přijít do obchodu a jíst ten salám." }],
["firstfiller_item20", aj, {s: "Koho Petr viděl muže, který na dvorku pozdravil?" }],
["firstfiller_item21", aj, {s: "Koho na dvorku Petr viděl Kláru a?" }],
["firstfiller_item22", aj, {s: "Koho Petr nevěděl, kdo včera pozdravil?" }],
["firstfiller_item23", aj, {s: "Mladý muž se mu, který kouřil cigaretu, představil." }],
["firstfiller_item24", aj, {s: "Mladý muž, který kouřil cigaretu, se mu představil." }],
["firstfiller_item25", aj, {s: "Petr přinesl do sběrného dvora dvě dveře." }],
["firstfiller_item26", aj, {s: "Petr viděl včera večer mladého muže a v parku." }],
["firstfiller_item27", aj, {s: "Petr vrátil do knihovny knihu a unavený." }],
["firstfiller_item28", aj, {s: "Ta loď se bohužel potopila křižníkem." }],
["firstfiller_item29", aj, {s: "Petr mával celý večer pes." }],
["firstfiller_item30", aj, {s: "Když jsem přišel, Karel už byl dvě hodiny odjet." }],


["description-followup", "Message", {html: ["div", ["p", "Nyní se zeptáme na to, jestli jedna věta vyplývá z druhé. Při posuzování byste měli vycházet ze své intuice. Například Pavel je unavený - z této věty plyne, že je někdo unavený, ale neplyne, že jsou unavení všichni lidé."], ["p", "Svou volbu potvrdíte kliknutím na link -- Druhá věta vyplývá z první, nebo Druhá věta nevyplývá z první. Případně stiskněte klávesu 1 nebo 2."], ["p", "Experiment pokračuje po kliknutí na níže uvedený link."], ]}],

[["followup-item41-NR", 41], aj, {s: {html: "<p>Nový bača v Tatrách nechce, aby se ztratila jediná ovce.</p><p>Nový bača v Tatrách chce, aby se neztratila jediná ovce.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item41-CNR", 41], aj, {s: {html: "<p>Myslivci nevěří, že nový bača v Tatrách chce, aby se ztratila jediná ovce.</p><p>Myslivci věří, že nový bača v Tatrách chce, aby se neztratila jediná ovce.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item41-EWS", 41], aj, {s: {html: "<p>Ne všichni myslivci věří, že nový bača v Tatrách chce, aby se ovce měly dobře.</p><p>Někteří myslivci věří, že nový bača v Tatrách chce, aby se ovce měly špatně.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item42-NR", 42], aj, {s: {html: "<p>Nový vedoucí katedry nehodlá dopustit, aby se platy zaměstnanců zvedly.</p><p>Nový vedoucí katedry hodlá dopustit, aby se platy zaměstnanců nezvedly.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item42-CNR", 42], aj, {s: {html: "<p>Zaměstnanci nevěří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy zvedly.</p><p>Zaměstnanci věří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy nezvedly.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item42-EWS", 42], aj, {s: {html: "<p>Ne všichni zaměstnanci věří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy zvedly.</p><p>Někteří zaměstnanci věří, že nový vedoucí katedry hodlá dopustit, aby se jejich platy nezvedly.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item43-NR", 43], aj, {s: {html: "<p>Tenhle renomovaný architekt nemá v úmyslu, aby tu vznikla nová zástavba.</p><p>Tenhle renomovaný architekt má v úmyslu, aby tu nevznikla nová zástavba.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item43-CNR", 43], aj, {s: {html: "<p>Obyvatelé města nevěří, že tenhle renomovaný architekt má v úmyslu, aby tu vznikla nová zástavba.</p><p>Obyvatelé města věří, že tenhle renomovaný architekt má v úmyslu, aby tu nevznikla nová zástavba.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item43-EWS", 43], aj, {s: {html: "<p>Ne všichni obyvatelé města věří, že tenhle renomovaný architekt má v úmyslu, aby tu vznikla nová zástavba.</p><p>Někteří obyvatelé města věří, že tenhle renomovaný architekt má v úmyslu, aby tu nevznikla nová zástavba.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item44-NR", 44], aj, {s: {html: "<p>Náš nový knihovník si nepřeje, aby zmizely ty nové knížky.</p><p>Náš nový knihovník si přeje, aby nezmizely ty nové knížky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item44-CNR", 44], aj, {s: {html: "<p>Studenti nevěří, že náš nový knihovník si přeje, aby zmizely ty nové knížky.</p><p>Studenti věří, že náš nový knihovník si přeje, aby nezmizely ty nové knížky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item44-EWS", 44], aj, {s: {html: "<p>Ne všichni studenti věří, že náš nový knihovník si přeje, aby zmizely ty nové knížky.</p><p>Někteří studenti věří, že náš nový knihovník si přeje, aby nezmizely ty nové knížky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item45-NR", 45], aj, {s: {html: "<p>Starý vévoda by nebyl rád, kdyby ze sklepa zmizelo nejlepší víno.</p><p>Starý vévoda by byl rád, kdyby ze sklepa nezmizelo nejlepší víno.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item45-CNR", 45], aj, {s: {html: "<p>Sluhové nevěří, že starý vévoda by byl rád, kdyby ze sklepa zmizelo nejlepší víno.</p><p>Sluhové věří, že starý vévoda by byl rád, kdyby ze sklepa nezmizelo nejlepší víno.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item45-EWS", 45], aj, {s: {html: "<p>Ne všichni sluhové věří, že starý vévoda by byl rád, kdyby ze sklepa zmizelo nejlepší víno.</p><p>Někteří sluhové věří, že starý vévoda by byl rád, kdyby ze sklepa nezmizelo nejlepší víno.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item46-NR", 46], aj, {s: {html: "<p>Nová vláda se nechystá, že by zrušila ty staré zákony.</p><p>Nová vláda se chystá, že nezruší nezruší ty staré zákony.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item46-CNR", 46], aj, {s: {html: "<p>Lidé nevěří, že nová vláda se chystá, že by zrušila ty staré zákony.</p><p>Lidé věří, že nová vláda se chystá, že nezruší ty staré zákony.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item46-EWS", 46], aj, {s: {html: "<p>Ne všichni lidé věří, že nová vláda se chystá, že by zrušila ty staré zákony.</p><p>Někteří lidé věří, že nová vláda se chystá, že nezruší ty staré zákony.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item47-NR", 47], aj, {s: {html: "<p>Ten známý zpěvák by nebyl potěšen, kdyby o něm psali v místních novinách.</p><p>Ten známý zpěvák by byl potěšen, kdyby o něm nepsali v místních novinách.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item47-CNR", 47], aj, {s: {html: "<p>Lidé nevěří, že ten známý zpěvák by byl potěšen, kdyby o něm psali v místních novinách.</p><p>Lidé věří, že ten známý zpěvák by byl potěšen, kdyby o něm nepsali v místních novinách.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item47-EWS", 47], aj, {s: {html: "<p>Ne všichni lidé věří, že ten známý zpěvák by byl potěšen, kdyby o něm psali v místních novinách.</p><p>Někteří lidé věří, že ten známý zpěvák by byl potěšen, kdyby o něm nepsali v místních novinách.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item48-NR", 48], aj, {s: {html: "<p>Tenhle spisovatel detektivek nepotřebuje, aby ho chválili novináři.</p><p>Tenhle spisovatel detektivek potřebuje, aby ho nechválili novináři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item48-CNR", 48], aj, {s: {html: "<p>Čtenáři nevěří, že tenhle spisovatel detektivek potřebuje, aby ho chválili novináři.</p><p>Čtenáři věří, že tenhle spisovatel detektivek potřebuje, aby ho nechválili novináři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item48-EWS", 48], aj, {s: {html: "<p>Ne všichni čtenáři věří, že tenhle spisovatel detektivek potřebuje, aby ho chválili novináři.</p><p>Někteří čtenáři věří, že tenhle spisovatel detektivek potřebuje, aby ho nechválili novináři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item49-NR", 49], aj, {s: {html: "<p>Tento národ neusiloval o to, aby vyvinul zbraně hromadného ničení.</p><p>Tento národ usiloval o to, aby nevyvinul zbraně hromadného ničení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item49-CNR", 49], aj, {s: {html: "<p>Okolní státy nevěří, že tento národ usiloval o to, aby vyvinul zbraně hromadného ničení.</p><p>Okolní státy věří, že tento národ usiloval o to, aby nevyvinul zbraně hromadného ničení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item49-EWS", 49], aj, {s: {html: "<p>Ne všechny okolní státy věří, tento národ usiloval o to, aby vyvinul zbraně hromadného ničení.</p><p>Některé okolní státy věří, tento národ usiloval o to, aby nevyvinul zbraně hromadného ničení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item50-NR", 50], aj, {s: {html: "<p>Ti mniši netoužili po tom, aby se ztratily ty vzácné knihy.</p><p>Ti mniši toužili po tom, aby se neztratily ty vzácné knihy.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item50-CNR", 50], aj, {s: {html: "<p>Historici nevěří, že ti mniši toužili po tom, aby se ztratily ty vzácné knihy.</p><p>Historici věří, že ti mniši toužili po tom, aby se neztratily ty vzácné knihy.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item50-EWS", 50], aj, {s: {html: "<p>Ne všichni historici věří, že ti mniši toužili po tom, aby se ztratily ty vzácné knihy.</p><p>Někteří historici věří, že ti mniši toužili po tom, aby se neztratily ty vzácné knihy.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item51-NR", 51], aj, {s: {html: "<p>Jako váš vedoucí vám neradím, abyste vynechali to školení.</p><p>Jako váš vedoucí vám radím, abyste nevynechali to školení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item51-CNR", 51], aj, {s: {html: "<p>Zaměstnanci nevěřili, že jejich vedoucí jim radil, aby vynechali to školení.</p><p>Zaměstnanci věřili, že jejich vedoucí jim radil, aby nevynechali to školení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item51-EWS", 51], aj, {s: {html: "<p>Ne všichni zaměstnanci věřili, že jejich vedoucí jim radil, aby vynechali to školení.</p><p>Někteří zaměstnanci věřili, že jejich vedoucí jim radil, aby nevynechali to školení.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item52-NR", 52], aj, {s: {html: "<p>S touhle novou zbraní nechceme, abychom ztratili jediného vojáka.</p><p>S touhle novou zbraní chceme, abychom neztratili jediného vojáka.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item52-CNR", 52], aj, {s: {html: "<p>Lidé nevěří, že s touhle novou zbraní chceme, abychom ztratili jediného vojáka.</p><p>Lidé věří, že s touhle novou zbraní chceme, abychom neztratili jediného vojáka.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item52-EWS", 52], aj, {s: {html: "<p>Ne všichni lidé věří, že s touhle novou zbraní chceme, abychom ztratili jediného vojáka.</p><p>Někteří lidé věří, že s touhle novou zbraní chceme, abychom neztratili jediného vojáka.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item53-NR", 53], aj, {s: {html: "<p>Jeho lékař Karlovi nedoporučil, aby vynechal tu léčebnou proceduru.</p><p>Jeho lékař Karlovi doporučil, aby nevynechal tu léčebnou proceduru.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item53-CNR", 53], aj, {s: {html: "<p>My nevěříme, že Karlův lékař mu doporučil, aby vynechal tu léčebnou proceduru.</p><p>My věříme, že Karlův lékař mu doporučil, aby nevynechal tu léčebnou proceduru.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item53-EWS", 53], aj, {s: {html: "<p>Ne všichni věříme, že Karlův lékař mu doporučil, aby vynechal tu léčebnou proceduru.</p><p>Někteří věříme, že Karlův lékař mu doporučil, aby nevynechal tu léčebnou proceduru.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item54-NR", 54], aj, {s: {html: "<p>V česky psaném textu není žádoucí, aby na konci řádku zůstaly jednoslabičné předložky.</p><p>V česky psaném textu je žádoucí, aby na konci řádku nezůstaly jednoslabičné předložky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item54-CNR", 54], aj, {s: {html: "<p>Korektoři nevěří, že v česky psaném textu je žádoucí, aby na konci řádku zůstaly jednoslabičné předložky.</p><p>Korektoři věří, že v česky psaném textu je žádoucí, aby na konci řádku nezůstaly jednoslabičné předložky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item54-EWS", 54], aj, {s: {html: "<p>Ne všichni korektoři věří, že v česky psaném textu je žádoucí, aby na konci řádku zůstaly jednoslabičné předložky.</p><p>Někteří korektoři věří, že v česky psaném textu je žádoucí, aby na konci řádku nezůstaly jednoslabičné předložky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item55-NR", 55], aj, {s: {html: "<p>Administrátoři těch stránek si nepřejí, aby se zrušilo jediné fórum.</p><p>Administrátoři těch stránek si přejí, aby se nezrušilo jediné fórum.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item55-CNR", 55], aj, {s: {html: "<p>Uživatelé nevěří, že administrátoři těch stránek si přejí, aby se zrušilo jediné fórum.</p><p>Uživatelé věří, že administrátoři těch stránek si přejí, aby se nezrušilo jediné fórum.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item55-EWS", 55], aj, {s: {html: "<p>Ne všichni uživatelé věří, že administrátoři těch stránek si přejí, aby se zrušilo jediné fórum.</p><p>Někteří uživatelé věří, že administrátoři těch stránek si přejí, aby se nezrušilo jediné fórum.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item56-NR", 56], aj, {s: {html: "<p>Není povinností policisty, aby přehlédl přestupky.</p><p>Je povinností policisty, aby nepřehlédl přestupky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item56-CNR", 56], aj, {s: {html: "<p>Občané nevěří, že je povinností policisty, aby přehlédl přestupky.</p><p>Občané věří, že je povinností policisty, aby nepřehlédl přestupky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item56-EWS", 56], aj, {s: {html: "<p>Ne všichni občané věří, že je povinností policisty, aby přehlédl přestupky.</p><p>Někteří občané věří, že je povinností policisty, aby nepřehlédl přestupky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item57-NR", 57], aj, {s: {html: "<p>Milí řidiči, nebylo by dobré, abyste nabourali testovací kužely.</p><p>Milí řidiči, bylo by dobré, abyste nenabourali testovací kužely.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item57-CNR", 57], aj, {s: {html: "<p>Instruktoři nevěří, že by pro řidiče bylo dobré, aby nabourali testovací kužely.</p><p>Instruktoři věří, že by pro řidiče bylo dobré, aby nenabourali testovací kužely.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item57-EWS", 57], aj, {s: {html: "<p>Ne všichni instruktoři věří, že by pro řidiče bylo dobré, aby nabourali testovací kužely.</p><p>Někteří instruktoři věří, že by pro řidiče bylo dobré, aby nenabourali testovací kužely.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item58-NR", 58], aj, {s: {html: "<p>Podle nové směrnice by nebylo vhodné, aby telefonní operátoři změnili stávající tarify.</p><p>Podle nové směrnice by bylo vhodné, aby telefonní operátoři nezměnili stávající tarify.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item58-CNR", 58], aj, {s: {html: "<p>Zákazníci nevěří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři změnili stávající tarify.</p><p>Zákazníci věří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři nezměnili stávající tarify.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item58-EWS", 58], aj, {s: {html: "<p>Ne všichni zákazníci věří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři změnili stávající tarify.</p><p>Někteří zákazníci věří, že podle nové směrnice by bylo vhodné, aby telefonní operátoři nezměnili stávající tarify.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item59-NR", 59], aj, {s: {html: "<p>Nový náčelník policie nechce, aby se na ten případ nasadili zkorumpovaní policisté.</p><p>Nový náčelník policie chce, aby se na ten případ nasadili nezkorumpovaní policisté.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item59-CNR", 59], aj, {s: {html: "<p>Gangsteři nevěří, že nový náčelník policie chce, aby se na ten případ nasadili zkorumpovaní policisté.</p><p>Gangsteři věří, že nový náčelník policie chce, aby se na ten případ nasadili nezkorumpovaní policisté.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item59-EWS", 59], aj, {s: {html: "<p>Ne všichni gangsteři věří, že nový náčelník policie chce, aby se na ten případ nasadili zkorumpovaní policisté.</p><p>Někteří gangsteři věří, že nový náčelník policie chce, aby se na ten případ nasadili nezkorumpovaní policisté.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

[["followup-item60-NR", 60], aj, {s: {html: "<p>Jako dobrý znalec místních poměrů vám neradím, abyste šli tou cestou kolem jezera.</p><p>Jako dobrý znalec místních poměrů vám radím, abyste nešli tou cestou kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item60-CNR", 60], aj, {s: {html: "<p>Ti cestovatelé nevěřili, že ten dobrý znalec místních poměrů jim radil, aby šli tou cestou kolem jezera.</p><p>Ti cestovatelé věřili, že ten dobrý znalec místních poměrů jim radil, aby nešli tou cestou kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],
[["followup-item60-EWS", 60], aj, {s: {html: "<p>Ne všichni cestovatelé věřili, že ten dobrý znalec místních poměrů jim radil, aby šli tou cestou kolem jezera.</p><p>Někteří cestovatelé věřili, že ten dobrý znalec místních poměrů jim radil, aby nešli tou cestou kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler1", aj, {s: {html: "<p>Petrovi se ztratilo několik ovcí.</p><p>Petrovi se ztratilo několik zvířat.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler2", aj, {s: {html: "<p>Petrovi se neztratila žádná zvířata.</p><p>Petrovi se neztratily žádné ovce.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler3", aj, {s: {html: "<p>Petr a Marie šli kolem jezera.</p><p>Petr šel kolem jezera.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler4", aj, {s: {html: "<p>Všechna kola v tomhle obchodě jsou předražená.</p><p>Některá kola v tomhle obchodě jsou předražená.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler5", aj, {s: {html: "<p>Petr lituje, že žije v Paříži.</p><p>Petr žije v Paříži.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler6", aj, {s: {html: "<p>Petr nevyhrál ten závod.</p><p>Petr se zúčastnil toho závodu.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler7", aj, {s: {html: "<p>Jestli venku sněží, tak vyjedou silničáři; venku sněží.</p><p>Vyjedou silničáři.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler8", aj, {s: {html: "<p>Když venku sněží, tak vyjedou silničáři; silničáři nevyjeli.</p><p>Venku nesněží.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler9", aj, {s: {html: "<p>Když venku sněží, tak vyjedou silničáři; venku nesněží.</p><p>Silničáři nevyjeli.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler10", aj, {s: {html: "<p>Petr napsal pět románů.</p><p>Petr napsal více než tři romány.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler11", aj, {s: {html: "<p>Petr je vyšší než všechny ostatní děti v jeho třídě; Klára chodí do Petrovy třídy.</p><p>Petr je vyšší než Klára.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler12", aj, {s: {html: "<p>Petr je vyšší než všechny ostatní děti v jeho třídě; Klára nechodí do Petrovy třídy.</p><p>Petr je vyšší než Klára.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler13", aj, {s: {html: "<p>Ne všechny děti přijely před třetí hodinou odpoledne.</p><p>Ne všechny děti přijely před druhou hodinou odpoledne.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler14", aj, {s: {html: "<p>Některé děti jsou skauti.</p><p>Někteří skauti jsou děti.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler15", aj, {s: {html: "<p>Každý člověk je smrtelný.</p><p>Každá smrtelná bytost je člověkem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler16", aj, {s: {html: "<p>Málo lidí létá vrtulníkem.</p><p>Málo dětí létá vrtulníkem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler17", aj, {s: {html: "<p>Málo dětí vlastní auto.</p><p>Málo lidí vlastní auto.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler18", aj, {s: {html: "<p>Někteří lidé umí plavat; některé plavající bytosti mají žábry.</p><p>Někteří lidé mají žábry.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler19", aj, {s: {html: "<p>Petr seděl v knihovně od rána do pozdního večera.</p><p>Petr seděl v knihovně (minimálně) od rána do poledne.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler20", aj, {s: {html: "<p>Petr nedostudoval vysokou školu.</p><p>Petr studoval vysokou školu.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler21", aj, {s: {html: "<p>Potkal jsem Petrova nejstaršího syna.</p><p>Petr má syna.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler22", aj, {s: {html: "<p>Petr neopravil všechny písemky.</p><p>Petr opravil některé písemky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler23", aj, {s: {html: "<p>Petr opravil většinu písemek.</p><p>Petr neopravil všechny písemky.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler24", aj, {s: {html: "<p>Oba studenti tu zkoušku nezvládli.</p><p>Tu zkoušku nezvládl ani jeden z těch studentů.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler25", aj, {s: {html: "<p>Nebyl to zahradník, kdo zabil vévodu.</p><p>Vévoda byl zabit.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler26", aj, {s: {html: "<p>Všichni studenti přijeli ne autobusem, ale vlakem.</p><p>Žádný student nepřijel autobusem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler27", aj, {s: {html: "<p>Na tu konferenci pojedu autobusem nebo vlakem; nepojedu vlakem.</p><p>Pojedu autobusem.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler28", aj, {s: {html: "<p>Všichni jezevčíci jsou psi; všichni psi štěkají.</p><p>Všichni jezevčíci štěkají.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler29", aj, {s: {html: "<p>Petr neví, že Klára odjela domů.</p><p>Klára odjela domů.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}],

["filler30", aj, {s: {html: "<p>Jen Petr miluje Marii.</p><p>Nikdo kromě Petra Marii nemiluje.</p>"}, as: ["Druhá věta vyplývá z první", "Druhá věta nevyplývá z první"], presentAsScale: false, leftComment: null, rightComment: null}]

];
