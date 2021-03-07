// Project: https://github.com/bberak/react-game-engine
// TypeScript Version: 3.5

declare module "react-game-engine" {
  import * as React from "react";

  interface DefaultRendererOptions {
    state: any;
    window: Window;
  }

  export function DefaultRenderer(defaultRendererOptions: DefaultRendererOptions): any;

  export class DefaultTimer {}

  interface TouchProcessorOptions {
    triggerPressEventBefore: number;
    triggerLongPressEventAfter: number;
    moveThreshold: number;
  }

  export function DefaultTouchProcessor (touchProcessorOptions?: TouchProcessorOptions): any;

  export interface TimeUpdate {
    current: number;
    delta: number;
    previous: number;
    previousDelta: number;
  }

  export interface GameEngineUpdateEventOptionType {
    dispatch: (event: any) => void;
    events: Array<any>;
    window: Window;
    time: TimeUpdate;
    touches: Array<TouchEvent>;
  }

  export type GameEngineSystem = (entities: any, update: GameEngineUpdateEventOptionType) => any;

  export interface GameEngineProperties {
    systems?: any[];
    entities?: {} | Promise<any>;
    renderer?: any;
    touchProcessor?: any;
    timer?: any;
    running?: boolean;
    onEvent?: any;
    /** An object containing styles for the root container */
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class GameEngine extends React.Component<GameEngineProperties> {}

  export type TouchEventType = 'start' | 'end' | 'move' | 'press' | 'long-press';

  export interface TouchEvent {
    event: {
      changedTouches: Array<TouchEvent>;
      identifier: number;
      locationX: number;
      locationY: number;
      pageX: number;
      pageY: number;
      target: number;
      timestamp: number;
      touches: Array<TouchEvent>;
    };
    id: number;
    type: TouchEventType;
    delta?: {
      locationX: number;
      locationY: number;
      pageX: number;
      pageY: number;
      timestamp: number;
    }
  }

  interface GameLoopUpdateEventOptionType {
    touches: TouchEvent[];
    window: Window;
    time: TimeUpdate;
  }

  export interface GameLoopProperties {
    touchProcessor?: any;
    timer?: any;
    running?: boolean;
    onUpdate?: (args: GameLoopUpdateEventOptionType) => void;
    /** An object containing styles for the root container */
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class GameLoop extends React.Component<GameLoopProperties> {}
}
