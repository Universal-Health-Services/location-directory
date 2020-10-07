export default {
    name: 'logoSVG',
    title: 'Logo SVG',
    type: 'object',
    fields: [
        {
            title: 'SVG File',
            name: 'asset',
            type: 'logoAsset',
            description: `.svg file`,
        },
        {
            title: 'SVG String',
            name: 'string',
            type: 'string',
            description: `.svg file as a string`,
        }
    ],
    preview: {
        select: {
            i: 'asset',
        },
        prepare({ i }) {
            const t=`vector file and string logo asset`
            return {
                media: i,
                title: t,
            }
        }
    }
  }