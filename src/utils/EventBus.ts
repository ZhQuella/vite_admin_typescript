/*
 * @Description: 事件总线
 * @Author: Aaron
 * @Date: 2022-01-06 22:35:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-01-06 23:04:26
 */

class EventBus {

  private eventMap = {};

  public on(name:string, func): void {
    const { eventMap } = this;
    eventMap[name] = eventMap[name] || [];
    eventMap[name].push(func);
  }

  public once(name: string, arg?: any): void {
    const { eventMap } = this;
    const events = eventMap[name] || [];
    if(!events.length) return;
    for(let i = 0; i < events.length; i++){
      const event = events[i];
      event(arg);
    }
    this.off(name);
  }

  public emit(name: string, arg?: any): void {
    const { eventMap } = this;
    const events = eventMap[name] || [];
    if(!events.length) return;
    for(let i = 0; i < events.length; i++){
      const event = events[i];
      event(arg);
    }
  }

  public off(name: string): void {
    const { eventMap } = this;
    const events = eventMap[name] || [];
    if(!events.length) return;
    Reflect.deleteProperty(eventMap,name);
  }

}

export default new EventBus;
