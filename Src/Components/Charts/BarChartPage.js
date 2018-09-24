import React from 'react'
import { LinearGradient, Stop, Defs, Text } from 'react-native-svg'
import { BarChart, Grid } from 'react-native-svg-charts'
import { View, Text as RNText } from 'react-native'

class BarChartPage extends React.PureComponent {
  render() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
    const data1 = [14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8].map(value => ({ value }))
    const data2 = [24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84].map(value => ({ value }))

    const barData = [
      {
        data: data1,
        svg: {
          fill: 'rgb(134, 65, 244)'
        }
      },
      {
        data: data2
      }
    ]
    const CUT_OFF = 20

    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => {
        return (
          <Text
            key={index}
            x={x(index) + bandwidth / 2}
            y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
            fontSize={14}
            fill={value >= CUT_OFF ? 'white' : 'black'}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}
          >
            {value}
          </Text>
        )
      })
    const Gradient = ({ data }) =>
      data.map((value, index) => {
        console.log('BADWIDTH@@@@', value, 'Index@@@@ ', index)
        return value >= 0 ? (
          <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
              <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
              <Stop offset={'100%'} stopColor={'red'} />
            </LinearGradient>
          </Defs>
        ) : (
          <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
              <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
              <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
            </LinearGradient>
          </Defs>
        )
      })

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
          <RNText style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>Bar Chart Gradient with Text</RNText>
        </View>
        <BarChart
          style={{ height: 200 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            strokeWidth: 2,
            fill: 'url(#gradient)'
          }}
        >
          <Grid />
          <Labels />
          <Gradient />
        </BarChart>
        <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
          <RNText style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>Bar Chart Group</RNText>
        </View>
        <BarChart
          style={{ height: 200 }}
          data={barData}
          yAccessor={({ item }) => item.value}
          svg={{
            fill: 'green'
          }}
          contentInset={{ top: 30, bottom: 30 }}
        >
          <Grid />
        </BarChart>
      </View>
    )
  }
}

export default BarChartPage
