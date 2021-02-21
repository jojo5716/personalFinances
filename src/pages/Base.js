import React from 'react';


export default class Base extends React.Component {
    redirectTo(pageName) {
        this.props.navigation.navigate(pageName);    
    }
}

  