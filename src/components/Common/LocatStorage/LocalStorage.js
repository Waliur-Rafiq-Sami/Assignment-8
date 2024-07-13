const getItemByLocalStorage = (name) => {
  const item = localStorage.getItem(name);
  if (!item) {
    return [];
  }
  return JSON.parse(item);
};

const removeItem = (name, id) => {
  const get = getItemByLocalStorage(name);
  const beforeRemove = get.filter((i) => i !== id);
  localStorage.setItem(name, JSON.stringify(beforeRemove));
};

const saveIdLocalStorage = (name, bookId, tostFun) => {
  const save = getItemByLocalStorage(name);
  const isInclude = save.find((id) => id === bookId);
  if (name !== "read") {
    const check = getItemByLocalStorage("read");
    const checkIsInclude = check.find((id) => id === bookId);
    console.log(checkIsInclude);
    if (checkIsInclude) {
      tostFun("dublicate");
      return false;
    }
  }
  isInclude ? tostFun(false) : (save.push(bookId), tostFun(true));
  localStorage.setItem(name, JSON.stringify(save));
};
export { getItemByLocalStorage, saveIdLocalStorage, removeItem };
