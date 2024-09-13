import sectionService from "~/api/sectionService";
import pageService from "~/api/pageService";
import mailSendService from "~/api/mailSendService";
import gtagService from "~/api/gtagService";
import instaServices from "~/api/instaService";

export default (context, inject) => {
  const factories = {
    sectionService: sectionService(context.$strapi),
    pageService: pageService(context.$strapi),
    mailSendService: mailSendService(context.$axios),
    gtagService: gtagService(context.$gtag),
    instaServices: instaServices(context.$axios)
  };
  inject("api", factories);
};
