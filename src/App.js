import React from 'react';
import {
  NAV_LIST
} from './constants/menu';
import {
  RotaryPlantingMap,
} from './component';
import './App.css';
import {
  mapList
} from './mock/data';
import alibaba_group from './static/images/alibaba_group.png';
import top_background from './static/images/top_background.png';
import aliyun from './static/images/aliyun.png';
// import qiyezhineng from '../scr/static/images/qiyezhineng.svg';

function App() {
  const { data: { list = [] } } = mapList;

  return (
    <div className="body">
      <head className="head">
        <ul className="nav">
          <img alt=" " src={alibaba_group} />
          {/* 小竖条 */}
          <i />
          <li className="nav-li">社招官网</li>
          {NAV_LIST.map((item) => {
            const { key, title, herf } = item;
            return <li className="nav-li" key={key}>
              <a herf={herf}><span>{title}</span></a>
            </li>
            ;
          })}
          <div className="login">
            欢迎来到阿里巴巴集团招聘！
            <a herf="https://passport.alibaba.com/login.htm?appName=hrjob&params=https%3A%2F%2Fjob.alibaba.com%2F%2Fzhaopin%2Findex.html">登录</a>
            &nbsp;|&nbsp;
            <a herf="http://member1.taobao.com/member/newbie.html">注册</a>
          </div>
        </ul>
      </head>
      <main className="main">
        <div className="main-top">
          {/* 背景图片 */}
          <img alt=" " src={top_background} />
          <div className="main-bg" />
          <div className="main-center">
            {['If not now, when?', 'If not me, who?', '此时此刻，非我莫属！'].map(type => <p key={type}>{type}</p>)}
            <div className="search-bg">
              <input
                placeholder="请输入职位关键字"
              />
              <button>搜索</button>
            </div>
            <ul>
              <li>热门搜索：</li>
              {['JAVA', 'IOS', '数据', '安全', '搜索', '算法', '运营', '视觉', '交互', '前端'].map((type) => {
                return (
                  <li><a>{type}</a></li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="main-bottom">
          <RotaryPlantingMap list={list}/>
          <div className="main-bottom-image">
            <div><img alt=" " src={aliyun} /></div>
            <div><img alt=" " src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" /></div>
          </div>
        </div>
      </main>
      <footer><span>阿里巴巴集团 Copyright ©1999-2019 版权所有</span></footer>
    </div>
  );
}

export default App;
