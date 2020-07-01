import { Config } from './types';

const configs: Config[] = [
    {
        platform: process.env.CHAIN_PLATFORM || 'tezos',
        network: process.env.CHAIN_NETWORK || 'mainnet',
        displayName: 'Node Network',
        url: process.env.CONSEIL_URL|| 'conseil.server',
        apiKey: process.env.CONSEIL_KEY || 'conseil',
        nodeUrl: process.env.NODE_URL || 'tezos.server',
        entities: ['blocks', 'operations', 'accounts', 'bakers', 'governance'],
        hiddenEntities: ['originated_account_maps', 'big_maps', 'big_map_contents']
    }
]

export default configs;
