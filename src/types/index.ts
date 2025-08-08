export interface ControlData {
  type: string;
  text: string;
  click?: {
    arguments: string;
    body: string;
  };
}
