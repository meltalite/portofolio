import React, { useEffect } from 'react';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import type { UseFocusableConfig, UseFocusableResult } from '@noriginmedia/norigin-spatial-navigation';
import classes from './focusable.module.css';

function FocusableLeaf<T>({ component: Component, focusKey, onFocus, onEnterPress, onBlur, className, focusIndex, extraProps, ...props }: FocusableLeafPropsType<T>) {
  const { ref, focused, focusKey: fKey } = useFocusable<typeof extraProps>({ focusKey, onEnterPress, extraProps });

  useEffect(() => {
    if (focused) {
      onFocus?.(focusIndex)
      return () => {
        onBlur?.(focusIndex)
      }
    }
  }, [focused, fKey, onFocus, onBlur])

  return <Component onClick={onEnterPress} className={focused ? `${classes['outlined']} ${className}` : className} {...props} ref={ref} />
}

type LeafProps<T> = UseFocusableConfig & Pick<UseFocusableResult, 'focused' | 'focusKey'> & { forwardedRef: UseFocusableResult['ref'] } & React.HTMLAttributes<T> & any

type FocusableLeafPropsType<T> = {
  component: (props: any) => (JSX.Element | null);
  item: object;
  className?: string;
} & LeafProps<T>

export default FocusableLeaf;