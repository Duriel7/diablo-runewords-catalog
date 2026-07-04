# Diablo Runewords Catalog

Diablo Runewords Catalog is a direct listing of all existing Diablo II runewords. It is designed in mind to be the spiritual successor of the simple, yet effective tool called Runik, coded by Azgazarel for the French website JudgeHype.com.

>For now the tool is in French, but don't worry it will be translated in english later on.

The catalog is designed in a straightforward HTML/CSS/JS way, able to be used completely offline.

## Development journal

Right now, the tool is not yet ready. You can still download the files, fork, copy the idea, whatever you want.

The catalog is able to filter by runeword, it will only show data of some runewords I added.

I've integrated a small amount of data just to test out my proof of concept, and try different ways to do what I want to do. The UI is very poor, in black and white, with borders everywhere, it's rough. It's RAW, just let me cook for some time and I will update regularly this journal.

<details>
<summary>Story and details - English version</summary>

## Why reinvent the wheel you ask?



## What are the capabilities



## What evolution will come next



## How the tool will evolve



</details>

--- 

Diablo Runewords Catalog est une liste directe de tous les mots runiques existants dans Diablo II. Il est pensé dans l'essence pour être le successeur spirituel de l'outil simple, mais efficace, nommé Runik, codé par Azgazarel pour le site JudgeHype.com.

>Pour le moment l'outil reste en français, mais il sera traduit plus tard en anglais.

Le catalogue est pensé dans un processus direct en HTML/CSS/JS, pour pouvoir être utilisé complètement hors ligne.

## Journal de développement

Pour le moment, l'outil n'est pas encore prêt. Vous pouvez quand même télécharger les fichiers, fork, copier l'idée, ce que vous voulez.

Le catalogue est capable de filtrer par mot runique, il va seulement montrer les détails du peu que j'ai ajouté.

J'ai intégré une petite quantité de données juste pour tester ma preuve de concept, et essayer différentes manières d'arriver là où je veux arriver. L'UI est très pauvre, en noir et blanc, avec des bordures partout, c'est raide. C'est CRU, laissez-moi juste cuisiner ça quelques temps et je mettrai à jour ce journal régulièrement.

<details>
<summary>Histoire et détails - Version française</summary>

## Pourquoi réinventer la roue me demandez-vous ?

Disons simplement que toutes les roues que j'ai trouvées de mon côté sont plus ou moins carrées. Ce qui est loin d'être pratique.

### Pour le côté explicite :

Prenez JudgeHype par exemple, l'outil dont dispose le site est bien, mais il contient quelques erreurs ou oublis, qui ne sont pas réparés ou comblés, malgré les relances au tenant du site.

Dans l'idée l'outil est très bon, mais pas adapté à mon utilisation. Donc j'en code un moi-même à mon goût, et adapté à mes besoins.

**Un exemple tout simple :** filtrer par type d'arme, comme l'épée, permet d'afficher les mots runiques que l'on peut créer dans une épée, mais pas les mots runiques que l'on peut créer dans n'importe quelle arme de mêlée. Pour moi c'est une faute d'UX certaine.

Il serait logique qu'à la question _"Quel mot runique puis-je créer avec une épée ?"_, la réponse soit _"Tous ces mots runiques spécifiques de l'épée, ceux qui peuvent aller dans n'importe quelle arme de mêlée, et ceux qui peuvent aller dans n'importe quelle arme tout court"_. C'est une réponse longue, mais complète et précise.

Mon outil vise à **réduire la frustration** d'un joueur qui cherche sa réponse (ou une piste de réponse), et le nombre de clics pour y parvenir, tout en maintenant un haut niveau de qualité et d'expérience utilisateur. Par la **réduction des perturbations visuelles**, et la **délivrance de l'information directe, claire et précise**.

### L'héritage de Runik

Quand Azgazarel a délivré son petit logiciel, je l'ai testé sans conviction. J'ai pensé _"Bof, le site donne déjà les infos, à la limite si je suis en vacances à la campagne pourquoi pas mais bon..."_. Suite à quoi j'ai immédiatement adopté son outil.

Pourquoi ?

Il est simple, mais il délivre l'info cherchée en deux secondes chrono. Seulement il est obsolète depuis la sortie de Diablo II Resurrected, puisqu'à chaque nouvelle saison de nouveaux mots runiques sont créés.

De plus, de nouveaux équipements ont été intégrés, au moins les grimoires de Démoniste, ouvrant de potentiels nouveaux mots runiques spécifiques à l'avenir, ou des mises à jour dans les anciens.

## Quelles sont les capacités

Dans la même veine que Runik, mon outil vise à faciliter la recherche d'un mot runique, ou fournir de quoi trouver une réponse à la question _"Qu'est-ce que je pourrais faire pour mon personnage ?"_.

### Un filtre multiple

La logique veut qu'on cherche d'abord un mot runique allant dans une base que l'on vient de trouver. La situation classique est du style _"Oh une faux avec 5 trous, qu'est-ce que je peux insérer là-dedans ?"_.

Puis on se rappelle qu'ils faut des runes qu'on n'a pas forcément, et farmer la Comtesse 100 fois n'est pas forcément attrayant. Certains joueurs peuvent vouloir faire avec les moyens du bord. D'où le filtre suivant : les runes. Cela répond à la question _"Qu'est-ce que je peux faire dans ma faux à 5 trous avec les runes dont je dispose là tout de suite ?"_ et ça renforce le côté pratique. On peut filtrer par autant de runes que le nombre de châsses sélectionné. Sinon le maximum par défaut est de 6 puisque le jeu l'impose.

Puis vient justement le filtre du nombre de châsses. On savait qu'on avait 5 trous dans la faux, mais là, si on active le filtre, ça resserre les résultats, le nombre de mots runiques affichés diminue. Le joueur en quête de réponses voit directement ce qu'il va pouvoir faire : _"Ok j'ai ma faux à 5 trous et une Thul et une Fal, j'en fais quoi ?"_ ; réponse : _"Ah je peux faire Obéissance, j'ai ce qu'il faut"_. Problème réglé.

>Oui JudgeHype et la majorité des sites anglophones permettent un filtrage multifactoriel. Cependant la plupart liste les mots runiques en bloc, ce que je ne souhaite pas, car il faut scroll tout en bas pour trouver les derniers. Et c'est ce que Runik résolvait comme problème.

### Une interface conditionnelle

Sur la gauche se trouvent les filtres activables. Au milieu, la liste des mots runiques qui ont passé les filtres. Et à droite, les détails d'un seul mot runique sélectionné seulement.

Je n'aime pas voir 50 mots runiques dont les informations me sont données d'un seul coup. Certes la comparaison est rapide, mais ça prend de la place, si c'est pas en hauteur, c'est en largeur.

Pour les développeurs : tous les sites ne proposent pas leurs listes en flexboxes bien alignées dans des div séparées.

Certains site submergent visuellement le visiteur et perdent l'information censée être rapide à capter. Prenons le cas du site diablo2.io que j'aime beaucoup malgré ses défauts. Les blocs de mots runiques sont positionnés les uns collés aux autres, on ne sait pas où regarder.

Encore une fois, le cas de Runik est très simple : il permet d'avoir la liste des mots runiques, puis les détails de celui qui est sélectionné uniquement.
Peut-être ferai-je un comparateur plus tard, mais ce n'est pas nécessairement l'objectif actuellement. Je garde l'idée de côté, pour les joueurs à qui ça pourrait plaire.

## Quelle évolution viendra prochainement

### Un comparateur entre deux mots runiques ?

Éventuellement si ça peut être utile à certains joueurs, alors je pourrais faire un "côte à côte" dans l'interface pour faire la différence entre deux mots runiques.

### La possibilité de faire une liste de mots runiques préférés ?

Quelque chose qui ressemble à "Ma liste de mots runiques à refaire souvent pour tous mes personnages" qui serait stockée localement dans un fichier dans le même dossier que l'outil.

### Dans le même esprit : une liste de mots runiques associés à vos personnages ?

Il s'agirait de pouvoir entrer une liste personnalisée de vos personnages, et de leur attribuer des mots runiques. Pas un builder, il en existe en ligne de très bons, et ça sort du scope de mon outil, et de ma volonté. Ce serait plutôt une sorte de liste de rappel du style "J'aimerais que mon Paladin essaie ces mots runiques" et d'associer les deux. Ce serait stocké localement dans un fichier aussi, dans le dossier de l'outil.

## Comment l'outil évoluera

Je ne puis le dire, mais j'ai quelques idées floues à trier.

### Une liste des objets uniques et de sets

C'est mon prochain objectif après avoir finalisé le côté mot runiques. Je pensais intégrer ça avec l'outil plutôt que d'en refaire un séparé.

### Proposer une version en ligne ?

Pourquoi pas porter l'outil sur GitHub Pages ou autres, afin que des utilisateurs puissent s'en servir en ligne sans avoir à le télécharger.

</details>