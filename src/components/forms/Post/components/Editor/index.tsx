'use client';

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { useEditor } from '@/components/forms/Post/components/Editor/hooks/useEditor';
import { classname } from '@/components/forms/Post/components/styles';
import { cn } from '@/lib/classnames';

import type { IEditorActions } from '@/components/forms/Post';
import type EditorJS from '@editorjs/editorjs';

const Editor = forwardRef<IEditorActions>((_, ref) => {
  const editorRef = useRef<EditorJS | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      save: () => editorRef.current?.save(),
    }),
    [editorRef],
  );

  const { getEditorInstance } = useEditor(editorRef);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      void getEditorInstance();
    }
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [isMounted, getEditorInstance]);

  return (
    <div
      className={cn(
        classname.container,
        classname.markdown,
        'min-h-[225px] [&_>div>div]:!pb-0',
      )}
      id="editorjs"
    />
  );
});

Editor.displayName = 'Editor';

export default Editor;
