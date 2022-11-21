import React from 'react'
import { useTranslation, Translation, Trans } from 'react-i18next'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <Trans i18nKey="content.text" />
    </div>
  )
}

export default HomePage
