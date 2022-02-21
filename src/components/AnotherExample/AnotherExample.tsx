/** @jsx h */
import { h } from 'preact';
import './style.css';

export type AnotherExampleProps = {
  message: string;
  onClickHandler: () => void;
};

export function AnotherExample({
  message,
  onClickHandler,
}: AnotherExampleProps) {
  return (
    <div class="another-example" onClick={onClickHandler}>
      {message}
    </div>
  );
}
