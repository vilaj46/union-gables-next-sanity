import React from 'react'
import Link from 'next/link'

// Components
import Center from '../components/Center'
import Emphasis from '../components/Emphasis'
import Paragraph from '../components/Paragraph'
import CustomLink from '../components/CustomLink'
import DarkenSlider from '../components/DarkenSlider/'
import PageTitle from '../components/PageTitle/PageTitle'
import RedBallLinks from '../components/RedBallLinks'
import ReasonsToStay from '../components/ReasonsToStay'

const darkSliderObjectOne = {
  href: '/',
  mainText: 'Unlock Exclusive Offers',
  slideText: 'Sign up for our mailing list to receive special promotions at Union Gables Inn.',
  buttonText: 'Read More',
  src: '/static/images/exteriorRegular.jpg',
  Component: Link,
}

const darkSliderObjectTwo = {
  href: '/',
  mainText: 'Fresh Gourmet Breakfasts',
  slideText:
    'Never the same two days in a row, learn more about our famous breakfast prepared fresh daily.',
  buttonText: 'Read More',
  src: '/static/images/benedictRegular.jpg',
  Component: Link,
}

const darkSliderObjectThree = {
  href: '/',
  mainText: 'Private Events',
  slideText:
    'Reserve our spacious grounds for an outdoor event or our oversized living room for a meeting.',
  buttonText: 'Read More',
  src: '/static/images/dinnerRegular.jpg',
  Component: Link,
}

const darkSliderObjectOneStretch = {
  href: '/',
  mainText: 'Unlock Exclusive Offers',
  slideText: 'Sign up for our mailing list to receive special promotions at Union Gables Inn.',
  buttonText: 'Read More',
  src: '/static/images/exteriorStretch.jpg',
  Component: Link,
}

const darkSliderSingleList = [darkSliderObjectOne]
const darkSliderTwoList = [darkSliderObjectOne, darkSliderObjectTwo]
const darkSliderThreeList = [darkSliderObjectOne, darkSliderObjectTwo, darkSliderObjectThree]

const reasonsList = [
  {
    src: '/static/images/reason1.jpg',
    alt: 'ALT1',
    desc: 'MAIN IMAGE',
  },
  {
    src: '/static/images/reason2.jpg',
    alt: 'ALT2',
    desc: 'SECOND IMAGE',
  },
  {
    src: '/static/images/reason3.jpg',
    alt: 'ALT3',
    desc: 'THIRD IMAGE',
  },
]

function Components() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <ReasonsToStay list={reasonsList} />

      {/* <PageTitle header={1}>H1 PageTitle</PageTitle>
      <PageTitle header={2}>H2 PageTitle</PageTitle>
      <PageTitle header={3}>H3 PageTitle</PageTitle>

      <p>Dark Slider long stretched:</p>
      <DarkenSlider list={[darkSliderObjectOneStretch]} long={true} />

      <p>Dark Slider by itself:</p>
      <DarkenSlider list={darkSliderSingleList} long={false} />

      <p>Dark Slider two:</p>
      <DarkenSlider list={darkSliderTwoList} long={false} />

      <p>Dark Slider three:</p>
      <DarkenSlider list={darkSliderThreeList} long={false} /> */}
    </div>
  )
}

export default Components
