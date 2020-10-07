export default {
    name: 'logoICON',
    title: 'Favicon',
    type: 'object',
    description: `supported icon files: .PNG & .GIF`,
    fields: [
        {
            title: 'Size',
            name: 'size',
            type: 'string',
            options: {
                list: [
                    {title: '120x120', value: '120'},
                    {title: '250x250', value: '250'},
                    {title: '260x260', value: '260'},
                ],
                layout: 'dropdown',
            },
        },
        {
            name: 'asset',
            type: 'logoAsset',
        },
    ],
    preview: {
        select: {
            i: 'asset',
            s: 'size',
        },
        prepare({ i, s }) {
            const t=`favicon logo assest`
            const st=`size: `+`${s}`
            return {
                media: i,
                title: t,
                subtitle: st
            }
        }
    }
  }