import React from 'react'
import groq from 'groq'
import BlockContent from '@sanity/block-content-to-react'

// No drop down for rooms in header.
// Dropdown for other things though.

// A way to showcase specific rooms.
// Can be simple better placement for higher quality rooms

// Room Pages and Home Page
// Keep image slider
// Mobile Header and Footer

// RedBallLinks mobile friendly.

// Sanity Client
import client from '../client'

// Renderers
import BlockRenderer from '../renderers/BlockRenderer'
import ImageRenderer from '../renderers/ImageRenderer'
import BreakRenderer from '../renderers/BreakRenderer'
import ObjectRenderer from '../renderers/ObjectRenderer'
import DarkenSliderRenderer from '../renderers/DarkenSliderRenderer'

// Components
import MainContainer from '../components/MainContainer'

function Pages({page = {}}) {
  const {title = 'Main Title', body = []} = page

  return (
    <main>
      <MainContainer>
        <BlockContent
          blocks={body}
          serializers={{
            types: {
              block: BlockRenderer,
              image: ImageRenderer,
              redBallList: ObjectRenderer,
              // image: ImageRenderer,
              break: BreakRenderer,
              darkenSlider: DarkenSliderRenderer,
            },
          }}
          {...client.config()}
        />
      </MainContainer>
    </main>
  )
}

const query = groq`*[_type == "page" && slug.current == $slug][0]{
  title,
  body
}`

export async function getStaticPaths() {
  const paths = await client.fetch(groq`*[_type == "page"]`)
  const createdPaths = paths.map((pageObj) => {
    return {
      params: {slug: [pageObj.slug.current]},
    }
  })
  return {
    paths: createdPaths,
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const {slug = ''} = context.params
  const page = await client.fetch(query, {slug: 'home-page'})
  return {
    props: {
      page: page || {},
    },
  }
}

export default Pages
