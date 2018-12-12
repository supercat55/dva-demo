import dva from 'dva';
import './index.css';
import createHistory from 'history/createBrowserHistory';

// 1. Initialize
const app = dva({
    history: createHistory()
});

// 2. Plugins
// app.use({});

// 3. Model
// require('./models').default.forEach(key => app.model(k.default));
require('./models').default.forEach(key => app.model(key.default));

// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');