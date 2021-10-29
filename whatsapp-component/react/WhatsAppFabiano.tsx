import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['WhatsAppFabiano'] as const

interface WhatsAppFabiano {
  title: string,
  url: string,
  icon: string
}

const WhatsAppFabiano: StorefrontFunctionComponent<WhatsAppFabianoProps> = ({ title, url, icon }) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <> 
      <div>
        <a href={url} target="_blank">
          <img src={icon} alt={title}/>
        </a>
      </div>
    </>
  )
}

WhatsAppFabiano.schema = {
  title: 'WhatApp',
  description: 'Link de Suporte WhatsApp Fabiano',
  type: 'object',
  properties: {
    WhatsAppFabiano: {
      title: 'link',
      type: 'string',
      default: null
    }
  },
}

export default WhatsAppFabiano
