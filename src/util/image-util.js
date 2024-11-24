function getImageByURL(name) {
  return new URL(`./${name}`, import.meta.url).href;
}
export { getImageByURL };
