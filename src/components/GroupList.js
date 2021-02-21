import React from 'react';
import { View } from 'react-native';
import { List, ProgressBar, Colors } from 'react-native-paper';


const GroupTitle = (props) => {
    return (
        <View>
            <List.Icon {...props} icon="folder" />
            <ProgressBar progress={0.3} color={Colors.red800} />
        </View>
    );
};

export default () => {
  return (
    <List.Section>
        <List.Accordion title="Comida" left={props => <GroupTitle {...props}/>}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
        </List.Accordion>
    </List.Section>
  );
}
