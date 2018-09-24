import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { G } from 'react-native-svg'
import { Text } from 'react-native-svg'
import { View, Text as RNText } from 'react-native'
class PieChartPage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      labelValue: 0
    }
  }
  onDataValue(data) {
    this.setState({
      labelValue: data.amount
    })
  }
  render() {
    const pieChartData = [
      {
        key: 1,
        amount: 50,
        svg: { fill: 'hotpink' }
      },
      {
        key: 2,
        amount: 50,
        svg: { fill: 'green' }
      },
      {
        key: 3,
        amount: 40,
        svg: { fill: 'black' }
      },
      {
        key: 4,
        amount: 75,
        svg: { fill: 'blue' }
      },
      {
        key: 5,
        amount: 35,
        svg: { fill: 'red' }
      },
      {
        key: 6,
        amount: 65,
        svg: { fill: 'orange' }
      }
    ]

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice
        return (
          <G onPress={this.onDataValue.bind(this, data)}>
            <Text key={index} x={pieCentroid[0]} y={pieCentroid[1]} fill={'white'} textAnchor={'middle'} alignmentBaseline={'middle'} fontSize={24} stroke={'black'} strokeWidth={0.2}>
              {data.amount}
            </Text>
          </G>
        )
      })
    }

    return (
      <View style={{ flex: 1 }}>
        <PieChart style={{ height: 200 }} valueAccessor={({ item }) => item.amount} data={pieChartData} spacing={0} outerRadius={'95%'}>
          <Labels />
        </PieChart>
        <RNText style={{ textAlign: 'center', fontSize: 16, fontWeight: '700' }}>Value:{this.state.labelValue}</RNText>
      </View>
    )
  }
}

export default PieChartPage
