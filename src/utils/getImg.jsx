const getImg = (thumbnail) => {
  return `${thumbnail.path}.${thumbnail.extension}`;
};

export default getImg;
