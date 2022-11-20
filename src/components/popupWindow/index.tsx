import './index.scss'
import { Button } from 'antd';
import 'antd/dist/reset.css';
import { CloseCircleOutlined } from '@ant-design/icons';
import React, { useState, useImperativeHandle } from 'react'


const Index = (props: any, ref: any): any => {

  const [open, setOpen] = useState(true)

  useImperativeHandle(ref, () => ({
    shutdown,
  }));

  const shutdown = () => {
    setOpen(!open)
  }
  return (
    <>
      {
        open && (
          <div className='popupwindow'>
            <div className='cover_up_layer' onClick={() => { shutdown() }}></div>
            <div className='count'>
              <div className='control_button' onClick={() => { shutdown() }}><Button type="default" shape="round" icon={<CloseCircleOutlined />}></Button></div>
              <div className='middle'>
                <div className='title'>标题</div>
                <div className='middle-video'>
                  <iframe width="1280" height="720" src="https://www.youtube.com/embed/PZTFvuaW6XI" title="音乐治愈心脏和血管🌿 平静的音乐恢复神经系统，放松" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default React.forwardRef(Index);


