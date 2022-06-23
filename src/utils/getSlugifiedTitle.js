import slugify from "slugify";

const getSlugifiedTitle = (title) => {
  const re = /([A-Z]+[a-z]+){2}/;
  const words = title.split(" ");
  words.forEach((word, i) => {
    if (word.match(re)) {
      const newWord = word.replace(/[A-Z]/g, (piece, index) => {
        return index === 0 ? piece.toLowerCase() : " " + piece.toLowerCase();
      });
      words[i] = newWord;
    }
  });

  const newTitle = words.join(" ");
  const slug = slugify(newTitle, { lower: true, remove: /[.\?]/ });
  return slug;
};

export default getSlugifiedTitle;
