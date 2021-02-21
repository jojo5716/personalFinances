const CREATE = {
    name: {
        label: 'Nombre de la cuenta',
        inputProps: {
            keyboardType: 'email-address',
        },
    },
    description: {
        label: 'Descripción (opcional)',
        inputProps: {
            multiline: true,
            numberOfLines: 4
        },
    },
};

export default {
    CREATE,
};