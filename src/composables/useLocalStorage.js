// wiem, ze to zbyt proste na wydzielanie composable, chodzi o założenia separacji odpowiedzialności i wyłonienie composables samych w sobie, a nie o konkretny przykład

const getItem = (key) => {
  if (!localStorage.getItem(key)) {
    return undefined;
  }
  return JSON.parse(localStorage.getItem(key))
}

const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export { getItem, setItem }
