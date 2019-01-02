import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import './recommend.scss';
class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
    this.onScrolltoupper = this.onScrolltoupper.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  onScrolltoupper() {
    console.log('onScrolltoupper');
  }
  onScroll() {
    console.log('onScroll');
  }
  render() {
    return (
      <ScrollView
        className="scroll-box"
        scrollY
        scrollWithAnimation
        scrollTop="0"
        lowerThreshold="20"
        upperThreshold="20"
        onScrolltoupper={this.onScrolltoupper}
        onScroll={this.onScroll}
      >
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是推荐</View>
        <View className="fragment">这是底部元素</View>
      </ScrollView>
    );
  }
}

export default Recommend;
