
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  
      import _CustomWrapper from '../src/wrapper.js';

      window._CustomWrapper = _CustomWrapper;

      import Component0 from '../src/components/React-JSON-Table/children/cells.js';
reactComponents['Cells'] = Component0;

import Component1 from '../src/components/React-JSON-Table/options.js';
reactComponents['options'] = Component1;

import Component2 from '../src/components/React-JSON-Table/Table.js';
reactComponents['Table'] = Component2;