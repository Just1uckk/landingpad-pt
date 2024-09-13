export const convertData = {
  methods: {
    convertMarkdownToHtml(markdown) {
      if(this.$markdownIt) {
        return this.$markdownIt({html:true}).render(markdown)
      }
      return '';
    },
    convertTimeStampToUSFormat(timeStamp) {
      return new Date(timeStamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    },
    createSummaryByWords(string, wordsLength = 20) {
      let arrString = string.split(' ');
      wordsLength = (wordsLength >= arrString.length || wordsLength < 0) ? arrString.length : wordsLength;
      arrString = arrString.slice(0, +wordsLength);
      return arrString.join(' ') + '...';
    },
    createSummaryByLetters(string, lettersLength = 50) {
      lettersLength = (lettersLength >= string.length || lettersLength < 0) ? string.length : lettersLength;
      return string.slice(0, +lettersLength) + '...';
    }
  }
}
