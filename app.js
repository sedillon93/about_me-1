'use strict';

var counter = 0;

var name = prompt('What\'s your name, buddy?');
console.log(name);

alert('WELCOME TO THE GAME. Don\'t worry, it\'s not a very complicated game. The game is called FOUR TRUTHS AND A LIE. I\'m going to tell you something that I, Kinley, have done or experienced at some point in my life....but one of things is going to be a lie. Which one\'s the lie? Well that\'s up to you to figure out. Are you ready to play? The rules are simple, you just answer yes if you think what I said is a truth, and no is you think it\'s the lie. Remember the name of the game is FOUR TRUTHS AND A LIE and I *will* be keeping score, so if you keep marking no, I\'m gonna know you suck, and tell you so. Let\'s begin! (If you think you can hack it.)');

var chinook = prompt('1. I have ridden in a military Chinook helicopter with my dog. (Remember, yes for truth, no for lie.)');
console.log('q1: chinook y/n (y)');
console.log(chinook);

if(chinook.toUpperCase() === 'Y' || chinook.toUpperCase() === 'YES') {
  alert('Think you\'re a smartypants, huh? Well they won\'t all be that easy! that one was a gimme! You probably knew I worked for a bush plane company in Alaska, sending climbers up to base camp on Denali, and got to go up myself a few times in the Chinooks the National Guard uses to help get camp ready for the season. Ready for the next one?');
  counter ++;
} else if (chinook.toUpperCase() === 'N' || chinook.toUpperCase() === 'NO') {
  alert('Bahahahaha! Nice try big shot! I HAVE been in a Chinook with my dog, when I worked for a bush plane company in Alaska, sending climbers up to base camp on Denali, and got to go up myself a few times in the Chinooks the National Guard uses to help get camp ready for the season. Better luck next time, dweeb! NEXT QUESTION');
} else {
  alert('LEARN HOW TO FOLLOW SIMPLE DIRECTIONS DUMMY');
}

var states = prompt('2. OK, try this one on for size: I have been to 46 of the United States (yes for truth, no for lie)');
console.log('q2: states y/n (y)');
console.log(states);

if(states.toUpperCase() === 'Y' || states.toUpperCase() === 'YES') {
  alert('Alright, maybe you\'re not a complete waste of brainspace. I guess it\'s not *that* unbelievable for someone to have been to 46 states. I did hitchhike most of that, though, betcha didn\'t know that! Next question!');
  counter ++;
} else if (states.toUpperCase() === 'N' || states.toUpperCase() === 'NO') {
  alert('HAHA YOU SUCK! I mean...WRONG! I mean...Yeah, no, I really have been to 46 states. I even hitchhiked most of that! Anyway, you can still get the next one right (maybe, I doubt it, though.)');
} else {
  alert('SERIOUSLY? ARE YOU REALLY THAT INCAPABLE OF FOLLOWING SIMPLE INSTRUCTIONS? YES OR NO!');
}

var canyon = prompt('3. Here\'s a good one for ya: I\'ve ridden a burro to the bottom of the Grand Canyon (yes for truth, no for lie)');
console.log('q3: canyon y/n (n)');
console.log(canyon);

if(canyon.toUpperCase() === 'N' || canyon.toUpperCase() === 'NO') {
  alert('Well, well, well. You\'re smarter than the average bear. I\'ve never even *been* to the Grand Canyon. (though I have been to the Grand Canyon of the Yellowstone [I\'ll link to that on the page if you\'ve never heard of it.]) On to the next! You have two questions left.');
  counter ++;
} else if (canyon.toUpperCase() === 'Y' || canyon.toUpperCase() === 'YES') {
  alert('HAH! That was the lie! Assuming I told you the truth in the first place and there\'s only one lie. But I haven\'t even been to the Grand Canyon at all.(though I have been to the Grand Canyon of the Yellowstone [I\'ll link to that on the page if you\'ve never heard of it.]) On to the next! You have two questions left.');
} else {
  alert('OK, ' + name.toUpperCase() + '. I AM STARTING TO GET PISSED OFF HERE. DO YOU EVEN WANT TO PLAY? IT IS SO SIMPLE. YES OR NO. Y OR N. EASY PEASY.');
}

var bear = prompt('4. Speaking of bears, this one time, driving from Alaska south through Canada, I totaled a 3/4 ton pickup truck on a grizzly bear. (yes for truth, no for lie)');
console.log('q4: bear y/n (y)');
console.log(bear);

if(bear.toUpperCase() === 'Y' || bear.toUpperCase() === 'YES') {
  alert('Yeah yeah yeah, you probably heard me tell that story before, or are friends with me on facebook or something. I ought to bive half credit for that one. But yeah, apparently near Destruction Bay is the highest concentration of grizzly bears in North America. No Shit! Scared the crap out of the dog, that\'s for sure. Had to hitchhike all the way back to Talkeetna. Last question coming up!');
  counter++;
} else if (bear.toUpperCase() === 'N' || bear.toUpperCase() === 'NO') {
  alert('You\'re not too bright, are you? I even foreshadowed that shit. Oh well. You can\'t help what don\'t want helped. Last question coming up. Good luck (you\'re gonna need it.)');
} else {
  alert('YOU AREN\'T EVEN PLAYING, ARE YOU?');
}

var salmon = prompt('5. Last question! Staying on theme...I once caught a 40lb King salmon (that\'s a Chinook salmon, just to throw in a little call-back) (yes for truth, no for lie)');
console.log('q5: salmon y/n (y)');
console.log(salmon);

if(salmon.toUpperCase() === 'Y' || salmon.toUpperCase() === 'YES') {
  counter++;
} else if (salmon.toUpperCase() === 'N' || salmon.toUpperCase === 'NO'){
  counter = counter;
} else {
  alert('GOOD JOB NOT EVEN TRYING ASSHOLE');
}

if(counter === 5) {
  alert('Holy crap, ' + name + '! What are you?! A stalker?! You got 5/5 correct! How did you know so damn much about me? I don\'t know if you\'re preternaturally good at guessing games, have *really* good luck, or you\'ve been playing this game over and over until you got them all right. Whatever it is, I\'m creeped out. But I guess you can look at the page anyway and see some pictures and stuff of me in the Last Frontier. Have fun creep!');
} else if (counter === 3 || counter === 4) {
  ('Not too shabby, ' + name + '. I grudgingly concede that you\'re not complete shit at guessing games (or you cheated and played more than once). You got ' + counter + '/5 correct. That\'s not the worst score I\'ve ever seen. You may not feast your eyes on pictures and information of yours truly in the Last Frontier.');
} else if (counter === 2 || counter === 1) {
  alert('Oh come ON. IS that *really* the best you can do? ' + counter + '/5? That\'s pathetic. I almost don\'t even want you to see my page, but I guess you can...It\'s a bunch of awesome pictures and stuff about me in the Last Frontier. You definitely don\'t deserve it, but have at it.');
} else if (counter === 0) {
  alert('YOU GOT 0. FREAKING ZE-RO. HOW DO YOU EVEN GET SUCH A RIDICULOUS SCORE?');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('you don\'t know me');
  alert('you don\'t know me at all');
  alert('Yeah so I guess even though you don\'t remotely deserve it, you can look at my site, with my awesome pictures and stuff about me in the Last Frontier');
}
