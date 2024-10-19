import * as testSaga from './testSaga'

const initSagas = (sagaMiddleware) => {
    Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))

    // With anonymous function
    /*Object.values(testSaga).forEach((sagaFunction) => {
        sagaMiddleware.run(sagaFunction)
    })*/
}

export default initSagas