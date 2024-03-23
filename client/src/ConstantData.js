const ConstantData = {
    urlPath: {
        search: { curr: 'search', next: 'onsearch', nextName: 'on_search' },
        on_search: { curr: 'onsearch', next: 'select', nextName: 'select' },
        select: { curr: 'select', next: 'onselect', nextName: 'on_select' },
        on_select: { curr: 'onselect', next: 'init', nextName: 'init' },
        init: { curr: 'init', next: 'oninit', nextName: 'on_init' },
        on_init: { curr: 'oninit', next: 'confirm', nextName: 'confirm' },
        confirm: { curr: 'confirm', next: 'onconfirm', nextName: 'on_confirm' },
        on_confirm: { curr: 'onconfirm', next: 'status', nextName: 'status' },
        status: { curr: 'status', next: 'onstatus', nextName: 'on_status' },
        on_status: { curr: 'onstatus', next: 'track', nextName: 'track' },
        track: { curr: 'track', next: 'ontrack', nextName: 'on_track' },
        on_track: { curr: 'ontrack', next: 'update', nextName: 'update' },
        update: { curr: 'update', next: 'onupdate', nextName: 'on_update' },
        on_update: { curr: 'onupdate', next: 'cancel', nextName: 'cancel' },
        cancel: { curr: 'cancel', next: 'oncancel', nextName: 'on_cancel' },
        on_cancel: { curr: 'oncancel', next: 'rating', nextName: 'rating' },
        rating: { curr: 'rating', next: 'onrating', nextName: 'on_rating' },
        on_rating: { curr: 'onrating', next: 'support', nextName: 'support' },
        support: { curr: 'support', next: 'onsupport', nextName: 'on_support' },
        on_support: { curr: 'onsupport', next: 'graph' }
    },
    info: {
        home: {
            head: 'Basic Information',
            list: [
                'Please provide information about your organisation and role in the network',
                'This form is to be completed by the participants involved in the Retail Domain',
            ]
        },
        search: {
            head: 'Use Cases for search',
            list: [
                'The Search API allows buyers to discover catalogs published by the providers on the network.',
                'BAP: select choices that you would enable to search for catalogs',
                'BPP: select choices that you want BAP to enable to search for catalogs',
                'Use case limit = 3 | Use cases can contain multiple parameters',
            ]
        },
        on_search: {
            head: 'Use Cases for on_search',
            list: [
                'The on_search API allows sellers to respond to a search call with a catalog matching the search query',
                'BAP: select choices that you want BPP to enable to view catalogs',
                'BPP: select choices that you would enable to publish catalogs',
                'Use case limit = 3 | Use cases can contain multiple parameters',
            ]
        },
        select: {
            head: 'Use Cases for select',
            list: [
                'The select API allows buyers to build a cart with items of their choice from the catalog received in the on_search response.',
                'BAP: select choices that you would enable to be added to cart',
                'BPP: select choices that you want BAP to enable to be added to cart',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_select: {
            head: 'Use case for on_select',
            list: [
                'The on_select API allows seller to calculate and provide a quote for the items added in the buyers cart',
                'BAP: select choices that you want BPP to enable to view in a quote',
                'BPP: select choices that you would enable to provide in a quote',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        init: {
            head: 'Use case for init',
            list: [
                'The init API allows the buyer to send the details that would be used to generate an invoice for the order',
                'BAP: select choices that you would enable for an invoice',
                'BPP: select choices that you want BAP to enable for an invoice',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_init: {
            head: 'Use case for on_init',
            list: [
                'The on_init API allows the seller to transmit the updated quote, payment terms and various policies that relate to the order',
                'BAP: select choices that you want BPP to enable to receive as policies',
                'BPP: select choices that you would enable to send as policies',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        confirm: {
            head: 'Use cases for Confirm',
            list: [
                'The confirm API allows the buyer to select and proceed with the preferred mode of payment and create an order.',
                'BAP: select choices that you would enable to confirm order',
                'BPP: select choices that you want BAP to enable to confirm order',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_confirm: {
            head: 'Use cases for on_confirm',
            list: [
                'The on_confirm API allows the seller to validate the payment (or promise of payment) and confirm the order, hence creating a commercial consideration.',
                'BAP: select choices that you want BPP to enable to view confirmed order',
                'BPP: select choices that you would enable to send confirmed order',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        status: {
            head: 'Use cases for Status',
            list: [
                'The status API allows the buyer to determine the latest fulfilment status of an order',
                'BAP: select choices that you would enable to check order status',
                'BPP: select choices that you want BAP to enable to check order status',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_status: {
            head: 'Use cases for on_status',
            list: [
                'The on_status API allows the seller to return the latest fulfilment status of an order',
                'BAP: select choices that you want BPP to enable to view order status',
                'BPP: select choices that you would enable to send order status',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        track: {
            head: 'Use case for track',
            list: [
                'The track API allows the buyer to identify the current location of the package when it is being delivered',
                'BAP: select choices that you would enable to track package',
                'BPP: select choices that you want BAP to enable to track package',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_track: {
            head: 'Use cases for on_track',
            list: [
                'The on_track API allows the seller to provide information on the latest location of the package when it is being delivered',
                'BAP: select choices that you want BPP to enable to view tracking details',
                'BPP: select choices that you would enable to send tracking details',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        update: {
            head: 'Use cases for update',
            list: [
                'The update API allows the buyer to make modifications to an active order, subject to the order policies of the seller',
                'BAP: select choices that you would enable to update an order',
                'BPP: select choices that you want BAP to enable to update an order',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_update: {
            head: 'Use cases for on_update',
            list: [
                'The on_update API allows the seller to accept the modifications to the order and respond back with updated order as well as additional payment terms, where required',
                'BAP: select choices that you want BPP to enable to view updated order and terms',
                'BPP: select choices that you would enable to send updated order and terms',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        cancel: {
            head: 'Use cases for cancel',
            list: [
                'The cancel API allows the buyer to cancel an active order, subject to the cancellation policies of the seller',
                'BAP: select choices that you would enable to cancel an order',
                'BPP: select choices that you want BAP to enable to cancel an order',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_cancel: {
            head: 'Use cases for on_cancel',
            list: [
                'The on_cancel API allows the seller to accept the cancellation of an order and respond back with the cancellation terms if required.',
                'BAP: select choices that you want BPP to enable to view a cancelled order',
                'BPP: select choices that you would enable to send a cancelled order',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        rating: {
            head: 'Use cases for Rating',
            list: [
                'The rating API allows a buyer to rate various entities of a completed order',
                'BAP: select choices that you would enable to provide a rating',
                'BPP: select choices that you want BAP to enable to provide a rating',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_rating: {
            head: 'Use cases for on_rating',
            list: [
                'The on_rating API allows sellers to respond to the ratings received from a buyer',
                'BAP: select choices that you want BPP to enable to view response to submitted ratings',
                'BPP: select choices that you would enable to send response to submitted rating',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        support: {
            head: 'Use cases for Support',
            list: [
                'The support API allows a buyer to request for a means to connect with the seller (or seller platform) in order to clarify queries or raise issues with a specific order',
                'BAP: select choices that you would enable to initiate a support request',
                'BPP: select choices that you want BAP to enable to initiate a support request',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        on_support: {
            head: 'Use cases for on_support',
            list: [
                'The on_support API allows a seller to respond with the relevant information to connect with the buyer',
                'BAP: select choices that you want BPP to enable to respond to a support request',
                'BPP: select choices that you would enable to respond to a support request',
                'Use case limit = 3 | Use cases may contain multiple parameters',
            ]
        },
        graph: {
            head: 'Graphical representation of the transaction Flows',
            list: [
                'Based on your selections, the possible transaction flows are depicted below',
                'Click on (x) to remove a particular node in the transaction flow',
                'Export the final flows using the options provided (Export Image, Export JSON).',
                'Share a copy of both exported files to ondc@qcin.org'
            ]
        }


    }

}

export default ConstantData;