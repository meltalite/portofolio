import React, { useEffect } from 'react';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import type { UseFocusableConfig } from '@noriginmedia/norigin-spatial-navigation';

function FocusableParent<S extends keyof JSX.IntrinsicElements>({ tag, children, className, withFocus, trackChildren = true, preferredChildFocusKey }: FocusableParentPropsType<S>) {
  const T = tag as unknown as (props: any) => JSX.Element;
  const { focusKey, focusSelf, ref } = useFocusable({ trackChildren, preferredChildFocusKey })

  useEffect(() => {
    if (withFocus) focusSelf();
  }, [])

  return <FocusContext.Provider value={focusKey}>
    <T className={className} ref={ref}>{children}</T>
  </FocusContext.Provider>
}

type ParentProps<S> = UseFocusableConfig & React.HTMLAttributes<S>

type FocusableParentPropsType<S extends keyof JSX.IntrinsicElements> = {
  tag: S,
  className?: string,
  withFocus?: boolean;
} & ParentProps<S>

export default FocusableParent;