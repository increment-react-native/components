import React, {Component} from 'react';
import styles from './Style';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {BasicStyles, Color, Helper} from 'common';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
class GradientBorder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pages = this.props.pages;
    return (
      <View>
        <View
          style={{
            height: 60,
            marginBottom: 10,
            backgroundColor: Color.white
        }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.props.pages != null
              ? pages.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.props.onChange(index)}
                    style={{
                      borderRightWidth: 1,
                      borderRightColor: Color.lightGray,
                      width: width / this.props.pages.length,
                      borderBottomWidth: 6,
                      borderBottomColor:
                        this.props.activeIndex == index
                          ? Color.primary
                          : Color.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: BasicStyles.standardSubTitleFontSize,
                        color: this.props.activeIndex == index ? Color.black : Color.gray,
                        fontWeight:
                          this.props.activeIndex == index ? 'bold' : 'normal',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))
              : Helper.pagerMenu.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => this.props.onChange(index)}
                    style={{
                      width: width / 3,
                      borderBottomWidth: 2,
                      borderBottomColor:
                        this.props.activeIndex == index
                          ? Color.primary
                          : Color.lightGray,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: BasicStyles.standardSubTitleFontSize,
                        color:
                          this.props.activeIndex == index
                            ? Color.primary
                            : Color.black,
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default GradientBorder;
