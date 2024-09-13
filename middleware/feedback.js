export default async function ({ store, $api }) {
  if (!Object.keys(store.state.layout.sectionData).length) {
    const sectionData = {}
    let instaFeed
    let teamList
    try {
      const response = await $api.instaServices.getInstagramFeed()
      instaFeed = response.data.data
    } catch (e) {
      instaFeed = []
    }
    const instaSectionData = { title: 'Instagram', instaFeed }
    sectionData.instaSectionData = instaSectionData
    sectionData.contactSectionData =
      await $api.sectionService.getContactSection()
    sectionData.bookSectionData = await $api.sectionService.getBookSection()
    sectionData.seoSectionData = await $api.sectionService.getSeoPages()
    sectionData.bookSectionData.title = '[[Book]] a call'
    store.commit('layout/changeSectionData', sectionData)

    sectionData.storySectionData = await $api.sectionService.getStorySection()
    sectionData.teamSectionData = await $api.sectionService.getTeamSection()
    sectionData.teamListData = await $api.sectionService.getTeamList()
    try {
      const response = await $api.sectionService.getTeamListByGroup()
      teamList = response.team_order
    } catch (e) {
      teamList = []
    }
    sectionData.teamListDataByGroup = teamList
  }
}
