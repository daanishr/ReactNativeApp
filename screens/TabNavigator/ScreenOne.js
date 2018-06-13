import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={{ fontSize: 20, padding: 10 }}>
                        INTRODUCTION :

            Allcargo Logistics and Industrial Parks is a part of the erstwhile Allcargo, the leader in integrated logistics services. We offer state-of-art warehousing and industrial real estate solution.

            With 14 strategically located parks across India already under various stages of development, we aim to take our nationwide warehousing footprint to 15 million sq.ft. by 2020. The purpose is to help clients overcome their warehousing challenges and make the most of our well-planned and easily accessible parks. Our lineage and strengths in asset management and development execution sets us apart. We are well poised to enable our clients minimize their logistics overheads.
                    </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
