var Status = require('dw/system/Status');
var PaymentInstrument = require('dw/order/PaymentInstrument');
var Logger = require('dw/system/Logger');

exports.beforeAuthorization = function (order, payment, custom) {
	
    try {
        if (payment && payment.paymentMethod == dw.order.PaymentInstrument.METHOD_DW_APPLE_PAY) 
        {        	
           custom['additional_data'] = {}; // { "applepay.token" : {} }
           custom["guest_customer_no"] = "1234567890";
           custom["recurring"] = {"contract": "RECURRING,ONECLICK"};
        }
    } catch (error) {
        Logger.error(error);
        return new Status(Status.ERROR);
    }

    return new Status(Status.OK);
};