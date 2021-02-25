import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';

export default (props) => {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'close' : 'plus'}
          actions={[
            {
              icon: 'plus',
              label: 'Ir a configuración',
              onPress: () => props.redirectTo('Settings'),
            },
            {
              icon: 'plus',
              label: 'Agregar gasto',
              onPress: () => console.log('Pressed'),
            },
            {
              icon: 'anchor',
              label: 'Agregar ingreso',
              onPress: () => console.log('Pressed'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};
