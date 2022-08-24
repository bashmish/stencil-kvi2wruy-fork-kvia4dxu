/* @jsx h */
import { h, Component, State, Host, Prop } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "index.css",
  shadow: true,
})
export class MyCounter {
  @State() myCounterState: number = 0;

  inc() {
    console.log('inc');
    this.myCounterState++;
  }

  dec() {
    console.log('dec');
    this.myCounterState--;
  }

  render() {
    console.log('render');
    return (
      <Host>
        <button onClick={() => this.dec()}>-</button>
        <span>{this.myCounterState}</span>
        <button onClick={() => this.inc()}>+</button>
      </Host>
    );
  }
}
