import EventEmitter from 'events';

class DataLogger extends EventEmitter {
  logLevel = 'DEV';
}

export default DataLogger;