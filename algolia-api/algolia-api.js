import fetch from 'cross-fetch';
import {
    getAppOrigin
} from 'pwa-kit-react-sdk/utils/url';

const REACT_APP_ALGOLIA_APP_ID = 'CFK36QSUU5'
const REACT_APP_ALGOLIA_SEARCH_API_KEY = '51664b79f34f77561cfe9f27bea5c381'
const REACT_APP_ALGOLIA_CATEGORIES_INDEX = 'zzrh_022_sandbox_us01_dx__RACEComposable__categories__en_US'

class AlgoliaAPI {
    // constructor(algoliaApiConfig = {}) {
    //     this._config = algoliaApiConfig;
    // }

    async fetchNavigationCategories(){
        const appOrigin = getAppOrigin()
        const appOriginProtocol = appOrigin.split('://')[0]
        const index_name = REACT_APP_ALGOLIA_CATEGORIES_INDEX
        const url = `http://${getAppOrigin().replace(`${appOriginProtocol}://`, '')}/mobify/proxy/algolia/1/indexes/${index_name}/query`;

        const categories =  await fetch(url,
            {
                method: 'POST',
                headers: {
                    'X-Algolia-API-Key': REACT_APP_ALGOLIA_SEARCH_API_KEY,
                    'X-Algolia-Application-Id': REACT_APP_ALGOLIA_APP_ID
                },
                body: JSON.stringify({ "params": "hitsPerPage=1000" })
            }
        )

        return categories.json();
    }
}

export default AlgoliaAPI;