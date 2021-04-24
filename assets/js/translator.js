(function(){
    const englishInput = document.getElementById('englishInput');
    const alBhedInput = document.getElementById('alBhedInput');
    const input = document.getElementsByClassName('input');
    const output = document.getElementsByClassName('output');
    const translate = document.getElementById('translate');
    const revert = document.getElementById('revert');
    const alphabet = {
        'a': 'y', 'A': 'Y', 
        'b': 'p', 'B': 'P', 
        'c': 'l', 'C': 'L', 
        'd': 't', 'D': 'T', 
        'e': 'a', 'E': 'A', 
        'f': 'v', 'F': 'V', 
        'g': 'k', 'G': 'K', 
        'h': 'r', 'H': 'R', 
        'i': 'e', 'I': 'E', 
        'j': 'z', 'J': 'Z', 
        'k': 'g', 'K': 'G', 
        'l': 'm', 'L': 'M', 
        'm': 's', 'M': 'S', 
        'n': 'h', 'N': 'H', 
        'o': 'u', 'O': 'U', 
        'p': 'b', 'P': 'B', 
        'q': 'x', 'Q': 'X', 
        'r': 'n', 'R': 'N', 
        's': 'c', 'S': 'C', 
        't': 'd', 'T': 'D', 
        'u': 'i', 'U': 'I', 
        'v': 'j', 'V': 'J', 
        'x': 'q', 'X': 'Q', 
        'w': 'f', 'W': 'F', 
        'y': 'o', 'Y': 'O', 
        'z': 'w', 'Z': 'W', 
    }
    const alphabetAlBhed = new Object;
    for (var letter in alphabet) {
        alphabetAlBhed[alphabet[letter]] = letter;
    };

    console.log(alphabetAlBhed);

    revert.addEventListener('click', function(e) {
        translate.classList.toggle('translateToAlBhed');
        translate.classList.toggle('translateToEnglish');
        englishInput.classList.toggle('input');
        alBhedInput.classList.toggle('output');
        englishInput.classList.toggle('output');
        alBhedInput.classList.toggle('input');
        revert.classList.toggle('revert');

        e.preventDefault();
    });

    translate.addEventListener('click', function(e) {
        if(translate.className === 'translateToAlBhed') {
            console.log('>>>');
            const english = input[0].value;
            const alBhed = english.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabet[m];
            });
            output[0].value = alBhed;
        } 
        else if(translate.className === 'translateToEnglish') {
            console.log('<<<');
            const alBhed = input[0].value;
            const english = alBhed.replaceAll(/([A-Za-z])/g, function (m) {
                return alphabetAlBhed[m];
            });
            output[0].value = english;
        }
        e.preventDefault();
    });

})();