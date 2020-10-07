export default {
    name: 'vert',
    type: 'object',
    fields: [
        {
            title: 'select a heathcare vertical',
            name: 'vertical',
            type: 'reference',
            to: [{
                type: 'vertical'
            }]
        },
        // add sub-sections "departments"
    ],
  }