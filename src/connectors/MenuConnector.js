import axios from 'axios'
import { getItem, setItem } from '@/composables/useLocalStorage'

const endpoint = 'https://green.home2k.pl/api/menu'

const fetchMenu = async () => {

  if (getItem('menu')) {
    return getItem('menu');
  }

  const { data } = await axios.get(endpoint)
  setItem('menu', data)

  return data
}

export { fetchMenu }