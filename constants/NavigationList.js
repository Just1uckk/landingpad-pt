export const navigationList = (isAnchor) => {
  const anchorOnThisPage = isAnchor ? '' : '/';
  return [
    {id: 1, link: '/#home-intro', text: 'Home', withoutExact: false},
    {
      id: 2,
      link: '/#services',
      text: 'Services',
      withoutExact: false,
      linkList: [
        {id: 1, link: '/move', text: 'Move', withoutExact: true},
        {id: 2, link: '/rent', text: 'Rent', withoutExact: true},
        {id: 3, link: '/buy', text: 'Buy', withoutExact: true},
        {id: 4, link: '/build', text: 'Build', withoutExact: true},
      ],
    },
    {
      id: 3,
      link: `${anchorOnThisPage}#story`,
      text: 'About us',
      withoutExact: false,
    },
    {
      id: 4,
      link: `${anchorOnThisPage}#team`,
      text: 'Team',
      withoutExact: false,
    },
    {id: 5, link: '#contact', text: 'Contact', withoutExact: false},
    {id: 6, link: '/blog', text: 'Blog', withoutExact: true},
    {id: 7, link: '/buy#apartment-section', text: 'Listings', withoutExact: true},
  ]
}
