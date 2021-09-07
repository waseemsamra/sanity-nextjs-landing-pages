export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61379d5b35f2ed0091a9dc96',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bt429o2w',
                  apiId: '68f5402d-762d-431b-8e7d-dd09d573db38'
                },
                {
                  buildHookId: '61379d5c86c6ba00adb1f450',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gsuhu7qz',
                  apiId: '84667ce0-daca-4ca8-af02-ede27e4575d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/waseemsamra/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gsuhu7qz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
