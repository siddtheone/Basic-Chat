export const loadState = () => {
  try {
    const sr = localStorage.getItem('settings');
    if(sr === null) {
      return undefined;
    }
    return JSON.parse(sr);
  } catch (e) {
    return undefined;
  }
}

export const saveState = state => {
  try {
    const sr = JSON.stringify(state)
    localStorage.setItem('settings', sr);
  } catch (e) {
    // TODO:
  }
}
