//import * as testSaga from './testSaga'
import * as entriesSaga from './entriesSaga'

const initSagas = (sagaMiddleware) => {
     // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))

    // With anonymous function
    /*Object.values(testSaga).forEach((sagaFunction) => {
        sagaMiddleware.run(sagaFunction)
    })*/

    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}

export default initSagas