export default {
    name: 'logoIMG',
    title: 'Logo Image',
    type: 'object',
    description: `Supported image files: .PNG, .GIF, .JPG`,
    fields: [
        {
            name: 'color',
            type: 'string',
            options: {
                list: [
                    {title: 'Primary', value: 'primary'},
                    {title: 'Secondary', value: 'secondary'},
                    {title: 'Alternative', value: 'alternative'},
                    {title: 'Neutral', value: 'neutral'},
                    {title: 'White', value: 'white'},
                    {title: 'Black', value: 'black'},
                ],
                layout: 'dropdown',
            }
        },
        {
            name: 'asset',
            type: 'logoAsset',
        },
    ],
    preview: {
        select: {
            i: 'asset',
            c: 'color',
        },
        prepare({ i, c }) {
            const t=`image file logo asset`
            const st=`color: `+`${c}`
            return {
                media: i,
                title: t,
                subtitle: st,
            }
        }
    }
  }