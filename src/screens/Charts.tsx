import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {ScrollView} from 'react-native-gesture-handler';
const Charts = ({navigation}: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text>Regular Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text>Bar Chart</Text>
        <BarChart
          data={data2}
          width={Dimensions.get('window').width}
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
        <Text>Progress Chart</Text>
        <ProgressChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig2}
          hideLegend={false}
        />
        <Text>Pie Chart</Text>
        <PieChart
          data={data3}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
        />
        <Text>Contribution Graph</Text>
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2017-04-01')}
          numDays={105}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
        />
        <Text>Stacked Bar Chart</Text>
        <StackedBarChart
          data={data4}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={chartConfig}
        />
      </View>
    </ScrollView>
  );
};

export default Charts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
const chartConfig = {
  backgroundColor: '#e26aff',
  backgroundGradientFrom: '#e26aff',
  backgroundGradientTo: '#a26afa',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 10,
  },
};
const chartConfig2 = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};
const data = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.4, 0.6, 0.8],
};
const data2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const data3 = [
  {
    name: 'Seoul',
    population: 21500000,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Toronto',
    population: 2800000,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Beijing',
    population: 527612,
    color: 'red',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'New York',
    population: 8538000,
    color: '#fa1fff',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Moscow',
    population: 11920000,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];
const commitsData = [
  {date: '2017-01-02', tooltipDataAttrs: 'test', count: 1},
  {date: '2017-01-03', tooltipDataAttrs: 'test', count: 2},
  {date: '2017-01-04', tooltipDataAttrs: 'test', count: 3},
  {date: '2017-01-05', tooltipDataAttrs: 'test', count: 4},
  {date: '2017-01-06', tooltipDataAttrs: 'test', count: 5},
  {date: '2017-01-30', tooltipDataAttrs: 'test', count: 2},
  {date: '2017-01-31', tooltipDataAttrs: 'test', count: 3},
  {date: '2017-03-01', tooltipDataAttrs: 'test', count: 2},
  {date: '2017-04-02', tooltipDataAttrs: 'test', count: 4},
  {date: '2017-03-05', tooltipDataAttrs: 'test', count: 2},
  {date: '2017-02-30', tooltipDataAttrs: 'test', count: 4},
];

const data4 = {
  labels: ['Test1', 'Test2'],
  legend: ['L1', 'L2', 'L3'],
  data: [
    [60, 60, 60],
    [30, 30, 60],
  ],
  barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};
