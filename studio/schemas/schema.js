import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents types
import location from './documents/location'
import vertical from './documents/vertical'

// Object types
//import vert from './objects/vert'
import logoAsset from './objects/logoAsset'
import logoIMG from './objects/logoIMG'
import logoSVG from './objects/logoSVG'
import logoICON from './objects/logoICON'
import usAddr from './objects/usAddr'
import ukAddr from './objects/ukAddr'

// Service types
//import services from './objects/services'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
      location,
      logoAsset,
      logoIMG,
      logoSVG,
      logoICON,
      usAddr,
      ukAddr,
      vertical,
      //vert
      // services
  ])
})
