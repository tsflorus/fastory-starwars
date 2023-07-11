exports.forEachAsync = async (array, callback) => {
  await Promise.all(array.map(callback))
}
