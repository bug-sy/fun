import React, { Component } from 'react';
import { AppRegistry, StyleSheet, ScrollView , StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});
 
export default class test extends Component {


  componentDidMount() {
    getNotes((notes) => {
      this.setState({
        notes : notes
      }, () => {
        var reminderCount = 0;
        var archiveCount = 0 ;
        var pinnedCount = 0;
        var unpinCount = 0 ;
        Object.keys(this.state.notes).map((item) => {
          if(true){
          this.state.notes[item].reminderDate !== undefined
          ?
          reminderCount = ++reminderCount
          :
          null
          }
          {
            
          }
        
        })
        console.log("=========ReminderCount================")
          console.log("=========================")
          console.log("=========================")
          console.log("=========================")
          console.log(reminderCount)
          countOfNotesTypes(this.state.reminder,{remindCount:reminderCount})
      })
    })
  }

  render() {
    const chart_wh = 250
    const series = [123, 123, 123, 123, 123]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
 
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <Text style={styles.title}>Basic</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
          />
          {/* <Text style={styles.title}>Doughnut</Text>
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          /> */}
        </View>
      </ScrollView>
    );
  }
}
 
