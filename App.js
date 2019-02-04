import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import Data from './listings'
import Icon from 'react-native-vector-icons/MaterialIcons' 
import { createAppContainer, createDrawerNavigator } from 'react-navigation' 



export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

class Home extends React.Component {

  navigateListing = () => {
    this.props.navigation.navigate('Listing')
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.icons}>
        <Icon 
        name='menu'
        size={32}
        />
        <Icon 
        name='search'
        size={32}
        />
      </View>
        <TouchableOpacity style={styles.promotion} onPress={this.navigateListing}>
          <Text style={styles.biggerText}>
            Promotional Ad Listing
          </Text>
        </TouchableOpacity>
        <ScrollView>
          {
            Data.map((ad, i) => {
              return (
                <TouchableOpacity style={styles.ads} key={i} onPress={this.navigateListing}>
                  <Text style={styles.bigText}>
                    {ad.company}
                  </Text>
                  <Text>
                    {`$${ad.offer} Per Mile`}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    );
  }
}

class Listing extends React.Component {

  navigateMyScreen = () => {
    this.props.navigation.navigate('MyScreen')
  }

  render() {
    return (
      <View style={{paddingTop: 40}}>
        <View style={styles.icons}>
          <Icon 
          name='menu'
          size={32}
          />
          <Icon 
          name='search'
          size={32}
          />
        </View>
        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: '10%'}}>
          <Image source={require('./walmart.jpeg')} style={{width: 200, height: 50}}/>
          <TouchableOpacity style={{width: 100, borderWidth: 1, borderColor: 'black', padding: 8, borderRadius: 5}} onPress={this.navigateMyScreen}>
            <Text style={{fontSize: 16, textAlign: 'center'}}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Text style={{marginLeft: '5%', fontSize: 24, textAlign: 'center'}}>
            Rate: $0.50 Per Mile
          </Text>
          <Image source={require('./map.png')} style={{width: '90%', height: 300, marginLeft: '5%', marginTop: '5%', borderRadius: 5}}/>
          <Image source={require('./walmartAd.jpg')} style={{width: '90%', height: 200, marginLeft: '5%', marginTop: '5%', marginBottom: '40%', borderRadius: 5}}/>
        </ScrollView>
      </View>
    );
  }
}

class MyScreen extends React.Component {
  state = {
    distance: 30
  }
  render() {
    return (
      <View style={{paddingTop: 40}}>
        <View style={styles.icons}>
          <Icon 
          name='menu'
          size={32}
          />
          <Icon 
          name='search'
          size={32}
          />
        </View>
        <View>
          <Image source={require('./walmartAd.jpg')} style={{width: '90%', height: 200, marginLeft: '5%', marginTop: '10%', borderWidth: 10, borderColor: 'black'}}/>
          <Text style={{fontSize: 24}}>
            Rate: $0.50 Per Mile
          </Text>
          <Text>
            Distance: {this.state.distance} Miles
          </Text>
          <Text>
            Total: ${this.state.distance * 0.5}
          </Text>
        </View>
      </View>
    );
  }
}



const AppDrawerNavigator = createDrawerNavigator({
  MyScreen,
  Home,
  Listing,
})

const AppContainer = createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 40
  },
  ads: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 24,
    width: '90%',
    marginLeft: '5%',
    marginBottom: '3%',
    borderRadius: 5
  },
  promotion: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 24,
    width: '90%',
    marginLeft: '5%',
    marginBottom: '3%',
    borderRadius: 5,
  },
  bigText: {
    fontSize: 24
  },
  biggerText: {
    fontSize: 32,
    textAlign: 'center'
  },
  icons: {
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    justifyContent: 'space-between',
    marginBottom: '1%'
  }
});
