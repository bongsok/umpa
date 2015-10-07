var React = require('react');
var mui = require('material-ui');
var { Slider, Styles, Tab, Tabs } = require('material-ui');
var { Colors, Spacing, Typography } = mui.Styles;

var CardList = require('./card-list.jsx');
var FavoriteList = require('./favorite-list.jsx');

var Feed = React.createClass({
  loadContent: function () {
    // TODO: show data of content from server
    // this.setState({data: {content:{author:"", time:"", text:""}}});
  },

  componentDidMount: function () {
    this.loadContent();
  },

  getInitialState: function () {
    return {data:[]};
  },

  render: function() {
    var containerStyle = {
      paddingTop: Spacing.desktopKeylineIncrement,
      paddingBottom: 0,
      maxWidth: '650px',
      margin: '0 auto',
    };

    var inkBarStyle = {
      backgroundColor : Colors.yellow200,
    };

    var tabItemContainerStyle = {
      backgroundColor : Colors.grey900,
    };

    var tabStyle = {
      backgroundColor : Colors.grey200,
    };

    return (
      <div style={containerStyle}>
        <Tabs style={tabStyle} tabItemContainerStyle={tabItemContainerStyle} inkBarStyle={inkBarStyle} >
          <Tab label='NEW' >
            <CardList/>
          </Tab>
          <Tab label='HOT' >
            <FavoriteList/>
          </Tab>
          <Tab label='MY'>
            <FavoriteList/>
          </Tab>
        </Tabs>
      </div>
    );
  },
});

module.exports = Feed;
