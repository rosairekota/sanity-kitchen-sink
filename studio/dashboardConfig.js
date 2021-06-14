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
                  buildHookId: '60c74a151270e48d3282b17c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hz2viwj9',
                  apiId: '4313b99b-0319-4049-bc26-98952c413568'
                },
                {
                  buildHookId: '60c74a16ad233db1050a0685',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-q7rj9ktj',
                  apiId: '126c3818-d61c-4479-a569-39968c55466c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rosairekota/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-q7rj9ktj.netlify.app', category: 'apps'}
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
