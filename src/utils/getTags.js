const getTags = (tags) => {
  const newTags = [];

  tags.map((tag) => {
    newTags.push(tag.contentful_id);
  });
  return newTags;
};

export default getTags;
