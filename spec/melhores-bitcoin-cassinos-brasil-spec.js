'use babel';

import MelhoresBitcoinCassinosBrasil from '../lib/melhores-bitcoin-cassinos-brasil';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('MelhoresBitcoinCassinosBrasil', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('melhores-bitcoin-cassinos-brasil');
  });

  describe('when the melhores-bitcoin-cassinos-brasil:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.melhores-bitcoin-cassinos-brasil')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'melhores-bitcoin-cassinos-brasil:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.melhores-bitcoin-cassinos-brasil')).toExist();

        let melhoresBitcoinCassinosBrasilElement = workspaceElement.querySelector('.melhores-bitcoin-cassinos-brasil');
        expect(melhoresBitcoinCassinosBrasilElement).toExist();

        let melhoresBitcoinCassinosBrasilPanel = atom.workspace.panelForItem(melhoresBitcoinCassinosBrasilElement);
        expect(melhoresBitcoinCassinosBrasilPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'melhores-bitcoin-cassinos-brasil:toggle');
        expect(melhoresBitcoinCassinosBrasilPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.melhores-bitcoin-cassinos-brasil')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'melhores-bitcoin-cassinos-brasil:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let melhoresBitcoinCassinosBrasilElement = workspaceElement.querySelector('.melhores-bitcoin-cassinos-brasil');
        expect(melhoresBitcoinCassinosBrasilElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'melhores-bitcoin-cassinos-brasil:toggle');
        expect(melhoresBitcoinCassinosBrasilElement).not.toBeVisible();
      });
    });
  });
});
