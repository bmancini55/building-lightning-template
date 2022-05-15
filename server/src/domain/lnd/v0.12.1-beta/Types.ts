/* eslint-disable @typescript-eslint/no-namespace */
export namespace Lnd {
    export interface Info {
        uris: string[];
        chains: Chain[];
        features: FeatureMap;
        identity_pubkey: string;
        alias: string;
        num_pending_channels: number;
        num_active_channels: number;
        num_peers: number;
        block_height: number;
        block_hash: string;
        synced_to_chain: boolean;
        testnet: boolean;
        best_header_timestamp: string;
        version: string;
        num_inactive_channels: number;
        color: number;
        synced_to_graph: boolean;
        commit_hash: string;
    }

    export interface Chain {
        chain: string;
        network: string;
    }

    export interface Graph {
        // Exercise: define the `nodes` and `edges` properties in this interface.
        // These arrays of LightningNode and ChannelEdge objects.
        replace_me_with_actual_properties: any;
    }

    export interface LightningNode {
        last_update: number;
        pub_key: string;
        alias: string;
        addresses: NodeAddress[];
        color: string;
        features: FeatureMap;
    }

    export interface FeatureMap {
        [key: string]: Feature;
    }

    export interface Feature {
        name: string;
        is_required: boolean;
        is_known: boolean;
    }

    export interface NodeAddress {
        network: string;
        addr: string;
    }

    export interface ChannelEdge {
        channel_id: string;
        chan_point: string;
        last_update: string;
        node1_pub: string;
        node2_pub: string;
        capacity: string;
        node1_policy: RoutingPolicy;
        node2_policy: RoutingPolicy;
    }

    export interface RoutingPolicy {
        time_lock_delta: number;
        min_htlc: string;
        fee_base_msat: string;
        fee_rate_milli_msat: string;
        disabled: boolean;
        max_htlc_msat: string;
        last_update: number;
    }

    export interface GraphUpdate {
        result: {
            node_updates: NodeUpdate[];
            channel_updates: ChannelEdgeUpdate[];
            closed_chans: ClosedChannelUpdate[];
        };
    }

    export interface NodeUpdate {
        identity_key: string;
        global_features: number;
        alias: string;
        color: string;
        node_addresses: NodeAddress[];
        features: FeatureMap;
    }

    export interface ChannelEdgeUpdate {
        chan_id: string;
        chan_point: ChannelPoint;
        capacity: string;
        routing_policy: RoutingPolicy;
        advertising_node: string;
        connecting_node: string;
    }

    export interface ChannelPoint {
        funding_txid_bytes: string;
        funding_txid_str: string;
        output_index: number;
    }

    export interface ClosedChannelUpdate {
        chan_id: string;
        capacity: string;
        closed_height: number;
        chan_point: ChannelPoint;
    }
}