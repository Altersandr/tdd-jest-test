const capitalize = (string) => {
  if (typeof string === "number") return null;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;
