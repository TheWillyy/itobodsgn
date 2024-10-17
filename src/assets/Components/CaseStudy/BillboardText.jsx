import { useEffect, useRef, useState } from 'react'

function BillboardText({text, onClick, link}){

  function toSentenceCase(str) {
    const smallWords = ["a", "an", "the", "and", "but", "or", "of", "for", "nor", "on", "at", "to", "by", "it", "was", "xyz"];
    
    // Split into sentences by looking for sentence-ending punctuation (., !, ?)
    let sentenceCased = str.replace(/([.!?])\s*(?=[a-zA-Z])/g, "$1|").split("|");

    // Loop through each sentence, capitalizing the first word and handling small words
    let processedSentences = sentenceCased.map(sentence => {
        let words = sentence.trim().split(" ");

        // Capitalize the first word (no need to check for space after period)
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        
        // For the rest of the words, only capitalize if they are NOT in the smallWords list
        for (let i = 1; i < words.length; i++) {
            if (!smallWords.includes(words[i].toLowerCase())) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            } else {
                // Ensure small words remain lowercase
                words[i] = words[i].toLowerCase();
            }
        }
        
        // Join the words back into a sentence
        return words.join(" ");
    });

    // Rejoin all sentences into a single string
    return processedSentences.join(" ");
  }

  return(
    <>
        <h1 className={link? 'custom-hover casestudy_billboardtext casestudy_billboardtext_link' : 'casestudy_billboardtext'} onClick={onClick}> {link? text : toSentenceCase(text)}  </h1>
    </>
  )
}

export default BillboardText;
