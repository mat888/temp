var saito = require('../../lib/saito/saito');
var ModTemplate = require('../../lib/templates/modtemplate');
const DebugAppspaceMain = require('./lib/appspace/main');



class Debug extends ModTemplate {

  constructor(app) {
    super(app);

    this.app            = app;
    this.name           = "debug";
    this.appname        = "debug";
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
    newtx.msg.my_data = "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB";
    newtx.msg.module = "debug";

    newtx = app.wallet.signTransaction(newtx);
    app.network.propagateTransaction(newtx);

    console.log("ending ------------------------");
    return null;
  }

  async onConfirmation(blk, tx, conf, app) {
    if (conf == 0) {
        console.log("if true");
    }
    console.log("onConfirmation");

    txmsg = tx.returnMessage();
    console.log("MY MESSAGE: " + txmsg);

  }

  attachEventsEmail(app, mod) {
     console.log("attaching events");
  }


}







module.exports = Debug;
