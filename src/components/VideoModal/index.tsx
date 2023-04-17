import './styles.css'

import React from 'react'
import ReactPlayer from 'react-player'
import Modal from '@atlaskit/modal-dialog'

import type { Attraction } from '@/App'
import { cloudLeftImg, shanImg, videoBottomImg, womanImg } from '@/assets'

const VideoModal: React.FC<Attraction & { onClose: () => void }> = (props) => {
  const { label, video, introduction, color, onClose } = props

  return (
    <Modal>
      <img src={cloudLeftImg} alt='cloud-left-1' className='cloud-left-1' />
      <img src={cloudLeftImg} alt='cloud-left-2' className='cloud-left-2' />
      <img src={cloudLeftImg} alt='cloud-left-3' className='cloud-left-3' />
      <img src={womanImg} alt='woman' className='woman' />
      <img src={cloudLeftImg} alt='cloud-left-4' className='cloud-left-4' />

      <div className='content'>
        <h3 className='content-name' style={{ color }}>
          {label}
        </h3>
        <div className='content-video'>
          <ReactPlayer
            url={video}
            width='calc(90vw - 2px)'
            height='calc(225 / 400 * (90vw - 2px))'
            controls
          />
        </div>
        <div className='content-introduction' style={{ color }}>
          {typeof introduction === 'string' ? (
            <p>{introduction}</p>
          ) : (
            introduction.map((text, index) => <p key={index}>{text}</p>)
          )}
        </div>
        <button className='back' onClick={onClose}>
          返回主页
        </button>
      </div>

      <div
        className='video-bottom'
        style={{
          backgroundImage: `url(${videoBottomImg}), url(${shanImg})`,
        }}
      />
    </Modal>
  )
}

export default VideoModal
