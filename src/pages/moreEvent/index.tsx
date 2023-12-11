import React from 'react'

import './index.scss'
import PagesLayout from '../../elements/layouts/PagesLayouts'
import { SpeakersCard } from '../../components/speakersCard'
import { MoreCard } from '../../components/moreCard'

const MoreEvents = () => {
  return (
    <PagesLayout>
        <div className="more_events">
            <MoreCard />

            <div className="more_events__title">
                спикеры
            </div>

            <div className="more_events__speakers">
                <SpeakersCard />
                <SpeakersCard />
            </div>
        </div>
    </PagesLayout>
  )
}

export default MoreEvents