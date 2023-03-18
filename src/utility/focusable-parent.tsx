import React, { forwardRef, useEffect } from 'react';
import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import type { UseFocusableConfig } from '@noriginmedia/norigin-spatial-navigation';

type ParentProps<S> = UseFocusableConfig & React.HTMLAttributes<S>

type FocusableParentPropsType<S extends keyof JSX.IntrinsicElements> = {
  tag: S,
  className?: string,
  withFocus?: boolean;
} & ParentProps<S>

const FocusableParent = forwardRef<any, any>((props, ref) => {
  const { withFocus, tag, trackChildren, preferredChildFocusKey, ...rest } = props;
  const T = tag
  const { focusKey, focusSelf, ref: autoRef } = useFocusable({ trackChildren, preferredChildFocusKey })

  useEffect(() => {
    const r = ref as React.MutableRefObject<any>
    if (!autoRef?.current) return;
    r.current = autoRef.current;
  }, [])


  useEffect(() => {
    if (withFocus) focusSelf();
  }, [withFocus])

  return <FocusContext.Provider value={focusKey}>
    <T ref={autoRef} {...rest} />
  </FocusContext.Provider>
})

export default FocusableParent;