var iFileName = "KibblesTasty Full Spell List [Transcribed by Airborne0801].js";

SpellsList["Acid Bubble"] = {
	name : "Acid Bubble",
	classes : ["druid", "occultist", "sorcerer", "Spellblade"],
	source : [["HB", 0]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save: "Dex",
	description : "5-ft rad all 3d4+2d4/SL acid dmg; save half",
	descriptionFull : "You create a bubble of acid that floats to the target point before bursting in a shower of acid. Each creature within 5 feet must make a Dexterity saving throw. On a failure, it takes 3d4 Acid damage, or half as much on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};
SpellsList["acid rain"] = {
	name : "Acid Rain",
	classes : ["druid", "occultist", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "300 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "40-ft rad 60-ft high all enter/start 6d4 acid dmg, covered: 3d4 dmg at end turn; save half, not covered",
	descriptionFull : "Acid rain begins falling within a 40-foot-radius, 60-foot-high cylinder centered on a point you choose within range. When a creature moves into the spell's area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 6d4 acid damage, and become covered in acid. On a successful save, a creature takes half the initial damage and is not covered in acid."+
	"\n   A creature takes 3d4 acid damage if it ends its turn while covered with acid. The target or a creature within 5 feet of it can end this damage by using its action to clear away the acid."
};
SpellsList["aero barrage"] = {
	name : "Aero Barrage",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "4+1/SL lances hit creature(s) on spell attack with each lance for 2d8 Force dmg and 10-ft push per lance",
	descriptionFull : "You create four lances of rapidly spinning condensed wind and hurl them at targets within range. You can hurl them at one target or several."+
	"\n   Make a ranged spell attack for each lance. On a hit, the target takes 2d8 slashing damage and is knocked 10 feet backwards."+
	AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you create one additional lance for each slot level above 4th."
};
SpellsList["aether lance"] = {
	name : "Aether Lance",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	description : "30-ft long 5-ft wide all 8d4+1d4/SL Force dmg",
	descriptionFull : "You gather raw aether in your hand and expel it in a lance of power forming a line 30 foot long and 5 foot wide. Each creature in a line takes 8d4 force damage."+
	AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd."
};
SpellsList["aether storm"] = {
	name : "Aether Storm",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "10-ft rad, 40-ft high for 8d4 Force dmg, 1d4 Force per 5 ft move, end turn 8d4 Force; bns move 10 ft",
	descriptionFull : "You conjure a storm of aether erupting from a point of your choice within range. The aether storm fills a 10-foot-radius, 40-foot-high cylinder. When the storm appears, each creature within its area takes 8d4 force damage."+
	"\n   A creature takes 1d4 force damage for each 5 feet they move through the storm, and if a creature ends their turn within the aether storm, they take 8d4 force damage. On your turn, you can move the storm 10 feet in any direction as a bonus action."+
	AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage a creature takes from the storm appearing by ending their turn in it increases by 1d4 for each slot level above 5th"
};
SpellsList["alacrity"] = {
	name : "Alacrity",
	classes : ["bard", "occultist", "ranger", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "+2 AC, speed doubled, adv. Dex saves, extra action (1 attack, dash, disengage, hide) until start next turn",
	descriptionFull : "Until the start of your next turn, your speed is doubled, you gain a +2 bonus to AC, you have advantage on Dexterity saving throws, and you gain an additional action. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action."+
	"\n   If you are under the effect of haste, you gain no benefit from this spell."
};
SpellsList["animate object"] = {
	name : "Animate Object",
	classes : ["bard", "inventor", "occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "A tiny nonmagical object not worn or carried; 1 bns command within 60 ft; see book",
	descriptionFull : "You bring a Tiny object to life. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. The object has the following stats: HP: 20, AC: 18, Str: 4, Dex: 18. The object has an attack modifier equal to your spell attack modifier. If the object is not a weapon, it deals 1d4 + your Spellcasting modifier damage on hit. Select from bludgeoning, piercing, or slashing damage based on the nature of the item. If the object is a weapon, it deals the weapon's damage dice + your Spellcasting modifier of the weapon's damage type. The spell can only animate one-handed weapons without the special modifier this way."+
	"\n   As a bonus action, you can mentally command the animated object as long as it is within 60 feet of you. You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete."+
	"\n   If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form."
};
SpellsList["arcane ablation"] = {
	name : "Arcane Ablation",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 h",
	description : "1 crea gains 4+1/SL temp HP; When temp HP are 0 at start of its turn, gain same temp HP-1, until 0",
	descriptionFull : "You touch a piece of worn armor or clothing and imbue it with magic. The creature wearing this imbued item gains 4 temporary hit points. When these temporary hit points are exhausted, at the start of the creature's next turn it will gain hit points equal to 1 hit point less than the previous amount gained from this spell (for example, from 4 to 3), until no temporary hit points would be gained and the spell ends. Temporary hit points from this spell are lost when this spell ends."+
	AtHigherLevels + "The initial temporary hit points increases by 1 for each slot level above 1st."
};
SpellsList["arcane infusion"] = {
	name : "Arcane Infusion",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 min",
	range : "Self",
	components : "V,S,M\u0192",
	compMaterial : "Spare parts that could form the upgrade selected worth at least 1 sp",
	duration : "1 h",
	description : "Gain effects of one unrestricted upgrade; SL3: lvl 5, SL4: lvl 9, SL5: lvl 11",
	descriptionFull : "You use arcane power to briefly bring to power or modify your inventions. For the duration, you gain the effects of one unrestricted upgrade. All normal prerequisite apply (including subclass and level requirements). The creation is magical, held together and formed of magic and spare parts, taking the form of the upgrade or empowering an existing upgrade with temporary new features. Casting this spell again ends the effects of any previous castings of this spell."+
	AtHigherLevels + "When you cast this spell with a 3rd-level spell slot or higher, you can infuse the effects of an upgrade that requires 5th level or higher. When you cast this spell using a spell slot of 4th level or higher, you can infuse the effects of an upgrade that requires 9th level or higher. When you cast this spell with a 5th-level spell slot or higher, you can infuse the effects of an upgrade that requires 11th level or higher."
};
SpellsList["arcane weapon"] = {
	name : "Arcane Weapon",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Touch",
	components : "V,S",
	duration : "1 h",
	description : "1 weapon becomes magical, does Force dmg, ignores ammunition and loading; SL3: 8h, SL5: 24h",
	descriptionFull : "You touch a weapon and imbue it with magic. For the duration the weapon counts as a magical weapon and any damage dealt by it is Force damage. When casting this one a weapon with the ammunition property, it no longer consumes ammunition when fired, and doesn't need to be reloaded."+
	AtHigherLevels + "When you cast this spell using a spell slot of 3rd or 4th level, the duration becomes 8 hours. When you use a spell slot of 5th level or higher, the duration becomes 24 hours."
};
SpellsList["arctic breath"] = {
	name : "Arctic Breath",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "30-ft long 5-ft wide all 2d8+1d8/SL Cold dmg, -10 ft speed till next turn ends; save half, no -speed",
	descriptionFull : "A line of freezing arctic wind 30 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. On a failed save, a creature takes 2d8 cold damage and their speed is reduced by 10 feet until the end of their next turn. On a successful save, a creature takes half as much damage and isn't slowed."+
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["awaken rope"] = {
	name : "Awaken Rope",
	classes : ["bard", "inventor", "occultist", "ranger", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "10 to 60 feet of cord or rope, worth at least 1 cp",
	duration : "Instantaneous",
	save : "D/S",
	description : "10-60 ft rope: Restrain crea in 20 ft (Dex save), Fasten, or Pull Small obj in length (Str save); SL2: see B",
	descriptionMetric : "3-18 m rope: Restrain crea in 6 m (Dex save), Fasten, or Pull Small obj in length (Str save); SL2: see B",
	descriptionFull : "As an action, you can touch a rope 10 to 60 feet long and issue a single command to it, selecting from the following options:"+
	"\n \u2022 " + toUni("Bind") + ". The rope attempts to bind a creature of your choice within 20 feet of you. The creature must make a Dexterity saving throw or become restrained until it is freed. A creature can use its action to make a DC 10 Strength check, freeing itself or another creature within its reach on a success. Dealing 5 slashing damage to the rope (AC 10) also frees the creature without harming it, ending the effect and destroying the rope."+
	"\n \u2022 " + toUni("Fasten") + ". The rope flies up 60 feet and ties one end to an object or surface that a rope could be tied to, before becoming inanimate again, hanging from the object."+
	"\n \u2022 " + toUni("Grab") + ". The rope lashes out grabs one Small or smaller object that is not being worn by a creature within a range equal to the length of the rope and pulls that object back to your hand. If that object is being carried by a creature, it must make a Strength saving throw. On success, it retains the object, and on failure the object is pulled from the creature."+
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can target a chain instead of a rope. It has the same available actions, but it has a DC 15, an AC of 15, and resistance to slashing damage when taking the Bind action. When cast with a spell slot of 3rd level or higher targeting a rope, that rope is magically imbued for 1 minute, gaining an DC of 15, an AC 20, and 20 hit points."
};
SpellsList["bad blood"] = {
	name : "Bad Blood",
	classes : ["druid", "occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A piece of rotten meat",
	duration : "Conc, 1 min",
	save : "Con",
	description : "1 creature with blood save or 1d12 poison dmg, poisoned; end of turn save or 1d4 poison dmg; save ends",
	descriptionFull : "Targeting a creature you can see within range, you attempt to corrupt its blood. Creatures without blood are immune to this effect. The target must make a Constitution saving throw. On failure, they take 1d12 poison damage and become poisoned for the duration."+
	"\n   At the end of each of its turns, the target can make another Constitution saving throw. On a success, the spell ends on the target, on failure; they take an extra 1d4 poison as the poison continues to ravage them."+
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional target for each slot level above 2nd. The targets must be within 30 feet of each other when you target them."
};
SpellsList["beam of annihilation"] = {
	name : "Beam of Annihilation",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 6,
	school : "Evoc",
	time : "1 c",
	range : "S:60" + (typePF ? "-" : "") + "ft line",
	components : "S",
	duration : "Conc, 3 r",
	save : "Dex",
	description : "8d8 cold/fire/force/light. start turn; save halves; start turn rotate 90, 4d8, save none; other a ends",
	descriptionFull : "You unleash a beam of pure energy, selecting cold, fire, force, or lightning energy when you cast this spell and blasting it outward in a line that is 60 feet long and 10 feet wide that persists until the start of your next turn. Any creature that starts their turn in this beam must make a Dexterity saving throw. On a failed save they take 8d8 damage of the beam's energy type, or taking half as much on a successful save."+
	"\n   While you are concentrating on this spell, your speed is 0."+
	"\n   At the start of each of your turns, you can use your action to maintain the beam or redirect it, rotating it up to 90 degrees in any direction. Any creature the beam passes through while rotating (if the beam passes completely through them and they will not start their turn inside of it) must make a Dexterity saving throw or, take 4d8 damage of the beams energy type on a failed save, and taking no damage on a successful save."+
	"\n   If you do not use your action maintain or redirect it, the spell ends early."
};
SpellsList["befuddling curse"] = {
	name : "Befuddling Curse",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "Something from the target creature (such as blood, hair, or scales) which the spell consumes",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 creature mentally swap 2 same-size things; Wis save or unaware of swap, repeat save each interaction",
	descriptionFull : "You befuddle a creature's mind, swapping the position of two things it can see that are of the same size and category (for example, two Medium creatures or two Gargantuan buildings)."+
	"\n   The target creature must make a Wisdom saving throw. On failure, it is unaware the two things have been swapped. Each time the creature interacts with, attacks, or is attacked by a swapped targets, it can repeat its saving throw against the effect."
};
SpellsList["binding curse"] = {
	name : "Binding Curse",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M\u2020",
	compMaterial : "Something from the target creature (such as blood, hair, or scales) which the spell consumes",
	duration : "Conc, 1 min",
	description : "bind 1 creature to point; Wis save to move > 5 ft away; start turn > 5 ft away, Str save or pulled 5 ft",
	descriptionFull : "You bind a creature to a point within 5 feet of it, causing a glowing chains of light to connect it to that point. For the duration of the spell, if the creature attempts to move away from that point, the must make a Wisdom saving throw, or be unable to move more than 5 feet away from from that point until the start of their next turn."+
	"\n   If a creature starts its turn more than 10 feet from the binding point, they must make a Strength saving throw or be dragged 5 feet toward the binding point."
};
SpellsList["burn"] = {
	name : "Burn",
	classes : ["druid", "occultist", "sorcerer", "warlock"],
	source : [["HB", 0]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell attack, 1d12 Fire dmg; +1d12 at CL 5, 11, and 17",
	descriptionCantripDie : "Spell attack for `CD`d8 Fire dmg",
	descriptionFull : "You ignite a brilliant flame around your hand that sears anything you touch. Make a melee spell attack against the a creature or object within range. On hit, the target takes 1d12 fire damage."+
	"\n   The spell's damage increases by 1d12 when you reach 5th level (2d12), 11th level (3d12), and 17th level (4d12)."
};
SpellsList["bond item"] = {
	name : "Bond Item",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 1,
	school : "Conj",
	time : "1 min",
	range : "Touch",
	components : "V,S",
	duration : "8 h",
	save : "Cha",
	description : "Link with obj < 100 lbs; if held, crea save, adv if held > 1 min; bonus action to recall item to hand",
	descriptionFull : "You touch an item weighing no more than 100 pounds and form a link between you and it. Until the spell ends, you can recall it to your hand as a bonus action.\n   If another creature is holding or wearing the item when you try to recall it, they make a Charisma saving throw to retain possession of the item, and if they succeed, the spell fails. They make this save with advantage if they have had possession of the item for more than 1 minute."
};
SpellsList["cold snap"] = {
	name : "Cold Snap",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "90 ft",
	components : "S",
	duration : "Instantaneous",
    save : "Con",
	description : "5-ft rad sphere dif. terrain till my next turn; 3d8+1d8/SL Cold dmg, slowed 10 ft; save halves, no slow",
	descriptionFull : "With a snap of your fingers a swirling burst of freezing wind erupts at a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Constitution saving throw. On a failed save, a creature takes 3d8 cold damage and becomes stuck in the ice, reducing their speed by 10 feet until the start of your next turn. On a success, the target takes half as much damage and is not stuck in ice.\n   The ground in the area is covered with slick ice and snow, making it difficult terrain until the start of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd."
};
SpellsList["compelled query"] = {
	name : "Compelled Query",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 1,
	school : "Psion",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Int",
    description : "Ask crea simple question, save or give thought or image answer; +5 on save per time used in past 24 h",
	descriptionFull : "You focus your telepathic powers on a creature and ask it a simple question. It must make an Intelligence saving throw, or it conjures a short mental thought or image that answers your question to the best of its ability that you can perceive telepathically. A creature gains a +5 to the saving throw against this spell for each time it has been used on them in the past 24 hours."
};
SpellsList["crackle"] = {
	name : "Crackle",
	classes : ["druid", "occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
    save : "Con",
	description : "3+1/SL arcs; ranged spell attack for 1d12 Lightn. dmg; 3+ on crea; save or stunned till their next turn",
	descriptionFull : "You create three arcs of lightning striking targets in range. You can direct them at one target or several.\n   Make a ranged spell attack for each arc. On a hit, the target takes 1d12 lightning damage. If three or more arcs hit a single target, they must make a Constitution saving throw or become shocked, stunning them until the start of their next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you create one additional arc for each slot level above 2nd.",
	dynamicDamageBonus : { multipleDmgMoments : true }
};
SpellsList["crashing wave"] = {
	name : "Crashing Wave",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
    save : "Str",
	description : "Water in 5ft, 25ft cone; 2d6+1d6/SL Bludg dmg, push 10ft; wall/fails>5=prone; save halves, no push",
	descriptionFull : "A wave of water sweeps out from you. Each creature in a 15-foot cone must make a Strength saving throw. On a failed save, a creature takes 2d6 bludgeoning damage and is knocked 10 feet away from you. If a creature is knocked into a wall, another creature, or fails by 5 or more, it is additionally knocked prone. On a successful save, the creature takes half as much damage and is not knocked back. If there is a source of water of at least 5 cubic feet within 5 feet of you when you cast the spell, you can displace that water, increasing the range of the spell to a 25-foot cone." + AtHigherLevels + "When you cast this spell using a spell lot of 2nd level or higher, the damage increases by 1d6 for each level above 1st."
};
SpellsList["crippling agony"] = {
	name : "Crippling Agony",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A joint bone",
	duration : "Conc, 1 min",
    save : "Con",
	description : "1 crea takes 1d6 Necrotic dmg when moves > half speed or takes an action; repeat save at end of turn",//reworded
	descriptionFull : "You can inflict crippling agony on a foe. Choose one creature that you can see within range to make a Constitution saving throw. If the target fails, it becomes crippled with horrific pain. Whenever the creation moves more than half of its speed or takes an action, the crippling pain causes it to take 1d6 necrotic damage.\n   It can repeat the saving throw at the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends."
};
SpellsList["cruel puppetry"] = {
	name : "Cruel Puppetry",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 3,
	ritual : true,
	school : "Necro",
	time : "1 a",
	range : "120 ft",
	components : "V,S,M\u2020",
	compMaterial : "A small humanoid doll worth at least 5 gp and something from the target (such as blood, hair, or scales) both of which the spell consumes",
	duration : "Conc, 1 min",
    save : "Cha",
	description : "1 crea bound to doll; can use my action to control doll/crea; see book; SL 5+: unlimited range",
	descriptionFull : "You attempt to bind a creatures soul to a doll, linking the creature to the doll in a sympathetic link. The target must make a Charisma saving throw. On failure, the creature becomes bound to the doll. On a successful save, the creature is not bound and the spell ends.\n   As part of casting the spell when the creature fails the save, and on subsequent turns using your action until the spell ends, you can perform one of the following actions:\n \u2022 Hold the doll still, causing the creature to be Restrained until start of your next turn.\n \u2022 Force the doll to move, causing the creature to move 15 feet in a direction of your choice that it can move.\n \u2022 Stab the doll, causing the creature take 4d6 piercing damage.\n \u2022 Rip the doll in half, ending the spell, destroying the doll, and dealing 4d12 necrotic damage to the creature.\n \u2022 Each time after the first you use an action to manipulate the doll, after the effect takes place, the creature can repeat the Charisma with disadvantage, ending the effect on a successful save.\n\nOnce a creature has been targeted by this spell, they cannot be targeted again for 24 hours." + AtHigherLevels + "When cast with a 5th level spell slot or above, the range of the spell becomes unlimited, as long as the target is on the same plane as the caster."
};
SpellsList["crushing singularity"] = {
	name : "Crushing Singularity",
	classes : ["wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "1 rnd",
    save : "Str",
	description : "15-ft rad; 3d6+1d6/other crea that failed (max 6d6) Bludg. dmg & moved to center of area; see book",
	descriptionFull : "You create an overwhelming gravitational singularity at a point within range that lasts until the start of your next turn. When you cast this spell, any creature within 15 feet of the point must make a Strength saving throw. Creatures that fail their saving throw are moved to the closest available space adjacent to the singularity and take 3d6 bludgeoning damage, and an extra 1d6 bludgeoning damage for each other creature that fails the saving throw, up to a maximum of 6d6 bludgeoning damage.\n   While within 15 feet of the singularity, moving away from the singularity requires twice as much movement. If a creature ends its turn within 15 feet of the singularity, it must make a Strength saving throw. On failure, they take 2d6 bludgeoning damage are dragged back to the closest available spot to the center of the singularity."
};
SpellsList["dancing wave"] = {
	name : "Dancing Wave",
	classes : ["druid", "occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Conc, 1 min",
    save : "Str",
	description : "5-ft rad dif. ter. if no swim spd; bns move 30 ft; enters crea's space; save or 1d6 Bludg dmg and prone",
	descriptionFull : "You summon a surging mass of water into existence at a point on the ground within range. The mass of water remains cohesive filling a 5-foot radius, though only rises 3 feet from the ground. The area is difficult terrain for any creature without a swimming speed.\n   For the duration of the spell, as a bonus action you can move the wave of water up to 30 feet along a surface in any direction. The first time the wave enters any creature's space during your turn, they must make a Strength saving throw or take 1d6 bludgeoning damage and be knocked prone. A creature automatically fails the saving throw against this spell if they are prone."
};
SpellsList["delve mind"] = {
	name : "Delve Mind",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 3,
	school : "Psion",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 min",
	save : "Int",
    description : "Crea save or I gain access to past 12+12/SL hours memories; recall them as if my memories",
	descriptionFull : "You delve into a creature's mind, forcing it to make an Intelligence saving throw. On a failure, for the duration or until you end the spell you gain access to its memories from the past 12 hours, and are able to recall things it remembers as if they are your own memories, but these memories contain only things the target creature remembers." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can delve an additional 12 hours further back in the creature's memories for each slot level above 3rd."
};
SpellsList["devouring darkness"] = {
	name : "Devouring Darkness",
	classes : ["occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "S:20" + (typePF ? "-" : "") + "ft rad",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Chosen creas 6d8+1d8/SL Necrotic dmg, moved in 5 ft; save halves, no move; regain HP=dmg dealt/4",
	descriptionFull : "Dark tendrils burst out from you in all directions. Creatures of your choice within must make a Constitution saving throw. On failure, they take 6d8 necrotic damage, and you can move them in a straight line to within 5 feet of you if there is an empty space they can be pulled to. On success, they take half as much damage and are not moved.\n   You regain hit points equal to one quarter (rounded down) of the necrotic damage taken by all targets effected by the spell." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["dimension cutter"] = {
	name : "Dimension Cutter",
	classes : ["ranger"],
	source : [["HB", 0]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,M\u2020",
	compMaterial : "A melee weapon you are proficient with worth at least 1 cp",
	duration : "Instantaneous",
	description : "Each crea takes 6d6 Force damage",
	descriptionFull : "You flourish a weapon weapon you are proficient with used in the casting and sweep through the air, slashing apart the dimensional space. Each creature in a 15-foot cone takes 6d6 force damage."
};
SpellsList["disorient"] = {
	name : "Disorient",
	classes : ["occultist", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A mobius strip",
	duration : "1 min",
	save : "Wis",
	description : "Crea has disadv on atks, moves 10ft in rnd dir., spd 0 till nxt turn; save at end of turn, fails by 5+: prone",
	descriptionFull : "Targeting a creature with you can see, you flip their perception of reality. The target creature must pass a Wisdom saving throw or become disoriented. A disoriented creature has disadvantage on all attack rolls and at the start of their turn moves 10 feet (up to its speed) in a random direction before their speed becomes zero until the start of their next turn.\n   At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends, but if the target fails by 5 or more, it falls prone."
};
SpellsList["dispel construct"] = {
	name : "Dispel Construct",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Construct; 4d10 Force dmg; save or stunned for 1 min; if less than 50HP reduced to 0",
	descriptionFull : "You can attempt to purge the magic animating a construct within range, rendering it inert. The target takes 4d10 force damage and must succeed on a Constitution saving throw or become stunned for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the spell ends on the target. If the target has less than 50 hit points remaining when it fails, it is reduced to zero hit points."
};
SpellsList["divide self"] = {
	name : "Divide Self",
	classes : ["occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Illus",
	time : "1 bns",
	range : "Self",
	components : "S",
	duration : "Conc, 1 min",
	description : "Duplicate of self & items; shares Conc, resources; HP divided; max 15+10/SL damage/turn; see book",
	descriptionFull : "You you create an exact duplicate of yourself in an empty space you can see within 30 feet of you. When you cast this spell and at the start of each of your turns for the duration, you can switch places with your duplicate." + "\n   " +
	"The duplicate has all of your stats, abilities, and equipment (including magic items). It acts on your initiative, and has its own actions, though it shares its concentration on this spell, and if either of you lose concentration, the spell ends." + "\n   " +
	"Your current hit points are divided between you and the duplicate and it shares all other resources and abilities with you (including limited use magic items), with any usage by either you or the duplicate depleting the resource for both of you." + "\n   " +
	"Your duplicate can take any action you can take, but it can deal a maximum of 15 damage on its turn (any additional damage dealt deals no further damage, when dealing area of effect damage, damage is split between all targets equally up to the maximum)." + "\n   " +
	"If either you or the duplicate is reduced to zero hit points, the spell ends and you become the copy that was not reduced to zero hit points. When the spell ends, if both you and the duplicate are still present, decide which is you, and the other vanishes. Anything that was copied during the spell has the copied version vanish." + AtHigherLevels +
	"When you cast this spell using a spell slot of 6th level or higher, the starting hit points of you and the duplicate both increase by 15 (up to a maximum of you and the duplicate starting with your current hit points) and the maximum damage the duplicate can do during its turn increases by 10 for each slot level above 5th."
};
SpellsList["earth ripple"] = {
	name : "Earth Ripple",
	classes : ["druid", "occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "1d8 Bludg. dmg, spd 0 till dug out a.; or 2d8 Bludg. dmg, prone, moved 5 ft in dir.; or 4d8 Pierc. dmg",
	descriptionFull : "You cause the earth to deform and ripple, a target creature must make a Dexterity saving throw or suffer one of the following effects (your choice):\n \u2022 It is pulled into the earth, taking 1d8 bludgeoning damage and reducing its speed to 0 until a creature spends an action to dig it free.\n \u2022 It is slammed 5 feet in a direction of your choice by a wave of earth, taking 2d8 bludgeoning damage and being knocked prone.\n \u2022 It is impaled by a spike of earth, taking 4d8 piercing damage."
};
SpellsList["echoing lance"] = {
	name : "Echoing Lance",
	classes : ["bard", "occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "3d8+1d8/SL Thunder dmg, stunned; save halves, no stun; save at end of turn, fail = 1d8 thunder dmg",
	descriptionFull : "You emit a targeted burst of intense sonic energy at a creature within range. The target must make a Constitution saving throw. On a failure, they take 3d8 thunder damage and become stunned for the duration by the intense sound. On a successful save, the target takes half as much damage and isn't stunned.\n   At the end of each of its turns, the target can make another Constitution saving throw. On a success, the spell ends, on failure, they take an extra 1d8 thunder damage from the echoes within their mind." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th."
};
SpellsList["electrify"] = {
	name : "Electrify",
	classes : ["occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "Next melee atk +1d10 Lightning dmg, save or stunned till their next turn; can cast Shocking Grasp",
	descriptionFull : "You channel lightning into your hands. The next time you hit a creature with a melee attack (including a melee spell attack) before the start of your next turn, the target takes 1d10 lightning damage and must make a Constitution saving throw. On a failed save, the target becomes stunned until the start of their next turn.\n   The spell ends after dealing damage, or at the start of your next turn, whichever occurs first. For the duration of the spell, you can cast the spell shocking grasp."
};
SpellsList["electrocute"] = {
	name : "Electrocute",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1 crea takes 4d12+1d12/SL Lightning dmg, stunned till my next turn; save halves, no stun",
	descriptionFull : "A massive arc of lightning leaps from your hand to a target you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes 4d12 lightning damage and is stunned until the start of your next turn. On a successful save, the target takes half as much damage and isn't stunned." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
};
SpellsList["entomb"] = {
	name : "Entomb",
	classes : ["wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Med crea save or restrained; end of their turn 1d8+1d8/SL Cold dmg; save or 5+ Fire/Blud dmg frees",
	descriptionFull : "You attempt to encase a Medium or smaller creature you can see within ice. The creature must make a Strength saving throw or become restrained by ice for the duration. At the end of each of its turns, the target takes 1d8 cold damage and can make another Strength saving throw. On success, the spell ends on the target.\n   If the creature takes more than 5 fire or bludgeoning damage from a single damage roll while restrained, the ice breaks and the target is freed, ending the spell for the target." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["erode"] = {
	name : "Erode",
	classes : ["occultist", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "20 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "8d4+1d4/SL Acid dmg and covered, 2d4+1d4/SL at end of turn; save halves, no acid; 1 a to clear acid",
	descriptionFull : "You blast a target with a glob of acid. The target must make a Dexterity saving throw. On failure, the target takes 8d4 acid damage immediately and becomes covered in acid. On a success, the target takes half as much damage and is not covered in acid. While covered in acid, the target takes 2d4 acid damage at the end of each of its turns. The target or a creature within 5 feet of it can end this damage by using its action to clear away the acid." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 3rd."
};
SpellsList["fall"] = {
	name : "Fall",
	classes : ["inventor", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Instantaneous",
	description : "Pick any direction to fall as if under effect of gravity; still take fall dmg",
	descriptionFull : "You alter gravity for yourself, causing you to reorient which way is down for you until the end of your turn. You can pick any direction to fall as if under the effect of gravity, falling up to 500 feet before the spell ends."+
	"\n   If you collide with something during this time, you take falling damage as normal, but you can control your fall as you could under normal conditions by holding onto objects or move along a surface according to your new orientation as normal until your turn ends and gravity returns to normal."
};
SpellsList["fireburst mine"] = {
	name : "Fireburst Mine",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 3,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Any Tiny nonmagical item, which is destroyed by the activation of the spell",
	duration : "8 h",
	save : "Dex",
	description : "Detonate item if crea in 5 ft or rea command; 20 ft-rad 5d8 Fire dmg, save halves; see book",
	descriptionFull : "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 feet of it, or by a verbal command using your reaction (one or more mines can be detonated).\n   When the magic trap detonates, each creature in a 20-foot-radius sphere centered on the item must make a Dexterity saving throw. A creature takes 5d8 fire damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one fireburst mine during a turn, they take half damage from any mines beyond the first."+
	"\n   A magical mine must be set 5 feet or more from another mine, and can't be moved once placed; any attempt to move it results in it detonating unless the caster that set it disarms it with an action."
};
SpellsList["fire cyclone"] = {
	name : "Fire Cyclone",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A pinch of ashes from a forest fire",
    duration : "Conc, 1 min",
	save : "Str",
	description : "5ft rad, 30ft tall; crea starts turn/enters: 3d6+1d6/SL Fire dmg, 15ft up \u0026 across; save halves, not moved",
	descriptionFull : "Targeting a point you can see, you cause a cyclone made of whipping flames with a radius of 5 feet and height of 30 feet to form." + "\n   " +
	"When a creature starts its turn inside the cyclone's radius or enters it for the first time during a turn, it must make a Strength saving throw. On a failed saving throw, it takes 3d6 fire damage and, if it is entirely inside the cyclone's area, it's also flung 15 feet upwards and lands 15 feet in a randomly determined horizontal direction. On a successful save, the creature takes half as much damage and is not flung." + "\n   " +
	"When a creature is not entirely inside the cyclone's radius but within 30 feet of its center at the start of its turn, it still feels the intense draw of the raging cyclone, and must spend 2 feet (or 3 feet if it is flying) of movement for every 1 foot it moves away from the cyclone. If a creature starts its turn outside of the cyclone's radius but within 10 feet of its center, it must make a Strength saving throw or be pulled 5 feet toward the center of it." + AtHigherLevels +
	"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6."
};
SpellsList["fissure"] = {
	name : "Fissure",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "S:60" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Dex save or 6d10 Bludg. dmg and buried 10ft deep; 25ft move to escape; 1d10 dmg at end of turn",
	descriptionFull : "You rend asunder the earth in a 60-foot-long, 5-foot-wide line, targeting an area of dirt, sand, or rock at least 10 feet deep.\n   Creatures in that line must make a Dexterity saving throw. On a failure, a creature falls into a suddenly opened crevice in the ground, falling into it before it snaps shut, crushing them. Creatures that fail the saving throw take 6d10 bludgeoning damage from the fall and crushing. The creature is buried in 10 feet of rubble, and creatures without a burrowing speed require 25 feet of movement to extract themselves from the loose rubble to return to where they failed the saving throw. If they end their turn while buried, they take an extra 1d10 bludgeoning damage."
};
SpellsList["flash freeze"] = {
	name : "Flash Freeze",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "4d8+1d8/SL Cold dmg and restrained until my next turn; save halves, not restrained",
	descriptionFull : "A freezing wind ripples outward. Each creature in a 30-foot cone must make a Constitution saving throw. On a failed save, a creature takes 4d8 cold damage and is restrained by ice until the start of your next turn. On a successful save, the target takes half as much damage and isn't restrained." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["flicker"] = {
	name : "Flicker",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 1,
	school : "Psion",
	time : "1 rea",
	timeFull : "1 reaction, when you would take damage",
	range : "Self",
	components : "S",
	duration : "1 rnd",
    description : "Until my next turn, when I would take dmg roll a d4, on a 2 I gain resistance, on a 4 I take no damage",
	descriptionFull : "You flicker between the material and ethereal planes. Until the start of your next turn, each time you would take damage, including the triggering attack, roll a d4. On a 2, you gain resistance to that instance of damage. On a 4, you don't take any damage."
};
SpellsList["flickering strikes"] = {
	name : "Flickering Strikes",
	classes : ["ranger", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft rad",
	components : "V,S,M\u0192",
	compMaterial : "A melee weapon you are proficient with worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee weap atk up to 5 creas: weap dmg+6d6 Force dmg; teleport to visible space within 5ft of target",
	descriptionFull : "You flourish a weapon weapon you are proficient with used in the casting and then vanish, instantly teleporting to and striking up to 5 targets within range. Make a weapon attack against each target. On hit, a target takes the weapon damage from the attack + 6d6 force damage.\n   You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
};
SpellsList["fling"] = {
	name : "Fling",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "Large crea either moved 40ft up, fall 4d6 Bludg. dmg, prone; or 20ft in dir 2d6 Bludg. dmg, prone",
	descriptionFull : "You manipulate gravity around one Large or smaller creature. The target creature makes a Strength saving throw. On failure, you can fling them 40 feet straight up or 20 feet in any direction.\n   If you fling them straight up they immediately fall, taking 4d6 damage falling damage, and fall prone. If you fling them any other direction, they take 2d6 damage and fall prone. If their movement would be stopped early by a creature or object, both the target and creature or object takes 3d6 bludgeoning damage."
};
SpellsList["force blade"] = {
	name : "Force Blade",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Evoc",
	time : "1 bns",
	range : "S:5 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Action: 1 crea in reach takes 2d12 Force dmg; SL 5-6:3d12, 7+:4d12",
	descriptionFull : "You create an oversized blade of pure scintillating force energy in your hand. For the duration of the spell, as an action, you can sweep the blade through one creature within reach, dealing 2d12 force damage." + AtHigherLevels + "When you cast it using a 5th- or 6th-level spell slot, the damage increases to 3d12. When you cast it using a spell slot of 7th level or higher, the damage increases to 4d12."
};
SpellsList["force bolt"] = {
	name : "Force Bolt",
	classes : ["sorcerer"],
	source : [["HB", 0]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell attack for 2d4 Force dmg; +2d4 at CL 5, 11, and 17",
	descriptionCantripDie : "Ranged spell attack for 2\xD7`CD`d4 Force dmg",
	descriptionFull : "You hurl a mote of arcane energy at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 2d4 force damage.\n   This spell's damage increases by 2d4 when you reach 5th level (4d4), 11th level (6d4), and 17th level (8d4)."
};
SpellsList["freezing shell"] = {
	name : "Freezing Shell",
	classes : ["warlock"],
	source : [["HB", 0]],
	level : 1,
	school : "Abjur",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 hr",
	description : "5+5/SL temp HP; as long as temp HP last any crea that hits in melee takes 5+5/SL Cold dmg",
	descriptionFull : "A freezing shell shrouds you, covering you and your gear. You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot level above 1st."
};
SpellsList["frighten"] = {
	name : "Frighten",
	classes : ["occultist", "warlock, wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1+1/SL crea(s) becomes frightened; repeat save on end of its turns",
	descriptionFull : "You invoke a sudden fear within a creature you can see within range. The target creature must succeed a Wisdom saving throw, or become frightened for the duration. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." + AtHigherLevels + "When you cast this spell using a 2nd level or higher, you can target one additional creature for each slot above 1st."
};
SpellsList["future insight"] = {
	name : "Future Insight",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 1,
	school : "Psion",
	time : "1 a",
	range : "Self",
	components : "S",
	duration : "10 mins",
    description : "Roll 3d4 or 1d12; I can expend a die to add/subtract from atk, save or check made by any crea in 60ft",
	descriptionFull : "You roll 3d4 or 1d12 (your choice) and record the results. During the duration, you can expend one of these dice to add or subtract them from any attack roll, saving throw, or ability check made by a creature within 60 feet of you until the dice are exhausted or the spell ends. You must expend the die after the roll is made, but before you know the outcome of the roll."
};
SpellsList["gale bolt"] = {
	name : "Gale Bolt",
	classes : ["druid", "occultist", "ranger", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell attack for 2d8+1d8/SL Bludgeoning dmg, if Large or smaller pushed 10ft away",
	descriptionFull : "A blast of concentrated wind streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 bludgeoning damage and if it is Large or smaller is knocked 10 feet away from you." + AtHigherLevels + "When you cast this spell using a spell lot of 2nd level or higher, the damage increases by 1d8 for each level above 1st."
};
SpellsList["geyser"] = {
	name : "Geyser",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "10ft rad; 4d6 Bludgeoning dmg, pushed 60ft up; save halves, pushed 10 ft away or 10 ft up",
	descriptionFull : "You cause a massive eruption of water to blast upwards from the ground at a point within range. Creatures within 10 feet of the point must make a Dexterity saving throw or take 4d6 bludgeoning damage and be knocked 60 feet into the air. On a successful save, creatures take half as much damage, and are instead knocked their choice of 10 feet away from the point or 10 feet upward."
};
SpellsList["glimpse the future"] = {
	name : "Glimpse the Future",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 2,
	school : "Psion",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "10 mins",
    description : "Give a creature a glimpse of the future, roll d4 for effect; SL 3+ pick effect; see book",
	descriptionFull : "You give a creature within range a glimpse of their future. Roll a d4 to determine outcome:\n  d4\tEffect\n  1\tThe target forsees an action to come. Roll a d20\n\tand record the value. Until the duration of the spell\n\tends, they can replace one of their d20 rolls with\n\t\tthe value rolled.\n  2\tThe target sees their own death. If they are\n\treduced to zero hit points by an attack or failing a\n\tsave throw during the duration, they instead evade\n\tthe attack or pass the saving throw if they are not\n\totherwise incapacitated prior to being reduced to\n\t\t\tzero.\n  3\tThey see a future victory, growing confident. They\n\tgain 10 temporary hit points and are immune to\n\tthe frightened condition for the duration of the\n\t\t\tspell.\n  4\tThe target sees an ambush or surprise, the first\n\ttime they would be surprised they are not, or the\n\tfirst time an attack would be made against them\n\twith advantage, it is instead made with\n\t\t\tdisadvantage.\n\nOnce any of the events forseen occur, the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can select the effect instead of rolling a d4."
};
SpellsList["grip of the dead"] = {
	name : "Grip of the Dead",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Crea restrained; start of its turn 1d8+1d8/SL Necrotic dmg, heal half dmg; 1 a escape: Str/Dex check",
	descriptionFull : "You channel unholy strength into you hand, and reach out to grab a creature. The creature must make a Strength saving throw or become restrained by your deathly iron grasp. As an action on its turn, the creature can attempt to escape using a Strength (Athletics) or Dexterity (Acrobatics) check against your Spell Save DC.\n   At the start of the creatures turn while you maintain the grip and the spell, it takes 1d8 necrotic damage as you drain the life from it, and regain hit points equal to half the damage dealt." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["hurricane slash"] = {
	name : "Hurricane Slash",
	classes : ["druid", "occultist", "ranger", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "1+1/SL 5ft wide lines; 3d8 Slashing dmg; save halves",
	descriptionFull : "You condense wind into a razor sharp blast that shreds a 30-foot-long, 5-foot-wide line. Creatures in the area must make a Dexterity saving throw. A creature takes 3d8 slashing damage on a failed save or half as much on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can create an additional line of effect. A creature in the area of more than one slash is affected only once."
};
SpellsList["ice spike"] = {
	name : "Ice Spike",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "1 crea 4d8 Piercing + 4d8 Cold dmg; on save still takes Cold dmg: SL6-7: 2 spikes; 8+: 3 spikes",
	descriptionFull : "You create a lance of ice that shoots up from the ground to impale a creature within range. The target must make a Dexterity saving throw. The target takes 4d8 piercing damage and 4d8 cold damage on a failed save. The target takes only the 4d8 cold damage on a successful save." + AtHigherLevels + "When you cast this spell using a spell slot of 6th or 7th level, you can create a second spike. When you cast this spell using a spell slot of 8th or 9th level, you can create a third spike. Additional spikes can target the same or different creatures."
};
SpellsList["ignite fire"] = {
	name : "Ignite Fire",
	classes : ["druid", "occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "5ft cube; crea enters/ends turn in: 1d8 Fire dmg; Unattended objs catch fire; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "5ft cube; crea enters/ends turn in: `CD`d8 Fire dmg; Unattended objs catch fire",
	descriptionFull : "You ignite a magical fire that fills a 5-foot cube in a space you can see on the ground. A creature in the fire's space when you cast the spell must suceeed a Dexterity saving throw or take 1d8 fire damage. A creature that enters the fire's space for the first time or ends their turn there must repeat the saving throw against the effect. Flamable objects in the area that aren't being worn or carried catch fire.\n   The spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)"
};
SpellsList["imbue luck"] = {
	name : "Imbue Luck",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 2,
	school : "Abjur",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A four leaf clover",
	duration : "1 h",
	description : "Weap: on atk wielder can roll additional d20; Obj: defender rolls d20 for atker; spell ends after roll",
	descriptionFull : "You touch a weapon or worn item and imbue luck into it. If imbued on a weapon, for the duration, on an attack roll, the wielder can roll an additional d20 (they can choose to do this after they roll, but before the outcome is determined). The creature can choose which of the d20s is used for the attack roll."+
	"\n   If imbued into a worn item, they can roll a d20 when attacked, then choose whether the attack uses the attacker's roll or theirs."+
	"\n   With either use, the spell immediately ends upon rolling the extra d20."
};
SpellsList["inner world"] = {
	name : "Inner World",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 8,
	school : "Psion",
	time : "1 a",
	range : "S:120-ft rad",
	components : "S",
	duration : "Conc, 1 min",
    description : "Create controllable environment, all creatures in range are brought into environment; see book",
	descriptionFull : "As an action, you create and enter an imaginary world. All other creatures within 120 feet are pulled this world with you. This world is centered on you, and extends in 120 feet in all directions." +
	"\n   A creature that reaches the edge of this world can make a Charisma saving throw to attempt to exit, spending 5 feet of movement to return where they were before being pulled into the world on success, and being unable to move out the world until the start of their next turn on failure. A creature outside the world can attempt to enter it by moving to where you cast the spell (which is marked by a glowing psionic rift) and making a Charisma saving throw to enter the world. You can allow a creature to automatically pass their save to enter or exit the world." +
	"\n   When you create this world, you can create obstacles and terrain of your choice, creating walls, pillars, and other obstacles that take up to twenty 5 by 5 square foot areas (stylistically, these can appear however you choose). These can be placed consecutively or spread out in any method of your choosing, but any area with a creature must contain a path that creature can fit through to both you and the edge of the of the world." +
	"\n   You can additionally create up to five hazardous spaces on the ground that are 5 foot squares. These can be fires, spikes, biting mouthes, or whatever you choose, but regardless of its form if a creature takes 4d4 + 4 psychic damage when it enters the effect's area for the first time on a turn or starts its turn there. Each of these hazards must be at least 20 feet from another hazard." +
	"\n   While in this inner world, if you fail saving throw, you choose to succeed instead. You can do up to 3 times during the duration of the spell. All spells and powers have their psi point cost reduced by one." +
	"\n   During the spell, as an action, you can attempt to destroy a creature within the world. The target must make an Intelligence saving throw. On failure, it takes 8d8 + 8 psychic damage and is removed from the imaginary world, returning to where they were before being pulled into it." +
	"\n   The world can be brightly or dimly lit, and you control the weather within it." +
	"\n   When the spell ends, you and any creature that remains in the world exit the world returning to space you entered the world from."
};
SpellsList["invested competency"] = {
	name : "Invested Competency",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 5,
	school : "Psion",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Conc, 1 h",
    description : "Willing creature gains expertise in a skill of my choice",
	descriptionFull : "You touch a willing creature imbuing psionic competency into them. Until the spell ends, they gain expertise in on skill of your choice, adding double their proficiency bonus to that skill."
};
SpellsList["invest life"] = {
	name : "Invest Life",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 3,
	school : "Psion",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Instantaneous",
    description : "I take 4d8+1d8/SL Necrotic damage, can't be reduced; Other creature regains HP = twice the damage",
	descriptionFull : "You invest some of your vital essence into another creature you can see within range. You take 4d8 necrotic damage, which can't be reduced in any way, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["jumping jolt"] = {
	name : "Jumping Jolt",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Ranged spell atk 4d12+1d12/SL Lightning dmg; atk crea w/in 20 ft (max 5); miss-1/2 dmg no jumps",
	descriptionFull : "You release an arc of lighting at a creature within range. Make a ranged spell attack roll against the target. On hit, the target takes 4d12 lightning damage, and you can cause the spell to jump to another target within 20 feet of the first target making a new attack roll for each target. The spell can't hit the same target twice, or jump to a target out of the spells range. The spell can jump a maximum of five times."+
	"\n   On a miss, the target takes half as much damage and the spell doesn't jump to a new target."+
	AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the starting damage increases by 1d12 for each slot level above 4th."
};
SpellsList["killing curse"] = {
	name : "Killing Curse",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 5,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Something from the target creature (such as blood, hair, or scales) which the spell consumes",
	duration : "Conc, 1 min",
	save : "Cha",
	description : "Max, cur HP -3d10+10; only heal SL>spell; death saves=1; save on turn; fail -1d10+10 max, cur HP",
	descriptionFull : "You curse a target to die. The targets current and maximum hit points are reduced by 3d10 + 10. If this causes a creatures to have zero hit points, the creature dies.\n   For the duration of the spell, the target cannot regain hit points unless from a spell cast using a spell slot of higher level than the spell slot this curse was cast with, and any death saving throw they roll is automatically considered a 1.\n   At the start of a creatures turn while they are under the effect of this spell, they make a Charisma saving throw. On failure, their current and maximum hit points is reduced by 1d10 + 10. On a successful save, the spell ends. A creature's maximum hit points are restored when it takes a long rest."
};
SpellsList["launch object"] = {
	name : "Launch Object",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Obj 5lbs/SL not worn or carried; flies 90 ft; on impact save or deals 3d8+1d8/SL Bludg dmg",
	descriptionFull : "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take 3d8 bludgeoning damage."+
	AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by 1d8, for each slot level above 1st."
};
SpellsList["lightning charged"] = {
	name : "Lightning Charged",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "A piece of metal once used in a lightning rod",
	duration : "10 mins",
	description : "When target touches other creature they deal 1d6 Lightning dmg, up to 6+2/SL times",
	descriptionFull : "You channel lightning energy into a creature. The energy is harmless to the creature, but escapes in dangerous bursts to other nearby creatures."+
	"\n   Every time that creature strikes another creature with a melee attack, a spell with a range of touch, is struck by another creature with a melee attack, or ends their turn while grappling or being grappled by another creature, they deal 1d6 lightning damage to that creature."+
	"\n   Once this spell has discharged 6 times (dealing up to 6d6 damage), the spell ends."+
	AtHigherLevels + "The spell can discharge damage 2 additional times (dealing 2d6 more total damage) before the spell ends for each slot level above 2nd."
};
SpellsList["lightning tendril"] = {
	name : "Lightning Tendril",
	classes : ["druid", "occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Evoc",
	time : "1 bns",
	range : "S:20 ft-rad",
	components : "V,S,M",
	compMaterial : "A twig from a tree that has been struck by lightning",
	duration : "Conc, 1 min",
	description : "1 a, 1d12 Lightning dmg to target; SL3: 2d12, 30 ft; SL5: 3d12, 60 ft; SL7: 4d12, 120 ft",
	descriptionFull : "Crackling beams of blue energy leap from your hands. For the duration of the spell, as an action, you can direct them toward a creature within range, dealing 1d12 lightning damage to that creature."+
	AtHigherLevels + "When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to 2d12 and the range increases to 30 feet. When you cast it using a 5th- or 6th-level spell slot, the damage increases to 3d12 and the range increases to 60 feet. When you cast it using a spell slot of 7th level or higher, the damage increases to 4d12 and the range increases to 120 feet."
};
SpellsList["martial transformation"] = {
	name : "Martial Transformation",
	classes : ["wizard"],
	source : [["HB", 0]],
	level : 6,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "A few hairs from a fighter",
	duration : "10 mins",
	description : "Can't cast/concentrate on spells; Gain multiple buffs, 50 temp HP, adv on atks, extra atk, etc; see book",
	descriptionFull : "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells or concentrate them, and you gain the following benefits:\n" +
	" \u2022 You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.\n" +
	" \u2022 You have advantage on attack rolls that you make with simple and martial weapons.\n" +
	" \u2022 When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.\n" +
	" \u2022 You have proficiency with all armor, shields, simple weapons, and martial weapons.\n" +
	" \u2022 You have proficiency in Strength and Constitution saving throws.\n" +
	" \u2022 You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.\n" +
	" \u2022 You can conjure and equip (as part of the action used to cast the spell) and set of heavy or medium armor and any simple or martial weapon of your choice. These items have no strength requirements and are magical in nature though have the same properties as their nonmagical counterparts, vanishing when the spell ends.\n" +
	"Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion."
};
SpellsList["mind blast"] = {
	name : "Mind Blast",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 6,
	school : "Psion",
	time : "1 a",
	range : "S:60" + (typePF ? "-" : "") + "ft cone",
	components : "S",
	duration : "Instantaneous",
	save : "Int",
    description : "6d8 Psychic dmg, stunned until the end of their next turn; Save halves and no stun",
	descriptionFull : "You emit a blast of psychic energy. Each creature in a 60-foot cone must make an Intelligence saving throw. A creature takes 6d8 psychic damage and is stunned until the end of their next turn on a failed save. A creature takes half as much damage and is not stunned on a successful save."
};
SpellsList["mutate"] = {
	name : "Mutate",
	classes : ["druid", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S,M",
	compMaterial : "Something from an extinct animal",
	duration : "Conc, 10 min",
	description : "Gain 3+1/SL temporary magical properties; action to swap current properties; see book",
	descriptionFull : "You manipulate the nature of your body with magic temporarily giving it new properties. You can select three of the following properties:\n" +
	" \u2022 Your body becomes malleable and amorphous. You have advantage on saves and checks against grapples and the restrained condition, you do not suffer disadvantage from squeezing into smaller spaces, and you can squeeze through openings two sizes smaller than you.\n" +
	" \u2022 You grow one additional appendage. This appendage serves as an arm and a hand, though it can take the shape of an arm, tentacle, or similar appendage.\n" +
	" \u2022 You extend the length of your limbs, increasing the reach on melee attacks, touch spells, and object interactions by 5 feet.\n" +
	" \u2022 Your flesh hardens, your base AC becomes 14 + your dexterity modifier if it is not already higher.\n" +
	" \u2022 You grow more resilient, adapting against one external threat. You gain advantage on one type of saving throw of your choice.\n" +
	" \u2022 You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.\n" +
	" \u2022 Your body grows ablative armor. You gain temporary hit points equal to your spellcasting ability modifier at the start of each of your turns.\n" +
	" \u2022 You can grow one size larger or smaller.\n" +
	" \u2022 You sprout wings. You gain a flying speed of 30 feet.\n" +
	" \u2022 You grow a natural weapon; this weapon can have the statistics of any martial melee weapon without the thrown property, and takes on a form vaguely reminiscent of it. You have proficiency with this weapon, and are considered to be holding it. You can use your spellcasting modifier in place of your Strength or Dexterity modifier for attack and damage rolls with this natural weapon. The natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.\n   " +
	"For the duration of the spell, you can use an action to change one or all of the properties, losing the benefits of your previously selected properties and gaining the benefits of the new selected properties." +
	AtHigherLevels + "When you cast this spell using a spell slot of 4th or higher, you can select one additional property from the list of options, with one additional property per spell level above 3rd."
};
SpellsList["nauseating poison"] = {
	name : "Nauseating Poison",
	classes : ["druid", "occultist", "warlock"],
	source : [["HB", 0]],
	level : 1,
	school : "Necro",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "Next melee atk deals extra 1d12 Poison dmg; save or poisoned until the end of my next turn",
	descriptionFull : "You shroud your hand, a weapon you are holding, or a natural weapon in dark ichorous miasma. The next time you hit a creature with a melee attack (including a melee spell attack) before the start of your next turn, the attack deals an extra 1d12 poison damage and the target must succeed on a Constitution saving throw or be poisoned until the end of your next turn."
};
SpellsList["nullify effect"] = {
	name : "Nullify Effect",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 2,
	school : "Psion",
	time : "1 rea",
	timeFull : "1 reaction, which you take when you are forced to make an Intelligence, Wisdom, or Charisma saving throw",
	range : "Self",
	components : "S",
	duration : "1 rnd",
    description : "Adv on Int, Wis, Cha saves, resist Psychic, Force dmg until my turn; SL 4+: +d20 adv; 5+: Immunity",
	descriptionFull : "You gain advantage on Intelligence, Wisdom, and Charisma saving throws (Including the triggering save) until the start of your next turn. You also gain resistance to Psychic and Force damage until the start of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can roll an additional d20 as part of your advantage roll. If you cast this at the 5th level or higher, it grants immunity to Psychic and Force damage for the duration."
};
SpellsList["orbital stones"] = {
	name : "Orbital Stones",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "3 rocks in 10ft; 1+ = 1/2 cover, 3 = 3/4 cover; Bns a 60ft ranged spell atk 3d10 Bludg. dmg, push 5ft",
	descriptionFull : "You lift three inanimate Small- or Medium-sized rocks or similar objects from within 10 feet of you, causing them to defy gravity and slowly circle you. With all three stones orbiting, you have three quarters cover. With at least one stone remaining, you have half cover.\n   As a bonus action while at least one stone remains in orbit, you can magically fling a stone at target within 60 feet. Make a ranged spell attack roll. On hit, the target takes 3d10 bludgeoning damage and is knocked backward 5 feet."
};
SpellsList["poison dart"] = {
	name : "Poison Dart",
	classes : ["occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Ranged spell atk for 3d12+1d12/SL Poison dmg; save or poisoned until my next turn",
	descriptionFull : "You conjure a dart of pure poison and hurl it at a creature you can see within range. Make a ranged spell attack. On a hit, the target takes 3d12 poison damage and must succeed a Constitution saving throw or become poisoned until the start of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d12 for each slot level above 2nd."
};
SpellsList["poison puff"] = {
	name : "Poison Puff",
	classes : ["druid", "occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "1 rnd",
	save : "Con",
	description : "4d12 Poison dmg and poisoned; save halves, not poisoned; l. obs. till nxt turn; end turn: extra 2d4 dmg",
	descriptionFull : "You exhale a cloud of poison that magically expands to fill a 30-foot cone. Creatures in that area must make a Constitution saving throw. On a failure, they take 4d12 poison damage and become poisoned until the start of their next turn. On a success, the target takes half as much damage and is not poisoned.\n   The area is lightly obscured until the start of your turn, and any creature that ends their turn within the area takes 2d4 poison damage."
};
SpellsList["pressure cutter"] = {
	name : "Pressure Cutter",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "S:60" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "15ft wide; 10d6+1d6/SL Slashing dmg; save halves",
	descriptionFull : "You unleash a blast of highly pressurized water in a 60-footlong, 15-foot-wide line, slashing through everything in its path. Each creature in the line must make a Dexterity saving throw, taking 10d6 slashing damage on a failure. On a successful save, a creature takes half as much damage." + AtHigherLevels + "When you cast this spell using a spell lot of 6th level or higher, the damage increases by 1d6 for each level above 5th."
};
SpellsList["prismatic weapon"] = {
	name : "Prismatic Weapon",
	classes : ["inventor", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Conc, 1 h",
	description : "+1 magical weapon; +1d6 Acid, Cold, Fire, Lightning, Poison, or Thunder dmg; SL4: +2d6, SL6: +3d6",
	descriptionFull : "A weapon you touch is infused with elemental power, becoming a magical weapon. Choose of the following damage types: acid, cold, fire, lightning, poison, or thunder. The weapon deals 1d6 damage of the chosen weapon type, and if it doesn't already have a bonus to attack and damage, it gains a +1 bonus to attack and damage rolls."+
	AtHigherLevels + "When you cast this spell with a 4th- or 5th-level spell slot, the damage increases by 1d6 (to 2d6). When you use a spell slot of 6th level or higher, the damage increases by 2d6 (to 3d6)."
};
SpellsList["psychic drain"] = {
	name : "Psychic Drain",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 2,
	school : "Psion",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Instantaneous",
    description : "Crea save or 3d8+1d8/SL Psychic dmg, I gain half the dmg dealt as temp HP, regain 1 psi point",
	descriptionFull : "You draw on the psychic energy of another creature you can see to sustain yourself. The target must make a Charisma saving throw. On failure it takes 3d8 psychic damage and you gain temporary hit points equal to half the amount of psychic damage dealt and regain one expended psi point." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the spell deals an extra 1d8 psychic damage."
};
SpellsList["rain of spiders"] = {
	name : "Rain of Spiders",
	classes : ["druid", "occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Conj",
	time : "1 bns",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A spider leg",
	duration : "Conc, 1 min",
	description : "20ft rad x 40ft tall; Swarm of Spiders on each crea in area; moves with, takes turn after crea; see book",
	descriptionFull : "A vertical column of spiders begins to rain down in 20 foot radius, 40 foot high cylinder, centered on a location you specify. A Swarm of Spiders (Basic Rules, pg. 391) descends onto each creature within the cylinder when the spell is cast.\n   This swarm is considered to be climbing on the target creature and moves with it, even if they leave the affected area, and takes its turn immediately after that creature's turn. A creature can make use its action to attempt to remove the spiders, making a Strength (Athletics) or Dexterity (Acrobatics) check against the spell save DC of the caster.\n   The swarm uses the caster's spell attack modifier when attacking (if it is higher than their attack modifier). A swarm will attack the creature it fell on if it can, or move to chase the creature if it has been knocked off of them. Any spiders that remain when the spell ends disappear."
};
SpellsList["repair"] = {
	name : "Repair",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Construct regains 10d6+2d6/SL HP, or repairs to condition it was that many years ago",
	descriptionFull : "You touch a construct or inanimate object, causing it to regain 10d6 hit points. This causes any parts or material that has broken away from the construct or object to reattach, repairing it to the condition it was in before losing those hit points."+
	"\n   If the construct or object's damaged state is the result of age, you can instead repair to the condition it was in 10d6 years ago, if it was previously in a better condition during that time (the condition can only improve or not change)."+
	AtHigherLevels + "The hit points restored increases by 2d6 (or the years restored) for each slot above 4th."
};
SpellsList["returning weapon"] = {
	name : "Returning Weapon",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "24 h",
	description : "Gains thrown 20/60, or thrown range increases 20/60, gains returning, reappears in your hand",
	descriptionFull : "You touch a weapon granting it the thrown 20/60 property. If it already has the thrown property, its range increases by 20/60. It also gains the \"returning\" property. After being thrown it automatically reappears in the thrower's hand."
};
SpellsList["rotting curse"] = {
	name : "Rotting Curse",
	classes : ["occultist"],
	source : [["HB", 0]],
	level : 1,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "Something from the target creature (such as blood, hair, or scales) which the spell consumes",
	duration : "Conc, 1 min",
	description : "Crea takes extra 1d4 Necrotic dmg from all sources; halves healing; disadv. on Cha social checks",
	descriptionFull : "You inflict a rotting decay on a creature, causing it to to begin to rot. For the duration of the spell, every time the creature takes damage, it takes an extra 1d4 necrotic damage, and the effect of all healing on the creature is reduced by half.\n   The target creature has disadvantage on any Charisma checks for social interaction during the effect of the spell."
};
SpellsList["seeking orb"] = {
	name : "Seeking Orb",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "5 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	description : "Crea in 120ft; end of your turn moves 30ft towards crea; deals 6d4+1d4/rnd if it reaches the target",
	descriptionFull : "You create a Tiny orb of pure arcane energy that hovers within range, and designate a target creature within 120 feet. For the duration of the spell, at the end of each of your turns, the orb grows larger and moves 30 feet directly toward the creature. If the orb reaches the target, it will detonate dealing 6d4 force damage and an extra 1d4 damage for each round since you cast the spell to the target. The spell ends after it deals damage. If the orb doesn't reach the target before the spell ends, it fades away without dealing damage."
};
SpellsList["seeking projectile"] = {
	name : "Seeking Projectile",
	classes : ["inventor", "ranger"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "A piece of ammunition or weapon with the thrown property worth at least 1 cp",
	duration : "Conc, 10 mins",
	description : "Ranged atk with ammo or weapon adds my SC mod, if die + SC mod is > 20 is crit hit; ends spell",
	descriptionFull : "You touch a piece of ammunition or weapon with the thrown property imbuing it with the property of seeking its target. When a ranged attack roll is made with that weapon, the attack roll can add your spell casting modifier to the value on the dice. If that makes the value on the die a 20 or more, the attack is a critical hit as if a 20 was rolled. After making the attack roll, the spell ends."
};
SpellsList["shockwave"] = {
	name : "Shockwave",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 5,
	school : "Psion",
	time : "1 a",
	range : "S:30 ft-rad",
	components : "S",
	duration : "Instantaneous",
	save : "Str",
	description : "Chosen creas pushed 5 ft back, take 8d6 Bludg dmg and prone; save halves, no prone",
	descriptionFull : "You unleash a burst of telekinetic force in all directions. Each creature of your choice within 30 feet of you is knocked 5 feet back and must succeed on a Strength saving throw or take 8d6 damage bludgeoning damage and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn't knocked prone."
};
SpellsList["sky burst"] = {
	name : "Sky Burst",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "5+1/SL bolts strike, creas w/in 5 ft of strike take 4d12 Lightning dmg; save halves",
	descriptionFull : "Five bolts of lightning strike five points of your choice that you can see within range. Each creature within 5 feet of the chosen points must make a Dexterity saving throw. A creature takes 4d12 lightning damage on a failed save, or half as much on a successful one. A creature in the area of more than one lightning burst is affected only once."+
	AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can call down an additional bolt of lightning targeting another point within range for each slot level above 5th."
};
SpellsList["sonic shriek"] = {
	name : "Sonic Shriek",
	classes : ["bard", "occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Evoc",
	time : "1 a",
	range : "S:120" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "6d8+1d8/SL Thunder dmg; save halves; auto save if more than 60 ft away",
	descriptionFull : "You emit a sonic blast covering a massive area. Each creature in a 120-foot cone must make a Constitution saving throw. On a failed save, a creature takes 6d8 thunder damage. On a successful save, a creature takes half as much damage. A creature automatically succeed on its saving throw if it is more than 60 feet from you." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th."
};
SpellsList["spatial manipulation"] = {
	name : "Spatial Manipulation",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Cha",
	description : "Swap the position 1+1/SL pairs of creatures; unwilling creatures may save to prevent the swap",
	descriptionFull : "You can swap the position two creatures you can see within range. An unwilling creature can make a Charisma saving throw, preventing the swap on success." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can swap an additional set of creatures of each level about 5th."
};
SpellsList["spider bite"] = {
	name : "Spider Bite",
	classes : ["druid", "occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "Melee spell atk 4d12+1d12/SL Poison dmg; save or poisoned 1 min, save end of turn; miss can Conc",
	descriptionFull : "You prick a target with a tiny magical fang of venom. Make a melee spell attack against a creature within reach. On a hit, the target takes 4d12 poison damage and must succeed on a Constitution saving throw or becoming poisoned for 1 minute. At the end of each of its turns, the target can make another Constitution saving throw. On a success, the target is no longer poisoned.\n   If you miss your melee attack roll, you can concentrate (as if concentrating on a spell) to maintain the attack for another attempt until the end of your next turn. (You may make subsequent attempts until you hit or lose concentration)" + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd."
};
SpellsList["star dust"] = {
	name : "Star Dust",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	description : "Creas in cone take 3d4 Force damage, next attack before your next turn has advantage",
	descriptionFull : "You evoke a burst of brilliant particles of force energy sweeping out in a 30-cone originating from you. Creatures in the radius take 3d4 force damage and the next attack roll made against them before the start of your next turn has advantage."
};
SpellsList["stinging swarm"] = {
	name : "Stinging Swarm",
	classes : ["druid", "occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "5ft cube; bns to move 30ft; enters a crea space: stops, 2d4 Pierc dmg, crea save or 2d12 Poison dmg",
	descriptionFull : "You conjure a magical swarm of flying insects that fill a 5 foot cube within range. For the duration of the spell, the swarm is magically replenished and can't be destroyed. As a bonus action, you can direct the swarm to move up to 30 feet. If the swarm enters another creature's space, it stops and swarms them, stinging repeatedly, and can't be moved until the start of your next turn. The creature takes 2d4 piercing damage and must make a Constitution saving throw, taking 2d12 poison damage on failure."
};
SpellsList["stone fist"] = {
	name : "Stone Fist",
	classes : ["druid", "occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Self",
	components : "V,S",
	duration : "1 rnd",
	description : "Melee spell atk for 2d10+1d10/SL Bludg dmg; until next turn rea for resist. from Slash or Pierc source",
	descriptionFull : "You turn your hand and forearm (or similar appendage) to stone until the start of your next turn. As part of casting the spell, you can make a melee spell attack against one creature you can reach. On a hit, the target takes 2d10 bludgeoning damage.\n   Until the start of your next turn, you can use your reaction when you take slashing or piercing damage from an attack to gain resistance to damage from that attack." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
};
SpellsList["suffocate"] = {
	name : "Suffocate",
	classes : ["occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "Crea loses 5d8 HP, disadv on ability checks, can't speak; save halves dmg and no other effects; see book",
	descriptionFull : "You create a whirling sphere of air around a creature that causes them to struggle to breathe. The target must make a Constitution saving throw. On a failure, the target loses 5d8 hit points due to lack of air, has disadvantage on all ability checks, and can't speak. On a success, the target takes half as much damage and suffers no other effects. For the duration, as an action, you can force the creation to make a saving throw against the ability again.\n   If a target fails their saving throw against this spell 3 times in a row, they become incapacitated until they succeed on a save or the spell ends. If you don't use your action to force the target to make a save, it counts as a success.\n   A creature that doesn't need to breathe is unaffected by this spell."
};
SpellsList["summon horror"] = {
	name : "Summon Horror",
	classes : ["occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
	components : "V,S,M\u0192",
	compMaterial : "A book with an ornate cover filled with the records of madmen worth at least 400 gp",
	duration : "Conc, 1 hr",
	description : "Create horror; disappears at 0 HP or when spell ends; takes turn after yours; obeys commands; see B",
	descriptionFull : "You call forth a twisted horror. It manifests in an unoccuptied space that you can see within Range. This manifested form uses the Horror Spirit stat block. When you cast the spell, choose Star, Sea, or Void. The creature takes on elements of the selected type, which determine certain traits in its stat block. The creature disappears when it drops to 0 hit points or the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell of 5th level or higher, use the higher level whenever the spell's level appears in the stat block."
};
SpellsList["summon ooze"] = {
	name : "Summon Ooze",
	classes : ["occultist", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M\u0192",
	compMaterial : "A gold vial worth at least 100 gp",
	duration : "Conc, 1 hr",
	description : "Create ooze spirit; disappears at 0 HP or spell ends; takes turn after you, obeys verbal commands; see B",
	descriptionFull : "You call forth a magical ooze. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Ooze Spirit stat block. When you cast the spell, choose from Green, Red, or Yellow. The creature resembles the creature of your choice, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends.\n   The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + AtHigherLevels + "When you cast this spell using a spell of 2nd level or higher, use the higher level whenever the spell's level appears in the stat block."
};
SpellsList["terrifying visions"] = {
	name : "Terrifying Visions",
	classes : ["bard"],
	source : [["HB", 0]]],
	level : 1,
	school : "Illus",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "1 crea takes 3d6+1d6/SL Psychic dmg, must use rea to move away; save halves and no move",
	descriptionFull : "You instil a vision of terrifying hallucinations into the mind of a target you can see. The target must make a Wisdom saving throw. On failure, it takes 3d6 psychic damage and must immediately use its reaction to move to move it's movement speed directly away from you. This movement does not force the creature to move into any hazard or take movements that cause it to take damage (such as jumping off a cliff or moving into a spell effect). On a successful save, the target takes half as much damage and isn't forced to move." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
};
SpellsList["thunderburst mine"] = {
	name : "Thunderburst Mine",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 2,
	school : "Abjur",
	time : "1 min",
	range : "Touch",
	components : "V,S,M",
	compMaterial : "Any Tiny nonmagical item, which is destroyed by the activation of the spell",
	duration : "8 h",
	save : "Con",
	description : "Detonate item if crea in 5 ft or rea command; 20 ft-rad 3d8 Thunder dmg, save halves; see book",
	descriptionFull : "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 feet of it, or by a verbal command using your reaction (one or more mines can be detonated)."+
	"\n   When the magic trap detonates, each creature in a 10-foot-radius sphere centered on the item must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one thunderburst mine during a turn, they take half damage from any mines beyond the first."+
	"\n   A magical mine must be set 5 feet or more from another mine, and can't be moved once placed; any attempt to move it results in it detonating unless the casterer that set it disarms it with an action."
};
SpellsList["thunder note"] = {
	name : "Thunder Note",
	classes : ["bard"],
	source : [["HB", 0]],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "1d8 Thunder dmg, deafened until their next turn; Conc. save made with disadv; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "`CD`d8 Thunder dmg, deafened until their next turn; Concentration save made with disadv",
	descriptionFull : "You emit a crashing bang with a localized point of intensity targeting a creature within range. The target must succeed on a Constitution saving throw or take 1d8 thunder damage and become deafened until the start of their next turn. Constitution saving throws to maintain concentration on spells triggered by this damage are made with disadvantage.\n   This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
SpellsList["thunder punch"] = {
	name : "Thunder Punch",
	classes : ["sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "Instantaneous",
	description : "Melee spell atk for 3d8+1d8/SL Thunder dmg, pushed 10 ft away; audible from up to 300 ft",
	descriptionFull : "You charge your hand (or similar appendage) with thunder power. Make a melee spell attack against the target. On a hit, there is a thunderous crash audible from up to 300 feet of you and the target takes 3d8 thunder damage, and is knocked 10 feet away from you." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
};
SpellsList["thunder pulse"] = {
	name : "Thunder Pulse",
	classes : ["bard", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:15" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "3d8+1d8/SL Thunder dmg, pushed 10ft; save halves, not pushed; 1 a to create new shockwave",
	descriptionFull : "You gather sonic energy and can expel as a shockwave in a 15-foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 thunder damage is knocked 10 feet away. On a successful save, the creature takes half as much damage and not being knocked away.\n   You can create a new shockwave as your action on subsequent turn until the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
};
SpellsList["tornado"] = {
	name : "Tornado",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "20ft rad x 40ft tall; start turn 4d8 Bludgeoning dmg, push 10ft x 40ft up, save halves, no push; see B",
	descriptionFull : "A whirling tornado erupts, filling a 20-foot-radius, 40-foot-high cylinder centered on a point within range.\n   Any creature that starts its turn within the tornado must make a Strength saving throw. On a failed save, the creature takes 4d8 bludgeoning damage and is pushed 10 feet away and 40 feet up. On a successful save, the creature takes half as much damage and isn't pushed.\n   As a bonus action, you can move the tornado up to 30 feet in any direction. Any ranged weapon attack against a target within 20 feet of the tornado has disadvantage, and any ranged attack that passes through it automatically misses."
};
SpellsList["translocation shot"] = {
	name : "Translocation Shot",
	classes : ["inventor", "ranger", "wizard"],
	source : [["HB", 0]],
	level : 4,
	school : "Abjur",
	time : "1 bns",
	range : "5 ft",
	components : "V,S,M\u0192",
	compMaterial : "A piece of ammunition worth at least 1 cp",
	duration : "Conc, 1 min",
	description : "Bind crea to ammo; teleported to shot location w/n 5 ft, Large-4 creas; SL6: Huge-9 creas",
	descriptionFull : "You magically bind a willing creature within range into a piece of ammunition. When the piece of ammunition is fired, the creature bound to the piece of ammunition is teleported to the target destination. You can fire the ammunition at a creature, object, or point within the normal range of the weapon. When attacking a creature or object, the target is teleported to within 5 feet of the target hit or miss."+
	"\n   When you cast this spell, if you cast it a Large or larger piece of ammunition, you can bind up to 4 creatures to the piece of ammunition."+
	AtHigherLevels + "When you using 6th-level slot or higher, you can cast it on a Huge piece of ammunition, binding up to nine creatures to the piece of ammunition."
};
SpellsList["trary's terrific transposition"] = {
	name : "Trary's Terrific Transposition",
	nameShort : "Terrific Transposition",
	classes : ["inventor", "occultist", "wizard"],
	source : [["HB", 0]],
	ritual : true,
	level : 3,
	school : "Conj",
	time : "10 min",
	range : "S:10 ft-rad",
	components : "V,S,M\u0192",
	compMaterial : "An ornate brass key worth at least 100 gp, and a satchel or bag worth at least 1 sp",
	duration : "Instantaneous",
	description : "Chosen objs are compressed into container; 1/100 weight; casting spell again uncompresses items",
	descriptionFull : "You weave an enchantment that conjures compresses all objects of your choice within range into a the satchel or bag used in casting the spell. The contents become harmlessly compressed and stored in an magical state of miniaturized suspension within the container. The weight of miniaturized stored items is the weight of the item divided by one hundred. The bag can store all items that fit in the radius when the spell is cast, but can't store any individual item larger than Medium. Items can't be individually removed from the bag, but the process can be reversed by casting the spell again, at which point all items are deposited from the bag in the arrangement they were before being stored."+
	"\n   If the bag is destroyed or placed into an interdimensional space, the contents of the bag are instantly emptied onto the ground in a chaotic manner, each item taking 4d4 force damage, but dealing no damage to anything else. If the bag is broken, the key used as a material in casting the spell breaks."
};
SpellsList["turbulent warp"] = {
	name : "Turbulent Warp",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 3,
	school : "Psion",
	time : "1 a",
	range : "90 ft",
	components : "S",
	duration : "Instantaneous",
	save : "Cha",
    description : "I & willing crea teleport; Creas in 10ft of old space 5d4+2d4/SL Force dmg, teleported 5ft; save halves",
	descriptionFull : "You teleport yourself to an unoccupied space you can see within range, leaving behind a spatial distortion. Each creature within 10 feet of the space you left must make a Charisma saving throw. On a failure, they take 5d4 force damage and are teleported to an empty space of your choice within 5 feet of where they were. On success they take half as much damage and are not teleported." +
	"\n   You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind." +
	AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 2d4 for each slot level above 3rd."
};
SpellsList["unburden"] = {
	name : "Unburden",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 1,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S",
	duration : "1 h",
	description : "Crea ignores penalties to speed or Dexterity (Stealth) from armor; encumberance weigh doubled",
	descriptionFull : "A creature you touch no longer suffers the penalties to its speed or to its Dexterity (Stealth) checks from wearing medium or heavy armor, and is no longer encumbered from carry weight unless it is carrying more than twice the weight that would encumber it."
};
SpellsList["unlocked potential"] = {
	name : "Unlocked Potential",
	classes : ["psion"],
	source : [["HB", 0]],
	level : 1,
	school : "Psion",
	time : "1 a",
	range : "60 ft",
	components : "S",
	duration : "Conc, 1 min",
    description : "1/turn, target creature can take 1 psychic damage to add d4 to any attack, damage roll, or save",
	descriptionFull : "You unlock the potential of a creature's mind, allowing it to fully reach its limits. For the duration, once per turn the creature can add 1d4 to any attack roll, damage roll, or saving throw it makes. Each time it adds the extra 1d4, it takes 1 psychic damage as it pushes beyond its natural limitations."
};
SpellsList["unstable explosion"] = {
	name : "Unstable Explosion",
	classes : ["sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "60ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Dex",
	description : "10ft rad; roll 3d6, each 6 +5ft rad and +1d6 dmg; take Fire dmg = to rolled total+1d6/SL; save halves",
	descriptionFull : "You cause an unstable explosion to erupt at a point of your choice within range, rolling 3d6. For each die that rolls a 6, roll an additional d6 and the radius of the spell expands by 5 feet. Each creature within the final range of the spell must make a Dexterity saving throw. On a failed save, they take fire damage equal to the total value of the rolled dice. On a success the target, the target takes half as much fire damage." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
};
SpellsList["vicious vapors"] = {
	name : "Vicious Vapors",
	classes : ["druid", "occultist", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 2,
	school : "Trans",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Con",
	description : "5ft cube; crea enters/starts turn: 1d12 Poison dmg, poisoned; save halves, no poisoned; bns: move 20ft",
	descriptionFull : "You fill the air with poisonous vapors in a cube 5 feet on each side. A creature must make a Constitution saving throw when it enters the spell's area for the first time on their turn or starts its turn there. On a failed save, they take 1d12 poison damage and become poisoned until the end of their next turn. On a successful save, they take half as much damage and do not become poisoned.\n   You can move the cloud of vapors up to 20 feet as a bonus action during your turn."
};
SpellsList["vorpal weapon"] = {
	name : "Vorpal Weapon",
	classes : ["inventor"],
	source : [["HB", 0]],
	level : 5,
	school : "Trans",
	time : "1 a",
	range : "Touch",
	components : "V,S,M\u0192",
	compMaterial : "A weapon worth a least 1 cp",
	duration : "Conc, 1 h",
	description : "+3 magic weapon, ignore slash resist, x2 dmg to objs, critical hit on crea w/ 50 HP or less kills",
	descriptionFull : "You touch a weapon and imbue it with power. Until the spell ends, the weapon becomes indescribably sharp, ignoring resistance to slashing damage, and gains the Siege property, dealing double damage to inanimate objects such as structures. If a weapon has a modifier of less than +3 to attack and damage rolls, its modifier becomes +3 to attack and damage rolls for the duration of the spell."+
	"\n   Additionally, if a critical strike of this weapon would leave a creature with less than 50 hit points, the target creature is decapitated, killing it."
};
SpellsList["vortex blast"] = {
	name : "Vortex Blast",
	classes : ["druid", "occultist", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft cone",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "2d6+1d6/SL Bludgeoning dmg; save or pushed 20ft away and 40ft up",
	descriptionFull : "You create a sudden violent vortex that blasts outwards in a 30-foot cone, tossing characters and objects within the area. Creatures in the area take 2d6 bludgeoning damage and must succeed a Strength saving throw or be knocked 20 feet backward and 40 feet upward." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
};
SpellsList["water blast"] = {
	name : "Water Blast",
	classes : ["druid", "occultist", "sorcerer", "warlock", "wizard"],
	source : [["HB", 0]],
	level : 1,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "Ranged spell atk for 3d6+1d6/SL Bludgeoning dmg; Large or smaller save or prone",
	descriptionFull : "You conjure a ball of water before hurling it at a target. Make a ranged spell attack against the target. On a hit, the target takes 3d6 bludgeoning damage and if it is Large or smaller must make a Strength saving throw or be knocked prone." + AtHigherLevels + "When you cast this spell using a spell lot of 2nd level or higher, the damage increases by 1d6 for each level above 1st."
};
SpellsList["water cannon"] = {
	name : "Water Cannon",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "S:30" + (typePF ? "-" : "") + "ft line",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "5ft wide; 6d6 Bludgeoning dmg, pushed to end, on collision +2d6 dmg, prone; save haves, not pushed",
	descriptionFull : "You unleash a spout of water that blasts out in a 30-foot line that is 5 feet wide. Creatures in the area must make a Strength saving throw, or take 6d6 bludgeoning damage and be pushed to an open space at the end of the line away from you. If there is no open space to move to (for example they would move into a wall or another creature), they are pushed to the closest space and take an extra 2d6 bludgeoning damage and are knocked prone. On a successful save, they take half as much damage and are not pushed."
};
SpellsList["windborne weapon"] = {
	name : "Windborne Weapon",
	classes : ["druid", "sorcerer", "wizard"],
	source : [["HB", 0]],
	level : 0,
	school : "Trans",
	time : "1 a",
	range : "150 ft",
	components : "V,S,M\u0192",
	compMaterial : "A piece of ammunition or a weapon with the thrown property worth at least 1 cp",
	duration : "Instantaneous",
	description : "Ranged spell atk, ignores cover; 1d8 of the weapon's dmg type; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "Ranged spell atk, ignores cover; `CD`d8 of the weapon's dmg type",
	descriptionFull : "Make an attack using this spell's material component as part of the action used to cast this spell, turning it into a ranged spell attack. This attack ignores cover. On hit, it deals 1d8 damage of the weapon's damage type." + AtHigherLevels + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};
