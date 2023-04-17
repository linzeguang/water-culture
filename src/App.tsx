import './styles/index.css'

import React, { useCallback, useMemo, useState } from 'react'
import { ModalTransition } from '@atlaskit/modal-dialog'

import VideoModal from './components/VideoModal'
import {
  balloonBlueImg,
  balloonRedImg,
  balloonYellowImg,
  clickImg,
  cloudBottomLeftImg,
  cloudTopLeftImg,
  cloudTopRightImg,
  dahaiouImg,
  dilibiaoshiImg,
  dituImg,
  dskskVideo,
  feijiImg,
  gfsskVideo,
  lhhbdVideo,
  localDSKSK,
  localGFSSK,
  localLHHBD,
  localLSKSK,
  localTemp,
  localYSHBD,
  lskskVideo,
  manImg,
  navBlueImg,
  navDSKSK,
  navGFSSK,
  navGreenImg,
  navLSKSK,
  TipsImg,
  titleImg,
  xiaohaiouImg,
  yshbdVideo,
} from './assets'

export interface Attraction {
  bg: string
  label: string
  introduction: string | string[]
  video: string
  color: string
  disActive?: boolean
  className?: string
}

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navs = useMemo<Record<string, Attraction>>(
    () => ({
      yshbd: {
        bg: navGreenImg,
        label: '油松河',
        introduction: [
          '油松河是观澜河的一级支流，起点为民治水库，经民治街道、龙华街道，最终汇入观澜河，总长度约为4.6公里。',
          '油松河碧道位于民治街道、龙华街道，以“写城故事，做水文章”为设计理念，打造杉涧游、清江曲、三江流“三幕”特色碧道主题区，人们可以赏景休憩、休闲运动、娱乐消费，共享健康的文化休闲慢道。',
        ],
        video: yshbdVideo,
        color: '#1D8D44',
      },
      gfssk: {
        bg: navBlueImg,
        name: navGFSSK,
        label: '高峰水水库',
        introduction: [
          '高峰水库于1960年6月建成，是小（1）型水库，总库容426.29万立方米，集雨面积4.2平方公里，主要功能是防洪。',
          ' 环高峰水库碧道位于龙华区大浪街道，环阳台山森林公园内高峰水库而建，构建簕杜鹃观赏基地、市花科普走廊、花田迷宫、大花乔木径、四季花园等五大景点，营造城野交融的“乐活门户走廊”。',
        ],
        video: gfsskVideo,
        color: '#1F84AD',
      },
      lhhbd: {
        bg: navGreenImg,
        label: '龙华河',
        introduction: [
          '龙华河是观澜河左岸一级支流，源头在羊台山北侧，由西北流向东南转向东后汇入观澜河，总长度约8公里。',
          '龙华河碧道环绕居住区与商圈，串联两岸“生态、民俗、商贸”资源，总体布局“四段、七景”，碧与山、碧龙圩、碧华彩、碧入澜“四段”特色主题区串联成趣；引山入碧、碧岸观山、四水清澜、碧水听圩、旺集兴澜、壁谷游龙、乐水入澜“七景”缀珠成锦，旨在共同描绘龙华河畔烂漫的城市画卷',
        ],
        video: lhhbdVideo,
        color: '#1D8D44',
      },
      lsksk: {
        bg: navBlueImg,
        name: navLSKSK,
        label: '冷水坑水库',
        introduction: [
          '冷水坑水库建成于1993年6月，是一座小（1）型水库，总库容114.84万立方米，集雨面积1.48平方公里。',
          '环冷水坑水库碧道已建成3.5公里，碧道打造出市民与自然的互动空间，沿途阳台叠翠、溯溪栈道、树木研习径、热带雨林区等八大景点串联。',
        ],
        video: lskskVideo,
        color: '#1F84AD',
      },
      dilibiaoshi: {
        disActive: true,
        bg: dilibiaoshiImg,
        className: 'dilibiaoshi',
      } as Attraction,
      dsksk: {
        bg: navBlueImg,
        name: navDSKSK,
        label: '大水坑水库',
        introduction: [
          '大水坑水库建成于1993年4月，是小（1）型水库，总库容336.38万m³，集雨面积3.89平方公里。',
          '环大水坑水库碧道是龙华环城绿道的组成部分，也是龙华区首条以生态科普教育为主题的郊野型碧道，串联起“九龙山数字城重点片区”与“大浪创意时尚片区”两个重点核心片区。打造以田园观光、生态科普、农业体验、户外运动为特色的精品绿道，并与省立绿道、龙观快速沿线绿道形成山水农林观光环线',
        ],
        video: dskskVideo,
        color: '#1F84AD',
      },
    }),
    [],
  )

  const [attraction, setAttraction] = useState<Attraction>(navs['yshbd'])

  const handleClick = useCallback((attraction: Attraction) => {
    setIsOpen(true)
    setAttraction(attraction)
  }, [])

  return (
    <>
      <div style={{ display: 'none' }}>
        <img src={dituImg} alt='ditu' />
      </div>

      <img className='cloud-top-right' src={cloudTopRightImg} alt='cloud-top-right' />
      <img className='cloud-top-left' src={cloudTopLeftImg} alt='cloud-top-right' />
      <img className='cloud-bottom-left' src={cloudBottomLeftImg} alt='cloud-bottom-left' />
      <img className='man' src={manImg} alt='man' />
      <img className='balloon-blue' src={balloonBlueImg} alt='balloon-blue' />
      <img className='balloon-red' src={balloonRedImg} alt='balloon-red' />
      <img className='balloon-yellow' src={balloonYellowImg} alt='balloon-yellow' />
      <img className='title' src={titleImg} alt='title' />
      <img className='feiji' src={feijiImg} alt='feiji' />

      <div className='ditu-wrapper'>
        <img className='ditu-bg' src={dituImg} alt='ditu' />
        <img className='dahaiou' src={dahaiouImg} alt='dahaiou' />
        <img className='xiaohaiou' src={xiaohaiouImg} alt='xiaohaiou' />
        <img className='tips' src={TipsImg} alt='tips' />
        <img className='local-temp' src={localTemp} alt='local-temp' />
        <img className='click' src={clickImg} alt='click' />

        {/* 地标 */}
        <img
          className='local local-YSHBD'
          src={localYSHBD}
          alt='local-YSHBD'
          onClick={() => handleClick(navs['yshbd'])}
        />
        <img
          className='local local-DSKSK'
          src={localDSKSK}
          alt='local-DSKSK'
          onClick={() => handleClick(navs['dsksk'])}
        />
        <img
          className='local local-GFSSK'
          src={localGFSSK}
          alt='local-GFSSK'
          onClick={() => handleClick(navs['gfssk'])}
        />
        <img
          className='local local-LHHBD'
          src={localLHHBD}
          alt='local-LHHBD'
          onClick={() => handleClick(navs['lhhbd'])}
        />
        <img
          className='local local-LSKSK'
          src={localLSKSK}
          alt='local-LSKSK'
          onClick={() => handleClick(navs['lsksk'])}
        />
      </div>

      <div className='navs'>
        {Object.keys(navs).map((key, index) => (
          <button
            key={index}
            className={!navs[key].disActive ? 'local' : undefined}
            onClick={() => {
              if (navs[key].disActive) return
              setIsOpen(true)
              setAttraction(navs[key])
            }}
          >
            <img className={navs[key].className} src={navs[key].bg} alt={navs[key].label} />
            {navs[key].label && (
              <h4 className='name' style={{ color: navs[key].color }}>
                {navs[key].label}
              </h4>
            )}
          </button>
        ))}
      </div>

      <ModalTransition>
        {isOpen && <VideoModal {...attraction} onClose={() => setIsOpen(false)} />}
      </ModalTransition>
    </>
  )
}

export default App
