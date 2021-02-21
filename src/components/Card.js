import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';


export default ({title, subtitle='', leftIcon, rightIcon, onPress}) => {
    return (
        <Card.Title
            title={title}
            subtitle={subtitle}
            left={(props) => <Avatar.Icon {...props} icon={leftIcon} />}
            right={(props) => <IconButton {...props} icon={rightIcon} onPress={onPress} />}
        />
    );
};
