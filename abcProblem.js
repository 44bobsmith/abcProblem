$(document).ready(function() {
    $('#button').click(function() {
        var wordInput = $('input[name=wordToCheck]').val();
        var canMakeWord;
        console.log(wordInput);

        var blockArray = [['B','O',false],['X','K',false],['D','Q', false],['C','P',false],['N','A',false],['G','T',false],['R','E',false],['T','G',false],['Q','D',false],['F','S',false],['J','W',false],['H','U',false],['V','I',false],['A','N',false],['O','B',false],['E','R',false],['F','S',false],['L','Y',false],['P','C', false],['Z','M',false]];
        console.log(blockArray);
        for (var i = 0; i < wordInput.length; i++) {
          for (var j=0; j < 20; i++) {
            for (var k = 0; k < 2; i++) {
              if (blockArray[j][2] === true) {
                canMakeWord = false;
              } else if (blockArray[j][k] == wordInput.charAt(i).toUppercase) {
                console.log(blockArray[j][k]);
                console.log(wordInput.charAt(i).toUppercase);
                blockArray[j][2] = true;
              } else {
                canMakeWord = true;
              }
            }
          }
        console.log(canMakeWord);
        }
      console.log(canMakeWord);
      alert(canMakeWord);
      });
});
