import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { AtTabBar } from 'taro-ui';
import './footer.scss';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      tabList: [
        { title: '首页', iconType: 'home', text: 'new' },
        { title: '学习', iconType: 'folder' , text: '100', max: '99' },
        { title: '我的', iconType: 'user'},
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(current) {
    this.setState({ current });
  }
  render() {
    const { tabList, current } = this.state;
    return <AtTabBar iconSize={18} fontSize={11} className="footer-box" fixed tabList={tabList} onClick={this.handleClick} current={current} />;
  }
}

export default Footer;
