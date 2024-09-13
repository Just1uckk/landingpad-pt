import markdownIt from 'markdown-it';

export default({ app }, inject) => {
  inject('markdownIt', markdownIt);
}
