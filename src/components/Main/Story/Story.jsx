import React from 'react'
import './Story.css'
import story1 from './images/story1.png'
import story2 from './images/story2.png'
import story3 from './images/story3.png'
import story4 from './images/story4.png'

export const Story = () => {
  return (
    <>
      <div class="story">
        <div class="story_card">
          <div class="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div class="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div class="story_card__img">
            <img src={story1} alt="story" />
          </div>
        </div>
        <div class="story_card">
          <div class="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div class="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div class="story_card__img">
            <img src={story2} alt="story" />
          </div>
        </div>
        <div class="story_card">
          <div class="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div class="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div class="story_card__img">
            <img src={story3} alt="story" />
          </div>
        </div>
        <div class="story_card">
          <div class="story_card__title">
            <p>Создание сайтов</p>
          </div>
          <div class="story_card__date">
            <p>01.01.2020</p>
          </div>
          <div class="story_card__img">
            <img src={story4} alt="story" />
          </div>
        </div>
      </div>
    </>
  )
}
