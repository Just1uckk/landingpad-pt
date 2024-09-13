export const state = () => ({
  header: {
    color: 'white'
  },
  sectionData: {}
})

export const mutations = {
  setHeaderColor(state, color) {
    state.header.color = color;
  },
  changeSectionData(state,sectionData) {
    state.sectionData = sectionData
  }
}
