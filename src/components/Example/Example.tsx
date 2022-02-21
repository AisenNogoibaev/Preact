/** @jsx h */
import { h } from 'preact';
import './style.css';

export type ExampleProps = {
  message: string;
  onClickHandler: () => void;
};

export function Example({ message, onClickHandler }: ExampleProps) {
  return (
    <div class="example" onClick={onClickHandler}>
      {message}
    </div>
  );
}
