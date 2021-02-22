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

const DETAIL_SALARY = {
    salary: {
        label: 'Salario mensual',
        inputProps: {
            keyboardType: 'numeric',
        },
    },
};

export default {
    CREATE,
    DETAIL_SALARY,
};