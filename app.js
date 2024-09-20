
  function findWordByLettersAndBackWordOfArray(words, letters) {
            // Convert letters to lowercase for case-insensitive matching
                const arrayOfWord = [];
            // const letters = letter.toLowerCase(); for case sensitivity
            // Iterate through each word in the array
            for (let i = 0; i < words.length; i++) {
                const word = words[i]; // Check if all letters are present in the word toLowerCase() for case sensitivity
                let allLettersFound = true;

                for (let j = 0; j < letters.length; j++) {
                    if (!word.includes(letters[j])) {
                        allLettersFound = false;
                        break;
                    }
                }

                if (allLettersFound) {
                    arrayOfWord.push(word);
                }
            } // If no word is found,return null or an empty string return arrayOfWord; }

            return arrayOfWord;

        }



         function wantedWords(arr,len){
            const newArr = [];
            for(const word of arr){
                if(word.length === len){
                    newArr.push(word);
                }
            }

            return newArr;
        }

        function removeDuplicateWords(arr){
            const uniqueArray = [];
            for(const word of arr){
                if(!uniqueArray.includes(word)){
                 uniqueArray.push(word);
                }
            }
            return uniqueArray;
        }




        document.getElementById('btn').addEventListener("click", (e) => {
            e.preventDefault();
            const letter = document.getElementById('letter').value;
            const length = document.getElementById('length').value;
            const output = document.getElementById('output');
            const number = parseInt(length);

            if (letter !== "" && length === ""){
                const arrayResult = findWordByLettersAndBackWordOfArray(words,letter);
                const uniqueArrayResult = removeDuplicateWords(arrayResult);
                output.innerText = uniqueArrayResult.join(", ")
                document.getElementById('output_container').classList.remove("hidden");
            }else{
                const arrayOfResult = findWordByLettersAndBackWordOfArray(words,letter);
                const findWantedWords = wantedWords(arrayOfResult,number);
                const uniqueArrayOfResult2 = removeDuplicateWords(findWantedWords);
                output.innerText = uniqueArrayOfResult2.join(", ");
                document.getElementById('output_container').classList.remove("hidden");
            }
            document.getElementById('letter').value = "";
            document.getElementById('length').value = "";

        })