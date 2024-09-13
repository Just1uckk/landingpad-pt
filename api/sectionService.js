const HOME_PAGE_SECTIONS_NAME_LIST = [
  "intro",
  "reviews",
  "reviewsList",
  "services",
  "servicesList",
  "story",
  "team",
  "teamList",
  "contact",
  "book"
];

export default strapi => ({
  getHomePageSectionsServiceList() {
    return [
      this.getHomeIntro(),
      this.getReviewsSection(),
      this.getReviewsList(),
      this.getServicesSection(),
      this.getServicesList(),
      this.getStorySection(),
      this.getTeamSection(),
      this.getTeamList(),
      this.getContactSection(),
      this.getBookSection()];
  },
  /**
   * Creating home page data object
   */
  async getHomePageSections() {
    try {
      const homePageSectionDataList = await Promise.all(this.getHomePageSectionsServiceList());
      return homePageSectionDataList.reduce((acc, curr, index) => {
        acc[HOME_PAGE_SECTIONS_NAME_LIST[index]] = curr;
        return acc;
      }, {});
    } catch (error) {
      return error;
    }
  },
  getApartmentsBySlug(slug) {
    return strapi.findOne("apartments", slug);
  },
  getHeader() {
    return strapi.find("header");
  },
  getHomeIntro() {
    return strapi.find("home-intro");
  },
  getReviewsSection() {
    return strapi.find("reviews-section");
  },
  getReviewsList() {
    return strapi.find("reviews");
  },
  getServicesSection() {
    return strapi.find("services-section");
  },
  getServicesList(params = {_sort: "id:asc"}) {
    return strapi.find("services", params);
  },
  getStorySection() {
    return strapi.find("story-section");
  },
  getTeamSection() {
    return strapi.find("team-section");
  },
  getTeamList() {
    return strapi.find("teams");
  },
  getTeamListByGroup() {
    return strapi.findOne("teams-groups","teams-section");
  },
  getContactSection() {
    return strapi.find("contact-section");
  },
  getBookSection() {
    return strapi.find("book-section");
  },
  getServiceById(id) {
    return strapi.findOne("services", id);
  },
  getBlogPageSection() {
    return {title: 'Blog'};
  },
  getAccommodationPageSection() {
    return strapi.find("accommodation");
  },
  getBlogMetaSection() {
    return strapi.find("blog");
  },
  getAccommodationMetaSection() {
    return strapi.find("accommodation");
  },
  getBlogList(params = {_sort: "date:desc"}) {
    return strapi.find("articles", params);
  },
  getAccommodationList(params = {_sort: "date:desc"}){
    return strapi.find("accommodation-articles", params);
  },
  getBlogBySlug(slug) {
    return strapi.findOne("articles", slug);
  },
  getAccommodationBySlug(slug){
    return strapi.findOne("accommodation-articles", slug);
  },
  getSeoPages() {
    return strapi.find("seo-lists");
  },
  getNavData(route) {
    const path = route.path.split('/');
    const navData = {
      chain: [],
      back: {
        to: '',
        text: '',
      },
    };
    for (let i=0;i<path.length;i++){
      if (path[i] === '') {
        const body = {
          to: '/',
          text: 'Home Page'
        }
        navData.chain.push(body)
      }
      if (path[i] !== '') {
        const changeSlug = path[i].replace(/-/g,' ')
        const slugUpper = changeSlug.charAt(0).toUpperCase() + changeSlug.slice(1)
        let toUrl = ''
        if (navData.chain[i-1].to === '/'){
          toUrl = navData.chain[i-1].to + path[i]
        } else {
          toUrl = navData.chain[i-1].to + '/' +path[i]
        }
        const body = {
          to: toUrl,
          text: slugUpper
        }
        navData.chain.push(body)
      }
    }
    navData.back = navData.chain[navData.chain.length - 2]
    return navData
  },
  getContentList (components) {
    const arrComponent = [];
    const arrTags = [];
    let contentListData = [];
    components?.forEach((x) => {
      if (x.__component === 'seo-elements.text-area') {
        arrComponent.push(x.TextBlock);
      }
    });
    if (arrComponent.length) {
      arrComponent.forEach((x) => {
        const parseHtmlTag = x.match(/<h[1-6].*navigation.*>.*<\/h[1-6]>/gm);
        if (parseHtmlTag !== null && parseHtmlTag.length) {
          parseHtmlTag.forEach((x) => arrTags.push(x));
        }
      });
    }
    if (arrTags.length) {
      arrTags.forEach((x) => {
        const tag = x.match(/h[1-6]/)[0];
        const id = x.match(/id="(.*)"\sclass/)[1];
        const text = x.match(/>(.*)<\/h[1-6]/)[1];
        const obj = {
          tag,
          id,
          text,
        };
        contentListData.push(obj);
      });
    } else contentListData = false;
    return contentListData;
  }
})
