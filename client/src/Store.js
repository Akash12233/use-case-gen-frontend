import React, { useState } from "react";

const initialState = {
    apiFilterData: {
        search: [
            [
                { name: 'Item Name', checked: false },
                { name: 'Store Name', checked: false },
                { name: 'Pickup Location', checked: false },
                { name: 'Delivery Location', checked: false },
                { name: 'Fulfillment method', checked: false },
                { name: 'Item ID', checked: false },
                { name: 'Store ID', checked: false },
                { name: 'Item Price Range', checked: false },
                { name: 'Store Rating', checked: false },
                { name: 'Category name', checked: false },
                { name: 'Category ID', checked: false },
            ]
        ],
        on_search: [
            [
                { name: 'Return a List of Items', checked: false },
                { name: 'Return a List of Stores', checked: false },
                { name: 'Return List of Categories', checked: false },
            ]
        ],
        select: [
            [
                { name: 'Add / Remove Items', checked: false },
                { name: 'Add / Remove Offer', checked: false },
                { name: 'Add / Remove add-ons', checked: false },
            ]
        ],
        on_select: [
            [
                { name: 'Items', checked: false },
                { name: 'Offer', checked: false },
                { name: 'Add-ons', checked: false },
            ]
        ],
        init: [
            [
                { name: 'Billing Details', checked: false },
                { name: 'Fulfillment Details', checked: false },
            ]
        ],
        on_init: [
            [
                { name: 'Payment Terms', checked: false },
                { name: 'Cancellation Policy', checked: false },
                { name: 'Update Policy', checked: false },
                { name: 'Fulfillment Policy', checked: false },
                { name: 'Tracking Policy', checked: false },
                { name: 'Status Policy', checked: false },
            ]
        ],
        confirm: [
            [
                { name: 'Proof of Payment', checked: false },
                { name: 'Promise of Payment', checked: false },

            ]
        ],
        on_confirm: [
            [
                { name: 'Confirmed order with confirmed fulfillment', checked: false },
                { name: 'Confirmed order with promise of fulfillment', checked: false },
            ]
        ],
        status: [
            [
                { name: 'Order ID', checked: false },
            ]
        ],
        on_status: [
            [
                { name: 'Send order with latest fulfillment status update', checked: false },
                { name: 'Send order with multiple fulfillment status updates', checked: false },
            ]
        ],
        track: [
            [
                { name: 'Order ID', checked: false },
                { name: 'Fulfillment ID', checked: false },
                { name: 'Websocket URL', checked: false },
            ]
        ],
        on_track: [
            [
                { name: 'Return Tracking Link', checked: false },
                { name: 'Return polling API', checked: false },
                { name: 'Push updates to websocket', checked: false },
            ]
        ],
        update: [
            [
                { name: 'Items', checked: false },
                { name: 'Add-ons', checked: false },
                { name: 'Billing Address', checked: false },
                { name: 'Fulfillment', checked: false },
                { name: 'Payment', checked: false },
            ]
        ],
        on_update: [
            [
                { name: 'Return updated order with payment terms', checked: false },
                { name: 'Return updated order without any payment terms ', checked: false },
            ]
        ],
        cancel: [
            [
                { name: 'Order ID', checked: false },
                { name: 'Reason for cancellation', checked: false },
            ]
        ],
        on_cancel: [
            [
                { name: 'Cancelled Order with no terms', checked: false },
                { name: 'Cancelled Order with refund terms', checked: false },
            ]
        ],
        rating: [
            [
                { name: 'Order ID', checked: false },
                { name: 'item ID', checked: false },
                { name: 'Fulfillment ID', checked: false },
                { name: 'Store ID', checked: false },
                { name: 'Rating Value', checked: false },
                { name: 'Rating Reason', checked: false },
            ]
        ],
        on_rating: [
            [
                { name: 'Acknowledgement of rating', checked: false },
                { name: 'Feedback form', checked: false },
            ]
        ],
        support: [
            [
                { name: 'Order ID', checked: false },
                { name: 'item ID', checked: false },
                { name: 'Fulfillment ID', checked: false },
                { name: 'Store ID', checked: false },
                { name: 'Support Mode', checked: false },
                { name: 'Description of request', checked: false },
                { name: 'Phone number', checked: false },
            ]
        ],
        on_support: [
            [
                { name: 'Chat link', checked: false },
                { name: 'Phone Number', checked: false },
                { name: 'Email address', checked: false },
                { name: 'Callback', checked: false },
            ]
        ]
    },
    checkedData: {},
    userInfo: {
        user: '',
        name_org: '',
        name_role_timestamp: '',
        agree: false
    }
}

export const Context = React.createContext();

const Store = ({ children }) => {
    const [state, setState] = useState(initialState);
    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Store;
