function insertMarkToString(text) {
  if (!text) return '';
  return text.replace(/\[\[/gm, '<mark>').replace(/\]\]/gm, '</mark>');
}
export default insertMarkToString;
