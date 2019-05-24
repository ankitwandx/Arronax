export const defaultQueries = {
    blocks: {
        fields: ['level', 'timestamp', 'hash', 'baker', 'meta_cycle'],
        predicates: [],
        orderBy: [{ 'field': 'level', 'direction': 'desc' }],
        limit: 5000
    },
    operations: {
        fields: ['timestamp', 'block_level', 'source', 'destination', 'amount', 'kind', 'fee', 'operation_group_hash'],
        predicates: [{ 'field': 'kind', 'set': ['transaction'], 'operation': 'eq', 'inverse': false }],
        orderBy: [{ 'field': 'timestamp', 'direction': 'desc' }],
        limit: 5000
    },
    accounts: {
        fields: ['account_id', 'manager', 'delegate_value', 'balance'],
        predicates: [{ 'field': 'account_id', 'set': ['kt1'], 'operation': 'startsWith', 'inverse': true }],
        orderBy: [{ 'field': 'block_level', 'direction': 'desc' }],
        limit: 5000
    },
    rolls: {
        fields: [],
        predicates: [],
        orderBy: [{ field: 'block_level', direction: 'desc' }, { field: 'rolls', 'direction': 'desc' }],
        limit: 5000
    },
    fees: {
        fields: ['kind', 'timestamp', 'high', 'medium', 'low'],
        predicates: [{ 'field': 'kind', 'set': ['transaction', 'origination'], 'operation': 'in', 'inverse': true }],
        orderBy: [{ field: 'timestamp', direction: 'desc' }, { field: 'kind', 'direction': 'asc' }],
        limit: 5000
    }
};

export const CARDINALITY_NUMBER = 50;
