'use babel';

import MelhoresBitcoinCassinosBrasilView from './melhores-bitcoin-cassinos-brasil-view';
import { CompositeDisposable } from 'atom';

export default {

  melhoresBitcoinCassinosBrasilView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.melhoresBitcoinCassinosBrasilView = new MelhoresBitcoinCassinosBrasilView(state.melhoresBitcoinCassinosBrasilViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.melhoresBitcoinCassinosBrasilView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'melhores-bitcoin-cassinos-brasil:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.melhoresBitcoinCassinosBrasilView.destroy();
  },

  serialize() {
    return {
      melhoresBitcoinCassinosBrasilViewState: this.melhoresBitcoinCassinosBrasilView.serialize()
    };
  },

  toggle() {
    console.log('MelhoresBitcoinCassinosBrasil was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
