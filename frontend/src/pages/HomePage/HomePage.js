import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Modal, TextInput, } from 'react-native';
import { IconButton, Button, Text, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MainTabBar from '../../components/MainTabBar/MainTabBar';
import Messages from '../Messages/Messages';
import HomePageFilter from '../HomePageFilter/HomePageFilter';
import EditProfile from '../EditProfile/EditProfile';
import MyWallet from '../MyWallet/MyWallet';
import Help from '../Help/Help';
import Login from '../Auth/Login';
import BecomeALocal from '../BecomeALocal/BecomeALocal';


const HomePage = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    var [travelersCount, setTravelersCount] = useState(1);

    const subtractTravelersCount = () => {
        if (travelersCount > 1) {
            travelersCount = travelersCount - 1;
        }
       
        setTravelersCount(travelersCount);
    };

    const addTravelersCount = () => {
        if (travelersCount < 16) {
            travelersCount = travelersCount + 1;
        }
        setTravelersCount(travelersCount);
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const [isFilterModalVisible, setFilterModalVisible] = useState(false);

    const toggleFilterModal = () => {
        setFilterModalVisible(!isFilterModalVisible);
    };


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleSearchPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Filter

      };

    const handleEditProfilePress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Edit Profile Page
        navigation.navigate(EditProfile);
      };

      const handleBecomeALocalPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Become A Local Page
        navigation.navigate(BecomeALocal);
      };
      const handleMyWalletPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to My Wallet Page
        navigation.navigate(MyWallet);
      };
      const handleHelpPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Help Page
        navigation.navigate(Help);
      };
      const handleSignOutPress = () => {
        // Close Modal
        setModalVisible(!isModalVisible);
        // Navigate to Edit Profile Page
        navigation.navigate(Login);
      };

    return (
        <SafeAreaView style={{ backgroundColor: '#071930', flex: 1, alignItems: 'center' }}>
            <View style={{ backgroundColor: '#071930', zIndex: '0', alignItems: 'center', flex: 3 }}>
                {/*/ Actual Home Page Content */}
                <View style={{ zIndex: '1', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <IconButton 
                    onPress={toggleModal}
                    icon='cog' iconColor='#000000' 
                    backgroundColor='#FFFFFF' 
                    size={34} />
                    <TouchableOpacity 
                    onPress={toggleFilterModal}
                    style={{ marginHorizontal: '5%' }}>
                        <View style={{ backgroundColor: '#FFFFFF', borderRadius: 20, alignItems: 'center', justifyContent: 'center', paddingHorizontal: '12%', paddingVertical: '6%' }}>
                            <Text style={styles.text1}>Paris, France</Text>
                        </View>
                    </TouchableOpacity>
                    <IconButton 
                    onPress={() => navigation.navigate(Messages)} 
                    icon='email' iconColor='#000000' 
                    backgroundColor='#FFFFFF' 
                    size={34} />
                </View>

                {/*/ Settings Modal */}
                <Modal visible={isModalVisible} animationType="fade" >
                    <SafeAreaView  backgroundColor='#071930'>
                    <View backgroundColor='#071930' height='100%'>
                    <IconButton 
                        onPress={toggleModal}
                        icon='window-close' iconColor='#000000' 
                        backgroundColor='#FFFFFF' 
                        size={32}
                        style={{ marginLeft: '6%'}} />
                        
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '4%'}}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '3.6%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleEditProfilePress}  >
                                <Image source={require('../../assets/profileUser.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '3.6%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleBecomeALocalPress}>
                                <Image source={require('../../assets/write.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>Become A Local</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                            <TouchableOpacity style={{ backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '3.6%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleMyWalletPress}>
                                <Image source={require('../../assets/dollar.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>My Wallet</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ alignSelf: 'center', width: '86%', paddingTop: '3%'}}>
                            <TouchableOpacity style={{  backgroundColor: '#FFFFFF', alignItems: 'center', paddingVertical: '3.6%', borderRadius: 50, flexDirection: 'row', paddingHorizontal: '9%'}}
                            onPress={handleHelpPress}>
                                <Image source={require('../../assets/communication.png')} style={ styles.text15 }/>
                                <Text style={styles.text19}>Help</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleSignOutPress} style={{ backgroundColor: '#288FBB', width: '30%', borderRadius: 50, paddingVertical: '3.4%', marginTop: '12%', alignSelf: 'center', top: '36%' }}>
                            <Text style={ styles.text10}>Sign out</Text>
                        </TouchableOpacity>  
                    </View>
                    </SafeAreaView>
                </Modal>

                {/*/ FilterModal */}
                <Modal visible={isFilterModalVisible} animationType="fade">
                    <SafeAreaView  backgroundColor='#FFFFFF'>
                        <View backgroundColor='#FFFFFF' height='100%'>
                            <IconButton 
                            onPress={toggleFilterModal}
                            icon='window-close' iconColor='#000000' 
                            backgroundColor='#F5F5F5' 
                            size={32}
                            style={{ marginLeft: '6%'}} />

                            <Text style={styles.text17}>Where are you traveling?</Text>
                            <TextInput style={styles.input} placeholder="Paris, France" />
                                
                            <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '4%', paddingTop: '0.3%' }}/>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text23}>Travelers</Text>

                                <TouchableOpacity 
                                onPress={subtractTravelersCount}
                                style={{ 
                                backgroundColor: '#F5F5F5',
                                borderRadius: 100,
                                marginTop: '7%',
                                justifyContent: 'center',
                                paddingVertical:'2.8%',
                                paddingHorizontal: '2.8%',
                                marginLeft: '26%'
                                }}>
                                    <Image source={require('../../assets/minus.png')} style={ styles.text14 }/>
                                </TouchableOpacity>

                                <Text style={styles.text20}>{travelersCount}</Text>

                                <TouchableOpacity 
                                onPress={addTravelersCount}
                                style={{ 
                                backgroundColor: '#F5F5F5',
                                borderRadius: 100,
                                marginTop: '7%',
                                justifyContent: 'center',
                                paddingVertical:'2.8%',
                                paddingHorizontal: '2.8%',
                                }}>
                                    <Image source={require('../../assets/add.png')} style={ styles.text14 }/>
                                </TouchableOpacity>
                            </View>

                            <Divider style={{ width: '86%', alignSelf: 'center', marginTop: '7%', paddingTop: '0.3%' }}/>

                            <Text style={styles.text21}>When are you going?</Text>

                                <View style={{ backgroundColor: '#071930', width: '100%', height: '200%', position: 'absolute', top: '95%' }}>
                                </View>

                                <View style={{ position: 'absolute', top: '92%', alignSelf: 'center' }}>
                                <TouchableOpacity 
                                onPress={toggleFilterModal}
                                style={{ 
                                backgroundColor: '#E5B07A',
                                borderRadius: 50,
                                paddingVertical: '12%',
                                alignSelf: 'center',
                                zIndex: 5,
                                }}>
                                <Text style={styles.text22}>Search</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                    </SafeAreaView>
                </Modal>

            </View>
        </SafeAreaView>
    );
}

export default HomePage

const styles = StyleSheet.create({
    base1: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '16em'
    },
    text1: {
        fontWeight: '700',
        fontSize: '17em',
        position: 'relative',
    },
      text10: {
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '16em',
        alignSelf: 'center',
        justifyContent: 'center',
      },
          text14: {
            width: 18,
            height: 18,
            alignSelf: 'center',
          },
          text15: {
            width: 38,
            height: 38,
          },
          text16: {
            width: 25,
            height: 25,
            backgroundColor: '#FFFFFF',
            borderRadius: 100,
            padding: '4%'
          },
          text17: {
            fontWeight: '600',
            fontSize: '25em',
            paddingTop: '4%',
            paddingLeft: '7%',
            width: '100%'
          },
          text18: {
            fontWeight: '600',
            fontSize: '25em',
            paddingTop: '7%',
            paddingLeft: '7%',
          },  
          text19: {
            display: 'flex',
            color: '#000000',
            fontWeight: '600',
            fontSize: '16em',
            paddingLeft: '8%'
          },
          text20: {
            fontWeight: '500',
            fontSize: '28em',
            paddingTop: '6%',
            paddingHorizontal: '4%',
            alignSelf: 'center',
            color: '#288FBB'
          },
          text21: {
            fontWeight: '600',
            fontSize: '25em',
            paddingTop: '6%',
            paddingLeft: '7%',
            width: '100%'
          },
          text22: {
            display: 'flex',
            color: '#FFFFFF',
            fontWeight: '600',
            fontSize: '15em',
            paddingHorizontal: '9%',
          },
          text23: {
            fontWeight: '600',
            fontSize: '25em',
            paddingTop: '7%',
            paddingLeft: '7%',
            alignSelf: 'center'
          },  
          input: {
            backgroundColor: '#F5F5F5',
            padding: '5%',
            marginVertical: '6%',
            borderRadius: '100%',
            height: '10%',
            fontSize: '16.5em',
            fontWeight: '400',
            paddingLeft: '7%',
            width: '88%',
            height: '6.8%',
             alignSelf: 'center'
          },
});
