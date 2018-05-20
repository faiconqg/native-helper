import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { Theme } from '@faicon/native-ui'

export default (tabs, configuration = {}, Iconclass = Ionicons) =>
  TabNavigator(
    tabs,
    Object.assign(
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: options => {
            const { routeName } = navigation.state
            let iconName = tabs[routeName].icon
            if (!options.focused ) {
              if (configuration.autoOutline) {
                iconName += '-outline'
              }
            } else {
              const iconSelected = tabs[routeName].iconSelected
              if (iconSelected) {
                iconName += iconSelected
              }
            }

            return (
              <Iconclass
                name={iconName}
                size={28}
                style={{ marginBottom: -3 }}
                color={
                  options.focused ? Theme.colors.accent : Theme.colors.tabIconDefault
                }
              />
            )
          }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false
      },
      configuration
    )
  )
