import React from 'react';

// 轮播li
class Li extends React.Component {
  static defaultProps = {
    item: {}, // 每个item
  }

  render() {
    const { item: { title, address, time, key } } = this.props;

    return (
      <li style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '50px',
        lineHeight: '50px',
        fontSize: '14px',
        whiteSpace: 'nowrap',
      }}>
        <a href={title} style={{ color: '#3C99D8', width: '400px' }}>{title}</a>
        <span style={{ width: '202px', fontStyle: 'normal', color: 'rgba(0,0,0,0.60)' }}>{address}</span>
        <span style={{ width: '100px', color: 'rgba(31,56,88,0.60)' }}>{time}</span>
      </li>
    );
  }
};

let timer = null;

// 轮播图
class RotaryPlantingMap extends React.Component {
  static defaultProps = {
    list: [], // 轮播图list
  }

  constructor(props) {
    super(props);
    const { list } = this.props;
    this.state = {
      top: 0, // 滚动位置
      arr: list.concat(list),
      refreshTop: (list.length - 1) * -50,
    }
  }

  componentDidMount() {
    this.handleMapRun();
  }

  /**
   * @method 轮播
   */
  handleMapRun = () => {
    const { top, refreshTop } = this.state;
    const { list } = this.props;
    if (timer) clearInterval(timer);
    if (top > refreshTop) {
      this.setState({ top: top - 1 });
    } else {
      this.setState({ top: 50 });
    }
    timer = setInterval(this.handleMapRun, 10);
  }

  /**
   * @method 停止轮播
   */
  handleMapUnRun = () => {
    if (timer) clearInterval(timer);
  }

  render() {
    const { top, arr } = this.state;
    const { list } = this.props;

    return (
      <div style={{ width: '850px', height: '300px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          height: '50px',
          width: '822px',
          padding: '0 14px',
          lineHeight: '50px',
          borderBottom: '1px solid rgba(31, 56, 88, 0.06)',
          fontSize: '14px',
          zIndex: 2,
          background: 'white',
          position: 'absolute',
        }}>
          最新职位
          <a
            style={{
              float: 'right',
              color: 'rgba(31,56,88,0.60)',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            更多
          </a>
        </div>
        <ul
          onMouseOver={() => this.handleMapUnRun()}
          onMouseOut={() => this.handleMapRun()}
          style={{
            position: 'absolute',
            top: top,
            width: '850px',
          }}
        >
          {arr.map(item => <Li key={item.key} item={item} />)}
        </ul>
      </div>
    );
  }
}

export default RotaryPlantingMap;
