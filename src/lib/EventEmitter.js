class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, eventHandler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(eventHandler);

    return () => {
      this.events[eventName].filter((handler) => handler !== eventHandler);
    };
  }

  emit(eventName, data) {
    const event = this.events[eventName];
    if (event) {
      event.forEach((handler) => {
        handler.call(null, data);
      });
    }
  }
}

export default EventEmitter;
