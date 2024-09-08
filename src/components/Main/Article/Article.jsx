import React from 'react'
import './Article.css'
import post1 from './images/post1.jpeg'
import post3 from './images/post3.jpeg'
import dot from './images/dot.png'
import postVideo from './images/post-video.png'
import play from './images/play.png'

export const Article = () => {
  return (
    <>
      <article class="article">
        <div class="article-card_content">
          <div class="article-card">
            <p class="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div class="article-card_public">
            <div class="article-card_public_desc">
              <p class="article-card_public__date">
                21.06.2020
              </p>
            </div>
            <button class="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
      <article class="article">
        <div class="article-img">
          <img src={post1} alt="Статья" />
        </div>
        <div class="article-card_content">
          <div class="article-card">
            <p class="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div class="article-card_public">
            <div class="article-card_public_desc">
              <p class="article-card_public__date">
                21.06.2020
              </p>
              <img src={dot} alt="Точка" class="dot" />
              <p class="article-card_public__tags">
                создание сайтов
              </p>
            </div>
            <button class="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
      <article class="article">
        <div class="article-video">
          <img src={postVideo} alt="Видео" class="post-video" />
          <img src={play} alt="Начать просмотр" class="play-video" />
        </div>
        <div class="article-card_content">
          <div class="article-card">
            <p class="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div class="article-card_public">
            <div class="article-card_public_desc">
              <p class="article-card_public__date">
                21.06.2020
              </p>
              <img src={dot} alt="Точка" class="dot" />
              <p class="article-card_public__tags">
                продвижение видео
              </p>
            </div>
            <button class="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
      <article class="article">
        <div class="article-img">
          <img src={post3} alt="Статья" />
        </div>
        <div class="article-card_content">
          <div class="article-card">
            <p class="article-card_p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum,
              posuere
              tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu
              auctor
              nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.
            </p>
          </div>
          <div class="article-card_public">
            <div class="article-card_public_desc">
              <p class="article-card_public__date">
                21.06.2020
              </p>
              <img src={dot} alt="Точка" class="dot" />
              <p class="article-card_public__tags">
                создание сайтов
              </p>
            </div>
            <button class="button-reed">
              Читать
            </button>
          </div>
        </div>
      </article>
    </>
  )
}
