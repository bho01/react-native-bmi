var React = require('react-native');
var {
    StyleSheet,
    View,
    Text,
    } = React;
var Register = React.createClass({
    render: function() {
        return (
          <View style={styles.container}>
                <Text style={styles.text}>My value: {this.props.myElement}</Text>
                <Text>any text</Text>
            </View>
        );
    }
})
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
module.exports = nextPage;