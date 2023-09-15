import { Redirect, Stack } from 'expo-router'
import { View, Text } from 'react-native'

export default function Index() {
  const type = 'vendor'
  if (type == 'vendor') {
    return <Redirect href={'/vendor'} />
  }
  return <Redirect href={'/customer'} />
}
