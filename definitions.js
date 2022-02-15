// effect audio group definitions
function create_effect_group(name, count) {
  var obj = {
    'name': name,
    'audio': [],
  };
  for (let i = 1; i <= count; i += 1) {
    obj.audio.push('./effects/' + name + '-' + i.toString() + '.ogg');
  }
  return obj;
}
var effect_groups = {
  'arrow-loose-and-hit': 7,
  'dirt-slam': 4,
  'dragon-bite': 2,
  'ooze': 5,
  'owlbear-roar': 4,
  'slam-attack': 4,
  'swimming': 6,
  'sword-clash': 3,
  'thunder-clap': 4,
  'wave-crash': 4,
};
for (let name in effect_groups) {
  let count = effect_groups[name]
  effect_groups[name] = create_effect_group(name, count);
}


// Specific soundboards
var soundboards = {}
soundboards.phandalin = [
  './ambient/evening-town.ogg',
  './ambient/small-marketplace.ogg',
  './ambient/town-square-daytime.ogg',
  './ambient/woodland-village.ogg',
];
soundboards.wave_echo_cave = [
  effect_groups['ooze'],
  effect_groups['swimming'],
  effect_groups['wave-crash'],
  './ambient/dripping-cave.ogg',
];

// Generic soundboards
soundboards.combat = [
  effect_groups['arrow-loose-and-hit'],
  effect_groups['dirt-slam'],
  effect_groups['sword-clash'],
  effect_groups['dragon-bite'],
  effect_groups['thunder-clap'],
  './music/darkest-dungeon-the-cove-battle.ogg',
  './music/skyrim-ost-blood-and-steel.ogg',
];
soundboards.travelling = [
  './ambient/docks.ogg',
  './ambient/dripping-cave.ogg',
  './ambient/evening-town.ogg',
  './ambient/forest-daytime.ogg',
  './ambient/horseback-travelling.ogg',
  './ambient/night-camp.ogg',
  './ambient/rapid-river.ogg',
  './ambient/thunderstorm.ogg',
  './ambient/woodland-village.ogg',
];
soundboards.Wolf = [
  './wolf/Fuckoff Marlon.ogg',
  './wolf/I love you marlon.ogg',
  './wolf/Kylian is aant pesten Marlon.ogg',
  './wolf/Marlon spread eagle.ogg',
  './wolf/marlonvraagteken.ogg',
  './wolf/NEE.ogg',
  './wolf/Shut the fuck up Marlon.ogg',
  './wolf/Zo ni he Marlon.ogg',
  './wolf/oehoehaahaah wie ben ik.ogg',
  './wolf/love you marlon love you.ogg',
  './wolf/wij hadden al ja gezegt maar ja ge zit ni op discord dus ja piss geluid.ogg',
  './wolf/ik zen maar een beke gevallen.ogg',
  './wolf/wete waar ge u collegas kunt steken.ogg',
  './wolf/goeike.ogg',
  './wolf/goeike2.ogg',
  './wolf/goeike3.ogg',
  './wolf/geen goeike.ogg',
  './wolf/bam Kylian.ogg',
  './wolf/danku marloooooon.ogg',
  './wolf/ehehehe.ogg',
  './wolf/Ja hier is den exper ze.ogg',
  './wolf/een heel goeike.ogg',
  './wolf/goeike oh shit.ogg',
  './wolf/nice.ogg',
  './wolf/okeee.ogg',
  './wolf/ge daarft ni pussy.ogg',
  './wolf/gelukkige verjaardag Briann.ogg',
  './wolf/heuheuheu Marlon.ogg',
  './wolf/nee Marlon ik ben van plan om buiten in de regen te zitten tot ik een long ontsteking krijg.ogg',
  './wolf/Das niks Marlon ik had zo ni mogen reageren ik zal u wel binnen draaien als da gebeurd.ogg',
  './wolf/draagen maar draaien gaat ook.ogg',
  './wolf/Marlon hoe gade gij van mij binnen draaien naar bieslook.ogg',
  './wolf/Ik zeg gewoon rustig in den hof is hier verse bieslook.ogg',
  './wolf/Relaxation Powerful Meditation.ogg',
  './wolf/eehhe hey fuck you marlon.ogg',
  './wolf/love you kylian de marlon ook als het moet.ogg',
  './wolf/oooh hoehoehoehoeee.ogg',
  './wolf/Marlon als ge ons ni graag hebt moet ge het zeggen he.ogg',
  './wolf/HALLO.ogg',
  './wolf/doe it pussy euuh.ogg',
  './wolf/Danku marlon voor het plezier ja ik ga net mijne trap gaan ik ga nu den eerste trap pakken aaaaaaaah.ogg',
  './wolf/Fuck off Marlon2.ogg',
  './wolf/zucht goeike goeike boos.ogg',
];
soundboards.Soraya = [
  './soraya/aah Marlon ZO ni he.ogg',
  './soraya/Kzen aant eten kak jong.ogg',
  './soraya/Marlon ik gaan zo hard in uw ballen trappen da ze er langs u keel terug uit komen.ogg',
  './soraya/Marlon zuigt mijne piee.ogg',
  './soraya/da was gisteren nu mag da terug wel.ogg',
  './soraya/shut the fuck up Marlon.ogg',
  './soraya/Marlon I love you.ogg',
];
soundboards.Marlon = [
  './marlon/ademen smakelijk.ogg',
  './marlon/Ballekes in mijn keel jaaa.ogg',
  './marlon/is dat een ja.ogg',
  './marlon/league ofwa.ogg',
  './marlon/Oooh ja ik heb da zo graag da ge tegen mij roept.ogg',
  './marlon/Ooohn ja Wolf da heb ik zo graag.ogg',
  './marlon/ja sorry ik was nog even met de collegas aant hangen he da moet aventoe ook gebeuren he.ogg',
  './marlon/euuuh buske.ogg',
  './marlon/Soraya love you 2 he.ogg',
];
soundboards.Kylian = [
  './kylian/stop me de marlon te pesten wolf.ogg',
  './kylian/naar waar gaan we.ogg',
  './kylian/alles oke wolf.ogg',
  './kylian/eeuuh ja wolf.ogg',
  './kylian/woleeeuf.ogg',
  './kylian/wolf houd uwe bek.ogg',
  './kylian/a... alles oke Wolf.ogg',
  './kylian/Zo ni he Wolf.ogg',
  './kylian/boe.ogg',
];
soundboards.Briann = [
  './briann/badkamer pret mijne piet.ogg',
];
