/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var PUZZLE_DATA = [
  {date: 1430332677984, title: 'Burning Island Puzzle', text: 'A man is stranded on an island covered in forest. One day, when the wind is blowing from the west, lightning strikes the west end of the island and sets fire to the forest. The fire is very violent, burning everything in its path, and without intervention the fire will burn the whole island, killing the man in the process. There are cliffs around the island, so he cannot jump off. How can the man survive the fire? (There are no buckets or any other means to put out the fire).', solution: 'The man picks up a piece of wood and lights it from the fire on the west end of the island. He then quickly carries it near the east end of he island and starts a new fire. The wind will cause that fire to burn out the eastern end and he can then shelter in the burnt area. The man survives the fire, but dies of starvation, with all the food in the forest burnt.'},
];

var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

PUZZLE_DATA[0].title

var prettyDate = function (unixtime) {
  var date = new Date(unixtime)
  var mm = MONTHS[date.getMonth()];
  var dd = date.getDate().toString();
  var yyyy = date.getFullYear().toString();

  return mm + ' ' + dd + ', ' + yyyy;
};

var DailyPuzzle = React.createClass({
  getInitialState: function() {
    return {isShowingSolution: false};
  },
  render: function() {
    if (this.state.isShowingSolution) {
      return (<SolutionView onQuestionPress={() => {this.setState({isShowingSolution: !this.state.isShowingSolution})}}/>);
    } else {
      return (<QuestionView onSolutionPress={() => {this.setState({isShowingSolution: !this.state.isShowingSolution})}} />);
    }
  }
});

var QuestionView = React.createClass({
  render: function() {
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {PUZZLE_DATA[0].title}
          </Text>
          <Text style={styles.date}>
            {prettyDate(PUZZLE_DATA[0].date)}
          </Text>
          <Text style={styles.text}>
            {PUZZLE_DATA[0].text}
          </Text>
        </View>
        <TouchableOpacity onPress={this.props.onSolutionPress}>
          <View style={styles.footer}>
            <Text style={styles.instructions}>
              {'SOLUTION'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var SolutionView = React.createClass({
  render: function() {
    return (
      <View style={styles.outer}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {PUZZLE_DATA[0].title}
          </Text>
          <Text style={styles.date}>
            {prettyDate(PUZZLE_DATA[0].date)}
          </Text>
          <Text style={styles.text}>
            {PUZZLE_DATA[0].solution}
          </Text>
        </View>
        <TouchableOpacity onPress={this.props.onQuestionPress}>
          <View style={styles.footer}>
            <Text style={styles.instructions}>
              {'QUESTION'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 20,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#CFCFCF',
    padding: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    textAlign: 'left',
    color: '#CFCFCF',
    marginBottom: 20,
  },
  text: {
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
  },
  instructions: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

AppRegistry.registerComponent('DailyPuzzle', () => DailyPuzzle);
