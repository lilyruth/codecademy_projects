let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');



let betterWords= [];

storyWords.filter( word => {
  if (unnecessaryWords.includes(word)) {

  } else {
    betterWords.push(word);
  }
}) 


let word1 = overusedWords[0];
let word2 = overusedWords[1];
let word3 = overusedWords[2];

let word1count = 0;
let word2count = 0;
let word3count = 0;


betterWords.forEach( word => {
  for (let i = 0; i < overusedWords.length; i++) {
    if (word === overusedWords[i]) {
      if (overusedWords[i] === word1) {
        word1count++;
      } else if (overusedWords[i] === word2) {
        word2count++;
      } else if (overusedWords[i] === word3) {
        word3count++;
      }
    }
  }
})


let numOfSentences = 0;

let sentenceCalc = (paragraph) => {
  let paraByCharacter = paragraph.join(' ').split('');
  paraByCharacter.forEach( char => {
      if (char === '.' || char === '!' || char === '?') {
      numOfSentences++; 
    }
  });
};
sentenceCalc(betterWords)

let report = () => {
  console.log(`You original paragraph word count is ${storyWords.length}.`);
  console.log(`You filtered paragraph word count is ${betterWords.length}.`);
  console.log(`You used "${word1}" ${word1count} times.`)
  console.log(`You used "${word2}" ${word2count} times.`)
  console.log(`You used "${word3}" ${word3count} times.`)
  console.log(`You have ${numOfSentences} sentences.`)
  }

report();

let giveNewParagraph = (paragraph) => {
   console.log(paragraph.join(' '));
}

giveNewParagraph(betterWords);

