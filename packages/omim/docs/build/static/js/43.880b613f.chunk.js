webpackJsonp([43],{65:function(n,t){n.exports='## Snackbar \r\n\r\nSnackbar provide brief messages about app processes at the bottom of the screen.\r\n\r\n## Usage\r\n\r\n```html\r\n<m-snackbar id="m-snackbar-a" button-text="RETRY" msg="Can\'t send photo. Retry in 5 seconds."></m-snackbar>\r\n<m-snackbar id="m-snackbar-b" button-text="UNDO" msg="Your photo has been archived." leading></m-snackbar>\r\n<m-snackbar id="m-snackbar-c" stacked msg=\'This item already has the label "travel". You can add a new label.\' button-text="ADD A NEW LABEL"></m-snackbar>\r\n```\r\n\r\n## Usage in Omi\r\n\r\nJSX:\r\n\r\n```jsx\r\n<m-snackbar\r\n  onClosed={this.onClosedA}\r\n  onButtonClick={this.onButtonClickA}\r\n  onIconButtonClick={this.onIconButtonClickA}\r\n  buttonText="RETRY"\r\n  msg="Can\'t send photo. Retry in 5 seconds."\r\n  show={this.aShow}\r\n></m-snackbar>\r\n<m-snackbar\r\n  onClosed={this.onClosedB}\r\n  onButtonClick={this.onButtonClickB}\r\n  onIconButtonClick={this.onIconButtonClickB}\r\n  buttonText="UNDO"\r\n  msg="Your photo has been archived."\r\n  leading show={this.bShow}\r\n></m-snackbar>\r\n<m-snackbar\r\n  onClosed={this.onClosedC}\r\n  onButtonClick={this.onButtonClickC}\r\n  onIconButtonClick={this.onIconButtonClickC}\r\n  stacked msg=\'This item already has the label "travel". You can add a new label.\'\r\n  buttonText="ADD A NEW LABEL"\r\n  show={this.cShow}\r\n></m-snackbar>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| show | boolean | -- | Whether to display popovers |\r\n| stacked | boolean | -- | Buttons and text have two layers |\r\n| msg | string | -- | prompt content |\r\n| buttonText | string | -- | ButtonText |\r\n| leading | boolean | -- | The popover appears in the corner of the main window |\r\n| onOpened | function | -- | Triggered after completion of open |\r\n| onClosed | function | -- | Trigger after shutdown is complete |\r\n| onButtonClick | function | -- | Click the button to trigger |\r\n| onIconButtonClick | function | -- | Click the icon button to trigger |\r\n'}});
//# sourceMappingURL=43.880b613f.chunk.js.map