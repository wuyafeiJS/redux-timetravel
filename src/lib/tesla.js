import { EventEmitter } from 'fbemitter';

const Tesla = new EventEmitter();
Tesla.on = Tesla.addListener;

Tesla.GlobalIndicator = 'global-indicator';
Tesla.Toast = 'toast';

export default Tesla;
