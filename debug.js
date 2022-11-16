var saito = require('../../lib/saito/saito');
var ModTemplate = require('../../lib/templates/modtemplate');
const DebugAppspaceMain = require('./lib/appspace/main');



class Debug extends ModTemplate {

  constructor(app) {
    super(app);

    this.app            = app;
    this.name           = "Debug";
    this.appname        = "Debug";
    this.description    = "Email plugin that allows visual exploration and debugging of the Saito wallet.";
    this.categories     = "Utilities Core";
    this.icon		= "fas fa-code"

    this.description = "A debug configuration dump for Saito";
    this.categories  = "Dev Utilities";
    return this;
  }

  

  onPeerHandshakeComplete(app, peer) {
    console.log("before test tx");

    let newtx = app.wallet.createUnsignedTransaction();

    /*
    newtx.msg.my_data = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
    newtx.msg.module = "Debug";
    */

    newtx.msg = {"my_data":"HHHHHHHHHHHHHHHHHHHHHHHH", "module":this.name};

    newtx = app.wallet.signTransaction(newtx);
    app.network.propagateTransaction(newtx);

    console.log("ending ------------------------");
    return null;
  }

  async onConfirmation(blk, tx, conf, app) {
    console.log("onConfirmation");
    if (conf == 0) {
        console.log("if true");
    }

    let txmsg = tx.returnMessage();
    console.log("MY MESSAGE: ");
    console.log(txmsg);  

  }

  attachEventsEmail(app, mod) {
     console.log("attaching events");
  }


}







module.exports = Debug;
