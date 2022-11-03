import sanityClient from '@sanity/client'

const clientSanity = sanityClient({
  projectId: 'vtohm48w',
  dataset: 'production',
  apiVersion: '2022-10-01',
  useCdn: false,
})

export default clientSanity