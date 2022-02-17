export default {
  widgets: [
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
                  buildHookId: '620dab9ab810310bdd38880b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nnrx9wzx',
                  apiId: '04f93094-ec3f-464f-8040-a63c2df85632'
                },
                {
                  buildHookId: '620dab9a70f9e00d4e2913cd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-53k4h4k8',
                  apiId: '6230e1c8-de15-4cc3-9456-20761e679e7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tobias-fletcher/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-53k4h4k8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
