// Module of all to-do items

const toDoListCollection = (() => {
  const collection = {};

  const add = (obj, section) => {
    if (!collection[section]) {
      collection[section] = [];
      collection[section].push(obj);
    } else collection[section].push(obj);
  };

  const remove = (section, index) => {
    collection[section].splice(index, 1);
  };

  const getCollection = (section) => {
    return collection[section];
  };

  const getAllCollections = () => {
    return collection;
  };

  return { add, getCollection, getAllCollections, remove };
})();

export { toDoListCollection };
