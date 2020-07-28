global.dw = {
  order: {
    Order: {
      PAYMENT_STATUS_PAID: 'MOCKED_PAID',
      EXPORT_STATUS_READY: 'MOCKED_READY',
    },
  },
};
global.showStoreDetails = true;
global.$ = require('jquery');

global.session = {
  forms: { billing: { clearFormElement: jest.fn() } },
};

global.request = { getLocale: jest.fn(() => 'nl_NL') };
