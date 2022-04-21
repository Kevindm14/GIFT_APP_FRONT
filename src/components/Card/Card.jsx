import styledComponents from 'styled-components'
import React from 'react'

const Card = ({ cards }) => {
  const { description, picture } = cards

  return (
    <CardContainer className='flex flex-col max-w-sm'>
      <CardHead>
        <Image className='w-full rounded' src={picture} alt='' />
      </CardHead>
      <CardBody className='px-6 py-4 text-gray-700 text-base'>
        <p>{description}</p>
      </CardBody>
    </CardContainer>
  )
}

const CardContainer = styledComponents.div``
const CardHead = styledComponents.div``
const CardBody = styledComponents.div``
const Image = styledComponents.img`
  width: 22rem;
`

export default Card
