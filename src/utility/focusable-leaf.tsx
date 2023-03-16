import * as React from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import type { UseFocusableConfig, UseFocusableResult } from '@noriginmedia/norigin-spatial-navigation';
import classes from '../app.module.css';

function FocusableLeaf<T>({ component: Component, focusKey, onFocus, onEnterPress, onBlur, ...props }: FocusableLeafPropsType<T>) {
  const { ref, focused, focusKey: fKey } = useFocusable({ focusKey, onEnterPress, onFocus, onBlur });

  React.useEffect(() => {
    if (focused) console.log(fKey, classes['focused'])
  }, [focused, fKey])

  return <Component onClick={onEnterPress} onBlur={onBlur} onFocus={onFocus} className={focused ? classes['outlined'] : ''} {...props} ref={ref} />
}

type LeafProps<T> = UseFocusableConfig & Pick<UseFocusableResult, 'focused' | 'focusKey'> & { forwardedRef: UseFocusableResult['ref'] } & React.HTMLAttributes<T> & any

type FocusableLeafPropsType<T> = {
  component: (props: any) => (JSX.Element | null);
  item: object;
  extraClass?: string;
} & LeafProps<T>

export default FocusableLeaf;