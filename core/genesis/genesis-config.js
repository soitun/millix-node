import config from '../config/config';

export const GENESIS_TRANSACTION_MAIN_NETWORK = '2VngVznbdiQ5tqfWqn2NMP8DijqCbLX79Gygo9yYRVFU6iN35h';
export const GENESIS_TRANSACTION_TEST_NETWORK = 'BbYAZLcxbx6adN3KwHZSTGjE6VpeDhiJ3ZPrXs6EMAGqDPfi5';
export const GENESIS_SHARD_ID_MAIN_NETWORK    = 'qGuUgMMVmaCvqrvoWG6zARjkrujGMpzJmpNhBgz1y3RjBG7ZR';
export const GENESIS_SHARD_ID_TEST_NETWORK    = 'AyAC3kjLtjM4vktAJ5Xq6mbXKjzEqXoSsmGhhgjnkXUvjtF2M';
export default {
    genesis_transaction: config.MODE_TEST_NETWORK ? GENESIS_TRANSACTION_TEST_NETWORK : GENESIS_TRANSACTION_MAIN_NETWORK,
    genesis_shard_id   : config.MODE_TEST_NETWORK ? GENESIS_SHARD_ID_TEST_NETWORK : GENESIS_SHARD_ID_MAIN_NETWORK
};
