        import { legacy_createStore as createStore } from 'redux';
        import { composeWithDevTools } from '@redux-devtools/extension';

      const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
      //Criando reducer
      const reducer = (state = INITIAL_STATE, action) => {
          if (action.type === 'INCREMENT_COLORS') {
              return { 
                colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
                index: state.index >= 5 ? 0 : state.index + 1
            };
            }

            if (action.type === 'DECREMENT_COLORS') {
                return { 
                    colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
                    index: state.index <= 0 ? 5 : state.index - 1
                };
            }
            return state;
        };

      // criando store
      const store = createStore(reducer, composeWithDevTools());

      //criando action
      const action = { type: 'INCREMENT_COLORS' };
      const action1 = { type: 'DECREMENT_COLORS' };
      // disparando action
      const buttonEl = document.querySelector('#next');
      const buttonEl1 = document.querySelector('#previous');
      console.log(buttonEl);
      buttonEl.addEventListener('click', () => store.dispatch(action));
      buttonEl1.addEventListener('click', () => store.dispatch(action1));
      const countEl = document.querySelector('span');
      countEl.style.color = 'white'
      store.subscribe(() => {
        const globalState = store.getState();

        const countEl = document.querySelector('span');
        countEl.innerHTML = globalState.colors[globalState.index];
        countEl.style.color = globalState.colors[globalState.index];
        console.log('Estado atualizado !');
      });
