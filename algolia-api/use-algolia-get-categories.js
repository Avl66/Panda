/*
Demo Hook to show case the algolia Integration with our Demo Page.
Will Going to Replace this Hook.

This Hook fetch data en_us product Data.
*/


import React from 'react'
import algoliasearch from 'algoliasearch'
import {
    CallEnum
} from '@algolia/transporter';
import {
    getAppOrigin
} from 'pwa-kit-react-sdk/utils/url'

const REACT_APP_ALGOLIA_APP_ID = 'CFK36QSUU5'
const REACT_APP_ALGOLIA_SEARCH_API_KEY = '51664b79f34f77561cfe9f27bea5c381'
const REACT_APP_ALGOLIA_PRODUCTS_INDEX = 'zzrh_022_sandbox_us01_dx__RACEComposable__categories__en_US'

const useAlgoliaGetCategories = () => {
    const appOrigin = getAppOrigin()
    const appOriginProtocol = appOrigin.split('://')[0]

    const searchClient = React.useMemo(() => {
            const searchClient = algoliasearch(
                REACT_APP_ALGOLIA_APP_ID,
                REACT_APP_ALGOLIA_SEARCH_API_KEY, {
                    hosts: [{
                        protocol: appOriginProtocol,
                        url: getAppOrigin().replace(`${appOriginProtocol}://`, '') + '/mobify/proxy/algolia',
                        accept: CallEnum.CallEnumAny
                    }],
                }
            )

            return searchClient
        },
        []
    )

    return {
        searchClient,
        productsIndex: REACT_APP_ALGOLIA_PRODUCTS_INDEX
    }
}

export {
    useAlgolia
}
